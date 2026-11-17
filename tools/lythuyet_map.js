// Gắn bài giảng (lythuyet/*.md) vào các mục Lý thuyết trong index.html.
// Mỗi dòng: [đoạn đầu tên file PDF gốc của mục lý thuyết, đường dẫn bài giảng].
// Chạy:  node tools/lythuyet_map.js
const fs = require('fs');
const path = require('path');

const MAP = [
  ['files/ms8dc6ws', 'lythuyet/12-nhiet/01-cau-truc-chat-chuyen-the.md'],
  ['files/ms8dcriq', 'lythuyet/12-nhiet/02-noi-nang-dinh-luat-1.md'],
  ['files/ms8ddmto', 'lythuyet/12-nhiet/03-nhiet-do-thang-nhiet-do.md'],
  ['files/ms8dfc0s', 'lythuyet/12-nhiet/04-nhiet-dung-rieng.md'],
  ['files/ms8dfh7m', 'lythuyet/12-nhiet/05-nhiet-nong-chay-rieng.md'],
  ['files/ms8dfmnx', 'lythuyet/12-nhiet/06-nhiet-hoa-hoi-rieng.md'],
  ['files/ms9sozsz', 'lythuyet/12-khi/01-mo-hinh-dong-hoc-phan-tu.md'],
  ['files/ms9ssifu', 'lythuyet/12-khi/02-dang-nhiet-boyle.md'],
  ['files/ms9ssq3f', 'lythuyet/12-khi/03-dang-ap-charles.md'],
  ['files/ms9stax6', 'lythuyet/12-khi/04-phuong-trinh-trang-thai.md'],
  ['files/ms9sth6s', 'lythuyet/12-khi/05-ap-suat-dong-nang-phan-tu.md'],
  ['files/ms9su9wp', 'lythuyet/12-tu/01-tu-truong.md'],
  ['files/ms9sugcn', 'lythuyet/12-tu/02-luc-tu-cam-ung-tu.md'],
  ['files/ms9sunih', 'lythuyet/12-tu/03-tu-thong-cam-ung-dien-tu.md'],
  ['files/ms9suti6', 'lythuyet/12-tu/04-may-phat-dien-xoay-chieu.md'],
  ['files/ms9sv040', 'lythuyet/12-tu/05-ung-dung-cam-ung-dien-tu.md'],
  ['files/ms9sv6v9', 'lythuyet/12-tu/06-dien-tu-truong-song-dien-tu.md'],
  ['files/ms9sve1n', 'lythuyet/12-hn/01-cau-truc-hat-nhan.md'],
  ['files/ms9svk7s', 'lythuyet/12-hn/02-phan-ung-hat-nhan-nang-luong-lien-ket.md'],
  ['files/ms9svqge', 'lythuyet/12-hn/03-hien-tuong-phong-xa.md'],
  ['files/ms9svvbc', 'lythuyet/12-hn/04-cong-nghiep-hat-nhan.md'],
  ['files/ms35d05m', 'lythuyet/11-dd/01-dao-dong-dieu-hoa.md'],
  ['files/ms35db3f', 'lythuyet/11-dd/02-mo-ta-dao-dong-dieu-hoa.md'],
  ['files/ms35dtof', 'lythuyet/11-dd/03-van-toc-gia-toc.md'],
  ['files/mui3r5k1', 'lythuyet/dh/on-tap-nhiet.md'],
  ['files/mui696jo', 'lythuyet/dh/on-tap-khi.md'],
  ['files/mui69wut', 'lythuyet/dh/on-tap-tu.md'],
  ['files/mui6a5ng', 'lythuyet/dh/on-tap-hn.md'],
];

const ROOT = path.join(__dirname, '..');
const htmlPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
const m = html.match(/let data = (\{.*?\});\n/s);
const data = JSON.parse(m[1]);
let n = 0;
for (const [prefix, md] of MAP) {
  if (!fs.existsSync(path.join(ROOT, md))) throw new Error('Thiếu file ' + md);
  const hits = data.theory.filter(x => x.file && x.file.startsWith(prefix));
  if (hits.length !== 1) throw new Error(`${prefix}: tìm thấy ${hits.length} mục`);
  hits[0].md = md; n++;
}
html = html.replace(m[0], () => 'let data = ' + JSON.stringify(data) + ';\n');
fs.writeFileSync(htmlPath, html);
console.log(`Đã gắn ${n} bài giảng.`);
