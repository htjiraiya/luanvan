import React from 'react';
import { Link } from 'react-router-dom';
import "./Product-item.scss";

interface propsObj {
    itemPosition: string, 
    productId: number,
    productNumber: number,
    productName: string,
    productQuantity: number,
    productHarvestDate: string,
    productStatus: number
}

const ProductItem = ({ itemPosition, productNumber, productName, productQuantity, productHarvestDate, productStatus, productId}: propsObj) => {

    return (
        <div className={`product-item ${itemPosition}`}>
            <div className="stt-content content-table text-center text-secondary">
                {productNumber}
            </div>
            <div className="name-product-content content-table text-center text-secondary">
                {productName}
            </div>
            <div className="quantity-product-content content-table text-center text-secondary">
                {productQuantity} (Tấn)
            </div>
            <div className="date-product-content content-table text-center text-secondary">
                {productHarvestDate}
            </div>
            <div className="status-content content-table text-center text-secondary">
                {productStatus ? `Đã bán`: `Chưa bán`}
            </div>
            <div className="control-content text-center">
                <Link to={`/main/product-details/${productId}`}>
                    <button className='btn btn-primary btn-responsive'>Xem thêm</button>
                </Link>
                
            </div>
        </div>
    );
};

export default ProductItem;