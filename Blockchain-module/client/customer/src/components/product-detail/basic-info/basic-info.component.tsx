import React from 'react'
import './basic-info.component.scss'
import Image from '../../common/image/image.component'

function BasicInfoComponent() {
  return (
    <div className="pd-basic-info-wrapper">
      <div className="col col-1">
        <Image src="/images/extension/main.jpg"></Image>
      </div>
      <div className="col col-2">
        <p className="name"> 
          TÊN SẢN PHẨM
        </p>
        <p className="production">
          Doanh nghiệp sản xuất: <span>công ty sản xuất</span>
        </p>
        <p className="price">
          Giá bán: <span> 15000 &#8260; kg </span>
        </p>
        <p className="description">
            Mô tả sản phẩm: <span>thường được sử dụng để làm
            nguyên liệu cho món nếp cái hoa vàng-
            một đặc sản nổi tiếng, mang nhiều giá trị dinh
            dưỡng cho sức khỏe. Các loại gạo lứt nếp bao
            gồm gạo nếp ngỗng, gạo nếp than, nếp
            hương,…</span>
        </p>
      </div>
    </div>
  )
}

export default BasicInfoComponent