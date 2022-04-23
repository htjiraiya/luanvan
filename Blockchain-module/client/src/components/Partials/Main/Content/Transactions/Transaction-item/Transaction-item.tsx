import React from 'react';
import "./Transaction-item.scss";

interface propsObj {
    itemPosition: string
}

const TransactionItem = (props: propsObj) => {
    const { itemPosition } = props;

    return (
        <div className={`transaction-item ${itemPosition}`}>
            <div className="stt-content content-table text-center text-secondary">
                1
            </div>
            <div className="no-transaction-content content-table text-center text-secondary">
                123456789
            </div>
            <div className="name-product-content content-table text-center text-secondary">
                Lúa vụ thu đông (2022)
            </div>
            <div className="date-transaction-content content-table text-center text-secondary">
                22-4-2022
            </div>
            <div className="status-content content-table text-center text-secondary">
                Chờ xác nhận
            </div>
            <div className="control-content text-center">
                <button className='btn btn-primary'>Cập nhật</button>
            </div>
        </div>
    );
};

export default TransactionItem;