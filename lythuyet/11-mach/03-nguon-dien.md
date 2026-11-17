# Nguồn điện, suất điện động và định luật Ohm toàn mạch

Điện áp một pin có thể giảm khi mắc tải tiêu thụ dòng lớn. Nguồn thực có điện trở trong, nên điện áp hai cực khi hoạt động không luôn bằng suất điện động.

## 1. Nguồn điện và suất điện động

:::def Suất điện động
Nguồn điện duy trì chênh lệch điện thế nhờ các quá trình đưa điện tích ngược chiều tác dụng của lực điện bên trong nguồn. Suất điện động $\mathcal E$ bằng công $A$ của lực lạ trên một đơn vị điện tích dương: $\mathcal E=A/q$.
:::

Suất điện động có đơn vị volt, không phải lực theo nghĩa cơ học. Năng lượng nguồn cung cấp có thể bắt nguồn từ phản ứng hóa học hoặc các cơ chế chuyển hóa khác. Điện trở trong $r$ biểu thị sự hao phí bên trong nguồn trong mô hình mạch đơn giản.

## 2. Định luật Ohm toàn mạch

Xét một nguồn đang phát điện, suất điện động $\mathcal E$, điện trở trong $r$, nối với tải thuần trở $R$ và dây lí tưởng.

:::formula Dòng điện và điện áp hai cực
$$I=\frac{\mathcal E}{R+r},\qquad U=\mathcal E-Ir=IR$$
:::

Một phần suất điện động bù độ giảm điện thế trong nguồn, phần còn lại xuất hiện trên tải. Khi mạch hở, $I=0$ nên điện áp hai cực gần bằng suất điện động. Khi giảm tải $R$, dòng tăng và điện áp hai cực thường giảm nếu $r>0$.

:::note Điều kiện dấu
Công thức $U=\mathcal E-Ir$ ở đây dành cho nguồn đang phát điện, dòng đi ra từ cực dương. Trong quá trình nạp một nguồn có thể nạp, chiều dòng khác và quan hệ dấu phải được thiết lập lại; không áp dụng máy móc cùng biểu thức.
:::

## 3. Đoản mạch và bộ nguồn

Khi điện trở ngoài rất nhỏ, mô hình cho $I_{\text{đm}}\approx\mathcal E/r$. Dòng lớn gây nóng và có thể làm hỏng nguồn; thực tế giới hạn dòng và biến đổi nhiệt có thể khiến mô hình điện trở không đổi không còn chính xác.

Với các nguồn mắc nối tiếp, suất điện động cộng có dấu theo chiều vòng chọn, điện trở trong cộng dương. Chỉ ghép song song các nguồn tương thích theo điều kiện bài cho; không tự coi mọi bộ pin song song là một nguồn lí tưởng giống hệt nhau.

## 4. Ví dụ minh hoạ

:::example Ví dụ 1 – Nguồn có điện trở trong
Nguồn $\mathcal E=12$ V, $r=1\ \Omega$, tải $R=5\ \Omega$. Tìm dòng và điện áp hai cực.

**Giải.** $I=12/(5+1)=2$ A. Điện áp $U=IR=10$ V, cũng bằng $12-2\cdot1$. Chênh lệch $2$ V là độ giảm điện thế trên điện trở trong.
:::

:::example Ví dụ 2 – Xác định nguồn từ hai lần đo
Nguồn có điện áp $9$ V khi phát dòng $1$ A và $8$ V khi phát dòng $2$ A. Tìm $\mathcal E,r$.

**Giải.** Viết $9=\mathcal E-r$ và $8=\mathcal E-2r$. Lấy hai phương trình trừ nhau được $r=1\ \Omega$. Thay lại suy ra $\mathcal E=10$ V. Cách đo giả thiết nguồn không thay đổi trạng thái giữa hai lần.
:::

:::example Ví dụ 3 – Nối tiếp hai pin
Hai pin giống nhau, mỗi pin có $\mathcal E=1{,}5$ V và $r=0{,}2\ \Omega$, mắc nối tiếp cùng chiều vào tải $2{,}6\ \Omega$. Tính dòng.

**Giải.** Bộ có $\mathcal E_{\text{b}}=3$ V, $r_{\text{b}}=0{,}4\ \Omega$. Vì thế $I=3/(2{,}6+0{,}4)=1$ A. Nếu chỉ cộng suất điện động mà quên cộng điện trở trong, kết quả sẽ lớn hơn thực tế của mô hình.
:::

:::warn Dễ nhầm
- Suất điện động và điện áp tải chỉ bằng nhau khi độ giảm nội bộ không đáng kể.
- Điện trở trong không được bỏ khỏi mẫu nếu đề cho nguồn thực.
- Không thực hiện đoản mạch thật để “kiểm tra” công thức.
:::

## Tóm tắt nhanh

- $\mathcal E=A/q$, với $A$ là công của lực lạ, đơn vị suất điện động là volt.
- Nguồn phát điện: $I=\mathcal E/(R+r)$.
- Điện áp hai cực: $U=\mathcal E-Ir$.
- Mạch hở và đoản mạch là hai giới hạn khác nhau.
