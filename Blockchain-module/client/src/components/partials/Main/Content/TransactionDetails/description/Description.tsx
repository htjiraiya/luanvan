import React, { useEffect } from 'react'
import './Description.scss'
import $ from 'jquery'

function Description() {


    const handleClickToShow = (e: React.MouseEvent<HTMLElement>)=> {
        console.log(e.currentTarget)
      //  e.currentTarget.classList.add('active')
        if(e.currentTarget) {
            let target = $(e.currentTarget)
            if(!target.hasClass('active')) {
                $(e.currentTarget.lastChild as HTMLElement).css('transform', 'rotateZ(-270deg)')
                $(e.currentTarget.nextElementSibling as HTMLElement).slideDown('.5s')
                target.addClass('active')
            } 
            else{
                $(e.currentTarget.lastChild as HTMLElement).css('transform', 'rotateZ(-90deg)')
                $(e.currentTarget.nextElementSibling as HTMLElement).slideUp('.5s')
                target.removeClass('active')
            }
        }
    }


    useEffect(()=> {
        $('.transaction-description .detail-content').slideUp('.5s');
        $('.transaction-description .generate-detail-item .fa-chevron-left').css('transform', 'rotateZ(-90deg)')
    } ,[])

    return (
        <div className="transaction-description">
            <p className="title">Thông tin chi tiết</p>
            <div className="generate">
                <div className="generate-item-wrapper">
                    <div className="generate-detail-item" onClick={handleClickToShow}>
                        <div className="generate-col">
                            <i className="fa-solid fa-address-book"></i>
                            <span>Chi tiết giao dịch</span>
                        </div>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="detail-content detail-content-flex">
                        <p>Giống lúa: <span>Nàng thơm</span></p>
                        <p>Số lượng: <span>20 tấn</span></p>
                        <p>Giá: <span>20000/kg</span></p>
                        <p>Ngày giao nhận: <span>12-4-2022</span></p>
                        <p>Nơi giao nhận: <span>HTX Bình Minh</span></p>
                        <p>Diện tích đất: <span>20 ha</span></p>
                        <p>Mùa vụ: <span>Đông xuân</span></p>
                    </div>
                </div>
                <div className="generate-item-wrapper">
                    <div className="generate-detail-item" onClick={handleClickToShow}>
                        <div className="generate-col">
                            <i className="fa-solid fa-users"></i>
                            <span>Chi tiết hợp tác xã</span>
                        </div>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="detail-content">
                        <p>Hợp tác xã: <span>BÌNH MINH</span></p>
                        <p>Địa chỉ: <span>Mạc Thiên Tích, phường Xuân Khánh, Ninh Kiều Cần Thơ</span></p>
                        <p>Trưởng hợp tác xã: <span>Nguyen Van A a a a a a a a a </span></p>
                        <p>Số lượng thành viên: <span>20 thành viên</span></p>
                        <p>Số điện thoại: <span>09393930549</span></p>
                        <p>Email: <span>HTX@gmail.com</span></p>
                    </div>
                </div>
                <div className="generate-item-wrapper">
                    <div className="generate-detail-item" onClick={handleClickToShow}>
                        <div className="generate-col">
                            <i className="fa-solid fa-circle-user"></i>
                            <span>Chi tiết thương lái</span>
                        </div>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="detail-content">
                        <p>Tên thương lái: <span>BÌNH MINH</span></p>
                        <p>Địa chỉ: <span>Mạc Thiên Tích, phường Xuân Khánh, Ninh Kiều Cần Thơ</span></p>
                        <p>Đại diện mua: <span>Nguyen Van A a a a a a a a a </span></p>
                        <p>Số điện thoại: <span>09393930549</span></p>
                        <p>Email: <span>TL@gmail.com</span></p>
                    </div>
                </div>
                <div className="generate-item-wrapper">
                    <div className="generate-detail-item" onClick={handleClickToShow}>
                        <div className="generate-col">
                            <i className="fa-solid fa-house-user"></i>
                            <span>Chi thiết hộ sản xuất</span>
                        </div>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="detail-content">
                        <p>Hộ sản xuất: <span>Ông Nguyen Văn C</span></p>
                        <p>Địa chỉ: <span>Mạc Thiên Tích, phường Xuân Khánh, Ninh Kiều Cần Thơ</span></p>
                        <p>Số điện thoại: <span>09393930549</span></p>
                        <p>Email: <span>TL@gmail.com</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description