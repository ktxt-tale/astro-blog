---
title: S2 Photo Picker
summary: Công cụ web giúp thợ ảnh tạo trang cho khách chọn ảnh trực tiếp từ Google Drive và lọc kết quả nhanh cho các bước hậu kỳ tiếp theo.
year: 2026
status: live
role: Product showcase
stack:
  - Web app
  - Google Drive
  - Photography workflow
  - Utility tool
featured: true
draft: false
cover: /astro-blog/assets/projects/s2-photo-picker/cover.svg
demoUrl: https://s2.io.vn/
repoUrl: ""
---

![S2 Photo Picker](/astro-blog/assets/projects/s2-photo-picker/cover.svg)

S2 Photo Picker là một sản phẩm tập trung vào một đoạn workflow rất cụ thể nhưng dễ gây mất thời gian trong công việc nhiếp ảnh: **khách chọn ảnh và thợ ảnh lấy đúng các file đã chọn để tiếp tục hậu kỳ**.

## Bài toán

Khi một buổi chụp tạo ra hàng trăm hoặc hàng nghìn ảnh, việc gửi ảnh để khách chọn thường kéo theo nhiều thao tác thủ công: khách ghi lại tên file, photographer tổng hợp danh sách, rồi tiếp tục dò từng ảnh trong thư mục gốc.

S2 giải quyết đoạn workflow này bằng cách tận dụng thư mục Google Drive đã có sẵn, thay vì bắt người dùng upload thêm một bản ảnh lên hệ thống khác.

![Workflow chọn và lọc ảnh của S2](/astro-blog/assets/projects/s2-photo-picker/workflow.svg)

## Cách sản phẩm hoạt động

1. Photographer dán link thư mục Google Drive để tạo một trang chọn ảnh.
2. Khách hàng mở trang được chia sẻ và thả tim những ảnh muốn chọn.
3. Photographer lấy lại danh sách tên file khách đã chọn.
4. Công cụ lọc ảnh dùng danh sách này để tìm, chép hoặc chuyển các file tương ứng sang thư mục đích.

![Minh họa giao diện chọn ảnh trên S2](https://s2.io.vn/about/images/iphone-app-470.webp)

Theo thông tin hiện được hiển thị trên sản phẩm, phần tạo trang chọn ảnh hoạt động mượt với thư mục tới khoảng **2.000 ảnh**. Công cụ lọc file được khuyến nghị dùng trên Chrome hoặc Edge desktop.

## Điều đáng chú ý

Điểm mạnh của S2 không nằm ở việc cố trở thành một hệ thống quản lý studio toàn diện. Nó chỉ tập trung làm gọn một đoạn quy trình vốn có nhiều thao tác lặp lại.

Đó là kiểu utility product mình đánh giá cao: **phạm vi nhỏ, giá trị rõ, ít yêu cầu người dùng thay đổi cách làm việc hiện tại**.

![Nút lấy kết quả ảnh khách đã chọn](https://s2.io.vn/about/images/copy-result-button.png)

Trang S2 cũng đang hiển thị thống kê rằng trong năm 2025 đã có hơn **2,47 triệu tấm ảnh** được chọn thông qua tiện ích — một tín hiệu thú vị cho thấy bài toán này có tần suất sử dụng thực tế đáng kể.

## Mở rộng workflow bằng Chrome Extension

S2 còn có một Chrome Extension để rút ngắn bước tạo album từ Google Drive. Thay vì bật chia sẻ, copy link, mở S2 và dán lại bằng tay, photographer có thể tạo trang S2 ngay từ thư mục Drive đang mở.

Xem [S2 Photo Picker Chrome Extension](/astro-blog/projects/s2-photo-picker-chrome-extension/) để xem cách extension tự động hóa đoạn đầu của workflow.

## Xem thêm

Mình đã viết một bài phân tích chi tiết hơn về workflow và trải nghiệm của sản phẩm tại [bài giới thiệu S2 Photo Picker](/astro-blog/posts/s2-photo-picker-chon-loc-anh-cuoi-nhanh-tu-google-drive/).
