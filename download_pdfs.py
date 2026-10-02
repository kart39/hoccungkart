#!/usr/bin/env python3
"""
Tải toàn bộ PDF mà web đang trỏ tới (jsDelivr/GitHub của người khác) về thư mục files/,
rồi đổi link trong index.html (và vatly.json nếu có) thành  files/<tên-file>.pdf

Cách dùng (chạy trong thư mục chứa index.html, cần có mạng):
    python download_pdfs.py                # tải + sửa link
    python download_pdfs.py --dry-run      # chỉ liệt kê, không tải, không sửa
    python download_pdfs.py --index index.html --out files

- File đã tải rồi (đúng định dạng PDF) sẽ được bỏ qua, nên chạy lại nhiều lần được.
- Chỉ link tải THÀNH CÔNG mới bị đổi; link lỗi giữ nguyên và ghi vào failed.txt.
- Chỉ dùng thư viện chuẩn của Python 3, không cần pip install.
"""
import argparse, json, os, re, sys, time, urllib.request, urllib.parse

MB = 1024 * 1024
UA = {"User-Agent": "Mozilla/5.0 (hoccungkart-backup)"}


def load_data(index_text):
    m = re.search(r'^let data = (\{.*\});[ \t]*$', index_text, re.M)
    if not m:
        sys.exit("Không tìm thấy dòng 'let data = {...};' trong index.html")
    return json.loads(m.group(1))


def collect_urls(obj, out):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == "file" and isinstance(v, str) and v.startswith("http"):
                out.append(v)
            else:
                collect_urls(v, out)
    elif isinstance(obj, list):
        for x in obj:
            collect_urls(x, out)


def local_name(url):
    return urllib.parse.unquote(os.path.basename(urllib.parse.urlparse(url).path))


def is_pdf(path):
    try:
        with open(path, "rb") as f:
            return f.read(5) == b"%PDF-"
    except OSError:
        return False


def fetch(url, dest, tries=3):
    """Tải url về dest. Trả về None nếu OK, hoặc chuỗi lỗi."""
    err = "unknown"
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=60) as r, open(dest + ".part", "wb") as f:
                while True:
                    chunk = r.read(256 * 1024)
                    if not chunk:
                        break
                    f.write(chunk)
            if not is_pdf(dest + ".part"):
                os.remove(dest + ".part")
                return "không phải file PDF (có thể bị chặn hoặc link chết)"
            os.replace(dest + ".part", dest)
            return None
        except Exception as e:  # noqa: BLE001
            err = str(e)
            time.sleep(1.5 * (i + 1))
    if os.path.exists(dest + ".part"):
        os.remove(dest + ".part")
    return err


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--index", default="index.html")
    ap.add_argument("--out", default="files")
    ap.add_argument("--json", default="vatly.json")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()

    text = open(a.index, encoding="utf-8").read()
    urls = []
    collect_urls(load_data(text), urls)
    urls = list(dict.fromkeys(urls))  # bỏ trùng, giữ thứ tự

    names = {}
    for u in urls:
        names.setdefault(local_name(u), []).append(u)
    dup = {n: us for n, us in names.items() if len(us) > 1}
    if dup:
        sys.exit("Trùng tên file, cần xử lý tay: " + ", ".join(dup))

    print(f"Tìm thấy {len(urls)} link PDF.")
    if a.dry_run:
        for u in urls:
            print("  ", u, "->", f"{a.out}/{local_name(u)}")
        return

    os.makedirs(a.out, exist_ok=True)
    done, failed = {}, []
    for i, u in enumerate(urls, 1):
        name = local_name(u)
        dest = os.path.join(a.out, name)
        if os.path.exists(dest) and is_pdf(dest):
            print(f"[{i}/{len(urls)}] đã có  {name}")
            done[u] = name
            continue
        e = fetch(u, dest)
        if e:
            print(f"[{i}/{len(urls)}] LỖI   {name}: {e}")
            failed.append(f"{u}\t{e}")
        else:
            print(f"[{i}/{len(urls)}] ok    {name} ({os.path.getsize(dest)/MB:.1f} MB)")
            done[u] = name

    # đổi link đã tải được
    for u, name in done.items():
        text = text.replace(f'"{u}"', f'"{a.out}/{name}"')
    open(a.index, "w", encoding="utf-8").write(text)
    if os.path.exists(a.json):
        j = open(a.json, encoding="utf-8").read()
        for u, name in done.items():
            j = j.replace(f'"{u}"', f'"{a.out}/{name}"')
        open(a.json, "w", encoding="utf-8").write(j)

    sizes = [(os.path.getsize(os.path.join(a.out, n)), n) for n in done.values()]
    total = sum(s for s, _ in sizes)
    print(f"\nĐã tải/đã có: {len(done)}/{len(urls)} file, tổng {total/MB:.1f} MB")
    for s, n in sorted(sizes, reverse=True):
        if s > 50 * MB:
            tag = "VƯỢT 100 MB - GitHub từ chối" if s > 100 * MB else "trên 50 MB - jsDelivr không phục vụ, dùng GitHub Pages"
            print(f"  ! {n}: {s/MB:.1f} MB ({tag})")
    if total > 1000 * MB:
        print("  ! Tổng trên 1 GB, repo GitHub sẽ rất nặng.")
    if failed:
        open("failed.txt", "w", encoding="utf-8").write("\n".join(failed))
        print(f"{len(failed)} file lỗi, xem failed.txt (link của chúng vẫn giữ nguyên). Chạy lại script để thử lại.")


if __name__ == "__main__":
    main()
