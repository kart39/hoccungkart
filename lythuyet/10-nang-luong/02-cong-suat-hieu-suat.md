# Công suất và hiệu suất

Hai máy có thể nâng cùng một vật lên cùng độ cao nhưng mất thời gian khác nhau. Công suất mô tả tốc độ thực hiện công; hiệu suất mô tả tỉ phần năng lượng đầu vào trở thành đầu ra hữu ích.

## 1. Công suất

:::def Công suất trung bình
Công suất trung bình bằng công thực hiện hoặc năng lượng chuyển hóa trong một khoảng thời gian chia cho độ dài khoảng thời gian ấy.
:::

:::formula Công suất trung bình và tức thời của lực
$$P_{\text{tb}}=\frac A{\Delta t},\qquad P=\vec F\cdot\vec v=Fv\cos\alpha$$
:::

Đơn vị watt: $1$ W bằng $1$ J/s; $1$ kW bằng $1000$ W. Trong biểu thức tức thời, $\vec v$ là vận tốc điểm đặt lực và $\alpha$ là góc giữa lực với vận tốc. Khi lực cùng chiều chuyển động, $P=Fv$.

Công suất lớn không có nghĩa tổng công luôn lớn hơn; còn phụ thuộc thời gian vận hành. Một máy mạnh chạy rất ngắn có thể truyền ít năng lượng hơn máy yếu chạy lâu. Công suất trung bình không phải luôn bằng một giá trị tức thời tại thời điểm tùy chọn.

## 2. Hiệu suất

:::formula Hiệu suất thiết bị
$$H=\frac{E_{\text{ích}}}{E_{\text{vào}}}=\frac{A_{\text{ích}}}{A_{\text{toàn}}}$$
:::

Nếu các công suất được xét trong cùng điều kiện và cùng khoảng thời gian, có thể dùng $H=P_{\text{ích}}/P_{\text{vào}}$. Hiệu suất thường biểu diễn bằng phần trăm. Với thiết bị theo định nghĩa này, năng lượng hữu ích không vượt đầu vào, nên $0\le H\le1$.

Năng lượng “hao phí” không biến mất mà chuyển sang các dạng không phục vụ mục tiêu, như nhiệt và âm. Phải xác định rõ mục đích: nhiệt là hữu ích đối với ấm đun, nhưng có thể là hao phí trong động cơ nâng vật.

## 3. Ví dụ minh hoạ

:::example Ví dụ 1 – Nâng hàng
Máy nâng vật $100$ kg lên cao $5$ m trong $10$ s, tốc độ đầu cuối như nhau. Lấy $g=10$ m/s². Tính công suất hữu ích trung bình.

**Giải.** Công hữu ích làm tăng thế năng là $A_{\text{ích}}=mgh=5000$ J. Công suất hữu ích $P_{\text{ích}}=5000/10=500$ W. Chưa thể gọi đây là công suất đầu vào nếu chưa biết hiệu suất.
:::

:::example Ví dụ 2 – Công suất khi kéo đều
Xe chuyển động thẳng đều $20$ m/s, lực cản tổng cộng $1000$ N. Tính công suất cơ học của lực kéo.

**Giải.** Thẳng đều nên lực kéo bằng lực cản, tức $F=1000$ N. Lực kéo cùng chiều vận tốc nên $P=Fv=20000$ W, bằng $20$ kW. Hợp lực bằng không nhưng lực kéo và lực cản vẫn sinh công có dấu đối nhau.
:::

:::example Ví dụ 3 – Tìm công suất đầu vào
Một động cơ có công suất đầu vào $2$ kW, hiệu suất $75\%$, hoạt động $40$ s. Tính công hữu ích và năng lượng hao phí.

**Giải.** $H=0{,}75$, năng lượng vào $E_{\text{vào}}=2000\cdot40=80000$ J. Năng lượng hữu ích $E_{\text{ích}}=0{,}75\cdot80000=60000$ J. Hao phí $20000$ J. Công suất hữu ích tương ứng $1500$ W, không phải $2000$ W.
:::

:::tip Dùng cùng khoảng thời gian
Khi so sánh công suất đầu vào và hữu ích, cần bảo đảm chúng ứng với cùng chế độ vận hành. Nếu thiết bị đang tích trữ thêm năng lượng, phải tính phần tích trữ trước khi lập cân bằng đầu vào, đầu ra và hao phí.
:::

:::warn Dễ nhầm
- Watt là công suất, joule và kWh là năng lượng.
- $75\%$ phải được thay bằng $0{,}75$ trong phép nhân.
- Muốn tìm đầu vào từ hữu ích phải chia cho hiệu suất.
:::

## Tóm tắt nhanh

- Công suất là tốc độ thực hiện công hoặc truyền năng lượng.
- $P_{\text{tb}}=A/\Delta t$; lực cùng chiều vận tốc có $P=Fv$.
- Hiệu suất bằng hữu ích chia đầu vào.
- Hao phí vẫn tuân theo bảo toàn năng lượng.
