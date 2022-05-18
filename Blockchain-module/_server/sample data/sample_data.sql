-- tbl hợp tác xã
INSERT INTO `tbl_hoptacxa` (  
    `id_hoptacxa`,
    `name_hoptacxa`,
    `address_hoptacxa`,
    `phone_number_hoptacxa`,
    `email_hoptacxa`,
    `active`, 
    `created_at`,
    `updated_at`
) VALUES (
    '1',
    'Hợp tác xã Bình Hòa Phước',
    'Ấp Phú An 2, xã Bình Hòa Phước, huyện Long Hồ, tỉnh Vĩnh Long',
    '0977103025',
    'coopbhp@gmail.com',
    '1', 
    '2022-05-05',
    '2022-05-05'
);

INSERT INTO `tbl_hoptacxa` (  
    `id_hoptacxa`,
    `name_hoptacxa`,
    `address_hoptacxa`,
    `phone_number_hoptacxa`,
    `email_hoptacxa`,
    `active`, 
    `created_at`,
    `updated_at`
) VALUES (
    '2',
    'Ấp Long Bình, Xã Long Điền A, Chợ Mới, An Giang',
    'Ấp Phú An 2, xã Bình Hòa Phước, huyện Long Hồ, tỉnh Vĩnh Long',
    '0919017829',
    'hoptacxalongbinh@gmail.com',
    '1', 
    '2022-05-05',
    '2022-05-05'
);

--tbl xã viên
INSERT INTO `tbl_xavien` (
    `id_xavien`, 
    `username`, 
    `password`, 
    `fullname_xavien`, 
    `avatar_xavien`, 
    `phone_number_xavien`,
    `email_xavien`, `address_xavien`, 
    `day_of_birth_xavien`, 
    `roles`, `active`, 
    `id_hoptacxa`, 
    `created_at`, 
    `updated_at`) 
