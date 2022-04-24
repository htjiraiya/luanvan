import React from 'react';
import "./Product-item.scss";

interface propsObj {
    itemPosition: string
}

const ProductItem = (props: propsObj) => {
    const { itemPosition } = props;

    return (
        <div className={`product-item ${itemPosition}`}>
            <div className="stt-content content-table text-center text-secondary">
                1
            </div>
            <div className="name-product-content content-table text-center text-secondary">
                Lúa vụ thu đông (2022)
            </div>
            <div className="quantity-product-content content-table text-center text-secondary">
                10 (Tắn)
            </div>
            <div className="date-product-content content-table text-center text-secondary">
                22-4-2022
            </div>
            <div className="status-content content-table text-center text-secondary">
                Chờ xác nhận
            </div>
            <div className="control-content text-center">
                <button className='btn btn-primary btn-responsive'>Xem thêm</button>
            </div>
        </div>
    );
};

export default ProductItem;