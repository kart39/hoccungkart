// Thêm / cập nhật đề thi thử (mã id_t25_...) từ thư mục tổng hợp:
//   - chép lời giải chi tiết  -> loigiai/<id>.md   (phòng thi tự hiện gợi ý + lời giải từng câu)
//   - đề chưa có trên web     -> chép PDF vào files/, tạo đáp án banks/<id>.json từ dòng "Đáp án" trong lời giải
//   - chia mục "Thực chiến" (Ôn thi ĐH) thành nhóm theo năm
// Cách dùng:  node tools/add_de_thi.js "<thư mục 1_Tat_Ca_De_Theo_ID>" "<thư mục 2_Tat_Ca_PDF_Truc_Tiep>"
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const [D1, D2] = process.argv.slice(2);
if (!D1 || !fs.existsSync(D1)) { console.error('Thiếu thư mục đề.'); process.exit(1); }
const ROOT = path.join(__dirname, '..');
const P = (...a) => path.join(ROOT, ...a);

// ---- đọc đáp án từ file lời giải ----
function keysOf(md) {
  const parts = [[], [], []]; let part = -1, n = 0;
  for (const line of md.replace(/\r/g, '').split('\n')) {
    const pm = /^#\s*Phần\s*(III|II|I)\b/i.exec(line);
    if (pm) { part = { I: 0, II: 1, III: 2 }[pm[1].toUpperCase()]; continue; }
    if (/^##\s*Câu\s*\d+/i.test(line)) { n++; continue; }
    const km = /^\*\*Đáp án:?\*\*:?\s*(.+)$/i.exec(line.trim());
    if (km && part >= 0) parts[part].push(km[1].trim());
  }
  const mc = parts[0].map(k => k.replace(/[^ABCD]/gi, '').slice(0, 1).toUpperCase());
  const tf = parts[1].map(k => { const m = [...k.matchAll(/([a-d])\)\s*(Đúng|Sai)/gi)]; return m.length === 4 ? m.map(x => /đúng/i.test(x[2]) ? 'Đ' : 'S').join('') : ''; });
  const short = parts[2].map(k => k.replace(/\s/g, ''));
  return { mc, tf, short };
}

const htmlPath = P('index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
const m = html.match(/let data = (\{.*?\});\n/s);
const data = JSON.parse(m[1]);

fs.mkdirSync(P('loigiai'), { recursive: true });
const d1 = fs.readdirSync(D1);
const d2 = D2 && fs.existsSync(D2) ? new Set(fs.readdirSync(D2)) : new Set();
let nLg = 0, nNew = 0;
const bad = [];
for (const f of d1.filter(f => f.endsWith('Loi_giai.md'))) {
  const id = f.match(/\((id_t25_[0-9a-f]+)\)/)[1];
  const title = f.replace(/ \(id_t25.*$/, '');
  const md = fs.readFileSync(path.join(D1, f), 'utf8');
  fs.writeFileSync(P('loigiai', id + '.md'), md); nLg++;
  if (data.exercises.some(x => x.id === id)) continue;          // đề đã có trên web: chỉ thêm lời giải
  const k = keysOf(md);
  if (k.mc.length !== 18 || k.tf.length !== 4 || k.short.length !== 6 || k.mc.some(x => !x) || k.tf.some(x => !x)) { bad.push(title); continue; }
  const hash = id.slice(7);
  const pdfIn = d1.find(x => x.includes(id) && x.endsWith('.pdf'));
  const src = pdfIn ? path.join(D1, pdfIn) : (d2.has(hash + '.pdf') ? path.join(D2, hash + '.pdf') : null);
  if (!src) { bad.push(title + ' (thiếu PDF)'); continue; }
  fs.copyFileSync(src, P('files', hash + '.pdf'));
  const exam = { duration: 50, mc: k.mc, tf: k.tf, short: k.short };
  fs.writeFileSync(P('banks', id + '.json'), JSON.stringify({ z: zlib.gzipSync(Buffer.from(JSON.stringify({ quiz: null, exam, cbank: null }))).toString('base64') }));
  data.exercises.push({ folderId: null, grade: 'dh', title, note: '', id, file: 'files/' + hash + '.pdf',
    examInfo: { duration: 50, mc: 18, tf: 4, short: 6 }, type: 'item' });
  nNew++;
}

// ---- chia nhóm theo năm trong mục Thực chiến ----
const F26 = 'dh_de_2026', F25 = 'dh_de_2025';
const dhItems = data.exercises.filter(x => x.grade === 'dh' && x.type !== 'folder');
const rest = data.exercises.filter(x => !(x.grade === 'dh'));
const is25 = x => String(x.id).startsWith('id_t25') || /\b2025\b/.test(x.title || '');
const g26 = dhItems.filter(x => !is25(x)).map(x => ({ ...x, folderId: F26 }));
const g25 = dhItems.filter(is25).map(x => ({ ...x, folderId: F25 }))
  .sort((a, b) => a.title.localeCompare(b.title, 'vi'));
data.exercises = [
  { grade: 'dh', type: 'folder', id: F26, title: 'Đề thi thử TN THPT 2026' }, ...g26,
  { grade: 'dh', type: 'folder', id: F25, title: 'Đề thi thử TN THPT 2025 – có lời giải chi tiết' }, ...g25,
  ...rest,
];
html = html.replace(m[0], () => 'let data = ' + JSON.stringify(data) + ';\n');
fs.writeFileSync(htmlPath, html);
console.log(`Lời giải: ${nLg} file | đề mới: ${nNew} | nhóm 2026: ${g26.length} đề, nhóm 2025: ${g25.length} đề`);
if (bad.length) console.log('Bỏ qua (cần xem lại):', bad);
