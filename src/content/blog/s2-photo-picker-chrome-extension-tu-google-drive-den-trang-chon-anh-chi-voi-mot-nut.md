---
title: "S2 Photo Picker Chrome Extension: Từ Google Drive đến trang chọn ảnh chỉ với một nút"
author: KTXT
pubDatetime: 2026-09-12T08:30:00+07:00
featured: true
draft: false
ogImage: /astro-blog/assets/projects/s2-photo-picker-extension/cover.svg
tags:
  - product
  - chrome-extension
  - photography
  - workflow
description: "S2 Photo Picker Chrome Extension tự động hóa bước chia sẻ thư mục Google Drive và tạo album S2, giúp photographer rút một chuỗi thao tác lặp lại xuống gần như chỉ còn một nút."
---

![S2 Photo Picker Chrome Extension](/astro-blog/assets/projects/s2-photo-picker-extension/cover.svg)

Có một kiểu tối ưu sản phẩm mình rất thích: **không thêm thêm một đống tính năng mới, mà xóa bớt những thao tác người dùng phải làm mỗi ngày**.

S2 Photo Picker Chrome Extension là đúng kiểu sản phẩm đó.

Bản web S2 vốn đã giúp photographer tạo trang để khách chọn ảnh từ Google Drive rồi lọc kết quả cho bước hậu kỳ. Nhưng trước khi khách có được link album, photographer vẫn phải lặp lại vài bước khá cơ học: mở quyền chia sẻ, bật “Anyone with the link”, copy URL, mở S2, dán link rồi tạo trang.

Extension mới đưa chuỗi này về gần như chỉ còn **một nút ngay trong Google Drive**.

## Table of contents

## Extension này làm gì?

Theo mô tả hiện tại của tiện ích, S2 Photo Picker Chrome Extension tự động hóa hai nhóm thao tác mà photographer thường phải làm thủ công:

- bật chia sẻ thư mục Google Drive ở chế độ **“Anyone with the link”**;
- lấy link thư mục, chuyển sang S2 và tạo trang chọn ảnh.

Thay vì làm từng bước, người dùng chỉ cần mở đúng thư mục ảnh trong **My Drive**, sau đó bấm nút **“Tạo trang S2”** xuất hiện trên giao diện Drive.

Khi xử lý xong, extension hiển thị link album ngay tại chỗ để người dùng sao chép và gửi cho khách.

![Workflow một nút của S2 Photo Picker Extension](/astro-blog/assets/projects/s2-photo-picker-extension/workflow.svg)

## Giá trị không nằm ở số lượng tính năng

Nếu nhìn riêng từng bước, chẳng có thao tác nào quá khó:

1. mở thư mục Drive;
2. mở phần chia sẻ;
3. bật quyền truy cập bằng link;
4. copy URL;
5. mở `s2.io.vn/create`;
6. dán URL;
7. tạo trang;
8. copy link album mới.

Nhưng đây chính là kiểu công việc mà một utility product có thể tạo giá trị rất rõ.

Một photographer chỉ làm thao tác đó một lần có thể không thấy vấn đề. Nhưng nếu một studio hoặc freelancer tạo nhiều album mỗi tuần, những lần chuyển tab và copy/paste nhỏ này bắt đầu cộng dồn thành một workflow lặp lại khá khó chịu.

Extension không thay đổi mục đích của công việc. Nó chỉ **nén lại số bước cần để đạt tới cùng kết quả**.

## Thiết kế trực tiếp trong ngữ cảnh làm việc

Điểm quan trọng nhất theo mình là extension đặt action đúng tại nơi người dùng đang làm việc: **Google Drive**.

Thay vì yêu cầu photographer phải nhớ “giờ sang S2 để tạo album”, nút tạo S2 xuất hiện ngay trong thư mục đang mở.

Đây là một pattern UX rất mạnh cho các extension: nếu sản phẩm có thể xuất hiện đúng lúc người dùng cần hành động, nó giảm được cả thao tác lẫn tải nhận thức.

Người dùng không còn phải tự nối hai hệ thống trong đầu:

> “Mình đang ở Drive → phải lấy link → giờ mở S2 → dán link → tạo album.”

Thay vào đó, flow trở thành:

> “Mình đang ở đúng folder → Tạo trang S2.”

## Automation nhưng vẫn có điểm dừng an toàn

Một điểm đáng chú ý trong mô tả của extension là phần kiểm tra an toàn trước khi thay đổi quyền chia sẻ.

