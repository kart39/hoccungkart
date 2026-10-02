// Xuất toàn bộ ngân hàng câu hỏi (collection trongtam_banks) ra file banks/<id>.json
//
// Cách dùng:
//   1. Firebase Console -> Project settings -> Service accounts -> Generate new private key
//      -> lưu thành serviceAccount.json cùng thư mục (KHÔNG đưa file này lên GitHub / không chia sẻ).
//   2. npm install firebase-admin
//   3. node export_banks.js
//
// Mỗi file giữ NGUYÊN dữ liệu gốc của document (trường z đã nén, hoặc p kiểu cũ)
// nên code giải mã trong index.html dùng lại được mà không phải đổi gì.

const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

if (!fs.existsSync('./serviceAccount.json')) {
  console.error('Không thấy serviceAccount.json trong thư mục này. Xem hướng dẫn ở đầu file.');
  process.exit(1);
}

initializeApp({
  credential: cert(require('./serviceAccount.json')),
  projectId: 'hoccungkart',
});

(async () => {
  fs.mkdirSync('banks', { recursive: true });
  const snap = await getFirestore().collection('trongtam_banks').get();
  let bytes = 0;
  const ids = [];
  snap.forEach(doc => {
    const s = JSON.stringify(doc.data());
    fs.writeFileSync(`banks/${doc.id}.json`, s);
    bytes += Buffer.byteLength(s);
    ids.push(doc.id);
  });
  console.log(`Đã xuất ${ids.length} document, tổng ${(bytes / 1048576).toFixed(2)} MB vào thư mục banks/`);
  process.exit(0);
})().catch(e => { console.error(e); process.exit(1); });
