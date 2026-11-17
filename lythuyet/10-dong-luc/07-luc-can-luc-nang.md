# Lực cản, lực nâng và lực đẩy Archimedes

Không khí cản người chạy nhưng cũng tạo lực nâng cho cánh máy bay. Trong nước đứng yên, một vật còn chịu lực đẩy nổi; lực này cần được phân biệt với lực nâng khí động học.

## 1. Lực cản của chất lưu

:::def Lực cản
Lực cản của chất lưu là thành phần lực chống lại chuyển động tương đối của vật qua chất lỏng hoặc chất khí. Nó phụ thuộc tốc độ tương đối, hình dạng, kích thước vật và tính chất chất lưu.
:::

Không có một quy luật duy nhất cho mọi trường hợp. Trong một số miền tốc độ và điều kiện dòng chảy, dùng $F_{\text{c}}=bv$; trong miền khác có thể dùng $F_{\text{c}}=cv^2$. Các hệ số phải do mô hình hoặc dữ kiện xác định.

Vật rơi trong không khí có thể tăng tốc lúc đầu, sau đó lực cản tăng. Khi tổng lực bằng không, vật đạt tốc độ giới hạn và gia tốc bằng không. Đây không còn là rơi tự do chỉ chịu trọng lực.

## 2. Lực nâng khí động học

:::def Lực nâng
Lực nâng khí động học là thành phần của lực khí động vuông góc với hướng dòng khí tương đối. Nó liên quan đến phân bố áp suất và sự đổi hướng dòng khí quanh vật, không nhất thiết luôn hướng thẳng đứng lên.
:::

Hình dạng cánh, góc đặt, tốc độ tương đối và mật độ không khí ảnh hưởng lực nâng. Không giải thích bằng giả định hai phần không khí trên và dưới cánh phải gặp lại nhau đồng thời; giả định đó không đúng nói chung. Tham khảo định nghĩa trong [NASA – What is Lift?](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/what-is-lift/).

## 3. Lực đẩy Archimedes

:::formula Chất lưu đứng yên trong trọng trường đều
$$F_A=\rho_{\text{lưu}}gV_{\text{chiếm chỗ}}$$
:::

Lực đẩy nổi có độ lớn bằng trọng lượng chất lưu bị vật chiếm chỗ, hướng lên trong mô hình thủy tĩnh thông thường. Nó tồn tại cả khi vật không chuyển động. Thể tích dùng là phần chiếm chỗ trong chất lưu, không luôn bằng toàn bộ thể tích vật. Nguyên lí được trình bày trong [OpenStax – Archimedes’ Principle](https://openstax.org/books/university-physics-volume-1/pages/14-4-archimedes-principle-and-buoyancy).

## 4. Ví dụ minh hoạ

:::example Ví dụ 1 – Tốc độ giới hạn
Vật $0{,}2$ kg rơi thẳng đứng, lực cản có độ lớn $F_{\text{c}}=0{,}02v^2$ theo SI. Bỏ qua lực đẩy nổi, lấy $g=10$ m/s². Tìm tốc độ giới hạn.

**Giải.** Tại giới hạn, lực cản hướng lên cân bằng trọng lực: $0{,}02v^2=0{,}2\cdot10=2$. Suy ra $v=10$ m/s. Đây là tốc độ, chọn nghiệm dương; gia tốc tại trạng thái giới hạn bằng không.
:::

:::example Ví dụ 2 – Lực đẩy lên vật chìm
Vật chìm hoàn toàn trong nước, thể tích $200$ cm³. Lấy mật độ nước $1000$ kg/m³, $g=10$ m/s². Tính lực đẩy.

**Giải.** $V=2\cdot10^{-4}$ m³. Lực đẩy $F_A=1000\cdot10\cdot2\cdot10^{-4}=2$ N. Chưa thể kết luận vật nổi hay chìm tiếp nếu chưa biết trọng lượng và các lực khác.
:::

:::example Ví dụ 3 – Cân bằng khi nổi
Khối gỗ đồng chất có khối lượng riêng $600$ kg/m³ nổi cân bằng trên nước $1000$ kg/m³. Bỏ qua sức căng mặt ngoài. Phần thể tích chìm chiếm bao nhiêu?

**Giải.** Gọi $\rho_1,\rho_2$ lần lượt là khối lượng riêng nước và gỗ. Cân bằng cho $\rho_1gV_{\text{chìm}}=\rho_2gV$. Vì vậy $V_{\text{chìm}}/V=600/1000=0{,}6$, tức $60\%$. Không có chuyển động qua nước vẫn có lực đẩy nổi.
:::

:::warn Dễ nhầm
- Lực nâng khí động không đồng nghĩa lực đẩy Archimedes.
- Tốc độ giới hạn ứng với hợp lực bằng không, không phải hết trọng lực.
- Lực cản phụ thuộc chuyển động tương đối với chất lưu.
:::

## Tóm tắt nhanh

- Lực cản chống chuyển động tương đối qua chất lưu.
- Lực nâng khí động vuông góc dòng tương đối.
- Lực đẩy nổi bằng trọng lượng chất lưu bị chiếm chỗ.
- Đạt tốc độ giới hạn khi các lực cân bằng.
