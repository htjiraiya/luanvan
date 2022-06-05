import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const SendProduct = () => {
    //------state-------//
    const [isActive, setIsActive] = useState(false)

    //------handle------//
    const HandleClickHeader = () => {
        setIsActive(!isActive);

        //animation show child menu
        $('#send-product').animate({
            height: 'toggle'
        });
    }
    return (
        <div className="menu-item">
        {/* ----------- row 3 -------------- */}
        <div
            className={`header-menu-item ${isActive ? 'active' : ''}`}
            onClick={HandleClickHeader}   
        >
            <div className="text-header-menu-item">
                <i className="fa-solid fa-truck-fast"></i>
                Lô hàng giao
            </div>
            <div className="icon-header-menu-item">
                <i className="fa-solid fa-caret-right"></i>
            </div>
        </div>
        <div className={`child-menu-item ${isActive ? 'show' : 'hide'}`} id="send-product">
            <Link className='format-link' to='/'>
                <div className="child-item-menu-item">
                    Lô hàng cá nhân
                </div>
            </Link>
            <Link className='format-link' to='/'>
                <div className="child-item-menu-item">
                    Tất cả lô hàng
                </div>
            </Link>
        </div>
    </div>
    );
};

export default SendProduct;