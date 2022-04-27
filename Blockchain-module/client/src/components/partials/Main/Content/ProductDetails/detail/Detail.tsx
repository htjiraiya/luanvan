import React, { useEffect, useState } from 'react'
import { Row, Table, Cell } from '../../../../features/table/Table'
import './Detail.scss'
import $ from 'jquery'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

function Detail() {
    
    const [activityDate, setActivityDate] = useState('')

    const handleClickToShow = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e.currentTarget)
        //  e.currentTarget.classList.add('active')
        if (e.currentTarget) {
            let target = $(e.currentTarget)
            if (!target.hasClass('active')) {
                $(e.currentTarget.lastChild as HTMLElement).css('transform', 'rotateZ(-270deg)')
                $(e.currentTarget.nextElementSibling as HTMLElement).slideDown('.5s')
                target.addClass('active')
            }
            else {
                $(e.currentTarget.lastChild as HTMLElement).css('transform', 'rotateZ(-90deg)')
                $(e.currentTarget.nextElementSibling as HTMLElement).slideUp('.5s')
                target.removeClass('active')
            }
        }
    }

    const handleChangeActivityDate = (e: SelectChangeEvent)=> {
        setActivityDate(e.target.value)
    }

    useEffect(()=> {
        $('.product-detail .detail-content').slideUp('.5s');
        $('.product-detail .generate-detail-item .fa-chevron-left').css('transform', 'rotateZ(-90deg)')
    } ,[])

    return (
        <div className="product-detail">
            <p className="title">Thông tin chi tiết</p>
            <div className="generate">
                <div className="generate-item-wrapper">
                    <div className="generate-detail-item" onClick={handleClickToShow}>
                        <div className="generate-col">
                            <i className="fa-solid fa-address-book"></i>
                            <span>Chi tiết lô hàng</span>
                        </div>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="detail-content detail-content-flex">
                        <p>Giống lúa: <span>Nàng thơm</span></p>
                        <p>Số lượng: <span>20 tấn</span></p>
                        <p>Giá: <span>20000/kg</span></p>
                        <p>Thời gian giao nhận: <span>4h 22-4-2022</span></p>
                        <p>Nơi giao nhận: <span>HTX Bình Minh</span></p>
                        <p>Nơi sản xuất: <span>HTX Bình Minh</span></p>
                        <p>Mùa vụ: <span>Đông xuân</span></p>
                    </div>
                </div>
                <div className="generate-item-wrapper">
                    <div className="generate-detail-item" onClick={handleClickToShow}>
                        <div className="generate-col">
                            <i className="fa-solid fa-users"></i>
                            <span>Vật tư nông nghiệp</span>
                        </div>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="detail-content">
                        <p>1. <span>Phân bón hữu cơ ADC, 10 bao, 20000vnd/bao</span></p>
                        <p>2. <span>Phân bón vi sinh ADC, 10 bao, 200000vnd/bao</span></p>
                        <p>3. <span>Phân bón đạm ADC, 10 bao, 200000vnd/bao</span></p>
                        <p>4. <span>Phân bón  ADC, 10 bao, 200000vnd/bao</span></p>
                        <p>5. <span>Thuốc trừ sâu ADC, 10 bao, 200000vnd/bao</span></p>
                        <p>6. <span>Thuốc trừ cỏ ADC, 10 bao, 200000vnd/bao</span></p>
                    </div>
                </div>
                <div className="generate-item-wrapper">
                    <div className="generate-detail-item" onClick={handleClickToShow}>
                        <div className="generate-col">
                            <i className="fa-solid fa-chart-line"></i>
                            <span>Hoạt động chăm sóc</span>
                        </div>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="detail-content">
                        <div>
                            <FormControl fullWidth className="activity-date-select">
                                <InputLabel id="demo-simple-select-label">Thời gian</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={activityDate}
                                    style={{fontWeight: 'bold', height: '3rem'}}
                                    label="Thời gian"
                                    onChange={handleChangeActivityDate}
                                    
                                >
                                    <MenuItem value={10}>22-4-2022</MenuItem>
                                    <MenuItem value={20}>22-5-2022</MenuItem>
                                    <MenuItem value={30}>22-6-2022</MenuItem>
                                </Select>
                            </FormControl>
                            <div className="activity-detail">
                                <p>Tên hoạt động: <span>Bón phân đợt 1</span></p>
                                <p>Tên vật tư sử dụng: <span>Phân hữu cơ ADC</span></p>
                                <p>Số lượng: <span>2 bao</span></p>
                                <p>Đơn giá: <span>20000vnd/kg</span></p>
                                <p>Thành tiền: <span>40000vnd</span></p>
                                <p>Tình hình sinh trưởng của lúa: <span>Lúa đang trong giai đoạn phát triển, cây cao 5cm.</span></p>
                            </div>
                        </div>
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
    );
}

export default Detail;