import React from 'react';
import { Link } from 'react-router-dom';
import TransactionItem from './Transaction-item/Transaction-item';
import "./Transactions.scss";

const Transactions = () => {
    return (
        <div className='main-container center'>
            <br />
            <h1>Giao dịch</h1>
            <Link to='/main/add-transaction'  className='btn btn-primary'>Thêm giao dịch</Link>
            <div className='title-list-transaction'>
                <div className="stt title-table text-center">
                    STT
                </div>
                <div className="no-transaction title-table text-center">
                    Số giao dịch
                </div>
                <div className="name-product title-table text-center">
                    Tên lô hàng
                </div>
                <div className="date-transaction title-table text-center">
                    Ngày giao dịch
                </div>
                <div className="status title-table text-center">
                    Trạng thái
                </div>
                <div className="control title-table text-center">
                    Hành động
                </div>
            </div>
            <TransactionItem itemPosition='row-start'/>
            <TransactionItem itemPosition='row-between'/>
            <TransactionItem itemPosition='row-end'/>
        </div>
    );
};

export default Transactions;