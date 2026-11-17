# Giao thoa ánh sáng trong thí nghiệm Young

Ánh sáng qua hai khe hẹp có thể tạo những vạch sáng tối đều nhau trên màn. Sự phân bố đó là bằng chứng trực tiếp cho tính chất sóng của ánh sáng.

## 1. Bố trí và điều kiện

Hai khe hẹp được chiếu từ cùng một nguồn để tạo hai nguồn sáng kết hợp. Xét ánh sáng đơn sắc bước sóng $\lambda$ trong môi trường thí nghiệm, hai khe cách nhau $a$, màn cách mặt phẳng khe $D$ và $D\gg a$.

:::def Giao thoa ánh sáng
Giao thoa ánh sáng là sự chồng chất của các sóng ánh sáng kết hợp tạo phân bố cường độ ổn định, gồm các vân sáng và vân tối. Để có độ tương phản rõ, cần các thành phần phân cực tương thích và cường độ phù hợp.
:::

Lấy tọa độ $x$ từ vân trung tâm trên màn, trong miền góc nhỏ, hiệu đường đi xấp xỉ $ax/D$. Khi hai khe cùng pha, hiệu đường đi nguyên lần bước sóng cho vân sáng; bán nguyên lần bước sóng cho vân tối.

:::formula Vị trí vân và khoảng vân
$$i=\frac{\lambda D}{a},\qquad x_{\text{s}}=ki$$
$$x_{\text{t}}=\left(k+\frac12\right)i,\qquad k\in\mathbb Z$$
:::

Khoảng vân $i$ là khoảng cách giữa hai vân sáng liên tiếp hoặc hai vân tối liên tiếp. Khoảng cách một vân sáng đến vân tối kề nó bằng $i/2$. Vân trung tâm có $k=0$.

## 2. Đo bước sóng và đếm vân

Đo khoảng cách $L$ qua nhiều khoảng vân, sau đó lấy $i=L/N$, với $N$ là số khoảng chứ không phải số vân. Từ đó $\lambda=ia/D$. Cách đo nhiều khoảng giúp giảm sai số tương đối.

Đếm vân trên miền $x_1\le x\le x_2$ bằng điều kiện $x_1/i\le k\le x_2/i$ cho vân sáng. Không làm tròn tùy ý nếu đầu miền trùng một vân. Khi thay đổi $D$, $a$ hoặc $\lambda$, xét tỉ lệ từ công thức khoảng vân.

## 3. Ví dụ minh hoạ

:::example Ví dụ 1 – Khoảng vân
Cho $a=1$ mm, $D=2$ m, $\lambda=600$ nm. Tính khoảng vân.

**Giải.** Đổi $a=10^{-3}$ m, $\lambda=6\cdot10^{-7}$ m. Ta có $i=\lambda D/a=1{,}2\cdot10^{-3}$ m, bằng $1{,}2$ mm. Đổi đơn vị trước khi chia để tránh nhầm nanomét với micromét.
:::

:::example Ví dụ 2 – Vị trí vân
Với $i=1{,}2$ mm, tìm vân sáng bậc ba và vân tối thứ hai bên phải vân trung tâm.

**Giải.** Vân sáng bậc ba: $x=3i=3{,}6$ mm. Vân tối thứ nhất ở $i/2$, nên vân tối thứ hai ở $3i/2=1{,}8$ mm. “Thứ hai” không có nghĩa lấy $k=2$ trong biểu thức $(k+1/2)i$.
:::

:::example Ví dụ 3 – Đo bước sóng
Khoảng từ vân sáng thứ nhất đến vân sáng thứ sáu cùng phía là $5$ mm. Cho $a=0{,}8$ mm, $D=1{,}6$ m. Tìm bước sóng.

**Giải.** Có $6-1=5$ khoảng vân nên $i=1$ mm. Suy ra $\lambda=10^{-3}\cdot0{,}8\cdot10^{-3}/1{,}6=5\cdot10^{-7}$ m, bằng $500$ nm. Giá trị thuộc vùng nhìn thấy.
:::

:::example Ví dụ 4 – Đếm vân sáng
Màn quan sát đối xứng từ $-4{,}8$ mm đến $4{,}8$ mm, $i=1{,}2$ mm. Tính cả hai biên, có bao nhiêu vân sáng?

**Giải.** Điều kiện $-4{,}8\le1{,}2k\le4{,}8$ cho $-4\le k\le4$. Có $9$ số nguyên nên có $9$ vân sáng. Hai vân ở biên được tính theo đúng yêu cầu đề.
:::

:::note Ánh sáng trắng
Vân trung tâm là nơi hiệu đường đi bằng không nên các màu có cực đại trùng nhau. Ở xa trung tâm, khoảng vân phụ thuộc bước sóng nên các vân màu tách ra và có thể chồng lấn. Không dùng một khoảng vân duy nhất cho toàn bộ ánh sáng trắng.
:::

:::warn Dễ nhầm
- Sáu vân liên tiếp chỉ tạo năm khoảng vân.
- Vân sáng bậc $k$ có hai vị trí đối xứng nếu xét cả hai phía với $k>0$.
- Công thức vị trí tuyến tính là gần đúng góc nhỏ.
:::

## Tóm tắt nhanh

- $i=\lambda D/a$; vân sáng $x=ki$.
- Vân tối $x=(k+1/2)i$.
- Đo nhiều khoảng rồi suy ra bước sóng.
- Đếm vân bằng điều kiện số nguyên và biên quan sát.
