---
title: "S2 Photo Picker: Chọn và lọc ảnh cưới nhanh từ Google Drive"
author: KTXT
pubDatetime: 2026-09-12T08:00:00+07:00
modDatetime: 2026-09-12T08:30:00+07:00
featured: true
draft: false
ogImage: /astro-blog/assets/projects/s2-photo-picker/cover.svg
tags:
  - product
  - photography
  - web-tool
  - vietnam
description: "S2 Photo Picker là công cụ web giúp photographer tạo trang cho khách chọn ảnh trực tiếp từ Google Drive, nhận kết quả và lọc ảnh cho công đoạn tiếp theo mà không cần cài đặt phần mềm."
---

![S2 Photo Picker — chọn và lọc ảnh nhanh từ Google Drive](/astro-blog/assets/projects/s2-photo-picker/cover.svg)

Có một công đoạn khá nhỏ trong quy trình làm ảnh nhưng lại dễ trở thành việc mất thời gian cho cả photographer lẫn khách hàng: **chọn ảnh sau buổi chụp**.

Gửi hàng trăm hoặc hàng nghìn file, chờ khách ghi lại tên ảnh, nhận về một danh sách dài rồi tự tìm từng file để copy sang thư mục khác — mỗi bước đều đơn giản, nhưng cộng lại thì khá mệt.

[S2 Photo Picker](https://s2.io.vn/) được tạo ra để rút gọn chính đoạn workflow này.

## S2 Photo Picker là gì?

S2 Photo Picker là một bộ công cụ chạy trực tiếp trên trình duyệt, tập trung vào hai việc:

- **Chọn ảnh:** tạo một trang để khách hàng xem và đánh dấu những ảnh họ thích.
- **Lọc ảnh:** dùng danh sách ảnh đã chọn để tìm, chép hoặc chuyển các file tương ứng trên máy tính.

Điểm đáng chú ý là photographer **không cần upload ảnh lên thêm một nền tảng mới**. S2 sử dụng trực tiếp thư mục ảnh đã chia sẻ trên Google Drive để tạo trang chọn ảnh.

Điều đó làm cho sản phẩm khá phù hợp với những workflow vốn đã dùng Google Drive để giao ảnh proof cho khách.

![Workflow của S2 Photo Picker](/astro-blog/assets/projects/s2-photo-picker/workflow.svg)

## Từ một thư mục Google Drive đến trang chọn ảnh

Quy trình sử dụng khá ngắn.

Đầu tiên, photographer mở trang [tạo album](https://s2.io.vn/create), dán link thư mục Google Drive đã chia sẻ và tạo một trang chọn ảnh riêng cho khách. Theo thông tin hiện được hiển thị trên S2, công cụ có thể hoạt động với thư mục chứa tới khoảng **2.000 ảnh**.

Sau đó chỉ cần gửi đường dẫn album cho khách hàng.

Thay vì phải ghi tên file vào tin nhắn hoặc spreadsheet, khách có thể xem ảnh và **thả tim những tấm muốn chọn** ngay trên giao diện web.

![Minh họa giao diện chọn ảnh trên S2 Photo Picker](https://s2.io.vn/about/images/iphone-app-470.webp)

Khi khách hoàn tất, photographer lấy lại danh sách kết quả để dùng cho bước tiếp theo.

## Phần mình thích nhất: không dừng ở việc “ghi nhận ảnh đã chọn”

Nhiều cách chọn ảnh giải quyết được phần giao tiếp với khách nhưng vẫn để lại một công việc khá thủ công ở cuối: tìm lại các file tương ứng trong thư mục gốc.

S2 có thêm công cụ [Lọc ảnh](https://s2.io.vn/copy) để xử lý đoạn này.

Workflow có thể hiểu đơn giản như sau:

1. Chọn thư mục ảnh nguồn trên máy tính.
2. Chọn thư mục đích.
3. Dán danh sách tên ảnh mà khách đã chọn.
4. Để S2 tìm những file khớp.
5. Chép hoặc chuyển chúng sang thư mục đích.

Nhờ vậy, kết quả chọn ảnh của khách không chỉ nằm ở một danh sách để tham khảo mà có thể đi tiếp ngay vào workflow hậu kỳ.

![Nút lấy kết quả ảnh khách đã chọn trên S2 Photo Picker](https://s2.io.vn/about/images/copy-result-button.png)

Công cụ lọc file này hiện được S2 khuyến nghị sử dụng trên **Chrome hoặc Edge trên máy tính**.

## Một sản phẩm nhỏ nhưng giải quyết đúng một “nút thắt” thực tế

Điều mình thấy thú vị ở S2 không phải là nó cố trở thành một nền tảng quản lý studio lớn.

Nó tập trung vào một chuỗi thao tác rất cụ thể:

**Google Drive → khách chọn ảnh → lấy danh sách → lọc file → hậu kỳ tiếp.**

Đây là kiểu sản phẩm mình đánh giá cao: phạm vi không quá rộng, nhưng mỗi tính năng đều gắn trực tiếp với một bước trong công việc thực tế.

Giao diện cũng đi theo hướng tối giản. Người dùng không cần tạo một project phức tạp, cấu hình gallery hay học một workflow mới trước khi sử dụng. Với trường hợp cơ bản, chỉ cần một link Google Drive là có thể bắt đầu.

## Không chỉ dành cho ảnh cưới

Tên và nội dung của S2 tập trung khá nhiều vào ảnh cưới, nhưng bài toán mà sản phẩm giải quyết thực tế rộng hơn.

Bất kỳ tình huống nào có mô hình **người chụp gửi một lượng lớn ảnh để người khác chọn một phần trong số đó** đều có thể phù hợp, chẳng hạn:

- ảnh sự kiện;
- ảnh kỷ yếu;
- ảnh gia đình;
- ảnh chân dung;
- ảnh sản phẩm cần khách duyệt;
- các bộ ảnh cần chọn shortlist trước khi retouch.

Miễn là ảnh đang được chia sẻ qua Google Drive, S2 có thể trở thành một lớp giao diện đơn giản nằm giữa thư mục ảnh và khách hàng.

## Dấu hiệu cho thấy một tiện ích nhỏ vẫn có thể tạo ra giá trị lớn

Ở thời điểm mình xem sản phẩm, trang S2 hiển thị thống kê rằng trong **năm 2025 đã có 2.477.474 tấm ảnh được chọn thông qua tiện ích**.

Con số này khá thú vị vì nó cho thấy một sản phẩm không nhất thiết phải có hàng chục module mới tạo được giá trị. Đôi khi chỉ cần giảm vài phút thao tác ở một công việc được lặp lại rất nhiều lần cũng đã đủ tạo ra tác động đáng kể.

S2 cũng cung cấp các tính năng chọn và lọc ảnh cơ bản miễn phí và chạy trực tiếp trên web, nên rào cản để thử gần như rất thấp.

## Ai nên thử S2 Photo Picker?

Nếu bạn là photographer đang có quy trình kiểu:

> upload ảnh lên Google Drive → gửi khách → khách nhắn lại tên file → tự lọc từng ảnh

thì S2 Photo Picker là một công cụ đáng thử.

Nó không thay thế Google Drive, Lightroom hay phần mềm quản lý studio. Thay vào đó, nó **kết nối những công cụ đó bằng một workflow chọn ảnh gọn hơn**.

Đó cũng là điểm mình thích ở sản phẩm này: không cố thay đổi toàn bộ cách bạn làm việc, chỉ loại bỏ phần thao tác thừa nằm giữa hai công đoạn.

Bạn có thể dùng thử tại [s2.io.vn](https://s2.io.vn/).
