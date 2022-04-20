import React from 'react';
import './ProductDetail.scss'
import Header from '../../partials/product-details/header/Header'
import Detail from '../../partials/product-details/detail/Detail';

function ProductDetails() {
    return (
        <div className="product-detail-wrapper">
            <div className="product-detail-header">
                <i className="fa-solid fa-chevron-left"></i>
                <p>Chi tiết lô hàng</p>
            </div>
            <div className="product-body">
                <div className="product-image">
                    <img src="/img/test-image-2.jpg" alt="" />
                    <span></span>
                </div>
                <div className="product-content">
                    <Header></Header>
                    <Detail></Detail>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;