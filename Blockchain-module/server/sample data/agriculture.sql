-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 05, 2022 lúc 11:36 AM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `agriculture`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_danhgiacuoimua`
--

CREATE TABLE `tbl_danhgiacuoimua` (
  `id_danhgiacuoimua` bigint(20) UNSIGNED NOT NULL,
  `id_lichmuavu` bigint(20) UNSIGNED NOT NULL,
  `id_xavien` bigint(20) UNSIGNED NOT NULL,
  `giong` double NOT NULL,
  `phanbon` double NOT NULL,
  `xangdau` double NOT NULL,
  `vattukhac` double NOT NULL,
  `lamdat` double NOT NULL,
  `gieosa` double NOT NULL,
  `lamco` double NOT NULL,
  `bomtuoi` double NOT NULL,
  `thuhoach` double NOT NULL,
  `rahat` double NOT NULL,
  `phoisay` double NOT NULL,
  `vanchuyen` double NOT NULL,
  `thuedat` double NOT NULL,
  `thuyloiphi` double NOT NULL,
  `tongsanluong` double NOT NULL,
  `giaban` double NOT NULL,
  `thuanloi` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `khokhan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `kiennghi` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_giaodich`
--

CREATE TABLE `tbl_giaodich` (
  `id_giaodich` bigint(20) UNSIGNED NOT NULL,
  `id_lohang` bigint(20) UNSIGNED NOT NULL,
  `id_thuonglai` bigint(20) UNSIGNED NOT NULL,
  `date_giaodich` date NOT NULL,
  `image_giaodich` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number_giaodich` double NOT NULL,
  `status_giaodich` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_htx` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_thuonglai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_gionglua`
--

