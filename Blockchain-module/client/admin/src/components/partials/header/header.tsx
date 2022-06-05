import { MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';
import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { MenuControlSlice } from '../../../redux/slice/menu-control.slice';
import { menuControlSelector } from '../../../redux/selectors/menu-control.selector';

const Header = () => {
    const menuStatus = useSelector(menuControlSelector)
    const dispatch = useDispatch()

    //---------handle----------//
    const handleClickMenu = () => {
        dispatch(
            MenuControlSlice.actions.updateShowMenu(!menuStatus)
        )
    }

    return (
        <div className='header-wrapper'>
            <div className="header-col-1">
                <div className="menu-icon" onClick={handleClickMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="logo">
                    <Link className='format-link' to='/'>
                        <img className="logo-app" src='/images/LogoApp.png' alt='logo' />
                    </Link>
                    <Link className='format-link' to='/'>
                        <h3 className='text-logo-app'>
                            E-Agriculture
                        </h3>
                    </Link>
                </div>
                <div className="search">
                    <MDBInputGroup>
                        <input className='form-control' placeholder="Recipient's username" type='text' />
                        <MDBBtn outline color='success'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </MDBBtn>
                    </MDBInputGroup>
                </div>
            </div>
            <div className="header-col-2">
                <div className="QR">
                    <i className="fa-solid fa-qrcode"></i>
                </div>
                <div className="profile">
                    <img className='avatar' src="/images/background.jpg" alt="avatar" />
                </div>
            </div>
        </div>
    );
};

export default Header;