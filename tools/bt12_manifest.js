// Danh sách bài tập lớp 12 (tài liệu thầy Ngô Thái Ngọ) — xếp theo chủ đề → chuyên đề → lời giải theo dạng.
// Thêm bài mới: thêm 1 dòng vào đúng nhóm rồi chạy  node tools/add_bt12.js "<thư mục tài liệu>"
// so: số bài trong tên file gốc ("Bài 4.1 - ..." -> '4.1'). de: số bài lấy file đề; sols: [nhãn, số bài lấy file giải].
module.exports = [
  { chapter: 'Vật lí nhiệt', group: 'Cấu trúc của chất – Sự chuyển thể', items: [
    { slug: 'cau-tao-chat', title: 'Cấu tạo chất', de: '1', sols: [['Lời giải', '1']], dangs: [
      'Nguyên tử, phân tử, ion', 'Mô hình động học phân tử và cấu tạo chất', 'Cấu tạo chất rắn',
      'Cấu tạo chất lỏng', 'Cấu tạo chất khí', 'So sánh chất rắn, lỏng, khí', 'Công thức tính số mol'] },
    { slug: 'su-chuyen-the', title: 'Sự chuyển thể', de: '2', sols: [['Lời giải', '2']], dangs: [
      'Sự chuyển thể', 'Sự nóng chảy', 'Chất rắn kết tinh', 'Chất rắn vô định hình', 'Sự hoá hơi'] },
  ]},
  { chapter: 'Vật lí nhiệt', group: 'Nội năng – Định luật I nhiệt động lực học', items: [
    { slug: 'noi-nang', title: 'Nội năng – Định luật I nhiệt động lực học', de: '7', sols: [['Lời giải', '7']], dangs: [
      'Định nghĩa, công thức, tính chất nội năng', 'Định luật I nhiệt động lực học',
      'Cơ năng chuyển hoá thành nội năng', 'Biến thiên nội năng của khí trong xilanh – pittông'] },
  ]},
  { chapter: 'Vật lí nhiệt', group: 'Nhiệt độ – Thang nhiệt độ – Nhiệt kế', items: [
    { slug: 'nhiet-do', title: 'Nhiệt độ – Thang đo nhiệt độ', de: '3', sols: [['Lời giải', '3']], dangs: [
      'Phân biệt nhiệt độ, nhiệt lượng, nhiệt năng, nội năng', 'Sự truyền nhiệt', 'Thang nhiệt độ Celsius (°C)',
      'Thang nhiệt độ Kelvin (K)', 'Thang nhiệt độ Fahrenheit (°F)', 'Chuyển đổi, so sánh giữa 3 thang đo', 'Các loại nhiệt kế'] },
  ]},
  { chapter: 'Vật lí nhiệt', group: 'Nhiệt dung riêng', items: [
    { slug: 'nhiet-dung-rieng', title: 'Nhiệt dung riêng', de: '4.1', sols: [['Giải dạng 1–3', '4.1'], ['Giải dạng 4–5', '4.2']], dangs: [
      'Lý thuyết: định nghĩa, công thức, tính chất', 'Công thức nhiệt lượng, nhiệt dung riêng',
      'Phương trình cân bằng nhiệt', 'Điện năng chuyển thành nhiệt năng (có hiệu suất)',
      'Cơ năng chuyển thành nhiệt năng: rơi tự do, va chạm, đâm xuyên'] },
  ]},
  { chapter: 'Vật lí nhiệt', group: 'Nhiệt nóng chảy riêng – Nhiệt hoá hơi riêng', items: [
    { slug: 'nhiet-nong-chay-rieng', title: 'Nhiệt nóng chảy riêng', de: '5', sols: [['Lời giải', '5']], dangs: [
      'Lý thuyết: định nghĩa, công thức, tính chất', 'Công thức nhiệt lượng, nhiệt nóng chảy riêng',
      'Phương trình cân bằng nhiệt', 'Điện năng chuyển thành nhiệt năng (có hiệu suất)'] },
    { slug: 'nhiet-hoa-hoi-rieng', title: 'Nhiệt hoá hơi riêng', de: '6.1', sols: [['Giải dạng 1–5', '6.1'], ['Giải dạng 6', '6.2']], dangs: [
      'Lý thuyết: định nghĩa, công thức, tính chất', 'Công thức nhiệt lượng, nhiệt hoá hơi riêng',
      'Điện năng chuyển thành nhiệt năng (có hiệu suất)', 'Kết hợp nhiệt dung riêng, nhiệt nóng chảy, nhiệt hoá hơi',
      'Nước ngưng tụ', 'Phương trình cân bằng nhiệt'] },
  ]},
  { chapter: 'Vật lí nhiệt', group: 'Ôn tập chương Vật lí nhiệt', items: [
    { slug: 'tong-on-chuong-1', title: 'Tổng ôn chương Vật lí nhiệt', de: '8', sols: [['Lời giải', '8']] },
    { slug: 'kiem-tra-chuong-1', title: 'Kiểm tra chương Vật lí nhiệt', de: '9', sols: [['Lời giải', '9']] },
  ]},

  { chapter: 'Khí lí tưởng', group: 'Mô hình động học phân tử chất khí', items: [
    { slug: 'mo-hinh-dong-hoc', title: 'Mô hình động học phân tử chất khí', de: '10', sols: [['Lời giải', '10']], dangs: [
      'Chất khí', 'Khí lí tưởng', 'So sánh khí thực và khí lí tưởng', 'Thí nghiệm Brown',
      'Số mol, số phân tử khí', 'Áp suất'] },
    { slug: 'ap-suat-dong-nang', title: 'Áp suất khí theo mô hình động học – Động năng phân tử', de: '20', sols: [['Lời giải', '20']], dangs: [
      'Áp suất theo mô hình động học phân tử', 'Động năng tịnh tiến trung bình', 'Bài tập động năng trung bình và nội năng'] },
  ]},
  { chapter: 'Khí lí tưởng', group: 'Các đẳng quá trình', items: [
    { slug: 'dang-nhiet', title: 'Đẳng nhiệt – Định luật Boyle', de: '12', sols: [['Lời giải', '12']], dangs: [
      'Lý thuyết, công thức đẳng nhiệt', 'Bài tập đẳng nhiệt', 'Đồ thị đẳng nhiệt', 'Bọt khí nổi lên từ đáy hồ'] },
    { slug: 'dang-ap', title: 'Đẳng áp – Định luật Charles', de: '13', sols: [['Lời giải', '13']], dangs: [
      'Lý thuyết, công thức, tính chất', 'Bài tập đẳng áp', 'Đồ thị đẳng áp'] },
    { slug: 'dang-tich', title: 'Quá trình đẳng tích', de: '14', sols: [['Lời giải', '14']], dangs: [
      'Lý thuyết, công thức, tính chất', 'Bài tập đẳng tích', 'Đồ thị đẳng tích', 'Mở nắp bình, vung nồi…'] },
  ]},
  { chapter: 'Khí lí tưởng', group: 'Phương trình trạng thái khí lí tưởng', items: [
    { slug: 'pttt', title: 'Phương trình trạng thái – Phương trình Clapeyron', de: '11', sols: [['Lời giải', '11']], dangs: [
      'Lý thuyết phương trình trạng thái, phương trình Clapeyron', 'Bài tập áp dụng'] },
    { slug: 'pttt-cac-dang', title: 'Các dạng bài áp dụng phương trình trạng thái', de: '15.1', sols: [['Giải dạng 1–3', '15.1'], ['Giải dạng 4', '15.2']], dangs: [
      'Lý thuyết, công thức, tính chất', 'Bài tập áp dụng phương trình trạng thái',
      'Bóng thám không, khinh khí cầu', 'Khí thoát ra khỏi bình, khỏi căn phòng'] },
  ]},
  { chapter: 'Khí lí tưởng', group: 'Bài toán thực tế về chất khí', items: [
    { slug: 'ong-thuy-ngan', title: 'Ống thuỷ ngân – Áp suất cột thuỷ ngân', de: '16.1', sols: [['Giải dạng 1–2', '16.1'], ['Giải dạng 3–5', '16.2']], dangs: [
      'Ống thuỷ ngân đặt đứng, ngang, nghiêng', 'Phong vũ biểu: ống úp ngược vào chậu thuỷ ngân',
      'Ống chữ U một đầu kín, một đầu hở', 'Giọt thuỷ ngân dịch chuyển hoặc chảy ra ngoài', 'Nung nóng đẳng áp ống thuỷ ngân'] },
    { slug: 'bom-bong', title: 'Bài toán bơm bóng', de: '17', sols: [['Lời giải', '17']], dangs: [
      'Bơm đẳng nhiệt vào bình chưa có khí', 'Bơm đẳng nhiệt vào bình đã có khí', 'Bơm không đẳng nhiệt', 'Bơm lốp xe'] },
    { slug: 'xilanh-pittong', title: 'Bài toán xilanh – pittông', de: '18', sols: [['Lời giải', '18']] },
  ]},
  { chapter: 'Khí lí tưởng', group: 'Đồ thị khí lí tưởng', items: [
    { slug: 'do-thi-khi', title: 'Đồ thị khí lí tưởng', de: '19.1', sols: [['Giải dạng 1–2', '19.1'], ['Giải dạng 3', '19.2']], dangs: [
      'Đồ thị đẳng nhiệt, đẳng tích, đẳng áp', 'Phối hợp và chuyển đổi đồ thị', 'Đồ thị không đẳng quá trình, đặc biệt'] },
  ]},
  { chapter: 'Khí lí tưởng', group: 'Nâng cao & ôn tập Khí lí tưởng', items: [
    { slug: 'khi-nang-cao', title: 'Bài toán nâng cao khí lí tưởng', de: '21', sols: [], dangs: [
      'Hai bình, ba bình thông nhau', 'Pittông ngăn cách khí giữa hai bình',
      'Nội năng, công, nhiệt lượng trong các quá trình', 'Hỗn hợp khí', 'Một số bài toán lạ'] },
    { slug: 'tong-on-hk1', title: 'Tổng ôn học kì I', de: '22', sols: [['Lời giải', '22']] },
    { slug: 'kiem-tra-chuong-2', title: 'Kiểm tra chương Khí lí tưởng', de: '23', sols: [['Lời giải', '23']] },
  ]},

  { chapter: 'Từ trường', group: 'Từ trường – Cảm ứng từ', items: [
    { slug: 'tu-truong', title: 'Từ trường', de: '24.1', sols: [['Lời giải', '24.2']], dangs: [
      'Định nghĩa, tính chất từ trường, đường sức từ, cảm ứng từ', 'Từ trường của dây dẫn thẳng',
      'Từ trường của vòng dây', 'Từ trường của ống dây', 'Cảm ứng từ của các dây dẫn đặc biệt'] },
  ]},
  { chapter: 'Từ trường', group: 'Lực từ', items: [
    { slug: 'luc-tu', title: 'Lực từ', de: '25', sols: [['Lời giải', '25']], dangs: [
      'Công thức, định nghĩa, tính chất lực từ', 'Quy tắc bàn tay trái', 'Bài tập lực từ'] },
    { slug: 'luc-tu-thanh-treo', title: 'Lực từ tác dụng lên thanh treo', de: '26', sols: [['Lời giải', '26']], dangs: [
      'Thanh treo hai dây, B nằm ngang', 'Thanh treo hai dây, B thẳng đứng'] },
    { slug: 'luc-tu-khung-day', title: 'Lực từ tác dụng lên khung dây', de: '27', sols: [['Lời giải', '27']], dangs: [
      'Khung dây hình tam giác', 'Khung dây hình tứ giác', 'Momen lực từ – ngẫu lực', 'Thanh hoặc khung dây cứng treo thẳng đứng'] },
    { slug: 'thanh-truot', title: 'Bài toán thanh trượt', de: '28', sols: [['Lời giải', '28']], dangs: [
      'Thanh trượt nằm ngang', 'Thanh trượt nằm nghiêng'] },
    { slug: 'luc-lorentz', title: 'Lực Lorentz – Nam châm đặt trên cân', de: '37.1', sols: [], dangs: [
      'Lực Lorentz tác dụng lên hạt mang điện chuyển động trong từ trường'] },
  ]},
  { chapter: 'Từ trường', group: 'Từ thông – Cảm ứng điện từ', items: [
    { slug: 'tu-thong', title: 'Từ thông – Định luật Lenz', de: '29.1', sols: [['Giải dạng 1–2', '29.1'], ['Giải dạng 3', '29.2']], dangs: [
      'Lý thuyết, tính chất, công thức từ thông', 'Bài tập công thức từ thông', 'Xác định chiều dòng điện cảm ứng (định luật Lenz)'] },
    { slug: 'sdd-cam-ung', title: 'Suất điện động cảm ứng – Định luật Faraday', de: '30.2', sols: [['Giải dạng 1–2', '30.2'], ['Giải dạng 3–4', '30.3']], dangs: [
      'Lý thuyết, công thức định luật Faraday', 'Bài tập xác định suất điện động cảm ứng',
      'Thanh trượt trong khung kín', 'Thanh trượt trong khung có nguồn một chiều'] },
    { slug: 'do-thi-cam-ung', title: 'Đồ thị cảm ứng điện từ', de: '31', sols: [['Lời giải', '31']], dangs: [
      'Đồ thị từ thông, suất điện động cảm ứng', 'Đồ thị cảm ứng từ', 'Xác định chiều dòng điện cảm ứng'] },
  ]},
  { chapter: 'Từ trường', group: 'Dòng điện xoay chiều – Máy phát điện', items: [
    { slug: 'sdd-xoay-chieu', title: 'Suất điện động xoay chiều', de: '32', sols: [['Lời giải', '32']], dangs: [
      'Suất điện động và từ thông xoay chiều', 'Công thức vuông pha của từ thông và suất điện động',
      'Viết phương trình suất điện động, từ thông'] },
    { slug: 'u-i-xoay-chieu', title: 'Hiệu điện thế – Cường độ dòng điện xoay chiều', de: '33.1', sols: [['Giải dạng 1–2', '33.1'], ['Giải dạng 3–4', '33.2']], dangs: [
      'Lý thuyết và các đại lượng cơ bản', 'Viết phương trình u, i – mạch chỉ có R',
      'Công thức cùng pha, ngược pha, vuông pha', 'Đồ thị u và i'] },
    { slug: 'vtlg-xoay-chieu', title: 'Ứng dụng vòng tròn lượng giác trong điện xoay chiều', de: '34', sols: [['Lời giải', '34']], dangs: [
      'Giá trị u, i tại thời điểm t', 'Xác định khoảng thời gian', 'Thời gian đèn sáng, tắt trong một chu kì'] },
    { slug: 'may-phat-dien', title: 'Máy phát điện – An toàn điện', de: '35', sols: [['Lời giải', '35']], dangs: [
      'Máy phát điện xoay chiều', 'Ứng dụng và quy tắc an toàn điện xoay chiều'] },
  ]},
  { chapter: 'Từ trường', group: 'Máy biến áp – Ứng dụng cảm ứng điện từ', items: [
    { slug: 'may-bien-ap', title: 'Máy biến áp', de: '36', sols: [], dangs: [
      'Lý thuyết máy biến áp', 'Bài tập máy biến áp', 'Máy biến áp quấn thêm hoặc quấn ngược',
      'Các ứng dụng của hiện tượng cảm ứng điện từ'] },
  ]},
];
