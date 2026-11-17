# Độ lệch pha giữa hai điểm trên phương truyền sóng

Hai phao trên cùng một đường truyền có thể nhô lên cùng lúc hoặc chuyển động trái ngược nhau. Sự khác nhau này được mô tả bằng độ lệch pha.

## 1. Liên hệ pha với khoảng cách

Xét sóng hình sin truyền đều, hai điểm đã nhận sóng, cách nhau $d$ trên cùng phương truyền. Điểm nằm sau theo chiều truyền nhận dao động trễ thời gian $\Delta t=d/v$.

:::formula Độ lệch pha
$$|\Delta\varphi|=\omega\Delta t=\frac{2\pi d}{\lambda}$$
:::

Nếu cần dấu, với sóng truyền theo chiều dương và $x_M>x_N$, hiệu pha $\varphi_M-\varphi_N=-2\pi(x_M-x_N)/\lambda$. Điểm xa hơn theo chiều truyền trễ pha. Trong bài chỉ hỏi độ lệch pha, thường dùng độ lớn hoặc quy về một chu kì pha theo yêu cầu.

:::def Cùng pha, ngược pha và vuông pha
- Cùng pha: độ lệch pha bằng $2k\pi$.
- Ngược pha: độ lệch pha bằng $(2k+1)\pi$.
- Vuông pha: độ lệch pha bằng $(2k+1)\pi/2$.
:::

Ở đây các số nguyên được chọn sao cho khoảng cách không âm. Hai điểm cùng pha có cùng trạng thái dao động khi biên độ bằng nhau; ngược pha có li độ và vận tốc đối dấu; vuông pha không có nghĩa li độ luôn đối nhau.

## 2. Các khoảng cách đặc biệt

| Quan hệ | Khoảng cách trên phương truyền | Khoảng cách dương nhỏ nhất |
|---|---|---|
| Cùng pha | $d=k\lambda$ | $\lambda$ |
| Ngược pha | $d=(k+1/2)\lambda$ | $\lambda/2$ |
| Vuông pha | $d=(2k+1)\lambda/4$ | $\lambda/4$ |

Không áp dụng trực tiếp công thức với khoảng cách thẳng bất kì giữa hai điểm trên hai phương khác nhau. Với sóng từ nguồn điểm, pha gắn với quãng đường truyền từ nguồn, nên cần xét hiệu các quãng đường.

## 3. Ví dụ minh hoạ

:::example Ví dụ 1 – Tính độ lệch pha
Sóng có bước sóng $40$ cm. Hai điểm trên một phương truyền cách nhau $10$ cm. Tìm độ lệch pha.

**Giải.** Dùng cùng đơn vị cho $d$ và $\lambda$: $|\Delta\varphi|=2\pi\cdot10/40=\pi/2$ rad. Hai điểm vuông pha. Muốn nói điểm nào sớm pha phải biết thứ tự điểm theo chiều truyền.
:::

:::example Ví dụ 2 – Tìm tốc độ
Hai điểm cùng pha gần nhau nhất trên phương truyền cách nhau $0{,}6$ m. Tần số nguồn là $5$ Hz. Tìm tốc độ truyền.

**Giải.** Cụm “gần nhau nhất” với hai điểm phân biệt cho $\lambda=0{,}6$ m. Vì vậy $v=\lambda f=0{,}6\cdot5=3$ m/s. Nếu bỏ điều kiện gần nhất, dữ kiện này có thể ứng với nhiều bước sóng.
:::

:::example Ví dụ 3 – Nhiều nghiệm khoảng cách
Sóng có $\lambda=12$ cm. Liệt kê khoảng cách $0<d\le30$ cm để hai điểm ngược pha.

**Giải.** Điều kiện $d=(k+1/2)12=6+12k$ cm. Các số nguyên không âm cho $d=6$, $18$, $30$ cm. Có ba giá trị; đầu mút $30$ cm được nhận vì bất đẳng thức có dấu bằng.
:::

:::example Ví dụ 4 – Độ trễ và pha quy đổi
Sóng có $T=0{,}2$ s, truyền với $v=4$ m/s. Điểm sau cách điểm trước $1$ m. Tính độ trễ và độ lệch pha.

**Giải.** Độ trễ $\Delta t=1/4=0{,}25$ s. Bước sóng $\lambda=0{,}8$ m nên độ lệch pha tích lũy bằng $5\pi/2$. Khi xét trạng thái dao động tuần hoàn, độ lệch này tương đương $\pi/2$ theo modulo $2\pi$; thời gian truyền thực vẫn là $0{,}25$ s.
:::

:::warn Dễ nhầm
- Cùng li độ ở một thời điểm chưa đủ kết luận cùng pha.
- Cùng pha không nhất thiết cách đúng một bước sóng.
- Độ trễ truyền thực không bị rút ngắn khi quy pha theo modulo $2\pi$.
:::

## Tóm tắt nhanh

- $|\Delta\varphi|=2\pi d/\lambda$ trên cùng phương truyền.
- Điểm ở sau theo chiều truyền trễ pha.
- Khoảng cách cùng pha là bội nguyên bước sóng.
- Khi đếm vị trí, xét số nguyên và điều kiện nhận hai đầu đoạn.
