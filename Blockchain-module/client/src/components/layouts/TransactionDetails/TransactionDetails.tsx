import React from 'react'
import './TransactionDetail.scss'
import Verify from '../../partials/transaction-details/verify/Verify';
import Description from '../../partials/transaction-details/description/Description'

function TransactionDetails() {
    return (
        <div className="transaction-detail-wrapper">
            <div className="transaction-detail-header">
                <i className="fa-solid fa-chevron-left"></i>
                <p>Chi tiết giao dịch</p>
            </div>
            <div className="transaction-body">
                <div className="transaction-image">
                    <img src="/img/test-img.png" alt="" />
                    <span></span>
                </div>
                <div className="transaction-content">
                    <Verify></Verify>
                    <Description></Description>
                </div>
            </div>
        </div>
    );
}

export default TransactionDetails;