CREATE TABLE `tbl_gionglua` (
  `id_gionglua` bigint(20) UNSIGNED NOT NULL,
  `name_gionglua` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_gionglua` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_hoatdongmuavu`
--

CREATE TABLE `tbl_hoatdongmuavu` (
  `id_hoatdongmuavu` bigint(20) UNSIGNED NOT NULL,
  `id_lichmuavu` bigint(20) UNSIGNED NOT NULL,
  `ngaylennuoc` date NOT NULL,
  `ngayxuongnuoc` date NOT NULL,
  `description_hoatdongmuavu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_hopdongmuaban`
--

CREATE TABLE `tbl_hopdongmuaban` (
  `id_hopdongmuaban` bigint(20) UNSIGNED NOT NULL,
  `title_hopdongmuaban` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_hoptacxa` bigint(20) UNSIGNED NOT NULL,
  `id_thuonglai` bigint(20) UNSIGNED NOT NULL,
  `id_lichmuavu` bigint(20) UNSIGNED NOT NULL,
  `description_hopdongmuaban` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_hopdongmuaban` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_hoptacxa`
--

CREATE TABLE `tbl_hoptacxa` (
  `id_hoptacxa` bigint(20) UNSIGNED NOT NULL,
  `name_hoptacxa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_hoptacxa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number_hoptacxa` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_hoptacxa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_lichmuavu`
--

CREATE TABLE `tbl_lichmuavu` (
  `id_lichmuavu` bigint(20) UNSIGNED NOT NULL,
  `name_lichmuavu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_gionglua` bigint(20) UNSIGNED NOT NULL,
  `id_hoptacxa` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_lohang`
--

CREATE TABLE `tbl_lohang` (
  `id_lohang` bigint(20) UNSIGNED NOT NULL,
  `name_lohang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_lohang` double NOT NULL,
  `id_nhatkydongruong` bigint(20) UNSIGNED NOT NULL,
  `id_xavien` bigint(20) UNSIGNED NOT NULL,
  `date_thuhoach` date NOT NULL,
  `image_lohang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_lohang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_nhatkydongruong`
--

CREATE TABLE `tbl_nhatkydongruong` (
  `id_nhatkydongruong` bigint(20) UNSIGNED NOT NULL,
  `id_lichmuavu` bigint(20) UNSIGNED NOT NULL,
  `id_xavien` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_phanbonthuocbaove`
--

CREATE TABLE `tbl_phanbonthuocbaove` (
  `id_phanbonthuocbaove` bigint(20) UNSIGNED NOT NULL,
  `date_phanbonthuocbaove` date NOT NULL,
  `category_phanbonthuocbaove` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty_phanbonthuocbaove` double(8,2) NOT NULL,
  `price_phanbonthuocbaove` double NOT NULL,
  `total_phanbonthuocbaove` double NOT NULL,
  `tinhhinhsinhtruong` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_nhatkydongruong` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_roles`
--

CREATE TABLE `tbl_roles` (
  `id_role` bigint(20) UNSIGNED NOT NULL,
  `name_role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_thuadat`
--

CREATE TABLE `tbl_thuadat` (
  `id_thuadat` bigint(20) UNSIGNED NOT NULL,
  `address_thuadat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location_thuadat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail_thuadat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_thuadat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_xavien` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_thuonglai`
--

CREATE TABLE `tbl_thuonglai` (
  `id_thuonglai` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullname_thuonglai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar_thuonglai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number_thuonglai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_thuonglai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_thuonglai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` int(11) NOT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_xavien`
--

CREATE TABLE `tbl_xavien` (
  `id_xavien` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullname_xavien` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar_xavien` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number_xavien` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_xavien` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_xavien` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `day_of_birth_xavien` date NOT NULL,
  `roles` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` int(11) NOT NULL,
  `id_hoptacxa` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `xavien_roles`
--

CREATE TABLE `xavien_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_xavien` bigint(20) UNSIGNED NOT NULL,
  `id_role` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_danhgiacuoimua`
--
ALTER TABLE `tbl_danhgiacuoimua`
  ADD PRIMARY KEY (`id_danhgiacuoimua`),
  ADD KEY `tbl_danhgiacuoimua_id_lichmuavu_index` (`id_lichmuavu`),
  ADD KEY `tbl_danhgiacuoimua_id_xavien_index` (`id_xavien`);

--
-- Chỉ mục cho bảng `tbl_giaodich`
--
ALTER TABLE `tbl_giaodich`
  ADD PRIMARY KEY (`id_giaodich`),
  ADD KEY `tbl_giaodich_id_lohang_index` (`id_lohang`),
  ADD KEY `tbl_giaodich_id_thuonglai_index` (`id_thuonglai`);

--
-- Chỉ mục cho bảng `tbl_gionglua`
--
ALTER TABLE `tbl_gionglua`
  ADD PRIMARY KEY (`id_gionglua`);

--
-- Chỉ mục cho bảng `tbl_hoatdongmuavu`
--
ALTER TABLE `tbl_hoatdongmuavu`
  ADD PRIMARY KEY (`id_hoatdongmuavu`),
  ADD KEY `tbl_hoatdongmuavu_id_lichmuavu_index` (`id_lichmuavu`);

--
-- Chỉ mục cho bảng `tbl_hopdongmuaban`
--
ALTER TABLE `tbl_hopdongmuaban`
  ADD PRIMARY KEY (`id_hopdongmuaban`),
  ADD KEY `tbl_hopdongmuaban_id_hoptacxa_index` (`id_hoptacxa`),
  ADD KEY `tbl_hopdongmuaban_id_thuonglai_index` (`id_thuonglai`),
  ADD KEY `tbl_hopdongmuaban_id_lichmuavu_index` (`id_lichmuavu`);

--
-- Chỉ mục cho bảng `tbl_hoptacxa`
--
ALTER TABLE `tbl_hoptacxa`
  ADD PRIMARY KEY (`id_hoptacxa`);

--
-- Chỉ mục cho bảng `tbl_lichmuavu`
--
ALTER TABLE `tbl_lichmuavu`
  ADD PRIMARY KEY (`id_lichmuavu`),
  ADD KEY `tbl_lichmuavu_id_gionglua_index` (`id_gionglua`),
  ADD KEY `tbl_lichmuavu_id_hoptacxa_index` (`id_hoptacxa`);

--
-- Chỉ mục cho bảng `tbl_lohang`
--
ALTER TABLE `tbl_lohang`
  ADD PRIMARY KEY (`id_lohang`),
  ADD KEY `tbl_lohang_id_nhatkydongruong_index` (`id_nhatkydongruong`),
  ADD KEY `tbl_lohang_id_xavien_index` (`id_xavien`);

--
-- Chỉ mục cho bảng `tbl_nhatkydongruong`
--
ALTER TABLE `tbl_nhatkydongruong`
  ADD PRIMARY KEY (`id_nhatkydongruong`),
  ADD KEY `tbl_nhatkydongruong_id_lichmuavu_index` (`id_lichmuavu`),
  ADD KEY `tbl_nhatkydongruong_id_xavien_index` (`id_xavien`);

--
-- Chỉ mục cho bảng `tbl_phanbonthuocbaove`
--
ALTER TABLE `tbl_phanbonthuocbaove`
  ADD PRIMARY KEY (`id_phanbonthuocbaove`),
  ADD KEY `tbl_phanbonthuocbaove_id_nhatkydongruong_index` (`id_nhatkydongruong`);

--
-- Chỉ mục cho bảng `tbl_roles`
--
ALTER TABLE `tbl_roles`
  ADD PRIMARY KEY (`id_role`);

--
-- Chỉ mục cho bảng `tbl_thuadat`
--
ALTER TABLE `tbl_thuadat`
  ADD PRIMARY KEY (`id_thuadat`),
  ADD KEY `tbl_thuadat_id_xavien_index` (`id_xavien`);

--
-- Chỉ mục cho bảng `tbl_thuonglai`
--
ALTER TABLE `tbl_thuonglai`
  ADD PRIMARY KEY (`id_thuonglai`);

--
-- Chỉ mục cho bảng `tbl_xavien`
--
ALTER TABLE `tbl_xavien`
  ADD PRIMARY KEY (`id_xavien`),
  ADD KEY `tbl_xavien_id_hoptacxa_index` (`id_hoptacxa`);

--
-- Chỉ mục cho bảng `xavien_roles`
--
ALTER TABLE `xavien_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `xavien_roles_id_xavien_index` (`id_xavien`),
  ADD KEY `xavien_roles_id_role_index` (`id_role`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbl_danhgiacuoimua`
--
ALTER TABLE `tbl_danhgiacuoimua`
  MODIFY `id_danhgiacuoimua` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_giaodich`
--
ALTER TABLE `tbl_giaodich`
  MODIFY `id_giaodich` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_gionglua`
--
ALTER TABLE `tbl_gionglua`
  MODIFY `id_gionglua` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_hoatdongmuavu`
--
ALTER TABLE `tbl_hoatdongmuavu`
  MODIFY `id_hoatdongmuavu` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_hopdongmuaban`
--
ALTER TABLE `tbl_hopdongmuaban`
  MODIFY `id_hopdongmuaban` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_hoptacxa`
--
ALTER TABLE `tbl_hoptacxa`
  MODIFY `id_hoptacxa` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_lichmuavu`
--
ALTER TABLE `tbl_lichmuavu`
  MODIFY `id_lichmuavu` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_lohang`
--
ALTER TABLE `tbl_lohang`
  MODIFY `id_lohang` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_nhatkydongruong`
--
ALTER TABLE `tbl_nhatkydongruong`
  MODIFY `id_nhatkydongruong` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_phanbonthuocbaove`
--
ALTER TABLE `tbl_phanbonthuocbaove`
  MODIFY `id_phanbonthuocbaove` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_roles`
--
ALTER TABLE `tbl_roles`
  MODIFY `id_role` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_thuadat`
--
ALTER TABLE `tbl_thuadat`
  MODIFY `id_thuadat` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_thuonglai`
--
ALTER TABLE `tbl_thuonglai`
  MODIFY `id_thuonglai` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_xavien`
--
ALTER TABLE `tbl_xavien`
  MODIFY `id_xavien` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `xavien_roles`
--
ALTER TABLE `xavien_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `tbl_danhgiacuoimua`
--
ALTER TABLE `tbl_danhgiacuoimua`
  ADD CONSTRAINT `tbl_danhgiacuoimua_id_lichmuavu_foreign` FOREIGN KEY (`id_lichmuavu`) REFERENCES `tbl_lichmuavu` (`id_lichmuavu`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_danhgiacuoimua_id_xavien_foreign` FOREIGN KEY (`id_xavien`) REFERENCES `tbl_xavien` (`id_xavien`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_giaodich`
--
ALTER TABLE `tbl_giaodich`
  ADD CONSTRAINT `tbl_giaodich_id_lohang_foreign` FOREIGN KEY (`id_lohang`) REFERENCES `tbl_lohang` (`id_lohang`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_giaodich_id_thuonglai_foreign` FOREIGN KEY (`id_thuonglai`) REFERENCES `tbl_thuonglai` (`id_thuonglai`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_hoatdongmuavu`
--
ALTER TABLE `tbl_hoatdongmuavu`
  ADD CONSTRAINT `tbl_hoatdongmuavu_id_lichmuavu_foreign` FOREIGN KEY (`id_lichmuavu`) REFERENCES `tbl_lichmuavu` (`id_lichmuavu`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_hopdongmuaban`
--
ALTER TABLE `tbl_hopdongmuaban`
  ADD CONSTRAINT `tbl_hopdongmuaban_id_hoptacxa_foreign` FOREIGN KEY (`id_hoptacxa`) REFERENCES `tbl_hoptacxa` (`id_hoptacxa`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_hopdongmuaban_id_lichmuavu_foreign` FOREIGN KEY (`id_lichmuavu`) REFERENCES `tbl_lichmuavu` (`id_lichmuavu`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_hopdongmuaban_id_thuonglai_foreign` FOREIGN KEY (`id_thuonglai`) REFERENCES `tbl_thuonglai` (`id_thuonglai`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_lichmuavu`
--
ALTER TABLE `tbl_lichmuavu`
  ADD CONSTRAINT `tbl_lichmuavu_id_gionglua_foreign` FOREIGN KEY (`id_gionglua`) REFERENCES `tbl_gionglua` (`id_gionglua`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_lichmuavu_id_hoptacxa_foreign` FOREIGN KEY (`id_hoptacxa`) REFERENCES `tbl_hoptacxa` (`id_hoptacxa`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_lohang`
--
ALTER TABLE `tbl_lohang`
  ADD CONSTRAINT `tbl_lohang_id_nhatkydongruong_foreign` FOREIGN KEY (`id_nhatkydongruong`) REFERENCES `tbl_nhatkydongruong` (`id_nhatkydongruong`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_lohang_id_xavien_foreign` FOREIGN KEY (`id_xavien`) REFERENCES `tbl_xavien` (`id_xavien`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_nhatkydongruong`
--
ALTER TABLE `tbl_nhatkydongruong`
  ADD CONSTRAINT `tbl_nhatkydongruong_id_lichmuavu_foreign` FOREIGN KEY (`id_lichmuavu`) REFERENCES `tbl_lichmuavu` (`id_lichmuavu`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_nhatkydongruong_id_xavien_foreign` FOREIGN KEY (`id_xavien`) REFERENCES `tbl_xavien` (`id_xavien`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_phanbonthuocbaove`
--
ALTER TABLE `tbl_phanbonthuocbaove`
  ADD CONSTRAINT `tbl_phanbonthuocbaove_id_nhatkydongruong_foreign` FOREIGN KEY (`id_nhatkydongruong`) REFERENCES `tbl_nhatkydongruong` (`id_nhatkydongruong`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_thuadat`
--
ALTER TABLE `tbl_thuadat`
  ADD CONSTRAINT `tbl_thuadat_id_xavien_foreign` FOREIGN KEY (`id_xavien`) REFERENCES `tbl_xavien` (`id_xavien`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_xavien`
--
ALTER TABLE `tbl_xavien`
  ADD CONSTRAINT `tbl_xavien_id_hoptacxa_foreign` FOREIGN KEY (`id_hoptacxa`) REFERENCES `tbl_hoptacxa` (`id_hoptacxa`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `xavien_roles`
--
ALTER TABLE `xavien_roles`
  ADD CONSTRAINT `xavien_roles_id_role_foreign` FOREIGN KEY (`id_role`) REFERENCES `tbl_roles` (`id_role`) ON DELETE CASCADE,
  ADD CONSTRAINT `xavien_roles_id_xavien_foreign` FOREIGN KEY (`id_xavien`) REFERENCES `tbl_xavien` (`id_xavien`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
