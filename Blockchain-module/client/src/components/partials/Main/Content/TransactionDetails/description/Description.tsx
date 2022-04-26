import React from 'react'
import './Description.scss'

function Description() {
    return (
        <div className="transaction-description">
            <p className="title">Mô tả</p>
            <div className="generate">
                <p className="seeds">
                    Giống lúa: <span>Đài thơm 8</span>
                </p>
                <p className="quantity">
                    Số lượng: <span>200 tấn</span>
                </p>
                <p className="harvest-date">
                    Ngày thu hoạch: <span>9-4-2022</span>
                </p>
                <p className="price">
                    Giá: <span>10000000 VND</span>
                </p>
                <p className="area">
                    Diện tích: <span>100 ha</span>
                </p>
                <p className="season">
                    Mùa vụ: <span>Đông-xuân</span>
                    <p className="season-detail">Xem chi tiết mùa vụ</p>
                </p>
            </div>
            <div className="cooperation-info">
                <p className="cooperation-title">Hợp tác xã</p>
                <p className="cooperation-name">BÌNH MINH</p>
                <p className="cooperation-description"><span>BINH MINH</span> là tổ chức kinh tế tập thể, đồng sở hữu, có tư cách pháp nhân, 
                   và hợp tác tương trợ lẫn nhau trong hoạt động sản xuất. Hợp tác xã toạ lạc tại: <span>Ấp A - xã B -huyện C - tỉnh D, được quản lý bởi Nguyễn Văn A</span>, 
                   gồm <span>N thành viên</span>. Để biết thêm chi tiết 
                   vui lòng liên hệ qua số điện thoại: <span>091x.xxx.xxx</span> hoặc qua <span>HTX@gmail.com.</span></p>
            </div>
            <div className="buyer-info">
                <p className="buyer-title">Thương lái</p>
                <p className="buyer-name">LÚA MỚI</p>
                <p className="buyer-description"><span>LUA MOI</span> là tổ chức thu mua lúa, toạ lạc tại: <span>Ấp A - xã B -huyện C - tỉnh D, được quản lý bởi Nguyễn Văn A</span>, 
                   gồm <span>N thành viên</span>. Để biết thêm chi tiết 
                   vui lòng liên hệ qua số điện thoại: <span>091x.xxx.xxx</span> hoặc qua <span>LT@gmail.com.</span></p>
            </div>
            <div className="sender-info">
                <p className="sender-title">Người bán</p>
                <p className="sender-name">NGUYỄN VĂN AN</p>
                <p className="sender-description"><span>Ông: Nguyễn Văn A</span> là hộ sản xuất lúa, toạ lạc tại: <span>Ấp A - xã B -huyện C - tỉnh D</span> 
                   . Để biết thêm chi tiết 
                   vui lòng liên hệ qua số điện thoại: <span>091x.xxx.xxx</span> hoặc qua <span>LT@gmail.com.</span></p>
            </div>
        </div>
    )
}

export default Description