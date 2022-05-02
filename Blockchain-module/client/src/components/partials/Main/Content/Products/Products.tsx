import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './Product-item/Product-item';
import "./Products.scss";

const Products = () => {
    return (
        <div className='main-container center'>
            <br />
            <h1>Lô hàng</h1>
            <Link to='/main/add-product' className='btn btn-primary'>Thêm lô hàng</Link>
            <div className='title-list-transaction'>
                <div className="stt title-table text-center">
                    STT
                </div>
                <div className="name-product title-table text-center">
                    Tên lô
                </div>
                <div className="quantity-product title-table text-center">
                    Số lượng
                </div>
                <div className="date-product title-table text-center">
                    Dấu thời gian
                </div>
                <div className="status title-table text-center">
                    Trạng thái
                </div>
                <div className="control title-table text-center">
                    Hành động
                </div>
            </div>
            <ProductItem itemPosition='row-start'/>
            <ProductItem itemPosition='row-between'/>
            <ProductItem itemPosition='row-end'/>
        </div>
    );
};

export default Products;