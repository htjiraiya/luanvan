import React from 'react'
import { Row, Table, Column } from '../../features/table/Table'
import './Detail.scss'

function Detail() {
    return (
        <div className="product-detail">
            <p className="title">Chi tiết</p>
            <div className="generate">
                <p className="deli-time">
                    Thời gian giao nhận: <span>4h 22-4-2022</span>
                </p>
                <p className="seeds">
                    Giống lúa: <span>Đài thơm 8</span>
                </p>
                <p className="deli-place">
                    Nơi giao nhận: <span>HTX Bình Minh</span>
                </p>
                <p className="quantity">
                    Số lượng: <span>100 tấn</span>
                </p>
                <p className="produce-place">
                    Nơi sản xuất: <span>HTX Bình Minh</span>
                </p>
                <p className="season">
                    Mùa vụ: <span>Đông-xuân</span>
                    <p className="season-detail">Xem chi tiết mùa vụ</p>
                </p>
            </div>
            <div className="agric-material">
                <Table className="material-table">
                    <Row className="row">
                        <Column header className="column">STT</Column>
                        <Column header className="column">Tên vật tư</Column>
                        <Column header className="column">Số lượng</Column>
                        <Column header className="column">Đơn giá</Column>
                    </Row>
                    
                    <Row className="row">
                        <Column className="column">1</Column>
                        <Column className="column">Phân bón</Column>
                        <Column className="column">10</Column>
                        <Column className="column">428000</Column>
                    </Row>

                    <Row className="row">
                        <Column className="column">2</Column>
                        <Column className="column">Thuốc trừ cỏ</Column>
                        <Column className="column">50</Column>
                        <Column className="column">300000</Column>
                    </Row>
                </Table>
            </div>
            <div className="transaction-info">
                <div className="transaction-info-elm buyer">
                    <p className="title">Hộ sản xuất</p>
                    <p className="name">NGUYỄN VĂN A</p>
                    <p className="address">Ap-xa-huyen-tinh</p>
                    <p className="phone">0939305459</p>
                    <p className="email">email@gmail.com</p>
                </div>
                <div className="transaction-info-elm sender">
                    <p className="title">Thương lái</p>
                    <p className="name">LÚA MỚI</p>
                    <p className="address">Ap-xa-huyen-tinh</p>
                    <p className="phone">0939305459</p>
                    <p className="email">email@gmail.com</p>                
                </div>
            </div>
        </div>
    );
}

export default Detail;