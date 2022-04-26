import React from 'react';
import './Start.scss';

const Start = () => {
    return (
        <div className='start'>
            <div className="introduction">
                <img 
                    src="/images/logo/E-Agriculture.png" 
                    alt="Logo" 
                    className='img-logo'
                />
                <h2 className='text-center text-success'>E-Agriculture</h2>
                <br /><br />
                <h1 className='text-center'>
                    Hệ thống quản lý và truy xuất nguồn gốc
                </h1>
                <br />
                <h3 className='text-center'>Chào mừng:<br/> Mai Trong Nhan</h3>
            </div>
        </div>
    );
};

export default Start;