# Điện trở, định luật Ohm và ghép điện trở

Dây dẫn dài và mảnh thường cản dòng mạnh hơn dây cùng chất nhưng ngắn và dày. Điện trở cho phép mô tả định lượng ảnh hưởng đó trong mạch điện.

## 1. Định luật Ohm

:::def Điện trở
Điện trở đặc trưng mức độ cản trở dòng điện của vật dẫn. Đơn vị ohm, kí hiệu $\Omega$; $1\ \Omega=1\ \text{V/A}$.
:::

:::formula Vật dẫn tuân theo định luật Ohm
$$I=\frac UR,\qquad R=\rho\frac\ell S$$
:::

Ở nhiệt độ và điều kiện vật lí không đổi, dòng điện qua vật dẫn Ohm tỉ lệ với điện áp. Đồ thị $I$ theo $U$ là đường thẳng qua gốc, độ dốc bằng $1/R$. Không phải mọi linh kiện đều tuân theo định luật Ohm: bóng sợi đốt tự nóng lên khi tăng điện áp nên điện trở thay đổi.

Trong công thức dây đồng chất tiết diện đều, $\rho$ là điện trở suất, đơn vị $\Omega\cdot$m; $\ell$ là chiều dài, $S$ là tiết diện. Hai dây có cùng điện trở chưa chắc làm từ cùng chất.

## 2. Nhiệt độ và cách ghép

Trong một khoảng nhiệt độ phù hợp, điện trở kim loại gần đúng:
$$R=R_0[1+\alpha(T-T_0)]$$
$\alpha$ có đơn vị K⁻¹, phụ thuộc vật liệu và khoảng nhiệt độ. Điện trở kim loại thường tăng khi nhiệt độ tăng; không suy rộng tính chất này cho mọi vật liệu.

| Ghép | Đại lượng chung | Điện trở tương đương |
|---|---|---|
| Nối tiếp | Dòng điện | $R_{\text{b}}=R_1+R_2+\cdots$ |
| Song song | Điện áp | $1/R_{\text{b}}=1/R_1+1/R_2+\cdots$ |

Nối tiếp làm điện trở tăng vì dòng phải qua các phần liên tiếp. Song song tạo thêm đường dẫn nên điện trở bộ nhỏ hơn từng nhánh. Hai điện trở song song có $R_{\text{b}}=R_1R_2/(R_1+R_2)$.

## 3. Ví dụ minh hoạ

:::example Ví dụ 1 – Dòng điện qua điện trở
Đặt điện áp $12$ V vào điện trở $6\ \Omega$. Tính dòng điện; nếu điện áp giảm một nửa và điện trở không đổi thì sao?

**Giải.** $I=12/6=2$ A. Khi $U'=6$ V, $I'=6/6=1$ A. Dòng giảm một nửa vì vật dẫn được giả thiết giữ điện trở không đổi.
:::

:::example Ví dụ 2 – Dây dẫn và nhiệt độ
Một dây có điện trở suất $2\cdot10^{-8}\ \Omega\cdot$m, chiều dài $10$ m, tiết diện $1$ mm². Tính điện trở. Nếu $\alpha=0{,}004$ K⁻¹ và nhiệt độ tăng $50$ K, tìm điện trở mới theo mô hình tuyến tính.

**Giải.** $S=10^{-6}$ m² nên $R_0=\rho\ell/S=0{,}2\ \Omega$. Sau tăng nhiệt độ, $R=0{,}2(1+0{,}004\cdot50)=0{,}24\ \Omega$. Độ tăng $50$ K cũng bằng độ tăng $50$ °C.
:::

:::example Ví dụ 3 – Mạch hỗn hợp
Điện trở $2\ \Omega$ nối tiếp bộ gồm $6\ \Omega$ song song $3\ \Omega$, đặt vào $12$ V. Tìm dòng tổng và dòng từng nhánh.

**Giải.** Bộ song song có $R_{\text{ss}}=6\cdot3/(6+3)=2\ \Omega$. Tổng $R=4\ \Omega$ nên $I=3$ A. Điện áp bộ song song là $IR_{\text{ss}}=6$ V. Dòng qua nhánh $6\ \Omega$ bằng $1$ A, qua nhánh $3\ \Omega$ bằng $2$ A; tổng nhánh đúng $3$ A.
:::

:::warn Dễ nhầm
- Nối tiếp cần cùng dòng, song song cần chung hai nút.
- Độ dốc đồ thị $I(U)$ là $1/R$, còn $U(I)$ là $R$.
- Không dùng quan hệ nhiệt độ tuyến tính ở ngoài khoảng đề cho phép.
:::

## Tóm tắt nhanh

- Vật dẫn Ohm có $I=U/R$ khi điều kiện phù hợp.
- Dây đều: $R=\rho\ell/S$.
- Nối tiếp cộng điện trở; song song cộng nghịch đảo.
- Điện trở kim loại thường tăng khi nhiệt độ tăng.
