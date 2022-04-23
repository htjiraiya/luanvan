import React from 'react';
import "./Procedure-item.scss";

interface propsObj {
    itemPosition: string
}

const ProcedureItem = (props: propsObj) => {
    const { itemPosition } = props;

    return (
        <div className={`procedure-item ${itemPosition}`}>
            <div className="stt-content content-table text-center text-secondary">
                1
            </div>
            <div className="no-procedure-content content-table text-center text-secondary">
                123456789
            </div>
            <div className="name-procedure-content content-table text-center text-secondary">
                Lúa vụ thu đông (2022)
            </div>
            <div className="status-content content-table text-center text-secondary">
                Chờ xác nhận
            </div>
            <div className="control-content text-center">
                <button className='btn btn-primary'>Xem chi tiết</button>
            </div>
        </div>
    );
};

export default ProcedureItem;