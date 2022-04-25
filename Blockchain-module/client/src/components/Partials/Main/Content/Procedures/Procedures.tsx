import React from 'react';
import ProcedureItem from './Procedure-item/Procedure-item';
import "./Procedures.scss";

const Procedures = () => {
    return (
        <div className='main-container center'>
            <br />
            <h1>Quy trình</h1>
            <button className='btn btn-primary'>Thêm quy trình</button>
            <div className='title-list-transaction'>
                <div className="stt title-table text-center">
                    STT
                </div>
                <div className="no-procedure title-table text-center">
                    Số lô hàng
                </div>
                <div className="name-procedure title-table text-center">
                    Tên lô hàng
                </div>
                <div className="status title-table text-center">
                    Trạng thái
                </div>
                <div className="control title-table text-center">
                    Hành động
                </div>
            </div>
            <ProcedureItem itemPosition='row-start'/>
            <ProcedureItem itemPosition='row-between'/>
            <ProcedureItem itemPosition='row-end'/>
        </div>
    );
};

export default Procedures;