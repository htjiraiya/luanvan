import React from 'react'
import './Verify.scss'

function Verify() {
    return (
        <div className='transaction-verify'>
            <p className='name'>Giao dịch mua bán lúa</p>
            <p className='number'>H37462836832</p>
            <p className='status'>Đã xác thực</p>
            <div className="verify">
                <div className="farmer">
                    <p className='title'>Hộ sản xuất xác nhận</p>
                    <p className='sign buyer-verify'>Đã xác nhận</p>
                    <p className="time">13-4-2022</p>
                </div>
                <div className="cooperation">
                    <p className='title'>Hợp tác xã xác nhận</p>
                    <p className='sign cooperation-verify'>Đã xác nhận</p>
                    <p className="time">12-4-2022</p>
                </div>
                <div className="buyer">
                    <p className='title'>Thương lái xác nhận</p>
                    <p className='sign buyer-verify'>Đã xác nhận</p>
                    <p className="time">13-4-2022</p>
                </div>
            </div>
        </div>
    );
}

export default Verify;