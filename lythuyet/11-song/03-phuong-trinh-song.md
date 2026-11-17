# Phương trình sóng và đồ thị sóng

Một đỉnh sóng đến điểm xa nguồn muộn hơn điểm gần nguồn. Phương trình sóng mô tả sự trễ này và cho phép tính li độ tại từng vị trí, từng thời điểm.

## 1. Xây dựng phương trình

Xét sóng hình sin truyền theo chiều dương trục $Ox$, không suy giảm biên độ. Nguồn tại $O$ có phương trình $u_O(t)=A\cos(\omega t+\varphi_0)$. Điểm cách nguồn $x$ nhận trạng thái của nguồn trễ $x/v$.

:::formula Sóng truyền theo chiều dương
$$u(x,t)=A\cos\left(\omega t-\frac{2\pi x}{\lambda}+\varphi_0\right)$$
$$\omega=2\pi f,\qquad \lambda=\frac vf$$
:::

Với sóng truyền theo chiều âm, dấu trước phần vị trí đổi thành cộng. Đây là quy tắc cho dạng pha viết theo $\omega t$ với hệ số thời gian dương. Có thể kiểm tra chiều truyền bằng cách giữ pha không đổi rồi xem vị trí tăng hay giảm theo thời gian.

:::note Phạm vi thời gian
Nếu nguồn bắt đầu phát tại $t=0$ và môi trường trước đó đứng yên, điểm $x>0$ chưa dao động khi $t<x/v$. Phương trình của sóng đã đến chỉ dùng sau thời điểm mặt sóng tới điểm đó.
:::

## 2. Hai loại đồ thị

Giữ $x$ cố định: phương trình là dao động theo thời gian tại một điểm, cho chu kì $T$. Giữ $t$ cố định: phương trình cho ảnh dạng sóng theo không gian, lặp lại sau bước sóng $\lambda$.

Vận tốc dao động của phần tử là đạo hàm theo thời gian khi giữ nguyên vị trí:
$$v_u=-\omega A\sin\left(\omega t-\frac{2\pi x}{\lambda}+\varphi_0\right)$$
Đại lượng này khác tốc độ truyền $v=\omega\lambda/(2\pi)$. Với sóng truyền theo chiều dương, trên ảnh dạng sóng, đoạn có độ dốc dương ứng với phần tử đang đi xuống; đoạn có độ dốc âm ứng với phần tử đang đi lên.

## 3. Ví dụ minh hoạ

:::example Ví dụ 1 – Đọc các thông số
Cho $u=2\cos(10\pi t-4\pi x)$ cm, với $x$ tính bằng mét, $t$ bằng giây. Tìm $A,f,\lambda,v$.

**Giải.** $A=2$ cm; $\omega=10\pi$ nên $f=5$ Hz. Từ $2\pi/\lambda=4\pi$, có $\lambda=0{,}5$ m. Vậy $v=f\lambda=2{,}5$ m/s, theo chiều dương trục tọa độ.
:::

:::example Ví dụ 2 – Tính li độ
Với sóng ở ví dụ 1, tính li độ tại $x=0{,}25$ m lúc $t=0{,}1$ s.

**Giải.** Thay đúng đơn vị vào pha: $10\pi\cdot0{,}1-4\pi\cdot0{,}25=0$. Vì $\cos0=1$ nên $u=2$ cm. Không đưa $x=25$ vào phương trình vì đơn vị vị trí đã quy định là mét.
:::

:::example Ví dụ 3 – Lập phương trình
Nguồn có $u_O=3\cos(8\pi t+\pi/6)$ mm. Sóng truyền theo chiều dương với $v=2$ m/s. Viết phương trình tại vị trí $x$ tính bằng mét.

**Giải.** $f=4$ Hz, $\lambda=2/4=0{,}5$ m. Hệ số vị trí là $2\pi/\lambda=4\pi$. Do đó $u=3\cos(8\pi t-4\pi x+\pi/6)$ mm, trong miền đã có sóng.
:::

:::example Ví dụ 4 – Chiều chuyển động phần tử
Trên ảnh sóng đang truyền sang phải, một phần tử ở đoạn dây có li độ tăng dần khi nhìn từ trái sang phải. Phần tử ấy đang đi lên hay xuống?

**Giải.** Đoạn đó có độ dốc không gian dương. Sau một khoảng thời gian ngắn, dạng sóng tịnh tiến sang phải nên tại vị trí cố định, li độ được thay bằng giá trị nhỏ hơn ở phía trái. Phần tử đang đi xuống.
:::

:::warn Dễ nhầm
- Hệ số của $x$ phụ thuộc đơn vị vị trí.
- Dấu trước $x$ cần xét cùng quy ước của toàn bộ pha.
- Một ảnh dạng sóng không tự cho chu kì nếu chưa biết tốc độ hoặc dữ kiện thời gian.
:::

## Tóm tắt nhanh

- Theo chiều dương: $u=A\cos(\omega t-2\pi x/\lambda+\varphi_0)$.
- Giữ vị trí để xét dao động; giữ thời gian để xét dạng sóng.
- Phần tử xa nguồn trễ thời gian $x/v$.
- Phân biệt vận tốc dao động với tốc độ truyền sóng.
