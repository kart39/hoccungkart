// Tạo bài "Ôn thi ĐH" cho mỗi chương lớp 12 bằng cách gom mục "Tóm tắt nhanh" + các khối công thức của từng bài.
// Chạy lại sau khi sửa bài lớp 12:  node tools/build_on_thi.js
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..', 'lythuyet');
const CH = [
  ['12-nhiet', 'Ôn tập Vật lí nhiệt'],
  ['12-khi', 'Ôn tập Khí lí tưởng'],
  ['12-tu', 'Ôn tập Từ trường'],
  ['12-hn', 'Ôn tập Vật lí hạt nhân'],
];
fs.mkdirSync(path.join(ROOT, 'dh'), { recursive: true });
for (const [dir, title] of CH) {
  const files = fs.readdirSync(path.join(ROOT, dir)).filter(f => /^\d\d-.*\.md$/.test(f)).sort();
  let out = `# ${title}\n\nTổng hợp công thức và ý chính của cả chương để ôn thi tốt nghiệp THPT. Muốn xem giải thích chi tiết và ví dụ, mở bài tương ứng trong mục Lý thuyết lớp 12.\n`;
  files.forEach((f, i) => {
    const src = fs.readFileSync(path.join(ROOT, dir, f), 'utf8').replace(/\r/g, '');
    const name = (src.match(/^# (.+)$/m) || [, f])[1];
    out += `\n## ${i + 1}. ${name}\n`;
    const formulas = [...src.matchAll(/^:::formula[^\n]*\n[\s\S]*?^:::\s*$/gm)].map(m => m[0]);
    formulas.forEach(b => { out += '\n' + b + '\n'; });
    const sum = src.split(/^## Tóm tắt nhanh\s*$/m)[1];
    if (sum) out += '\n:::tip Ý chính\n' + sum.trim() + '\n:::\n';
  });
  fs.writeFileSync(path.join(ROOT, 'dh', dir.replace('12-', 'on-tap-') + '.md'), out);
  console.log(dir, files.length, 'bài');
}
