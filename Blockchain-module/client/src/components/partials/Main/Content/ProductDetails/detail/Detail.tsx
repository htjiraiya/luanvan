import React, { useEffect, useState } from 'react'
import { Row, Table, Cell } from '../../../../features/table/Table'
import './Detail.scss'
import $, { cssNumber } from 'jquery'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import productService from '../../../../../../APIs/product.service'

type PropsType = {
    product: any
}

function Detail({ product }: PropsType) {

    const [activityDate, setActivityDate] = useState('')

    const [activityDateList, setActivityDateList] = useState<[{dateTradition: string, dateFormat: string}]>()

    const handleClickToShow = (e: React.MouseEvent<HTMLElement>) => {
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

    const handleChangeActivityDate = (e: SelectChangeEvent) => {

        console.log(e.target.value)
        setActivityDate(e.target.value)
    }

    useEffect(() => {
        $('.product-detail .detail-content').slideUp('.5s');
        $('.product-detail .generate-detail-item .fa-chevron-left').css('transform', 'rotateZ(-90deg)')
    }, [])

    useEffect(() => {
        (async()=> {
            const result = await productService.getActivityDateByFarmerId(2)
            if(result && result.status === 200) {
                setActivityDateList(result.data.data)
                console.log(result.data.data)
            }
        })()
    }, [])

    const activityDateOptions = activityDateList?.map((value, index) => {
        return (
            <MenuItem key={index} value={value.dateTradition}>{value.dateFormat}</MenuItem>
       )
    })

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
                        <p>Giống lúa: <span>{product.name_gionglua}</span></p>
                        <p>Số lượng: <span>{product.soluong_lua} tấn</span></p>
                        <p>Ngày thu hoạch: <span>{product.date_thuhoach}</span></p>
                        <p>Nơi sản xuất: <span>HTX Bình Minh</span></p>
                        <p>Mùa vụ: <span>{product.name_lichmuavu}</span></p>
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
                        {product.thuocbaovethucvat?.map((value: any, index: any) => {
                            return (
                                <p key={index}>
                                    {index + 1}. <span>{`${value.name_thuocbaovethucvat}, 
                                            ${value.price_thuocbaovethucvat} VND, 
                                            Số lượng: ${value.qty_thuocbaovethucvat} ${value.unit_thuocbaovethucvat}`}</span>
                                </p>
                            )
                        })}
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
                                    style={{ fontWeight: 'bold', height: '3rem' }}
                                    label="Thời gian"
                                    onChange={handleChangeActivityDate}

                                >
                                    { 
                                        activityDateOptions
                                    }
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
                        <p>Hộ sản xuất: <span>{product.fullname_xavien}</span></p>
                        <p>Địa chỉ: <span>{product.address_xavien}</span></p>
                        <p>Số điện thoại: <span>{product.phone_number_xavien}</span></p>
                        <p>Email: <span>{product.email_xavien}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;