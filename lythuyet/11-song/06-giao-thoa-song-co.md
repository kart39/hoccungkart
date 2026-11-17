# Giao thoa sóng cơ

Hai nguồn rung trên mặt nước có thể tạo những dải dao động mạnh xen kẽ những dải gần như đứng yên. Đó là kết quả chồng chất hai sóng có quan hệ pha ổn định.

## 1. Điều kiện và biên độ tổng hợp

:::def Nguồn kết hợp
Hai nguồn kết hợp dao động cùng tần số và có độ lệch pha không đổi theo thời gian. Để xét giao thoa vô hướng ở THPT, các dao động tại điểm gặp nhau được lấy cùng phương.
:::

Xét hai nguồn cùng pha. Tại $M$, khoảng cách đến nguồn là $d_1,d_2$, các sóng có cùng bước sóng $\lambda$. Độ lệch pha do đường đi có độ lớn $2\pi|d_2-d_1|/\lambda$.

:::formula Điều kiện cực đại, cực tiểu với hai nguồn cùng pha
Cực đại:
$$d_2-d_1=k\lambda$$
Cực tiểu:
$$d_2-d_1=\left(k+\frac12\right)\lambda$$
:::

Với hai biên độ bằng $a$ tại điểm xét, biên độ tổng hợp là $A_M=2a|\cos(\pi(d_2-d_1)/\lambda)|$. Cực đại đạt $2a$, cực tiểu bằng không. Nếu hai biên độ khác nhau, cực tiểu vẫn ứng với ngược pha nhưng biên độ nhỏ nhất là $|a_1-a_2|$, không triệt tiêu hoàn toàn.

## 2. Hình dạng vân và đếm điểm

Trên mặt phẳng, quỹ tích có hiệu khoảng cách không đổi là các nhánh hyperbol; đường trung trực ứng với hiệu đường đi bằng không. Đối với hai nguồn cùng pha, đường trung trực là cực đại.

Trên đoạn nối hai nguồn dài $L$, lấy $x$ từ nguồn thứ nhất thì $d_2-d_1=L-2x$. Khi chỉ xét **bên trong đoạn**, hiệu đường đi nằm trong khoảng $(-L;L)$.

:::tip Đếm bằng số nguyên
Viết $-L<k\lambda<L$ để đếm cực đại bên trong đoạn. Với cực tiểu, thay $k\lambda$ bằng $(k+1/2)\lambda$. Nếu đề nhận hai đầu đoạn, cần xét mô hình nguồn và điều kiện biên riêng, không tự đổi dấu bất đẳng thức.
:::

Hai nguồn ngược pha làm đổi vai trò hai điều kiện trên. Với độ lệch pha bất kì, phải cộng độ lệch pha ban đầu vào pha do hiệu đường đi trước khi xét cùng pha hoặc ngược pha.

## 3. Ví dụ minh hoạ

:::example Ví dụ 1 – Nhận dạng điểm
Hai nguồn cùng pha phát sóng bước sóng $4$ cm. Điểm $M$ cách hai nguồn $10$ cm và $18$ cm. Xét dao động tại $M$.

**Giải.** Hiệu đường đi bằng $8$ cm, bằng $2\lambda$. Hai sóng đến cùng pha nên $M$ là cực đại giao thoa. Nếu mỗi sóng có biên độ $2$ mm tại đó, biên độ tổng hợp bằng $4$ mm.
:::

:::example Ví dụ 2 – Cực tiểu
Vẫn hai nguồn trên, một điểm có hiệu đường đi $6$ cm. Mỗi sóng đến có biên độ $3$ mm. Tìm biên độ tổng hợp.

**Giải.** $6/4=1{,}5$, là số bán nguyên. Hai sóng đến ngược pha, bằng biên độ nên triệt tiêu: $A_M=0$. Kết luận bằng không cần giả thiết biên độ bằng nhau tại điểm xét.
:::

:::example Ví dụ 3 – Đếm trên đoạn
Hai nguồn cùng pha cách nhau $20$ cm, $\lambda=4$ cm. Đếm cực đại, cực tiểu bên trong đoạn nối nguồn.

**Giải.** Cực đại: $-5<k<5$, gồm $k=-4$ đến $4$, có $9$ điểm. Cực tiểu: $-5<k+1/2<5$, gồm $k=-5$ đến $4$, có $10$ điểm. Không tính hai nguồn.
:::

:::example Ví dụ 4 – Tìm tần số
Hai điểm cực đại liên tiếp trên đoạn nối hai nguồn cùng pha cách nhau $1{,}5$ cm. Tốc độ sóng $0{,}6$ m/s. Tìm tần số.

**Giải.** Trên đoạn nối nguồn, hiệu đường đi thay đổi gấp đôi độ dịch chuyển nên khoảng cách hai cực đại liên tiếp là $\lambda/2$. Vậy $\lambda=3$ cm và $f=0{,}6/0{,}03=20$ Hz.
:::

:::warn Dễ nhầm
- Khoảng cách hai cực đại trên đoạn nối nguồn là $\lambda/2$, không phải $\lambda$.
- Công thức trên phải đổi khi hai nguồn lệch pha ban đầu.
- Cực tiểu bằng không chỉ khi hai biên độ tại điểm xét bằng nhau.
:::

## Tóm tắt nhanh

- Nguồn kết hợp có cùng tần số và độ lệch pha ổn định.
- Cùng pha: cực đại tại hiệu đường đi nguyên lần bước sóng.
- Cực tiểu tại hiệu đường đi bán nguyên lần bước sóng.
- Đếm bằng bất đẳng thức, ghi rõ có xét hai nguồn hay không.
