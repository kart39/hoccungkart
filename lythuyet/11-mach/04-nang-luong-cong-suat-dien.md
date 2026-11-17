# Năng lượng điện, công suất điện và hiệu suất nguồn

Hai thiết bị chạy trong cùng thời gian có thể tiêu thụ điện năng khác nhau vì công suất khác nhau. Khi xét cả nguồn, cần tính thêm phần năng lượng chuyển thành nhiệt bên trong nguồn.

## 1. Điện năng và công suất

:::formula Đoạn mạch có điện áp và dòng không đổi
$$A=UIt,\qquad P=UI$$
:::

Điện năng tính bằng joule, công suất bằng watt. Với đoạn mạch thuần trở, toàn bộ điện năng chuyển thành nhiệt theo định luật Joule–Lenz:
$$Q=I^2Rt=\frac{U^2}{R}t,\qquad P=I^2R=\frac{U^2}{R}$$
Hai dạng có $R$ chỉ dùng trực tiếp khi đoạn mạch thỏa quan hệ $U=IR$. Đối với động cơ, không thể coi toàn bộ điện năng vào đều là nhiệt hao phí; một phần được chuyển thành cơ năng.

Đơn vị kilowatt giờ là đơn vị năng lượng: $1$ kWh bằng $3{,}6\cdot10^6$ J. Thiết bị ghi công suất định mức thường đạt giá trị đó khi hoạt động đúng điện áp và điều kiện định mức.

## 2. Nguồn điện và hiệu suất

Xét nguồn phát điện có suất điện động $\mathcal E$, điện trở trong $r$, nối tải $R$.

:::formula Cân bằng công suất
$$P_{\text{nguồn}}=\mathcal EI=UI+I^2r$$
$$H=\frac{UI}{\mathcal EI}=\frac U{\mathcal E}=\frac{R}{R+r}$$
:::

Hiệu suất nguồn biểu thị phần công suất toàn phần truyền ra mạch ngoài. Công suất mạch ngoài có thể còn chia tiếp thành phần hữu ích và hao phí trong thiết bị. Muốn tính hiệu suất toàn hệ phải xác định đúng đầu vào và đầu ra được quan tâm.

## 3. Công suất tải lớn nhất

Với $\mathcal E,r>0$ cố định và tải thuần trở thay đổi:
$$P_R=\frac{\mathcal E^2R}{(R+r)^2}\le\frac{\mathcal E^2}{4r}$$
Dấu bằng khi $R=r$, từ bất đẳng thức $(R+r)^2\ge4Rr$. Khi đó hiệu suất nguồn bằng $50\%$. Cực đại công suất tải không đồng nghĩa cực đại hiệu suất; tăng $R$ làm hiệu suất tăng nhưng dòng có thể rất nhỏ.

## 4. Ví dụ minh hoạ

:::example Ví dụ 1 – Điện năng tiêu thụ
Một thiết bị dùng công suất không đổi $120$ W trong $2{,}5$ giờ. Tính điện năng theo kWh và joule.

**Giải.** Đổi công suất thành $0{,}12$ kW. Điện năng $A=0{,}12\cdot2{,}5=0{,}3$ kWh. Đổi sang joule: $A=0{,}3\cdot3{,}6\cdot10^6=1{,}08\cdot10^6$ J. Không dùng kW/h làm đơn vị điện năng.
:::

:::example Ví dụ 2 – Công suất và hao phí nguồn
Nguồn $12$ V, $r=1\ \Omega$, tải $R=5\ \Omega$. Tính công suất nguồn, công suất tải và hiệu suất.

**Giải.** $I=12/6=2$ A. Nguồn cung cấp $P_{\text{nguồn}}=24$ W, tải nhận $P_R=I^2R=20$ W. Hao phí trong nguồn $I^2r=4$ W; tổng đúng $24$ W. Hiệu suất $H=20/24=5/6\approx83{,}3\%$.
:::

:::example Ví dụ 3 – Chọn tải để công suất lớn nhất
Nguồn có $\mathcal E=12$ V, $r=2\ \Omega$. Tải thuần trở nên bằng bao nhiêu để nhận công suất lớn nhất? Tính công suất đó.

**Giải.** Điều kiện cực đại là $R=r=2\ \Omega$. Khi ấy $I=12/4=3$ A và $P_{\max}=I^2R=18$ W, cũng bằng $\mathcal E^2/(4r)$. Hiệu suất chỉ $50\%$ vì nguồn cũng tỏa nhiệt $18$ W.
:::

:::warn Dễ nhầm
- $UI$ là công suất mạch ngoài; $\mathcal EI$ là công suất toàn phần của nguồn.
- Điện năng khác công suất, kWh khác kW.
- Công suất tải lớn nhất không phải trạng thái ít hao phí nhất.
:::

## Tóm tắt nhanh

- $A=UIt$, $P=UI$ khi điện áp và dòng không đổi.
- Thuần trở: $P=I^2R=U^2/R$.
- Nguồn phát điện: $H=U/\mathcal E$.
- Với nguồn thực cố định, công suất tải cực đại tại $R=r$.
