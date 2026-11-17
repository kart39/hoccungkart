# Bảo toàn động lượng và va chạm

Hai xe lăn có thể đổi vận tốc rất mạnh khi va chạm nhưng tổng động lượng của chúng vẫn gần như không đổi. Điều kiện quyết định là xung lượng ngoại lực lên cả hệ trong khoảng tương tác.

## 1. Điều kiện bảo toàn

:::def Định luật bảo toàn động lượng
Nếu tổng ngoại lực lên hệ bằng không, tổng động lượng hệ được bảo toàn. Trong một quá trình ngắn, có thể áp dụng gần đúng khi tổng xung lượng ngoại lực không đáng kể.
:::

:::formula Hệ hai vật
$$m_1\vec v_1+m_2\vec v_2=m_1\vec v'_1+m_2\vec v'_2$$
:::

Các vận tốc phải được đo trong cùng hệ quy chiếu quán tính. Nội lực có thể rất lớn nhưng triệt tiêu trong phương trình tổng động lượng của hệ. Nếu chỉ ngoại lực theo một phương có tổng xung lượng bằng không, động lượng có thể bảo toàn theo phương đó dù không bảo toàn theo phương khác.

## 2. Các loại va chạm

:::def Va chạm mềm và đàn hồi
Va chạm mềm hoàn toàn làm hai vật dính nhau, có cùng vận tốc sau va chạm. Va chạm đàn hồi bảo toàn tổng động năng ngoài điều kiện bảo toàn động lượng của hệ thích hợp.
:::

Với va chạm mềm một chiều, vận tốc chung:
$$v=\frac{m_1v_1+m_2v_2}{m_1+m_2}$$
Động năng thường giảm và chuyển thành nội năng, biến dạng, âm. Trong va chạm đàn hồi một chiều, cần dùng thêm phương trình $m_1v_1^2/2+m_2v_2^2/2=m_1v_1'^2/2+m_2v_2'^2/2$. Không bảo toàn động năng cho mọi va chạm.

## 3. Chuyển động phản lực

Khi một phần hệ bị đẩy theo một chiều, phần còn lại có thể chuyển động ngược chiều để bảo toàn động lượng. Súng giật và hai người đẩy nhau là ví dụ. Trong vụ nổ, động năng có thể tăng do năng lượng nội chuyển thành cơ năng, trong khi động lượng vẫn bảo toàn nếu xung lượng ngoại lực không đáng kể.

## 4. Ví dụ minh hoạ

:::example Ví dụ 1 – Va chạm mềm ngược chiều
Vật $2$ kg đi với $3$ m/s theo chiều dương, vật $1$ kg đi ngược chiều với tốc độ $3$ m/s. Chúng dính nhau; bỏ qua xung lượng ngoại lực. Tìm vận tốc chung và phần động năng giảm.

**Giải.** Tổng động lượng đầu $2\cdot3+1(-3)=3$ kg·m/s. Vận tốc chung $v=3/(2+1)=1$ m/s. Động năng đầu $13{,}5$ J, cuối $1{,}5$ J, giảm $12$ J. Dấu dương cho biết chuyển động chung theo hướng ban đầu của vật nặng.
:::

:::example Ví dụ 2 – Va chạm đàn hồi một chiều
Vật $2$ kg chạy $3$ m/s va chạm đàn hồi với vật $1$ kg đang nghỉ. Tìm hai vận tốc sau va chạm.

**Giải.** Bảo toàn động lượng: $6=2v'_1+v'_2$. Bảo toàn động năng: $9=v_1'^2+v_2'^2/2$. Chọn nghiệm tương ứng hai vật đã tương tác và tách nhau, được $v'_1=1$ m/s, $v'_2=4$ m/s. Kiểm tra: động lượng $2+4=6$, động năng $1+8=9$ J. Nghiệm giữ nguyên trạng thái trước va chạm không mô tả kết quả va chạm đang hỏi.
:::

:::example Ví dụ 3 – Chuyển động giật lùi
Hệ ban đầu đứng yên gồm một vật phóng $2$ kg và viên đạn $0{,}01$ kg. Sau phóng, đạn có vận tốc $400$ m/s so với đất. Bỏ qua khí phụt và xung lượng ngoài theo ngang. Tính vận tốc giật lùi.

**Giải.** Tổng động lượng đầu bằng không. Theo ngang: $2V+0{,}01\cdot400=0$, suy ra $V=-2$ m/s. Dấu âm biểu thị chiều ngược đạn. Nếu tốc độ đạn được cho so với vật phóng thì cần đổi hệ quy chiếu trước, không dùng thẳng $400$ m/s như ở đây.
:::

:::warn Dễ nhầm
- Phải xét cả hệ và ngoại lực, không chỉ hai lực va chạm.
- Va chạm mềm không bảo toàn động năng.
- Chọn vận tốc có dấu trước khi cộng động lượng.
:::

## Tóm tắt nhanh

- Xung lượng ngoại lực bằng không: tổng động lượng không đổi.
- Va chạm mềm: hai vật có chung vận tốc cuối.
- Va chạm đàn hồi có thêm bảo toàn động năng.
- Phản lực và vụ nổ cần xét toàn hệ trong cùng hệ quy chiếu.
