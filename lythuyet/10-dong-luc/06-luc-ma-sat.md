# Lực ma sát

Ma sát làm khó kéo một thùng hàng nhưng cũng giúp giày bám đường khi chạy. Chiều của ma sát gắn với sự trượt tương đối tại chỗ tiếp xúc, không đơn giản là luôn ngược vận tốc của vật.

## 1. Ma sát trượt

:::def Ma sát trượt
Ma sát trượt xuất hiện khi hai bề mặt trượt tương đối, có phương tiếp tuyến mặt tiếp xúc và chiều chống lại chuyển động trượt tương đối.
:::

:::formula Mô hình ma sát trượt khô
$$F_{\text{mst}}=\mu_{\text{t}}N$$
:::

$N$ là độ lớn phản lực pháp tuyến, $\mu_{\text{t}}$ là hệ số không có đơn vị. Trong mô hình phổ thông, lực gần như không phụ thuộc diện tích tiếp xúc biểu kiến và ít phụ thuộc tốc độ trong phạm vi xét. Đây là gần đúng thực nghiệm, không phải định luật đúng cho mọi vật liệu và mọi điều kiện.

## 2. Ma sát nghỉ và ma sát lăn

:::def Ma sát nghỉ
Ma sát nghỉ ngăn sự trượt tương đối khi hai bề mặt chưa trượt. Độ lớn tự điều chỉnh theo các lực khác, trong giới hạn $0\le F_{\text{msn}}\le\mu_{\text{n}}N$.
:::

Dấu bằng chỉ ứng với giới hạn sắp trượt. Vật đứng yên trên sàn chưa chắc chịu ma sát; nếu không có xu hướng trượt, ma sát có thể bằng không. Hệ số ma sát nghỉ cực đại thường lớn hơn hệ số trượt của cùng cặp bề mặt, nhưng phải dùng dữ kiện đề cho.

Ma sát lăn và sức cản lăn gắn với tiếp xúc khi vật lăn, thường nhỏ hơn cản khi kéo trượt trong những tình huống thông dụng. Không áp dụng máy móc công thức ma sát trượt cho mọi vật lăn không trượt.

## 3. Phương pháp tính

Trước hết xác định mặt tiếp xúc và trạng thái trượt. Tìm $N$ từ phương trình vuông góc mặt tiếp xúc. Chỉ đặt $N=mg$ khi không có lực hoặc gia tốc khác làm thay đổi phương trình đứng. Sau đó tìm ma sát từ trạng thái cân bằng hoặc từ hệ số tương ứng.

## 4. Ví dụ minh hoạ

:::example Ví dụ 1 – Vật chưa trượt
Vật $5$ kg trên sàn ngang, $\mu_{\text{n}}=0{,}4$, chịu lực kéo ngang $12$ N. Lấy $g=10$ m/s². Vật có trượt không, ma sát bao nhiêu?

**Giải.** $N=mg=50$ N, ma sát nghỉ cực đại $20$ N. Vì lực kéo $12$ N nhỏ hơn giới hạn, vật có thể đứng yên; ma sát nghỉ bằng $12$ N ngược lực kéo. Không lấy luôn $20$ N.
:::

:::example Ví dụ 2 – Kéo vật đang trượt
Vật $5$ kg đang trượt trên sàn, $\mu_{\text{t}}=0{,}2$, chịu kéo ngang $15$ N cùng chiều trượt. Tìm gia tốc, lấy $g=10$ m/s².

**Giải.** Phản lực $50$ N nên ma sát trượt $10$ N. Hợp lực theo chiều chuyển động $15-10=5$ N. Gia tốc $a=5/5=1$ m/s², vật nhanh dần. Tên “ma sát” không có nghĩa hợp lực luôn làm vật chậm lại.
:::

:::example Ví dụ 3 – Trượt trên mặt nghiêng
Vật trượt xuống mặt nghiêng góc $30^\circ$, hệ số trượt $0{,}2$. Tính gia tốc, lấy $g=10$ m/s².

**Giải.** $N=mg\cos30^\circ$, ma sát hướng lên dốc. Chiếu xuống dốc: $ma=mg\sin30^\circ-\mu_{\text{t}}mg\cos30^\circ$. Suy ra $a=10(0{,}5-0{,}2\sqrt3/2)\approx3{,}27$ m/s². Khối lượng triệt tiêu trong mô hình này.
:::

:::note Ma sát giúp chuyển động
Khi đi bộ trên mặt đất đứng yên, chân đạp đất về sau và đất tác dụng ma sát nghỉ về trước lên chân trong giai đoạn đẩy. Ma sát có thể cùng hướng chuyển động của người.
:::

:::warn Dễ nhầm
- Ma sát nghỉ không luôn bằng giá trị cực đại.
- $N$ không luôn bằng trọng lượng.
- Chiều ma sát xét theo trượt hoặc xu hướng trượt tương đối tại tiếp xúc.
:::

## Tóm tắt nhanh

- Trượt: $F_{\text{mst}}=\mu_{\text{t}}N$ trong mô hình phù hợp.
- Nghỉ: lực tự điều chỉnh đến giới hạn $\mu_{\text{n}}N$.
- Tìm phản lực trước khi tính ma sát theo hệ số.
- Ma sát có thể hỗ trợ hoặc cản chuyển động của vật.
