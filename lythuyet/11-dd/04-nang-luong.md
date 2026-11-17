# Năng lượng trong dao động điều hoà

Một chiếc xích đu nhanh nhất khi qua vị trí thấp nhất và chậm lại khi lên cao. Hiện tượng này thể hiện sự chuyển đổi giữa **động năng và thế năng** trong quá trình dao động.

## 1. Động năng, thế năng và cơ năng

Xét vật khối lượng $m$ dao động điều hoà với $x=A\cos(\omega t+\varphi)$. Chọn thế năng của hệ bằng không tại vị trí cân bằng; bỏ qua lực cản và mọi tác động làm thay đổi cơ năng.

:::def Các dạng năng lượng
Động năng là năng lượng do chuyển động. Thế năng của hệ dao động gắn với vị trí của vật. Cơ năng bằng tổng động năng và thế năng, kí hiệu $W=W_{\text{đ}}+W_{\text{t}}$; đơn vị là joule (J).
:::

:::formula Năng lượng của dao động điều hoà
$$W_{\text{đ}}=\frac12mv^2=\frac12m\omega^2(A^2-x^2)$$
$$W_{\text{t}}=\frac12m\omega^2x^2$$
$$W=\frac12m\omega^2A^2=\text{hằng số}$$
:::

Khi vật về vị trí cân bằng, lực kéo về cùng chiều chuyển động nên làm động năng tăng. Khi vật đi ra biên, lực kéo về ngược chiều chuyển động nên động năng giảm. Năng lượng được chuyển qua lại, không được tạo thêm sau mỗi chu kì.

| Vị trí | Động năng | Thế năng |
|---|---|---|
| $x=0$ | Bằng cơ năng | Bằng không |
| $x=\pm A$ | Bằng không | Bằng cơ năng |
| $x=\pm A/\sqrt2$ | $W/2$ | $W/2$ |

Động năng và thế năng đều không âm với mốc đã chọn. Chúng biến thiên tuần hoàn với chu kì $T/2$, tần số $2f$, trong khi cơ năng không đổi. Hai dạng năng lượng có tổng không đổi nên khi dạng này tăng thì dạng kia giảm.

## 2. Con lắc lò xo và con lắc đơn

### a) Con lắc lò xo

Với độ cứng $k$, ta có $\omega^2=k/m$ nên $W=kA^2/2$. Đối với lò xo nằm ngang, li độ cũng chính là độ biến dạng có dấu so với chiều dài tự nhiên. Với lò xo thẳng đứng, $kx^2/2$ là **thế năng hiệu dụng của cả hệ** sau khi gộp thế năng trọng trường và thế năng đàn hồi, chọn mốc tại cân bằng.

### b) Con lắc đơn

Con lắc dài $\ell$, lệch góc $\alpha$ so với phương thẳng đứng có thế năng trọng trường chính xác $mg\ell(1-\cos\alpha)$. Khi góc nhỏ, tính bằng radian, $1-\cos\alpha\approx\alpha^2/2$ và li độ cung $s=\ell\alpha$.

:::formula Năng lượng con lắc đơn
$$W=\frac12mv^2+mg\ell(1-\cos\alpha)$$
$$W\approx\frac12mg\ell\alpha_0^2=\frac12m\frac{g}{\ell}s_0^2$$
:::

Biểu thức thứ nhất không cần góc nhỏ nếu bỏ qua lực cản và dây luôn căng. Biểu thức điều hoà gần đúng ở dòng thứ hai cần biên độ góc nhỏ.

## 3. Ví dụ minh hoạ

:::example Ví dụ 1 – Cơ năng và tốc độ
Con lắc lò xo có $m=0{,}2$ kg, $k=50$ N/m, $A=4$ cm. Tìm cơ năng và tốc độ tại $x=2$ cm.

**Giải.** Đổi $A=0{,}04$ m, $x=0{,}02$ m. Cơ năng chỉ phụ thuộc biên độ:
$$W=\frac12\cdot50\cdot0{,}04^2=0{,}04\ \text{J}$$
Thế năng tại vị trí xét là $0{,}01$ J nên động năng bằng $0{,}03$ J. Do đó $v=\sqrt{2W_{\text{đ}}/m}=\sqrt{0{,}3}\approx0{,}548$ m/s. Đây là tốc độ; dấu vận tốc còn phụ thuộc chiều chuyển động.
:::

:::example Ví dụ 2 – Tỉ số năng lượng
Tìm vị trí tại đó động năng bằng ba lần thế năng.

**Giải.** Từ $W=W_{\text{đ}}+W_{\text{t}}=4W_{\text{t}}$ suy ra $x^2/A^2=1/4$. Vậy $x=\pm A/2$. Có hai vị trí, mỗi vị trí được đi qua hai lần trong một chu kì.
:::

:::example Ví dụ 3 – Con lắc đơn
Con lắc có $m=0{,}1$ kg, $\ell=1$ m, biên độ góc $0{,}1$ rad; lấy $g=10$ m/s². Tính gần đúng cơ năng và tốc độ cực đại.

**Giải.** Góc đủ nhỏ để dùng mô hình điều hoà. Ta được $W\approx0{,}005$ J và $v_{\max}=\sqrt{2W/m}\approx0{,}316$ m/s. Nếu cần độ chính xác cao hơn, thay cơ năng bằng $mg\ell(1-\cos0{,}1)$.
:::

:::example Ví dụ 4 – Suy ra biên độ
Một hệ lò xo có cơ năng $0{,}08$ J, độ cứng $100$ N/m. Sau khi kích thích lại, cơ năng tăng gấp bốn. Biên độ mới bằng bao nhiêu?

**Giải.** Ban đầu $A=\sqrt{2W/k}=0{,}04$ m. Vì cơ năng tỉ lệ với bình phương biên độ, biên độ mới gấp hai, bằng $8$ cm. Không thể kết luận tần số tăng vì độ cứng và khối lượng không đổi.
:::

:::warn Dễ nhầm
- Không dùng độ dãn lò xo thẳng đứng thay cho li độ trong $W_{\text{t}}=kx^2/2$ của mô hình quanh cân bằng.
- Tăng biên độ gấp hai làm cơ năng tăng gấp bốn, không phải gấp hai.
- Thế năng bằng động năng tại $|x|=A/\sqrt2$, không phải $A/2$.
:::

## Tóm tắt nhanh

- $W=W_{\text{đ}}+W_{\text{t}}=m\omega^2A^2/2$ khi không hao phí.
- Qua cân bằng: động năng cực đại; ở biên: thế năng cực đại.
- Động năng và thế năng có chu kì $T/2$.
- Con lắc đơn điều hoà cần góc nhỏ, tính góc bằng radian.
