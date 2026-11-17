# Biến dạng của vật rắn và định luật Hooke

Lò xo có thể trở lại chiều dài cũ sau khi bỏ tải, còn một dây kim loại bị kéo quá mạnh có thể dài ra vĩnh viễn. Khả năng hồi phục phụ thuộc mức tải và tính chất vật liệu.

## 1. Biến dạng đàn hồi và biến dạng không hồi phục

:::def Biến dạng đàn hồi
Biến dạng đàn hồi là biến dạng mất đi khi bỏ tác dụng gây biến dạng, vật trở về hình dạng và kích thước ban đầu trong phạm vi mô hình. Vượt giới hạn thích hợp, vật có thể bị biến dạng dẻo hoặc đứt gãy.
:::

Các dạng thường gặp gồm kéo, nén, uốn, xoắn và cắt. Một vật đàn hồi không nhất thiết tuân theo quan hệ lực – biến dạng tuyến tính ở toàn bộ miền đàn hồi. Định luật Hooke cần một khoảng áp dụng cụ thể.

## 2. Lò xo và định luật Hooke

:::formula Lực đàn hồi trong miền Hooke
$$F_{\text{đh}}=k|\Delta\ell|,\qquad \Delta\ell=\ell-\ell_0$$
:::

$\ell_0$ là chiều dài tự nhiên, $\ell$ là chiều dài đang xét; $k$ là độ cứng, đơn vị N/m. Lực đàn hồi chống lại biến dạng: lò xo dãn kéo hai đầu về gần nhau, lò xo nén đẩy hai đầu ra xa. Nếu dùng độ biến dạng có dấu $x$ trên trục, thành phần lực hồi phục tương ứng là $F=-kx$.

Độ cứng càng lớn, cùng độ biến dạng cần lực càng lớn. Đồ thị độ lớn lực theo độ biến dạng trong miền tuyến tính là đường thẳng qua gốc, độ dốc bằng $k$. Treo vật đứng yên vào lò xo thẳng đứng, nếu không có lực khác, $k\Delta\ell=mg$.

## 3. Dây hoặc thanh chịu kéo

Ứng suất kéo $\sigma=F/S$ có đơn vị Pa; biến dạng tỉ đối $\varepsilon=\Delta\ell/\ell_0$ không có đơn vị. Trong miền đàn hồi tuyến tính của thanh đồng chất tiết diện đều, có thể viết $\sigma=E_Y\varepsilon$, với $E_Y$ là suất Young.

Suy ra độ cứng kéo tương đương $k=E_YS/\ell_0$. Cùng vật liệu, thanh dài hơn dễ dãn hơn, thanh tiết diện lớn hơn khó dãn hơn. Đây là kiến thức mở rộng giúp giải thích cấu tạo, không cần dùng nếu đề chỉ cho lò xo và độ cứng.

## 4. Ví dụ minh hoạ

:::example Ví dụ 1 – Tìm độ cứng
Lực $6$ N làm lò xo dãn từ $15$ cm đến $18$ cm trong miền Hooke. Tính độ cứng.

**Giải.** Độ dãn $\Delta\ell=18-15=3$ cm, bằng $0{,}03$ m. Độ cứng $k=6/0{,}03=200$ N/m. Không lấy chiều dài đang có $0{,}18$ m thay cho độ biến dạng.
:::

:::example Ví dụ 2 – Treo vật
Lò xo $k=100$ N/m treo vật $0{,}2$ kg đứng yên, lấy $g=10$ m/s². Tìm độ dãn và chiều dài nếu chiều dài tự nhiên $12$ cm.

**Giải.** Cân bằng lực: $k\Delta\ell=mg=2$ N. Suy ra $\Delta\ell=0{,}02$ m, bằng $2$ cm. Chiều dài mới $\ell=12+2=14$ cm. Nếu hệ còn dao động, không dùng cân bằng này cho mọi vị trí tức thời.
:::

:::example Ví dụ 3 – So sánh dây chịu kéo
Hai dây cùng vật liệu, dây B dài gấp hai và có tiết diện gấp ba dây A. Trong miền tuyến tính, so sánh độ cứng và độ dãn khi chịu cùng lực kéo.

**Giải.** Từ $k=E_YS/\ell_0$, có $k_B/k_A=3/2$. Cùng lực, độ dãn tỉ lệ nghịch độ cứng nên $\Delta\ell_B/\Delta\ell_A=2/3$. Không chỉ nhìn chiều dài để kết luận dây B dễ dãn hơn, vì tiết diện cũng thay đổi.
:::

:::warn Dễ nhầm
- Độ biến dạng khác chiều dài toàn phần.
- Định luật Hooke không đúng ngoài miền tuyến tính.
- Lực đàn hồi hướng chống biến dạng, không luôn hướng lên.
:::

## Tóm tắt nhanh

- Biến dạng đàn hồi hồi phục sau khi bỏ tải.
- Trong miền Hooke: $F=k|\Delta\ell|$.
- Độ cứng có đơn vị N/m.
- Xác nhận điều kiện cân bằng trước khi đặt $k\Delta\ell=mg$.
