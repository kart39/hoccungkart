// Chép file đề + lời giải lớp 12 vào files/bt12/ và cập nhật danh sách bài (data.exercises) trong index.html.
// Cách dùng:  node tools/add_bt12.js "C:\Users\...\Tai_Lieu_Vat_Ly"
// Chạy lại bao nhiêu lần cũng được: các mục bt12 cũ được thay bằng bản mới theo tools/bt12_manifest.js.
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2];
if (!SRC || !fs.existsSync(SRC)) { console.error('Thiếu đường dẫn thư mục tài liệu.'); process.exit(1); }
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'files', 'bt12');
const manifest = require('./bt12_manifest');

const srcFiles = fs.readdirSync(SRC).filter(f => f.toLowerCase().endsWith('.pdf'));
const numOf = f => (f.match(/^Bài ([0-9.]+) /) || [])[1];
function findFile(so, kind) { // kind: 'de' | 'giai'
  const hit = srcFiles.filter(f => numOf(f) === so && (kind === 'de' ? /File đề\.pdf$/.test(f) : /Giải chi tiết/.test(f)));
  if (hit.length !== 1) throw new Error(`Bài ${so}: tìm thấy ${hit.length} file ${kind === 'de' ? 'đề' : 'lời giải'}`);
  return hit[0];
}

fs.mkdirSync(OUT, { recursive: true });
const copy = (src, name) => { fs.copyFileSync(path.join(SRC, src), path.join(OUT, name)); return 'files/bt12/' + name; };

const entries = [];
manifest.forEach((g, gi) => {
  const fid = `bt12_g${String(gi + 1).padStart(2, '0')}`;
  entries.push({ grade: '12', type: 'folder', id: fid, title: g.group, chapter: g.chapter });
  g.items.forEach(it => {
    const item = {
      grade: '12', type: 'item', id: `bt12_${it.slug}`, folderId: fid, title: it.title,
      file: copy(findFile(it.de, 'de'), `${it.slug}-de.pdf`),
      sols: it.sols.map(([label, so], k) => ({ label, file: copy(findFile(so, 'giai'), `${it.slug}-giai${it.sols.length > 1 ? '-' + (k + 1) : ''}.pdf`) })),
    };
    if (it.dangs && it.dangs.length) item.dangs = it.dangs;
    entries.push(item);
  });
});

const htmlPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
const m = html.match(/let data = (\{.*?\});\n/s);
const data = JSON.parse(m[1]);
data.exercises = data.exercises.filter(x => !String(x.id || '').startsWith('bt12_')).concat(entries);
html = html.replace(m[0], () => 'let data = ' + JSON.stringify(data) + ';\n');
fs.writeFileSync(htmlPath, html);

const nItems = entries.filter(e => e.type === 'item').length;
const nSols = entries.reduce((s, e) => s + (e.sols ? e.sols.length : 0), 0);
console.log(`Đã thêm ${manifest.length} nhóm, ${nItems} bài, ${nSols} file lời giải vào files/bt12/`);
