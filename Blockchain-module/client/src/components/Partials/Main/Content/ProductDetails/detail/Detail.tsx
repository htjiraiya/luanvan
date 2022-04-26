import React from 'react'
import { Row, Table, Cell } from '../../../../features/table/Table'
import './Detail.scss'

function Detail() {
    return (
        <div className="product-detail">
            <p className="title">Chi tiết</p>
            <div className="generate">
                <p className="seeds">
                    Giống lúa: <span>Đài thơm 8</span>
                </p>
                <p className="quantity">
                    Số lượng: <span>100 tấn</span>
                </p>
                <p className="season">
                    Mùa vụ: <span>Đông-xuân</span>
                    <p className="season-detail">Xem chi tiết mùa vụ</p>
                </p>
                <p className="deli-time">
                    Thời gian giao nhận: <span>4h 22-4-2022</span>
                </p>
                <p className="deli-place">
                    Nơi giao nhận: <span>HTX Bình Minh</span>
                </p>
                
                <p className="produce-place">
                    Nơi sản xuất: <span>HTX Bình Minh</span>
                </p>
            </div>
            <div className="agric-material">
                <p className="agric-material-title">Vật tư nông nghiệp:</p>
                <Table className="material-table">
                    <Row className="row">
                        <Cell header className="column">STT</Cell>
                        <Cell header className="column">Tên vật tư</Cell>
                        <Cell header className="column">Số lượng</Cell>
                        <Cell header className="column">Đơn giá</Cell>
                    </Row>
                    
                    <Row className="row">
                        <Cell className="column">1</Cell>
                        <Cell className="column">Phân bón</Cell>
                        <Cell className="column">10</Cell>
                        <Cell className="column">428000 </Cell>
                    </Row>

                    <Row className="row">
                        <Cell className="column">2</Cell>
                        <Cell className="column">Thuốc trừ cỏ</Cell>
                        <Cell className="column">50</Cell>
                        <Cell className="column">300000</Cell>
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