Trước khi sửa permission, extension đối chiếu tên thư mục đang thao tác với tiêu đề trong hộp thoại chia sẻ của Google Drive. Nếu phát hiện không trùng khớp — ví dụ giao diện Drive vừa thay đổi khiến script không còn chắc chắn đang thao tác đúng folder — extension sẽ dừng lại thay vì tiếp tục.

Mình đánh giá cao chi tiết này vì automation tốt không nên chỉ có “happy path”.

Đặc biệt với một hành động liên quan tới quyền chia sẻ dữ liệu, nguyên tắc hợp lý là:

**không chắc chắn → không tự động thay đổi**.

Nếu automation dừng, người dùng vẫn có thể quay lại cách thủ công: tự bật chia sẻ và dán link vào S2 như trước.

## Không cần Google OAuth hay Drive API

Theo thông tin hiện được công bố cho extension, tiện ích không dùng Google OAuth hoặc Drive API và không yêu cầu người dùng cấp quyền truy cập tài khoản Google theo flow đăng nhập riêng.

Thay vào đó, thao tác xảy ra ngay trên tab Google Drive người dùng đang mở, tương tự việc tự tương tác với giao diện bằng tay.

Đây là một trade-off sản phẩm khá thú vị.

Với một extension chỉ muốn tự động hóa một flow UI rất cụ thể, tránh một permission flow lớn giúp onboarding nhẹ hơn đáng kể. Người dùng cài extension để tiết kiệm thao tác, chứ không phải để bắt đầu thêm một quy trình kết nối tài khoản mới.

Tất nhiên, cách tiếp cận dựa vào giao diện web cũng có một rủi ro khác: **Google Drive có thể thay đổi UI**. Chính vì vậy, safety check ở phần trên trở nên quan trọng hơn.

## Nó bổ sung gì cho S2 Photo Picker?

Bản web S2 Photo Picker tập trung vào đoạn workflow phía sau:

**Google Drive → trang chọn ảnh → khách thả tim → lấy danh sách → lọc file → hậu kỳ.**

Extension tập trung vào đúng đoạn đầu tiên:

**Google Drive → tạo trang S2**.

Hai phần kết hợp với nhau khiến S2 từ một web utility trở thành một workflow tương đối liền mạch hơn.

Photographer vẫn lưu và giao proof bằng Google Drive như bình thường. Extension chỉ đứng ở giữa để biến folder đó thành album chọn ảnh nhanh hơn.

Đây cũng là lý do mình coi extension này là một sản phẩm riêng đáng đưa vào portfolio, chứ không chỉ là “một tính năng phụ của S2”.

Nó có:

- một bài toán riêng;
- một điểm tích hợp riêng;
- một cơ chế interaction riêng;
- rủi ro kỹ thuật riêng;
- và một giá trị rất cụ thể: **giảm friction của một workflow lặp lại**.

## Ai sẽ thấy extension này hữu ích nhất?

Extension hợp nhất với photographer hoặc studio có workflow kiểu:

- ảnh nằm trong Google Drive;
- mỗi khách có một folder riêng;
- thường xuyên tạo album S2 mới;
- muốn gửi link chọn ảnh càng nhanh càng tốt.

Nếu bạn chỉ tạo album rất hiếm khi, vài bước thủ công có thể không đáng kể.

Nhưng với những workflow lặp nhiều lần, đây là đúng loại công cụ mà sau khi quen dùng, bạn sẽ không muốn quay lại thao tác cũ.

## Một bài học product nhỏ từ extension này

Điểm mình rút ra không phải “mọi sản phẩm đều nên làm extension”.

Bài học thú vị hơn là: **đôi khi sản phẩm đã giải quyết đúng bài toán, nhưng vẫn còn friction ở đoạn đưa người dùng vào sản phẩm**.

S2 web giải quyết được bài toán chọn và lọc ảnh. Extension giải quyết việc bắt đầu flow đó nhanh hơn.

Đó là một bước phát triển khá tự nhiên của product ecosystem:

1. giải quyết core problem;
2. quan sát đoạn nào người dùng vẫn làm thủ công;
3. tự động hóa đúng đoạn đó;
4. không làm hệ thống phức tạp hơn mức cần thiết.

Nếu muốn thử trực tiếp, bạn có thể cài [S2 Photo Picker – Tạo trang chọn ảnh nhanh trên Chrome Web Store](https://chromewebstore.google.com/detail/s2-photo-picker-%E2%80%93-t%E1%BA%A1o-tra/pdaohlfbacmnmlnbmakkaiaimpdocckh).

Bạn cũng có thể xem [S2 Photo Picker web app](https://s2.io.vn/) hoặc [project S2 Photo Picker trong portfolio](/astro-blog/projects/s2-photo-picker/).
