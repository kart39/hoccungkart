# Chuyển động thẳng biến đổi đều

Một xe phanh đều có vận tốc giảm những lượng bằng nhau trong các khoảng thời gian bằng nhau. Mô hình gia tốc không đổi giúp dự đoán thời gian dừng và quãng đường phanh.

## 1. Các phương trình cơ bản

:::def Chuyển động thẳng biến đổi đều
Đây là chuyển động trên đường thẳng với gia tốc không đổi. Vật nhanh dần đều khi tốc độ tăng đều và chậm dần đều khi tốc độ giảm đều trong khoảng đang xét.
:::

Chọn mốc thời gian tại trạng thái đầu, với tọa độ $x_0$, vận tốc $v_0$. Các đại lượng theo trục phải có dấu.

:::formula Hệ công thức
$$v=v_0+at$$
$$\Delta x=v_0t+\frac12at^2,\qquad x=x_0+v_0t+\frac12at^2$$
$$v^2-v_0^2=2a\Delta x,\qquad \Delta x=\frac{v_0+v}{2}t$$
:::

Công thức cuối dùng được vì vận tốc biến thiên tuyến tính. Hệ thức không chứa thời gian thuận lợi khi đề cho vận tốc và khoảng cách. Tuy nhiên nó làm mất thông tin dấu vận tốc sau khi bình phương; phải chọn nghiệm phù hợp chiều chuyển động.

## 2. Quãng đường và đồ thị

Nếu vật không đổi chiều trong khoảng xét, $s=|\Delta x|$. Nếu có đổi chiều, tìm thời điểm $t_*=-v_0/a$ rồi chia hành trình thành các đoạn trước và sau $t_*$. Điều kiện $t_*$ thuộc khoảng xét phải được kiểm tra.

Đồ thị $v(t)$ là đường thẳng, diện tích có dấu là độ dịch chuyển. Đồ thị $x(t)$ là parabol khi $a\ne0$. Cùng một parabol có thể chứa cả giai đoạn chậm dần và nhanh dần nếu vật đổi chiều; không nên gắn toàn bộ đồ thị với một nhãn duy nhất.

## 3. Ví dụ minh hoạ

:::example Ví dụ 1 – Xuất phát từ nghỉ
Vật bắt đầu từ nghỉ, gia tốc $2$ m/s² trong $5$ s. Tính vận tốc và quãng đường.

**Giải.** Chọn chiều dương theo gia tốc: $v=0+2\cdot5=10$ m/s. Độ dịch chuyển $\Delta x=2\cdot5^2/2=25$ m. Vì vật không đổi chiều, quãng đường cũng bằng $25$ m.
:::

:::example Ví dụ 2 – Phanh xe
Xe đang chạy $20$ m/s thì phanh với gia tốc $-4$ m/s². Tìm thời gian và quãng đường đến lúc dừng.

**Giải.** Từ $0=20-4t$, được $t=5$ s. Quãng đường $s=20\cdot5-4\cdot5^2/2=50$ m. Có thể kiểm tra bằng $0^2-20^2=2(-4)s$. Không tiếp tục mô hình này sau khi xe dừng nếu lực phanh thực tế không làm xe chạy lùi.
:::

:::example Ví dụ 3 – Vật đổi chiều
Vật có $v_0=6$ m/s, $a=-2$ m/s² trong $5$ s. Tính độ dịch chuyển và quãng đường.

**Giải.** Đổi chiều tại $t_*=3$ s. Độ dịch chuyển toàn bộ $\Delta x=6\cdot5-5^2=5$ m. Trong $3$ s đầu vật đi $9$ m. Trong $2$ s sau, vật đi lùi $4$ m, nên quãng đường $s=9+4=13$ m. Lấy $|\Delta x|=5$ m làm quãng đường sẽ sai.
:::

:::tip Chọn công thức theo dữ kiện
Không có thời gian: ưu tiên $v^2-v_0^2=2a\Delta x$. Có thời gian: dùng hai phương trình đầu. Có vận tốc đầu, cuối và thời gian: vận tốc trung bình bằng $(v_0+v)/2$. Trước mỗi phép thay số phải xác nhận gia tốc thật sự không đổi.
:::

:::warn Dễ nhầm
- $\Delta x$ có dấu, không luôn bằng quãng đường.
- Dấu của gia tốc do trục chọn, không do từ “phanh”.
- Thời gian dừng khác tổng thời gian nếu mô hình còn có đổi chiều.
:::

## Tóm tắt nhanh

- $v=v_0+at$ khi gia tốc không đổi.
- $\Delta x=v_0t+at^2/2$.
- $v^2-v_0^2=2a\Delta x$ giúp khử thời gian.
- Tách hành trình tại thời điểm vận tốc đổi dấu để tính quãng đường.
