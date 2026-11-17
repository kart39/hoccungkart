# Chuyển động thẳng đều

Trên một đoạn đường thẳng, xe chạy ổn định đi được những quãng đường bằng nhau trong các khoảng thời gian bằng nhau. Chuyển động ấy được mô hình hóa bằng vận tốc không đổi.

## 1. Đặc điểm và phương trình

:::def Chuyển động thẳng đều
Chuyển động thẳng đều có quỹ đạo thẳng và vectơ vận tốc không đổi theo thời gian. Trong các khoảng thời gian bằng nhau, vật có độ dịch chuyển bằng nhau.
:::

:::formula Tọa độ và quãng đường
$$x=x_0+v(t-t_0),\qquad s=|v|(t-t_0)\quad(t\ge t_0)$$
:::

$x_0$ là tọa độ tại thời điểm $t_0$; $v$ là vận tốc có dấu theo trục. Chọn $t_0=0$ thì $x=x_0+vt$. Tọa độ có thể giảm đều nếu $v<0$, nhưng quãng đường vẫn tăng.

Vật có tốc độ không đổi chưa chắc chuyển động thẳng đều: vật đi quanh đường tròn đều vẫn đổi hướng vận tốc. Gia tốc bằng không là đặc trưng của vận tốc không đổi trong hệ quy chiếu đang xét.

## 2. Đồ thị và bài toán gặp nhau

Đồ thị tọa độ theo thời gian là đường thẳng, độ dốc bằng $v$, giao trục tọa độ tại $x_0$ khi lấy mốc thời gian bằng không. Đường nằm ngang biểu diễn vật đứng yên.

Hai vật gặp nhau tại cùng một thời điểm và cùng vị trí. Viết phương trình của chúng trong **cùng hệ trục, cùng mốc thời gian**, rồi giải $x_1(t)=x_2(t)$. Nếu một vật xuất phát muộn, thời gian chuyển động riêng của nó là $t-t_{\text{xuất phát}}$.

Với hai vật cùng chiều, tốc độ thu hẹp khoảng cách bằng hiệu tốc độ khi vật phía sau nhanh hơn. Với hai vật đi ngược chiều về phía nhau, tốc độ thu hẹp khoảng cách bằng tổng tốc độ. Cần kiểm tra hướng thực tế trước khi chọn tổng hay hiệu.

## 3. Ví dụ minh hoạ

:::example Ví dụ 1 – Tọa độ và độ dịch chuyển
Vật ở $x_0=10$ m lúc $t=0$, chuyển động đều với $v=-2$ m/s. Tìm tọa độ và quãng đường sau $4$ s.

**Giải.** Tọa độ $x=10-2\cdot4=2$ m. Độ dịch chuyển $x-x_0=-8$ m, còn quãng đường $s=|-2|\cdot4=8$ m. Dấu âm chỉ hướng chuyển động theo trục, không phải quãng đường âm.
:::

:::example Ví dụ 2 – Gặp nhau ngược chiều
Hai xe cách nhau $120$ km, cùng lúc đi về phía nhau với tốc độ $40$ và $60$ km/h. Tìm thời điểm và vị trí gặp tính từ xe thứ nhất.

**Giải.** Chọn $x_1=40t$, $x_2=120-60t$, với km và giờ. Cho hai tọa độ bằng nhau: $100t=120$, suy ra $t=1{,}2$ giờ. Vị trí gặp cách điểm xuất phát xe thứ nhất $48$ km. Xe thứ hai đi $72$ km, tổng đúng $120$ km.
:::

:::example Ví dụ 3 – Xuất phát muộn
Xe A rời gốc lúc $t=0$ với tốc độ $30$ km/h. Xe B rời cùng gốc sau $1$ giờ, cùng chiều với tốc độ $50$ km/h. Khi nào B đuổi kịp A?

**Giải.** Dùng thời gian chung từ lúc A đi: $x_A=30t$, $x_B=50(t-1)$ với $t\ge1$. Giải được $t=2{,}5$ giờ. B chỉ chạy $1{,}5$ giờ và gặp A tại $75$ km. Không ghi $2{,}5$ giờ là thời gian chạy của B.
:::

:::warn Dễ nhầm
- Quên trừ thời gian xuất phát muộn làm sai phương trình.
- Vận tốc không đổi cần cả độ lớn lẫn hướng không đổi.
- Nghiệm gặp nhau phải thuộc khoảng thời gian các phương trình đang áp dụng.
:::

## Tóm tắt nhanh

- $x=x_0+v(t-t_0)$.
- Quãng đường bằng tốc độ nhân thời gian chuyển động.
- Gặp nhau khi cùng tọa độ tại cùng thời điểm.
- Chọn chung hệ quy chiếu cho tất cả vật.
