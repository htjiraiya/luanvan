import React from 'react';
import LogItem from './Log-item/Log-item';
import "./Logs.scss";

const Logs = () => {
    return (
        <div className='main-container center'>
            <br />
            <h1>Giao dịch</h1>
            <button className='btn btn-primary'>Thêm giao dịch</button>
            <div className='title-list-transaction'>
                <div className="stt title-table text-center">
                    STT
                </div>
                <div className="name-season title-table text-center">
                    Tên vụ mùa
                </div>
                <div className="date-season title-table text-center">
                    Thời gian
                </div>
                <div className="status title-table text-center">
                    Trạng thái
                </div>
                <div className="control title-table text-center">
                    Hành động
                </div>
            </div>
            <LogItem itemPosition='row-start'/>
            <LogItem itemPosition='row-between'/>
            <LogItem itemPosition='row-end'/>
        </div>
    );
};

export default Logs;