import React from 'react';
import "./Log-item.scss";

interface propsObj {
    itemPosition: string
}

const LogItem = (props: propsObj) => {
    const { itemPosition } = props;

    return (
        <div className={`log-item ${itemPosition}`}>
            <div className="stt-content content-table text-center text-secondary">
                1
            </div>
            <div className="name-season-content content-table text-center text-secondary">
                Lúa vụ thu đông (2022)
            </div>
            <div className="date-season-content content-table text-center text-secondary">
                22-4-2022
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

export default LogItem;