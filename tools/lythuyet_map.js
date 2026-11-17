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
  ['files/ms35egdh', 'lythuyet/11-dd/04-nang-luong.md'],
  ['files/ms35gvq7', 'lythuyet/11-dd/05-tat-dan-cuong-buc-cong-huong.md'],
  ['files/ms40e1ob', 'lythuyet/11-song/01-mo-ta-song.md'],
  ['files/ms40e8n0', 'lythuyet/11-song/02-song-ngang-song-doc.md'],
  ['files/ms40f8nn', 'lythuyet/11-song/03-phuong-trinh-song.md'],
  ['files/ms40f3oe', 'lythuyet/11-song/04-do-lech-pha.md'],
  ['files/ms40fgk3', 'lythuyet/11-song/05-song-dien-tu.md'],
  ['files/ms40fo4v', 'lythuyet/11-song/06-giao-thoa-song-co.md'],
  ['files/ms40fut0', 'lythuyet/11-song/07-giao-thoa-anh-sang.md'],
  ['files/ms40fzzv', 'lythuyet/11-song/08-song-dung.md'],
  ['files/ms41g34a', 'lythuyet/11-dien/01-dinh-luat-coulomb.md'],
  ['files/ms41gapi', 'lythuyet/11-dien/02-cuong-do-dien-truong.md'],
  ['files/ms41ggdp', 'lythuyet/11-dien/03-dien-truong-deu.md'],
  ['files/ms41go6a', 'lythuyet/11-dien/04-the-nang-dien.md'],
  ['files/ms41gtrn', 'lythuyet/11-dien/05-dien-the-hieu-dien-the.md'],
  ['files/ms41h0dp', 'lythuyet/11-dien/06-tu-dien.md'],
  ['files/ms41iwyv', 'lythuyet/11-mach/01-cuong-do-dong-dien.md'],
  ['files/ms41j4av', 'lythuyet/11-mach/02-dien-tro-dinh-luat-ohm.md'],
  ['files/ms41jayc', 'lythuyet/11-mach/03-nguon-dien.md'],
  ['files/ms41jh36', 'lythuyet/11-mach/04-nang-luong-cong-suat-dien.md'],
  ['files/mroxwg0a', 'lythuyet/10-dong-hoc/01-do-dich-chuyen-quang-duong.md'],
  ['files/mrrjfama', 'lythuyet/10-dong-hoc/02-toc-do-van-toc.md'],
  ['files/mrrk4451', 'lythuyet/10-dong-hoc/03-chuyen-dong-thang-deu.md'],
  ['files/mrrkckqi', 'lythuyet/10-dong-hoc/04-do-thi-dich-chuyen.md'],
  ['files/mrrlgbsu', 'lythuyet/10-dong-hoc/05-gia-toc.md'],
  ['files/mrrlbitl', 'lythuyet/10-dong-hoc/06-chuyen-dong-bien-doi-deu.md'],
  ['files/mrrmbu2d', 'lythuyet/10-dong-hoc/07-roi-tu-do.md'],
  ['files/mrrmlb3n', 'lythuyet/10-dong-hoc/08-chuyen-dong-nem.md'],
  ['files/mrx9clnr', 'lythuyet/10-dong-luc/01-tong-hop-phan-tich-luc.md'],
  ['files/mrypq0dc', 'lythuyet/10-dong-luc/02-dinh-luat-1-newton.md'],
  ['files/mrypyku6', 'lythuyet/10-dong-luc/03-dinh-luat-2-newton.md'],
  ['files/mryqi85i', 'lythuyet/10-dong-luc/04-dinh-luat-3-newton.md'],
  ['files/mryqtjav', 'lythuyet/10-dong-luc/05-trong-luc-luc-cang.md'],
  ['files/mryqn8hv', 'lythuyet/10-dong-luc/06-luc-ma-sat.md'],
  ['files/mryr5e6c', 'lythuyet/10-dong-luc/07-luc-can-luc-nang.md'],
  ['files/mryrnw71', 'lythuyet/10-dong-luc/08-moment-can-bang.md'],
  ['files/mryvkfb5', 'lythuyet/10-nang-luong/01-nang-luong-cong.md'],
  ['files/ms16rnid', 'lythuyet/10-nang-luong/02-cong-suat-hieu-suat.md'],
  ['files/ms189w99', 'lythuyet/10-nang-luong/03-dong-nang.md'],
  ['files/ms18c5ew', 'lythuyet/10-nang-luong/04-the-nang.md'],
  ['files/ms1jbe5d', 'lythuyet/10-nang-luong/05-co-nang.md'],
  ['files/ms1jtm54', 'lythuyet/10-dong-luong/01-dong-luong.md'],
  ['files/ms1jz7uv', 'lythuyet/10-dong-luong/02-bao-toan-dong-luong.md'],
  ['files/ms1moou9', 'lythuyet/10-tron-bien-dang/01-chuyen-dong-tron-deu.md'],
  ['files/ms1mxmtd', 'lythuyet/10-tron-bien-dang/02-luc-huong-tam.md'],
  ['files/ms31gfxy', 'lythuyet/10-tron-bien-dang/03-bien-dang-vat-ran.md'],
  ['files/ms31gyag', 'lythuyet/10-tron-bien-dang/04-ap-suat-chat-long.md'],
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
