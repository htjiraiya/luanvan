import React from 'react';
import './NotFound.scss';

function NotFound() {
    return (
        <div className='not-found'>
            <img src ='/img/404-error.svg' alt=''/>
            <h1>Lỗi! Không tìm thấy trang web.</h1>
        </div>
    );
}

export default NotFound;