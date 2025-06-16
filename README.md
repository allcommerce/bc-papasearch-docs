# BigCommerce Semantic Search & Filters - Tài liệu hướng dẫn

Thư mục này chứa tài liệu hướng dẫn đầy đủ cho ứng dụng BigCommerce Semantic Search & Filters, được xây dựng bằng [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## 🚀 Bắt đầu nhanh

### Yêu cầu hệ thống

- Python 3.8 trở lên
- pip (trình quản lý gói Python)

### Cài đặt

1. **Cài đặt dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

   Hoặc sử dụng Makefile:
   ```bash
   make install
   ```

2. **Khởi động development server:**
   ```bash
   make serve
   ```

   Lệnh này sẽ tự động tải cài đặt môi trường development từ `env.dev`.

3. **Mở trình duyệt:**
   Truy cập `http://127.0.0.1:8000` để xem tài liệu.

## 📁 Cấu trúc dự án

```
user-guide/
├── mkdocs.yml              # Cấu hình MkDocs
├── requirements.txt        # Dependencies Python
├── Makefile               # Các lệnh development
├── docs/                  # Các file tài liệu nguồn
│   ├── index.md          # Trang chủ
│   ├── 01-installation-setup.md
│   ├── 02-dashboard.md
│   ├── ...               # Các trang tài liệu khác
│   ├── assets/           # Tài nguyên tĩnh
│   │   ├── stylesheets/  # CSS tùy chỉnh
│   │   ├── javascripts/  # JavaScript tùy chỉnh
│   │   └── images/       # Hình ảnh và screenshots
│   └── includes/         # Nội dung có thể tái sử dụng
└── site/                 # Site được tạo ra (git-ignored)
```

## 🛠️ Phát triển

### Cấu hình môi trường

Dự án hiện sử dụng một file `mkdocs.yml` duy nhất với các biến môi trường cho các chế độ khác nhau:

- **`env.dev`** - Môi trường phát triển (build nhanh, ít plugins)
- **`env.prod`** - Môi trường production (build tối ưu, đầy đủ tính năng)

### Các lệnh có sẵn

| Lệnh | Mô tả |
|------|-------|
| `make help` | Hiển thị các lệnh có sẵn |
| `make install` | Cài đặt dependencies |
| `make serve` | Khởi động development server (môi trường dev) |
| `make serve-dev` | Khởi động development server một cách rõ ràng |
| `make build` | Build tài liệu (môi trường dev) |
| `make build-prod` | Build tài liệu (môi trường production) |
| `make clean` | Xóa các file build |
| `make deploy` | Deploy lên GitHub Pages (production build) |
| `make lint` | Kiểm tra lỗi (cài đặt production) |
| `make setup` | Thiết lập nhanh với thông tin hướng dẫn |

### Viết tài liệu

1. **Tạo trang mới:** Thêm các file `.md` trong thư mục `docs/`
2. **Cập nhật navigation:** Chỉnh sửa phần `nav` trong `mkdocs.yml`
3. **Thêm hình ảnh:** Đặt hình ảnh trong `docs/assets/images/`
4. **Sử dụng admonitions:** Cải thiện nội dung với tips, warnings, v.v.

Ví dụ admonition:
```markdown
!!! tip "Mẹo hay"
    Đây là một mẹo hữu ích cho người dùng.
```

### Styling

- **CSS tùy chỉnh:** Chỉnh sửa `docs/assets/stylesheets/extra.css`
- **JavaScript tùy chỉnh:** Chỉnh sửa `docs/assets/javascripts/extra.js`
- **Cấu hình theme:** Sửa đổi phần `theme` trong `mkdocs.yml`

## 🎨 Tính năng

### Tính năng tích hợp sẵn

- **🔍 Tìm kiếm:** Tìm kiếm toàn văn bản trên toàn bộ tài liệu
- **🌙 Chế độ tối:** Tự động chuyển đổi chế độ tối/sáng
- **📱 Responsive:** Thiết kế thân thiện với mobile
- **⚡ Nhanh:** Tối ưu hóa hiệu suất
- **🔗 Navigation:** Điều hướng trực quan với breadcrumbs
- **📊 Analytics:** Tích hợp Google Analytics (khi được cấu hình)

### Cải tiến tùy chỉnh

- **📋 Copy Code:** Click để copy các khối code
- **🖼️ Image Zoom:** Click hình ảnh để zoom
- **📈 Reading Progress:** Thanh tiến trình ở phía trên
- **⌨️ Keyboard Shortcuts:** Ctrl/Cmd+K để tìm kiếm
- **🖨️ Print Support:** Styling thân thiện với in ấn
- **👍 Feedback:** Widget phản hồi trang

## 🚀 Triển khai

### GitHub Pages (Khuyến nghị)

1. **Cấu hình repository:** Đảm bảo GitHub Pages được bật
2. **Deploy:**
   ```bash
   make deploy
   ```

### Triển khai thủ công

1. **Build site:**
   ```bash
   make build
   ```

2. **Upload thư mục `site/`** lên web server của bạn

### Triển khai tự động

Thiết lập GitHub Actions để tự động deploy khi push lên nhánh main.

## 📝 Hướng dẫn nội dung

### Phong cách viết

- **Rõ ràng và súc tích:** Sử dụng ngôn ngữ đơn giản, trực tiếp
- **Từng bước:** Chia nhỏ các tác vụ phức tạp thành các bước được đánh số
- **Screenshots:** Bao gồm screenshots liên quan với mô tả
- **Ví dụ:** Cung cấp ví dụ thực tế và các trường hợp sử dụng

### Tính năng Markdown

- **Admonitions:** Sử dụng cho tips, warnings và ghi chú quan trọng
- **Code blocks:** Bao gồm syntax highlighting
- **Tables:** Cho dữ liệu có cấu trúc
- **Links:** Liên kết nội bộ và bên ngoài
- **Images:** Với alt text và captions

### Best practices SEO

- **Tiêu đề mô tả:** Tiêu đề trang rõ ràng, giàu từ khóa
- **Meta descriptions:** Được cấu hình trong `mkdocs.yml`
- **Cấu trúc heading:** Thứ bậc H1-H6 phù hợp
- **Internal linking:** Liên kết giữa các trang liên quan

## 🔧 Cấu hình

### Các file cấu hình chính

- **`mkdocs.yml`:** File cấu hình thống nhất cho mọi môi trường
- **`env.dev`:** Biến môi trường development
- **`env.prod`:** Biến môi trường production
- **`requirements.txt`:** Dependencies Python
- **`docs/assets/stylesheets/extra.css`:** Styling tùy chỉnh
- **`docs/assets/javascripts/extra.js`:** Chức năng tùy chỉnh

### Biến môi trường

- **`GOOGLE_ANALYTICS_KEY`:** Cho Google Analytics tracking

## 🐛 Khắc phục sự cố

### Các vấn đề thường gặp

1. **Port đã được sử dụng:**
   ```bash
   mkdocs serve --dev-addr=127.0.0.1:8001
   ```

2. **Thiếu dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Lỗi build:**
   ```bash
   make lint
   ```

### Nhận trợ giúp

- **Tài liệu MkDocs:** [mkdocs.org](https://www.mkdocs.org/)
- **Material Theme:** [squidfunk.github.io/mkdocs-material](https://squidfunk.github.io/mkdocs-material/)
- **Issues:** Báo cáo vấn đề trong repository chính

## 📄 Giấy phép

Tài liệu này là một phần của ứng dụng BigCommerce Semantic Search & Filters.

---

**Chúc viết tài liệu vui vẻ!** 📚✨