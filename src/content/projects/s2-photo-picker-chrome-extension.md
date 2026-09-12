---
title: S2 Photo Picker Chrome Extension
summary: Tiện ích Chrome rút thao tác tạo trang chọn ảnh S2 xuống còn một nút ngay trong Google Drive.
year: 2026
status: live
role: Product showcase
stack:
  - Chrome Extension
  - Google Drive
  - Workflow automation
  - Photography tool
featured: true
draft: false
cover: /astro-blog/assets/projects/s2-photo-picker-extension/cover.svg
demoUrl: https://chromewebstore.google.com/detail/s2-photo-picker-%E2%80%93-t%E1%BA%A1o-tra/pdaohlfbacmnmlnbmakkaiaimpdocckh
repoUrl: ""
ecosystem: S2 Photo Picker
relatedProjects:
  - s2-photo-picker
---

S2 Photo Picker Chrome Extension là một lớp automation nhỏ đặt đúng vào điểm gây ma sát nhiều nhất của workflow S2: **từ thư mục Google Drive đến một trang chọn ảnh sẵn sàng gửi cho khách**.

Thay vì mở hộp thoại chia sẻ, bật “Anyone with the link”, copy URL, chuyển sang S2, dán URL rồi tạo album, extension đưa toàn bộ chuỗi thao tác đó về gần như một hành động duy nhất.

## Bài toán

Bản web của S2 đã giải quyết khá tốt khâu khách chọn ảnh và photographer lọc lại kết quả. Nhưng trước khi khách có thể bắt đầu chọn, photographer vẫn phải lặp lại một chuỗi thao tác thủ công mỗi khi có album mới.

Với một công việc xảy ra nhiều lần, những bước nhỏ như mở chia sẻ, copy link và chuyển tab bắt đầu trở thành “micro-friction” đáng kể.

![Workflow của S2 Photo Picker Chrome Extension](/astro-blog/assets/projects/s2-photo-picker-extension/workflow.svg)

## Cách extension hoạt động

Theo mô tả hiện tại của tiện ích:

1. Photographer mở thư mục ảnh trong **My Drive**.
2. Nút **“Tạo trang S2”** xuất hiện ngay trên giao diện Google Drive.
3. Khi bấm, extension kiểm tra trạng thái chia sẻ và bật quyền “Anyone with the link” nếu cần.
4. Extension tạo album S2 và hiển thị link ngay trên trang Drive.
5. Người dùng chỉ việc bấm **“Sao chép link”** rồi gửi cho khách.

Điểm đáng giá ở đây không phải một tính năng hoàn toàn mới, mà là việc **ghép những thao tác đã tồn tại thành một flow ngắn hơn**.

## Safety check thay vì automation mù

Một chi tiết mình đánh giá cao trong mô tả sản phẩm là extension không thay đổi quyền chia sẻ ngay lập tức một cách mù quáng.

Trước khi thao tác, nó đối chiếu tên thư mục đang xử lý với tiêu đề hộp thoại chia sẻ của Google Drive. Nếu phát hiện không khớp — chẳng hạn giao diện Drive thay đổi — extension dừng lại và không sửa quyền chia sẻ.

Đây là một quyết định sản phẩm hợp lý vì automation tốt không chỉ nhanh hơn; nó còn cần có **điểm dừng an toàn khi ngữ cảnh không chắc chắn**.

## Không dùng Google OAuth / Drive API

Extension hiện được mô tả là không yêu cầu người dùng đăng nhập thêm hoặc cấp quyền truy cập Google Drive qua OAuth/API.

Mọi thao tác diễn ra ngay trên tab Google Drive mà người dùng đang mở, tương tự việc tự bấm qua các bước bằng tay.

Điều này giúp flow cài đặt nhẹ hơn và tránh thêm một lớp permission onboarding chỉ để giải quyết một thao tác rất hẹp.

## Vai trò trong hệ sinh thái S2

Nếu S2 web giải quyết chuỗi:

**khách chọn ảnh → lấy danh sách → lọc file → hậu kỳ**,  

thì extension này giải quyết phần đứng ngay trước đó:

**Google Drive → tạo album S2 → nhận link → gửi khách**.

Hai sản phẩm ghép lại thành một workflow khá liền mạch cho photographer vốn đã dùng Google Drive như nơi giao proof.

## Xem thêm

- [Cài S2 Photo Picker trên Chrome Web Store](https://chromewebstore.google.com/detail/s2-photo-picker-%E2%80%93-t%E1%BA%A1o-tra/pdaohlfbacmnmlnbmakkaiaimpdocckh)
- [S2 Photo Picker web app](https://s2.io.vn/)
- [Project S2 Photo Picker](/astro-blog/projects/s2-photo-picker/)
- [Bài phân tích chi tiết về extension](/astro-blog/posts/s2-photo-picker-chrome-extension-tu-google-drive-den-trang-chon-anh-chi-voi-mot-nut/)
