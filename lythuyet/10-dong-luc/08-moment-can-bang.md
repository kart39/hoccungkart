# Moment lực và cân bằng của vật rắn

Đẩy cửa ở gần tay nắm dễ hơn đẩy sát bản lề dù dùng cùng một lực. Tác dụng làm quay phụ thuộc không chỉ độ lớn lực mà còn khoảng cách đến trục quay.

## 1. Moment lực

:::def Moment của lực đối với trục quay
Moment lực đặc trưng tác dụng làm quay của lực quanh trục. Với bài toán phẳng và trục vuông góc mặt phẳng lực, độ lớn moment bằng lực nhân cánh tay đòn.
:::

:::formula Độ lớn moment
$$M=Fd=Fr\sin\theta$$
:::

$d$ là khoảng cách vuông góc từ trục đến giá của lực; $r$ là khoảng cách từ trục đến điểm đặt, $\theta$ là góc giữa vectơ từ trục đến điểm đặt và lực. Đơn vị N·m. Moment và năng lượng có cùng thứ nguyên nhưng là hai đại lượng khác nhau; khi nói moment, không dùng tên đơn vị joule.

Nếu giá lực đi qua trục thì $d=0$, lực không tạo moment quanh trục đó. Dùng quy ước quay ngược chiều kim đồng hồ là dương hoặc ngược lại, nhưng phải thống nhất.

## 2. Điều kiện cân bằng

:::formula Cân bằng vật rắn trong bài toán phẳng
$$\sum\vec F=\vec0,\qquad \sum M_O=0$$
:::

Tổng lực bằng không ngăn gia tốc tịnh tiến, tổng moment bằng không ngăn gia tốc quay trong trạng thái cân bằng đang xét. Với vật có trục cố định, quy tắc moment thường đủ để tìm điều kiện cân bằng quay; phản lực ở trục được xét khi cần cân bằng lực.

Nên chọn trục tại điểm có lực chưa biết đi qua để moment lực ấy bằng không. Một cặp lực song song, ngược chiều, bằng độ lớn nhưng khác giá tạo **ngẫu lực**: tổng lực bằng không nhưng moment khác không, nên vẫn làm vật quay.

## 3. Ví dụ minh hoạ

:::example Ví dụ 1 – Mở cửa
Lực $20$ N tác dụng vuông góc cánh cửa, cách bản lề $0{,}8$ m. Tính moment. Nếu đặt lực cách bản lề $0{,}2$ m, cần lực bao nhiêu để có cùng moment?

**Giải.** Moment ban đầu $M=20\cdot0{,}8=16$ N·m. Giữ moment đó ở cánh tay đòn $0{,}2$ m cần $F=16/0{,}2=80$ N. Vì vậy tác dụng xa bản lề giúp giảm lực cần thiết.
:::

:::example Ví dụ 2 – Lực nghiêng
Lực $50$ N đặt tại điểm cách trục $0{,}4$ m, góc giữa bán kính vị trí và lực là $30^\circ$. Tính moment.

**Giải.** Cánh tay đòn $d=0{,}4\sin30^\circ=0{,}2$ m. Moment $M=50\cdot0{,}2=10$ N·m. Không dùng $50\cdot0{,}4$ vì lực không vuông góc với đoạn nối trục đến điểm đặt.
:::

:::example Ví dụ 3 – Thanh đặt trên hai gối
Thanh ngang dài $2$ m, trọng lượng $50$ N đặt tại trung điểm. Thêm tải $100$ N cách đầu trái $1{,}5$ m. Hai gối đỡ ở hai đầu. Tìm phản lực hai gối.

**Giải.** Gọi phản lực trái $N_A$, phải $N_B$, cùng hướng lên. Tổng lực cho $N_A+N_B=150$ N. Lấy moment quanh đầu trái: $2N_B-50\cdot1-100\cdot1{,}5=0$. Suy ra $N_B=100$ N, $N_A=50$ N. Cả hai dương, phù hợp gối chỉ đẩy lên.
:::

:::note Trạng thái ban đầu
Tổng moment bằng không không buộc vật đang quay phải tự dừng. Trong bài cân bằng tĩnh, vật được xét ở trạng thái đứng yên; điều kiện lực và moment bảo đảm trạng thái đó được duy trì.
:::

:::warn Dễ nhầm
- Cánh tay đòn là khoảng cách đến giá lực, không luôn đến điểm đặt.
- Tổng lực bằng không chưa đủ cân bằng vật rắn.
- Khi chọn trục, phải lấy moment của mọi lực có cánh tay đòn khác không.
:::

## Tóm tắt nhanh

- $M=Fd$, với $d$ vuông góc giá lực.
- Cân bằng phẳng cần tổng lực và tổng moment bằng không.
- Chọn trục giúp loại bớt lực chưa biết khỏi phương trình moment.
- Ngẫu lực có hợp lực bằng không nhưng vẫn có tác dụng quay.
