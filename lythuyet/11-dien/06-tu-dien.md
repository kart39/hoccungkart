# Tụ điện, ghép tụ và năng lượng điện trường

Tụ điện có thể tích trữ năng lượng để tạo chớp sáng hoặc làm ổn định điện áp trong mạch. Muốn tính đúng, phải biết tụ đang nối với nguồn hay đã được ngắt khỏi nguồn.

## 1. Điện dung và tích điện

:::def Tụ điện và điện dung
Tụ điện gồm hai vật dẫn đặt gần nhau, ngăn cách bởi điện môi. Với tụ thông thường ban đầu trung hòa được tích điện bằng nguồn, hai bản mang điện tích đối nhau $+Q,-Q$. Điện dung $C=Q/U$ đặc trưng khả năng tích điện, đơn vị farad (F).
:::

Ở đây $Q$ là độ lớn điện tích một bản, $U$ là độ lớn hiệu điện thế giữa hai bản. Với cấu tạo và điện môi cố định trong miền tuyến tính, $C$ không phụ thuộc riêng vào $Q$ hay $U$.

:::formula Tụ phẳng lí tưởng
$$C=\varepsilon_0\varepsilon_r\frac Sd,\qquad Q=CU$$
:::

$S$ là diện tích phần đối diện tính bằng m², $d$ là khoảng cách hai bản tính bằng mét; $\varepsilon_0\approx8{,}85\cdot10^{-12}$ F/m là hằng số điện môi chân không, $\varepsilon_r$ là hằng số điện môi tương đối không có đơn vị. Bỏ qua hiệu ứng mép. Điện áp làm việc không được vượt giới hạn đánh thủng điện môi.

## 2. Ghép tụ

| Cách ghép | Đại lượng chung | Điện dung tương đương |
|---|---|---|
| Song song | Hiệu điện thế | $C_{\text{b}}=C_1+C_2+\cdots$ |
| Nối tiếp | Độ lớn điện tích trong điều kiện chuẩn | $1/C_{\text{b}}=1/C_1+1/C_2+\cdots$ |

Với ghép nối tiếp, nhận xét điện tích bằng nhau giả thiết các nút trung gian ban đầu trung hòa và không nhận điện tích từ ngoài. Điện áp tổng bằng tổng điện áp từng tụ; tụ có điện dung nhỏ chịu điện áp lớn hơn. Với song song, điện tích toàn bộ bằng tổng điện tích các tụ.

## 3. Năng lượng

:::formula Năng lượng điện trường của tụ tuyến tính
$$W=\frac12CU^2=\frac{Q^2}{2C}=\frac12QU$$
:::

Tụ nối nguồn điện áp không đổi có $U$ không đổi, nguồn có thể cấp hoặc nhận điện tích. Tụ ngắt nguồn, bỏ qua rò điện, có điện tích mỗi bản được bảo toàn. Thay đổi điện dung trong hai tình huống này dẫn đến những kết quả khác nhau về điện áp và năng lượng.

## 4. Ví dụ minh hoạ

:::example Ví dụ 1 – Điện tích và năng lượng
Tụ $2$ microfarad được tích đến $100$ V. Tìm điện tích và năng lượng.

**Giải.** $C=2\cdot10^{-6}$ F. $Q=CU=2\cdot10^{-4}$ C, bằng $200$ microcoulomb. Năng lượng $W=CU^2/2=0{,}01$ J. Không dùng $QU$ vì điện áp tăng dần trong quá trình tích điện.
:::

:::example Ví dụ 2 – Ghép nối tiếp
Hai tụ $2$ và $3$ microfarad nối tiếp vào nguồn $10$ V. Tìm điện dung bộ và điện áp mỗi tụ.

**Giải.** $C_{\text{b}}=C_1C_2/(C_1+C_2)=1{,}2$ microfarad. Điện tích chung $Q=C_{\text{b}}U=12$ microcoulomb. Suy ra $U_1=Q/C_1=6$ V, $U_2=4$ V; tổng đúng $10$ V.
:::

:::example Ví dụ 3 – Ghép song song
Vẫn hai tụ trên, nay ghép song song vào $10$ V. Tìm điện tích toàn bộ và năng lượng.

**Giải.** Điện dung bộ bằng $5$ microfarad; điện tích tổng $50$ microcoulomb. Năng lượng $W=5\cdot10^{-6}\cdot10^2/2=2{,}5\cdot10^{-4}$ J. Mỗi tụ đều chịu $10$ V.
:::

:::example Ví dụ 4 – Ngắt nguồn rồi tăng điện dung
Tụ ở ví dụ 1 được ngắt nguồn, sau đó điện dung tăng gấp hai. Bỏ qua rò điện. Tìm điện áp và năng lượng mới.

**Giải.** Điện tích giữ nguyên, $C'=4$ microfarad. Điện áp $U'=Q/C'=50$ V. Năng lượng $W'=Q^2/(2C')=0{,}005$ J, bằng nửa ban đầu. Phần chênh lệch cần được xét cùng công cơ học và trao đổi năng lượng khi thay cấu hình.
:::

:::warn Dễ nhầm
- Tụ nối tiếp không có cùng điện áp nói chung.
- Ngắt nguồn giữ $Q$; còn nối nguồn lí tưởng giữ $U$.
- Điện dung bộ nối tiếp nhỏ hơn từng tụ thành phần.
:::

## Tóm tắt nhanh

- $Q=CU$; điện dung phụ thuộc cấu tạo và điện môi.
- Song song cộng điện dung; nối tiếp cộng nghịch đảo.
- $W=CU^2/2=Q^2/(2C)$.
- Xác định điều kiện nối nguồn trước khi xét biến đổi tụ.
