# Đồ thị độ dịch chuyển – thời gian

Một bản ghi vị trí theo thời gian cho biết không chỉ vật đã đi đến đâu mà còn vật đang nhanh hay chậm, có đổi chiều hay không. Thông tin quan trọng nằm ở độ dốc của đồ thị.

## 1. Ý nghĩa các trục

Đồ thị $d-t$ biểu diễn độ dịch chuyển đại số $d$ theo thời gian trên một trục đã chọn. Nếu dùng tọa độ $x$ thay $d$, hai đồ thị chỉ khác nhau một độ tịnh tiến theo trục đứng khi có cùng mốc thời gian.

:::formula Độ dốc và vận tốc trung bình
$$v_{\text{tb}}=\frac{d_2-d_1}{t_2-t_1}$$
:::

Đoạn thẳng có độ dốc dương biểu diễn vận tốc dương; dốc âm biểu diễn vận tốc âm; nằm ngang biểu diễn đứng yên. Độ lớn độ dốc càng lớn thì tốc độ càng lớn trên đoạn chuyển động đều.

Với đường cong, độ dốc của cát tuyến cho vận tốc trung bình trong khoảng, còn độ dốc tiếp tuyến cho vận tốc tức thời. Không được kết luận một vật nhanh hơn chỉ vì điểm của nó nằm cao hơn trên đồ thị: vị trí cao chỉ nói độ dịch chuyển đại số lớn hơn.

## 2. Quãng đường và giao điểm

:::tip Cộng độ biến thiên theo từng chặng
Với đồ thị gồm các đoạn đơn điệu, quãng đường bằng tổng các độ biến thiên tuyệt đối của $d$. Phải tách tại các điểm đổi chiều; đoạn nằm ngang không đóng góp quãng đường.
:::

Giao điểm của hai đồ thị tọa độ trong cùng hệ quy chiếu cho thời điểm và vị trí gặp nhau. Nếu hai đồ thị biểu diễn độ dịch chuyển từ hai gốc vị trí khác nhau, cùng giá trị độ dịch chuyển chưa chắc là cùng vị trí thật.

Diện tích dưới đồ thị độ dịch chuyển – thời gian không có ý nghĩa là quãng đường. Quy tắc diện tích cho độ dịch chuyển thuộc về đồ thị vận tốc – thời gian, cần tránh lẫn giữa hai loại đồ thị.

## 3. Ví dụ minh hoạ

:::example Ví dụ 1 – Đọc một đoạn thẳng
Đồ thị đi qua hai điểm $(2\ \text{s};4\ \text{m})$ và $(6\ \text{s};16\ \text{m})$, nối bằng đoạn thẳng. Tìm vận tốc trong đoạn đó.

**Giải.** $v=(16-4)/(6-2)=3$ m/s. Phải lấy hiệu cả hai tọa độ, không lấy $16/6$ vì đoạn không nhất thiết đi qua gốc. Vận tốc dương và không đổi trong khoảng từ $2$ đến $6$ s.
:::

:::example Ví dụ 2 – Đi, dừng rồi quay lại
Đồ thị gồm các điểm nối thẳng $(0;0)$, $(4;12)$, $(6;12)$, $(10;4)$, với giây và mét. Tìm vận tốc từng đoạn, quãng đường và vận tốc trung bình toàn bộ.

**Giải.** Ba độ dốc lần lượt bằng $3$, $0$, $-2$ m/s. Vật dừng từ $4$ đến $6$ s rồi đổi chiều. Quãng đường $s=12+0+8=20$ m. Độ dịch chuyển toàn bộ là $4$ m nên vận tốc trung bình bằng $4/10=0{,}4$ m/s; tốc độ trung bình bằng $2$ m/s.
:::

:::example Ví dụ 3 – Giao điểm hai đồ thị
Trong cùng hệ tọa độ, hai vật có $x_A=2t$ và $x_B=12-t$, với mét và giây. Xác định giao điểm và giải thích.

**Giải.** Giải $2t=12-t$ được $t=4$ s, $x=8$ m. Đây là sự kiện hai vật gặp nhau. Độ dốc khác dấu cho thấy A đi theo chiều dương, B theo chiều âm. Không thể từ giao điểm kết luận hai vật có cùng vận tốc.
:::

:::note Đọc tỉ lệ trục
Góc nghiêng nhìn trên màn hình còn phụ thuộc tỉ lệ hai trục. Chỉ so sánh độ dốc bằng số liệu vật lí hoặc trong cùng một hệ trục có cùng thang đo, không so góc trực quan của hai hình có tỉ lệ khác nhau.
:::

:::warn Dễ nhầm
- Đồ thị đi xuống không có nghĩa vật chậm dần.
- Đường nằm ngang có thể ở vị trí khác gốc nhưng vẫn là đứng yên.
- Diện tích dưới $d(t)$ không phải quãng đường.
:::

## Tóm tắt nhanh

- Độ dốc đồ thị dịch chuyển theo thời gian cho vận tốc.
- Độ dốc đổi dấu báo hiệu đổi chiều khi chuyển động liên tục.
- Quãng đường cộng theo từng đoạn, dùng độ biến thiên tuyệt đối.
- Giao điểm cần được diễn giải trong cùng mốc vị trí.