VALUES (
    '1', 
    'levanhong', 
    '12345', 
    'Lê Văn Hồng', 
    'levanhong-avatar.jpeg', 
    '0911505123', 
    'levanhong@gmail.com', 
    'Ấp Long Bình, Xã Long Điền A, Chợ Mới, An Giang', 
    '2000-05-05', 
    'Chủ nhiệm hợp tác xã', 
    '1', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_xavien` (
    `id_xavien`, 
    `username`, 
    `password`, 
    `fullname_xavien`, 
    `avatar_xavien`, 
    `phone_number_xavien`,
    `email_xavien`, `address_xavien`, 
    `day_of_birth_xavien`, 
    `roles`, `active`, 
    `id_hoptacxa`, 
    `created_at`, 
    `updated_at`) 
VALUES (
    '2', 
    'nguyenngocnhan', 
    '12345', 
    'Nguyễn Ngọc Nhân', 
    'nguyenngocnhan-avatar.jpeg', 
    '0911505124', 
    'nguyenngocnhan@gmail.com', 
    'Ấp Phú An 2, xã Bình Hòa Phước, huyện Long Hồ, tỉnh Vĩnh Long', 
    '2000-05-05', 
    'Chủ nhiệm hợp tác xã', 
    '1', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_xavien` (
    `id_xavien`, 
    `username`, 
    `password`, 
    `fullname_xavien`, 
    `avatar_xavien`, 
    `phone_number_xavien`,
    `email_xavien`, `address_xavien`, 
    `day_of_birth_xavien`, 
    `roles`, `active`, 
    `id_hoptacxa`, 
    `created_at`, 
    `updated_at`) 
VALUES (
    '3', 
    'lechithanh', 
    '12345', 
    'Lê Chí Thành', 
    'lechithanh-avatar.jpeg', 
    '0911505125', 
    'lechithanh@gmail.com', 
    'Ấp Long Bình, Xã Long Điền A, Chợ Mới, An Giang', 
    '2000-05-05', 
    'Xã viên', 
    '1', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_xavien` (
    `id_xavien`, 
    `username`, 
    `password`, 
    `fullname_xavien`, 
    `avatar_xavien`, 
    `phone_number_xavien`,
    `email_xavien`, `address_xavien`, 
    `day_of_birth_xavien`, 
    `roles`, `active`, 
    `id_hoptacxa`, 
    `created_at`, 
    `updated_at`) 
VALUES (
    '4', 
    'tangminhhau', 
    '12345', 
    'Tăng Minh Hậu', 
    'tangminhhau-avatar.jpeg', 
    '0911505126', 
    'tangminhhau@gmail.com', 
    'Ấp Phú An 2, xã Bình Hòa Phước, huyện Long Hồ, tỉnh Vĩnh Long',
    '2000-05-05', 
    'Xã viên', 
    '1', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

-- tbl thửa đất
INSERT INTO `tbl_thuadat` (
    `id_thuadat`, 
    `address_thuadat`, 
    `location_thuadat`, 
    `thumbnail_thuadat`, 
    `description_thuadat`, 
    `id_xavien`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '1', 
    'Ấp Phú An 2, xã Bình Hòa Phước, huyện Long Hồ, tỉnh Vĩnh Long', 
    'null', 
    'null', 
    'null', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_thuadat` (
    `id_thuadat`, 
    `address_thuadat`, 
    `location_thuadat`, 
    `thumbnail_thuadat`, 
    `description_thuadat`, 
    `id_xavien`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '2', 
    'Ấp Phú An 2, xã Bình Hòa Phước, huyện Long Hồ, tỉnh Vĩnh Long', 
    'null', 
    'null', 
    'null', 
    '4', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_thuadat` (
    `id_thuadat`, 
    `address_thuadat`, 
    `location_thuadat`, 
    `thumbnail_thuadat`, 
    `description_thuadat`, 
    `id_xavien`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '3', 
    'Ấp Long Bình, Xã Long Điền A, Chợ Mới, An Giang', 
    'null', 
    'null', 
    'null', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_thuadat` (
    `id_thuadat`, 
    `address_thuadat`, 
    `location_thuadat`, 
    `thumbnail_thuadat`, 
    `description_thuadat`, 
    `id_xavien`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '4', 
    'Ấp Long Bình, Xã Long Điền A, Chợ Mới, An Giang', 
    'null', 
    'null', 
    'null', 
    '3', 
    '2022-05-05', 
    '2022-05-05'
);

-- tbl giống lúa
INSERT INTO `tbl_gionglua` (
    `id_gionglua`, 
    `name_gionglua`, 
    `description_gionglua`,
    `created_at`, 
    `updated_at`
) VALUES (
    '1', 
    'OM7347', 
    'OM7347 được Bộ môn Di truyền – Viện lúa Đồng Bằng Sông Cửu Long lai tạo thành công vào năm 2005. Trong các giống lúa chủ yếu ở Việt Nam, đây là giống lúa đặc biệt thích nghi tốt với các loại đất. Cụ thể, từ đất phèn, đất chua và hơi mặn ở khu vực Đồng bằng sông Cửu Long, Đông Nam Bộ và các tỉnh duyên hải Trung bộ. \r\n\r\n', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_gionglua` (
    `id_gionglua`, 
    `name_gionglua`, 
    `description_gionglua`,
    `created_at`, 
    `updated_at`
) VALUES (
    '2', 
    'ST 21-3', 
    'Là giống lúa được đưa vào nhóm sản xuất gạo ngon thương hiệu Việt. Nên phẩm chất hạt gạo của ST 21-3 rất tốt, khi nấu thành cơm cho vị thơm, ngọt.', 
    '2022-05-05', 
    '2022-05-05'
);

-- tbl lịch mùa vụ
INSERT INTO `tbl_lichmuavu` (
    `id_lichmuavu`, 
    `name_lichmuavu`, 
    `id_gionglua`, 
    `id_hoptacxa`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '1', 
    'vụ đông xuân - 2022', 
    '1', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_lichmuavu` (
    `id_lichmuavu`, 
    `name_lichmuavu`, 
    `id_gionglua`, 
    `id_hoptacxa`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '2', 
    'vụ đông xuân - 2022', 
    '2', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

-- tbl hoạt động mùa vụ
INSERT INTO `tbl_hoatdongmuavu` (
    `id_hoatdongmuavu`, 
    `id_lichmuavu`, 
    `ngaylennuoc`, 
    `ngayxuongnuoc`, 
    `description_hoatdongmuavu`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '1', 
    '1', 
    '2022-01-05', 
    '2019-01-10', 
    'Gieo xạ', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_hoatdongmuavu` (
    `id_hoatdongmuavu`, 
    `id_lichmuavu`, 
    `ngaylennuoc`, 
    `ngayxuongnuoc`, 
    `description_hoatdongmuavu`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '2', 
    '1', 
    '2022-01-20', 
    '2019-01-30', 
    'Bón phân', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_hoatdongmuavu` (
    `id_hoatdongmuavu`, 
    `id_lichmuavu`, 
    `ngaylennuoc`, 
    `ngayxuongnuoc`, 
    `description_hoatdongmuavu`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '3', 
    '1', 
    '2022-02-01', 
    '2019-02-20', 
    'Ngừa xâu hại & ngừa dịch bệnh & ngừa có dại', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_hoatdongmuavu` (
    `id_hoatdongmuavu`, 
    `id_lichmuavu`, 
    `ngaylennuoc`, 
    `ngayxuongnuoc`, 
    `description_hoatdongmuavu`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '4', 
    '2', 
    '2022-01-05', 
    '2019-01-10', 
    'Gieo xạ', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_hoatdongmuavu` (
    `id_hoatdongmuavu`, 
    `id_lichmuavu`, 
    `ngaylennuoc`, 
    `ngayxuongnuoc`, 
    `description_hoatdongmuavu`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '5', 
    '2', 
    '2022-01-20', 
    '2019-01-30', 
    'Bón phân', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_hoatdongmuavu` (
    `id_hoatdongmuavu`, 
    `id_lichmuavu`, 
    `ngaylennuoc`, 
    `ngayxuongnuoc`, 
    `description_hoatdongmuavu`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '6', 
    '2', 
    '2022-02-01', 
    '2019-02-20', 
    'Ngừa xâu hại & ngừa dịch bệnh & ngừa có dại', 
    '2022-05-05', 
    '2022-05-05'
);

-- tbl nhật ký đồng ruộng
INSERT INTO `tbl_nhatkydongruong` (
    `id_nhatkydongruong`, 
    `id_lichmuavu`, 
    `id_xavien`,
    `created_at`, 
    `updated_at`
) VALUES (
    '1', 
    '1', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_nhatkydongruong` (
    `id_nhatkydongruong`, 
    `id_lichmuavu`, 
    `id_xavien`,
    `created_at`, 
    `updated_at`
) VALUES (
    '2', 
    '1', 
    '4', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_nhatkydongruong` (
    `id_nhatkydongruong`, 
    `id_lichmuavu`, 
    `id_xavien`,
    `created_at`, 
    `updated_at`
) VALUES (
    '3', 
    '2', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_nhatkydongruong` (
    `id_nhatkydongruong`, 
    `id_lichmuavu`, 
    `id_xavien`,
    `created_at`, 
    `updated_at`
) VALUES (
    '4', 
    '2', 
    '4', 
    '2022-05-05', 
    '2022-05-05'
);

-- tbl phân bón thuốc bảo vệ

-- nhật ký đồng ruộng 1 - xã viên 2
INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '1', 
    '2022-01-08', 
    'NPK (Jordan)', 
    '10', '11200', 
    '112000', 
    'lúa sinh trưởng tốt', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '2', 
    '2022-01-08', 
    'Urê (Ure Phú Mỹ)', 
    '5', '17200', 
    '86000', 
    'lúa sinh trưởng tốt', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '3', 
    '2022-01-23', 
    'DAP (Phân DAP Nga Đen 64%)', 
    '4.5', '27000', 
    '121500', 
    'lúa sinh trưởng tốt', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '4', 
    '2022-01-23', 
    'Urê (Ure Phú Mỹ)', 
    '8', '17200', 
    '137600', 
    'lúa sinh trưởng tốt', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '5', 
    '2022-02-13', 
    'Urê (Ure Phú Mỹ)', 
    '5', '17200', 
    '86000', 
    'lúa sinh trưởng tốt', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '7', 
    '2022-02-13', 
    'KCL (Phân Kali Belarus Miểng)', 
    '3 ', '21000', 
    '63000', 
    'lúa sinh trưởng tốt', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '8', 
    '2022-02-26', 
    'KNO3 (SPC K KNO3 13-0-46)', 
    '2', '95000', 
    '190000', 
    'lúa sinh trưởng tốt', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '9', 
    '2022-01-5', 
    'Thuốc trừ cỏ (Sofit 300EC)', 
    '1.2', '165000', 
    '198000', 
    'lúa sinh trưởng tốt', 
    '1', 
    '2022-05-05', 
    '2022-05-05'
);

-- nhật ký đồng ruộng 2 - xã viên 4
INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '10', 
    '2022-01-08', 
    'NPK (Jordan)', 
    '10', '11200', 
    '112000', 
    'lúa sinh trưởng tốt', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '11', 
    '2022-01-08', 
    'Urê (Ure Phú Mỹ)', 
    '5', '17200', 
    '86000', 
    'lúa sinh trưởng tốt', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '12', 
    '2022-01-23', 
    'DAP (Phân DAP Nga Đen 64%)', 
    '4.5', '27000', 
    '121500', 
    'lúa sinh trưởng tốt', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '13', 
    '2022-01-23', 
    'Urê (Ure Phú Mỹ)', 
    '8', '17200', 
    '137600', 
    'lúa sinh trưởng tốt', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '14', 
    '2022-02-13', 
    'Urê (Ure Phú Mỹ)', 
    '5', '17200', 
    '86000', 
    'lúa sinh trưởng tốt', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '15', 
    '2022-02-13', 
    'KCL (Phân Kali Belarus Miểng)', 
    '3 ', '21000', 
    '63000', 
    'lúa sinh trưởng tốt', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '16', 
    '2022-02-26', 
    'KNO3 (SPC K KNO3 13-0-46)', 
    '2', '95000', 
    '190000', 
    'lúa sinh trưởng tốt', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '17', 
    '2022-01-5', 
    'Thuốc trừ cỏ (Sofit 300EC)', 
    '1.2', '165000', 
    '198000', 
    'lúa sinh trưởng tốt', 
    '2', 
    '2022-05-05', 
    '2022-05-05'
);

-- nhật ký đồng ruộng 3 - xã viên 1
INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '18', 
    '2022-01-08', 
    'NPK (Jordan)', 
    '10', '11200', 
    '112000', 
    'lúa sinh trưởng tốt', 
    '3', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '19', 
    '2022-01-08', 
    'Urê (Ure Phú Mỹ)', 
    '5', '17200', 
    '86000', 
    'lúa sinh trưởng tốt', 
    '3', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '20', 
    '2022-01-23', 
    'DAP (Phân DAP Nga Đen 64%)', 
    '4.5', '27000', 
    '121500', 
    'lúa sinh trưởng tốt', 
    '3', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '21', 
    '2022-01-23', 
    'Urê (Ure Phú Mỹ)', 
    '8', '17200', 
    '137600', 
    'lúa sinh trưởng tốt', 
    '3', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '22', 
    '2022-02-13', 
    'Urê (Ure Phú Mỹ)', 
    '5', '17200', 
    '86000', 
    'lúa sinh trưởng tốt', 
    '3', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '23', 
    '2022-02-13', 
    'KCL (Phân Kali Belarus Miểng)', 
    '3 ', '21000', 
    '63000', 
    'lúa sinh trưởng tốt', 
    '3', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '24', 
    '2022-02-26', 
    'KNO3 (SPC K KNO3 13-0-46)', 
    '2', '95000', 
    '190000', 
    'lúa sinh trưởng tốt', 
    '3', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '25', 
    '2022-01-5', 
    'Thuốc trừ cỏ (Sofit 300EC)', 
    '1.2', '165000', 
    '198000', 
    'lúa sinh trưởng tốt', 
    '3', 
    '2022-05-05', 
    '2022-05-05'
);

-- nhật ký đồng ruộng 4 - xã viên 3
INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '26', 
    '2022-01-08', 
    'NPK (Jordan)', 
    '10', '11200', 
    '112000', 
    'lúa sinh trưởng tốt', 
    '4', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '27', 
    '2022-01-08', 
    'Urê (Ure Phú Mỹ)', 
    '5', '17200', 
    '86000', 
    'lúa sinh trưởng tốt', 
    '4', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '28', 
    '2022-01-23', 
    'DAP (Phân DAP Nga Đen 64%)', 
    '4.5', '27000', 
    '121500', 
    'lúa sinh trưởng tốt', 
    '4', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '29', 
    '2022-01-23', 
    'Urê (Ure Phú Mỹ)', 
    '8', '17200', 
    '137600', 
    'lúa sinh trưởng tốt', 
    '4', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '30', 
    '2022-02-13', 
    'Urê (Ure Phú Mỹ)', 
    '5', '17200', 
    '86000', 
    'lúa sinh trưởng tốt', 
    '4', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '31', 
    '2022-02-13', 
    'KCL (Phân Kali Belarus Miểng)', 
    '3 ', '21000', 
    '63000', 
    'lúa sinh trưởng tốt', 
    '4', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '32', 
    '2022-02-26', 
    'KNO3 (SPC K KNO3 13-0-46)', 
    '2', '95000', 
    '190000', 
    'lúa sinh trưởng tốt', 
    '4', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_phanbonthuocbaove` (
    `id_phanbonthuocbaove`, 
    `date_phanbonthuocbaove`, 
    `category_phanbonthuocbaove`, 
    `qty_phanbonthuocbaove`, 
    `price_phanbonthuocbaove`, 
    `total_phanbonthuocbaove`, 
    `tinhhinhsinhtruong`, 
    `id_nhatkydongruong`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '33', 
    '2022-01-5', 
    'Thuốc trừ cỏ (Sofit 300EC)', 
    '1.2', '165000', 
    '198000', 
    'lúa sinh trưởng tốt', 
    '4', 
    '2022-05-05', 
    '2022-05-05'
);

-- tbl đánh giá cuối mùa
INSERT INTO `tbl_danhgiacuoimua` (
    `id_danhgiacuoimua`, 
    `id_lichmuavu`, 
    `id_xavien`, 
    `giong`, 
    `phanbon`, 
    `xangdau`, 
    `vattukhac`, 
    `lamdat`, 
    `gieosa`, 
    `lamco`, 
    `bomtuoi`, 
    `thuhoach`, 
    `rahat`, 
    `phoisay`, 
    `vanchuyen`, 
    `thuedat`, 
    `thuyloiphi`, 
    `tongsanluong`, 
    `giaban`, 
    `thuanloi`, 
    `khokhan`, 
    `kiennghi`, 
    `created_at`,
    `updated_at`
) VALUES (
    '1', 
    '1', 
    '1', 
    '1000000', 
    '994100', 
    '500000', 
    '200000', 
    '200000', 
    '100000', 
    '100000', 
    '300000', 
    '100000', 
    '100000', 
    '100000', 
    '100000', 
    '0', 
    '20000', 
    '7000', 
    '7500', 
    'Thời tiết tốt, không có dịch bệnh', 
    'không có', 
    'Mong hợp tác xã tiếp tục hỗ trợ tốt hơn', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_danhgiacuoimua` (
    `id_danhgiacuoimua`, 
    `id_lichmuavu`, 
    `id_xavien`, 
    `giong`, 
    `phanbon`, 
    `xangdau`, 
    `vattukhac`, 
    `lamdat`, 
    `gieosa`, 
    `lamco`, 
    `bomtuoi`, 
    `thuhoach`, 
    `rahat`, 
    `phoisay`, 
    `vanchuyen`, 
    `thuedat`, 
    `thuyloiphi`, 
    `tongsanluong`, 
    `giaban`, 
    `thuanloi`, 
    `khokhan`, 
    `kiennghi`, 
    `created_at`,
    `updated_at`
) VALUES (
    '2', 
    '1', 
    '3', 
    '1000000', 
    '994100', 
    '500000', 
    '200000', 
    '200000', 
    '100000', 
    '100000', 
    '300000', 
    '100000', 
    '100000', 
    '100000', 
    '100000', 
    '0', 
    '20000', 
    '7000', 
    '7500', 
    'Thời tiết tốt, không có dịch bệnh', 
    'không có', 
    'Mong hợp tác xã tiếp tục hỗ trợ tốt hơn', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_danhgiacuoimua` (
    `id_danhgiacuoimua`, 
    `id_lichmuavu`, 
    `id_xavien`, 
    `giong`, 
    `phanbon`, 
    `xangdau`, 
    `vattukhac`, 
    `lamdat`, 
    `gieosa`, 
    `lamco`, 
    `bomtuoi`, 
    `thuhoach`, 
    `rahat`, 
    `phoisay`, 
    `vanchuyen`, 
    `thuedat`, 
    `thuyloiphi`, 
    `tongsanluong`, 
    `giaban`, 
    `thuanloi`, 
    `khokhan`, 
    `kiennghi`, 
    `created_at`,
    `updated_at`
) VALUES (
    '3', 
    '2', 
    '2', 
    '1000000', 
    '994100', 
    '500000', 
    '200000', 
    '200000', 
    '100000', 
    '100000', 
    '300000', 
    '100000', 
    '100000', 
    '100000', 
    '100000', 
    '0', 
    '20000', 
    '7000', 
    '7500', 
    'Thời tiết tốt, không có dịch bệnh', 
    'không có', 
    'Mong hợp tác xã tiếp tục hỗ trợ tốt hơn', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_danhgiacuoimua` (
    `id_danhgiacuoimua`, 
    `id_lichmuavu`, 
    `id_xavien`, 
    `giong`, 
    `phanbon`, 
    `xangdau`, 
    `vattukhac`, 
    `lamdat`, 
    `gieosa`, 
    `lamco`, 
    `bomtuoi`, 
    `thuhoach`, 
    `rahat`, 
    `phoisay`, 
    `vanchuyen`, 
    `thuedat`, 
    `thuyloiphi`, 
    `tongsanluong`, 
    `giaban`, 
    `thuanloi`, 
    `khokhan`, 
    `kiennghi`, 
    `created_at`,
    `updated_at`
) VALUES (
    '4', 
    '2', 
    '4', 
    '1000000', 
    '994100', 
    '500000', 
    '200000', 
    '200000', 
    '100000', 
    '100000', 
    '300000', 
    '100000', 
    '100000', 
    '100000', 
    '100000', 
    '0', 
    '20000', 
    '7000', 
    '7500', 
    'Thời tiết tốt, không có dịch bệnh', 
    'không có', 
    'Mong hợp tác xã tiếp tục hỗ trợ tốt hơn', 
    '2022-05-05', 
    '2022-05-05'
);

--tbl role
INSERT INTO `tbl_roles` (
    `id_role`, 
    `name_role`, 
    `created_at`, 
    `updated_at`) 
VALUES (
    '1', 
    'Xã viên', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_roles` (
    `id_role`, 
    `name_role`, 
    `created_at`, 
    `updated_at`) 
VALUES (
    '2', 
    'Chủ nhiệm hợp tác xã', 
    '2022-05-05', 
    '2022-05-05'
);

--tbl xã viên role
INSERT INTO `xavien_roles` (
    `id`, 
    `id_xavien`, 
    `id_role`
) VALUES (
    '1', 
    '1', 
    '2'
);

INSERT INTO `xavien_roles` (
    `id`, 
    `id_xavien`, 
    `id_role`
) VALUES (
    '2', 
    '2', 
    '2'
);

INSERT INTO `xavien_roles` (
    `id`, 
    `id_xavien`, 
    `id_role`
) VALUES (
    '3', 
    '3', 
    '1'
);

INSERT INTO `xavien_roles` (
    `id`, 
    `id_xavien`, 
    `id_role`
) VALUES (
    '4', 
    '4', 
    '2'
);

-- tbl thương lái
INSERT INTO `tbl_thuonglai` (
    `id_thuonglai`, 
    `username`, 
    `password`, 
    `fullname_thuonglai`, 
    `avatar_thuonglai`, 
    `phone_number_thuonglai`, 
    `address_thuonglai`, 
    `email_thuonglai`, 
    `active`, 
    `company`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '1', 
    'tranthanhhuy', 
    '12345', 
    'Trần Thanh Huy ', 
    'tranthanhhuy-avatar.jpeg', 
    '0912512612', 
    'Ấp Phú An 2, xã Bình Hòa Phước, huyện Long Hồ, tỉnh Vĩnh Long', 
    'tranthanhhuy@gmail.com', 
    '1', 
    'Tập đoàn Lộc Trời', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_thuonglai` (
    `id_thuonglai`, 
    `username`, 
    `password`, 
    `fullname_thuonglai`, 
    `avatar_thuonglai`, 
    `phone_number_thuonglai`, 
    `address_thuonglai`, 
    `email_thuonglai`, 
    `active`, 
    `company`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '2', 
    'phamvankhai', 
    '12345', 
    'Phạm Văn Khải', 
    'phamvankhai-avatar.jpeg', 
    '0912512613', 
    'Ấp Phú An 2, xã Bình Hòa Phước, huyện Long Hồ, tỉnh Vĩnh Long', 
    'phamvankhai@gmail.com', 
    '1', 
    'Tập đoàn Lộc Trời', 
    '2022-05-05', 
    '2022-05-05'
);

-- tbl hợp đồng mua bán
INSERT INTO `tbl_hopdongmuaban` (
    `id_hopdongmuaban`, 
    `title_hopdongmuaban`, 
    `id_hoptacxa`, 
    `id_thuonglai`,
    `id_lichmuavu`, 
    `description_hopdongmuaban`, 
    `price_hopdongmuaban`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '1', 
    'Đông xuân 2022 - HTX Bình Hoà Phước', 
    '1', 
    '1', 
    '1', 
    'Không có', 
    '105000000', 
    '2022-05-05', 
    '2022-05-05'
);

INSERT INTO `tbl_hopdongmuaban` (
    `id_hopdongmuaban`, 
    `title_hopdongmuaban`, 
    `id_hoptacxa`, 
    `id_thuonglai`,
    `id_lichmuavu`, 
    `description_hopdongmuaban`, 
    `price_hopdongmuaban`, 
    `created_at`, 
    `updated_at`
) VALUES (
    '2', 
    'Đông xuân 2022 - HTX Bình Hoà Phước', 
    '2', 
    '2', 
    '2', 
    'Không có', 
    '105000000', 
    '2022-05-05', 
    '2022-05-05'
);