# Chuyển động ném ngang và ném xiên

Một quả bóng rời bàn vẫn tiếp tục đi ngang trong khi rơi xuống. Bỏ qua không khí, hai thành phần chuyển động vuông góc có thể được phân tích độc lập nhưng dùng chung thời gian.

## 1. Mô hình và phương trình

Xem vật là chất điểm, chỉ chịu trọng lực, gia tốc $g$ không đổi. Chọn gốc tại điểm ném, $Ox$ nằm ngang, $Oy$ hướng lên. Vận tốc đầu $v_0$ hợp phương ngang góc $\theta$.

:::formula Phương trình chuyển động ném
$$x=v_0\cos\theta\,t,\qquad y=v_0\sin\theta\,t-\frac12gt^2$$
$$v_x=v_0\cos\theta,\qquad v_y=v_0\sin\theta-gt$$
:::

Theo phương ngang, vận tốc không đổi; theo phương đứng, gia tốc hướng xuống. Khi thành phần ngang khác không, khử thời gian cho quỹ đạo parabol. Hai thành phần có cùng thời gian, không phải hai giai đoạn diễn ra lần lượt.

## 2. Ném ngang

Với $\theta=0$, $v_{0y}=0$. Nếu điểm ném cao hơn mặt đất $h$, mặt đất có tọa độ $y=-h$ trong hệ đã chọn.

:::formula Thời gian và tầm xa ném ngang
$$t=\sqrt{\frac{2h}{g}},\qquad L=v_0\sqrt{\frac{2h}{g}}$$
:::

Thời gian rơi không phụ thuộc tốc độ ngang trong mô hình này. Tuy nhiên, nếu địa hình hoặc độ cao điểm chạm thay đổi theo vị trí thì phải giải theo điều kiện mới.

## 3. Ném xiên và điểm rơi cùng độ cao

Tại đỉnh quỹ đạo, $v_y=0$ nhưng $v_x$ vẫn khác không. Vật không đứng yên tại đỉnh khi ném xiên với thành phần ngang khác không.

:::formula Khi rơi về cùng độ cao phóng, góc phóng hướng lên
$$T=\frac{2v_0\sin\theta}{g},\qquad H=\frac{v_0^2\sin^2\theta}{2g}$$
$$L=\frac{v_0^2\sin2\theta}{g}$$
:::

Độ cao $H$ tính so với điểm phóng. Tầm xa lớn nhất ở $45^\circ$ chỉ khi tốc độ đầu cố định, bỏ qua cản và điểm rơi cùng độ cao. Nếu khác độ cao, tìm thời gian từ phương trình đứng trước.

## 4. Ví dụ minh hoạ

:::example Ví dụ 1 – Ném ngang
Ném ngang vật từ độ cao $20$ m với tốc độ $15$ m/s. Lấy $g=10$ m/s². Tìm thời gian, tầm xa và tốc độ khi chạm đất.

**Giải.** Thời gian $t=\sqrt{40/10}=2$ s. Tầm xa $L=15\cdot2=30$ m. Thành phần đứng lúc chạm có độ lớn $20$ m/s nên tốc độ tổng hợp $v=\sqrt{15^2+20^2}=25$ m/s.
:::

:::example Ví dụ 2 – Ném xiên cùng độ cao
Ném vật với $v_0=20$ m/s, góc $30^\circ$, cho rơi về độ cao ban đầu. Lấy $g=10$ m/s². Tính thời gian bay, độ cao cực đại và tầm xa.

**Giải.** Thành phần đầu: $v_{0y}=10$ m/s, $v_{0x}=10\sqrt3$ m/s. Thời gian lên đỉnh $1$ s nên tổng thời gian $2$ s. $H=10^2/(2\cdot10)=5$ m. Tầm xa $L=10\sqrt3\cdot2=20\sqrt3\approx34{,}6$ m.
:::

:::example Ví dụ 3 – Góc cho tầm xa lớn nhất
Giữ tốc độ đầu $20$ m/s, điểm rơi cùng độ cao. Tìm tầm xa lớn nhất và so với góc $30^\circ$.

**Giải.** Vì $\sin2\theta\le1$, cực đại tại $\theta=45^\circ$, $L_{\max}=v_0^2/g=40$ m. Góc $30^\circ$ cho khoảng $34{,}6$ m. Góc $60^\circ$ cho cùng tầm xa với $30^\circ$, nhưng thời gian bay và độ cao khác nhau.
:::

:::warn Dễ nhầm
- Ở đỉnh chỉ thành phần đứng của vận tốc bằng không.
- Không dùng công thức tầm xa cùng độ cao cho một vật ném từ vách cao.
- Gia tốc luôn hướng xuống, không theo tiếp tuyến quỹ đạo.
:::

## Tóm tắt nhanh

- Tách hai phương vuông góc, dùng chung thời gian.
- Phương ngang đều; phương đứng gia tốc $-g$.
- Ném ngang từ độ cao $h$ có thời gian $\sqrt{2h/g}$.
- Công thức tối ưu $45^\circ$ cần điểm rơi cùng độ cao.
