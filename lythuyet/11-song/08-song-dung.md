# Sóng dừng

Một dây đàn có thể rung với những điểm gần như đứng yên xen giữa các đoạn rung mạnh. Hình dạng ổn định ấy được tạo bởi hai sóng truyền ngược chiều giao thoa với nhau.

## 1. Nút, bụng và cơ chế

:::def Sóng dừng
Sóng dừng là dạng giao thoa của hai sóng cùng tần số, cùng bước sóng truyền ngược chiều, tạo các nút và bụng cố định trong không gian. Với hai sóng thành phần bằng biên độ, nút đứng yên và bụng có biên độ cực đại.
:::

Sóng tới phản xạ ở đầu cố định đổi dấu li độ, nên đầu đó là nút. Ở đầu tự do lí tưởng, phản xạ không đổi dấu li độ và đầu đó là bụng. Một nguồn rung gắn vào đầu dây chỉ được coi là nút gần đúng khi biên độ đầu ấy rất nhỏ so với biên độ bụng và đề cho phép.

:::formula Khoảng cách đặc biệt
Hai nút liên tiếp hoặc hai bụng liên tiếp cách nhau:
$$d=\frac\lambda2$$
Một nút đến bụng kề nó cách nhau:
$$d'=\frac\lambda4$$
:::

Các điểm trong cùng một bó sóng dao động cùng pha; hai bó kề nhau dao động ngược pha. Biên độ thay đổi theo vị trí. Trong mô hình dừng lí tưởng của hai sóng bằng nhau, công suất truyền năng lượng trung bình theo dây bằng không, dù từng phần tử vẫn trao đổi năng lượng.

## 2. Điều kiện ở hai đầu

:::formula Hai đầu cố định
$$L=n\frac\lambda2,\qquad f_n=\frac{nv}{2L},\qquad n=1,2,3,\ldots$$
:::

Có $n$ bụng và $n+1$ nút, tính cả hai đầu. Tần số cơ bản $f_1=v/(2L)$; các tần số cho phép là bội nguyên của nó.

:::formula Một đầu cố định, một đầu tự do
$$L=(2n+1)\frac\lambda4,\qquad f_n=\frac{(2n+1)v}{4L},\qquad n=0,1,2,\ldots$$
:::

Ở trường hợp này có $n+1$ nút và $n+1$ bụng, tính đầu nút và đầu bụng. Các tần số cho phép là những bội lẻ của tần số cơ bản $v/(4L)$.

## 3. Ví dụ minh hoạ

:::example Ví dụ 1 – Khoảng nút
Hai nút liên tiếp trên dây cách nhau $20$ cm. Sóng có tần số $50$ Hz. Tính bước sóng và tốc độ truyền.

**Giải.** Khoảng nút bằng nửa bước sóng, nên $\lambda=40$ cm, bằng $0{,}4$ m. Tốc độ truyền $v=\lambda f=20$ m/s. Không dùng $20$ cm làm cả bước sóng.
:::

:::example Ví dụ 2 – Số nút và bụng
Dây dài $1{,}2$ m, hai đầu cố định, tốc độ truyền $48$ m/s, tần số $60$ Hz. Tìm số nút và bụng.

**Giải.** $\lambda=48/60=0{,}8$ m. Số nửa bước sóng $n=2L/\lambda=3$. Vậy có $3$ bụng, $4$ nút tính cả hai đầu. Nếu chỉ hỏi nút bên trong thì còn $2$ nút.
:::

:::example Ví dụ 3 – Đầu tự do
Dây dài $0{,}75$ m có một đầu cố định, một đầu tự do, tốc độ truyền $100$ m/s. Tìm hai tần số nhỏ nhất cho sóng dừng.

**Giải.** Tần số cơ bản $f_0=100/(4\cdot0{,}75)=100/3$ Hz. Tần số kế tiếp là bội lẻ thứ hai: $3f_0=100$ Hz. Không lấy $2f_0$ vì đầu cuối sẽ không thỏa điều kiện bụng.
:::

:::example Ví dụ 4 – Suy ra tốc độ
Dây hai đầu cố định dài $1$ m có hai tần số cộng hưởng liên tiếp là $40$ Hz và $60$ Hz. Tính tốc độ sóng.

**Giải.** Hai tần số liên tiếp cách nhau $v/(2L)$, bằng $20$ Hz. Vì vậy $v=2L\cdot20=40$ m/s. Tần số $40$ Hz là họa âm thứ hai, không phải tần số cơ bản.
:::

:::warn Dễ nhầm
- Hai nút bất kì không nhất thiết cách $\lambda/2$.
- Nút và bụng kề nhau cách $\lambda/4$.
- Hai dạng điều kiện biên có dãy tần số khác nhau.
:::

## Tóm tắt nhanh

- Sóng dừng hình thành từ hai sóng truyền ngược chiều.
- Hai đầu cố định: chiều dài nguyên lần nửa bước sóng.
- Một đầu tự do: chiều dài lẻ lần một phần tư bước sóng.
- Đếm nút cần nói rõ có tính các đầu dây hay không.
