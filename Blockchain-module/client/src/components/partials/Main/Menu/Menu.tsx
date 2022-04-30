import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import $ from 'jquery';
import { updateShowMenu } from '../../../../Redux/Actions/Menu';
import './Menu.scss';

const Menu = () => {
    //--------------------other-------------------//
    const navigate = useNavigate();

    //-------------------redux--------------------//
    const dispatch = useDispatch();

    //--------------------state-------------------//
    const [active, setActive] = useState<boolean[]>([false, false, false, false, false]);
    const [hideMenu, setHideMenu] = useState<boolean>(() => {
        let result = false;
        if (($(window).width() as number) <= 820) {
            result = true;
        }
        return result;
    });

    //------------------life cycle---------------//
    useEffect(() => {
        //show active in item menu
        const currentPathArr = window.location.pathname.split('/');
        switch (currentPathArr[2]) {
            case '':
                handleClick(0);
                break;

            case 'logs':
                handleClick(1);
                break;

            case 'products':
                handleClick(2);
                break;

            case 'procedures':
                handleClick(3);
                break;

            case 'charts':
                handleClick(4);
                break;

            case 'profile':
                handleClick(5);
                break;

            default:
                handleClick(0);
        }

        //set show or hide menu
        if (($(window).width() as number) <= 820) {
            setHideMenu(true);
        } else {
            setHideMenu(false)
            const updateShowMenuAction = updateShowMenu(false);
            dispatch(updateShowMenuAction);
        }
    }, []);

    useEffect(() => {
        //animation for hide menu
        $('.menu-component').animate({
            width: hideMenu ? '5rem' : '25rem'
        });
    }, [hideMenu]);

    //-------------------handle------------------//
    const handleClick = (position: number) => {
        //handle animation
        if (active[position]) {
            return;
        }

        const index = active.findIndex(element => element);
        const activeChange = [...active];
        activeChange[position] = true;
        activeChange[index] = false;
        setActive(activeChange);
    }

    const clearActive = () => {
        const index = active.findIndex(element => element);
        const activeChange = [...active];
        activeChange[index] = false;
        setActive(activeChange);
    }

    const handleLogout = () => {
        //delete token
        navigate('/login');
    }

    const handleHideMenu = () => {
        const isHide = hideMenu;
        setHideMenu(!isHide);

        if (($(window).width() as number) > 820) {
            const updateShowMenuAction = updateShowMenu(!isHide);
            dispatch(updateShowMenuAction);
        }
    }

    //----------------jquery--------------------//
    // $(window).resize(() => {
    //     if (($(window).width() as number) <= 820) {
    //         setHideMenu(true);
    //     } else {
    //         setHideMenu(false)
    //         const updateShowMenuAction = updateShowMenu(false);
    //         dispatch(updateShowMenuAction);
    //     }
    // });

    return (
        <div className={`menu-component ${hideMenu ? 'hide-menu' : ''}`}>

            <div className="logo-app">
                <Link to="/main" onClick={clearActive}>
                    <img
                        src="/images/logo/E-Agriculture.png"
                        alt="Logo"
                        className='img-logo-menu'
                    />
                </Link>
                <Link to="/main" onClick={clearActive}>
                    <h3 className='text-success text-center'>E-Agriculture</h3>
                </Link>
            </div>
            <div className="logo-menu">
                <div
                    className="icon-menu"
                    onClick={() => handleHideMenu()}
                >
                    <i className="fa-solid fa-bars"></i>
                </div>

                <span className='text-menu'>MENU</span>
            </div>
            <Link to='/main/profile' className='text-dark'>
                <div
                    className={`item-function ${active[5] ? 'active' : ''}`}
                    onClick={() => handleClick(5)}
                >
                    <i className="fa-solid fa-user custom-icon"></i>
                    <span className='text-function'>Thông tin chung</span>
                </div>
            </Link>
            <Link to='/main/transactions' className='text-dark'>
                <div
                    className={`item-function ${active[0] ? 'active' : ''}`}
                    onClick={() => handleClick(0)}
                >
                    <i className="fa-solid fa-globe custom-icon"></i>
                    <span className='text-function'>Giao dịch</span>
                </div>
            </Link>
            <Link to='/main/products' className='text-dark'>
                <div
                    className={`item-function ${active[2] ? 'active' : ''}`}
                    onClick={() => handleClick(2)}
                >
                    <i className="fa-brands fa-product-hunt custom-icon"></i>
                    <span className='text-function'>Lô hàng</span>
                </div>
            </Link>
            <Link to='/main/procedures' className='text-dark'>
                <div
                    className={`item-function ${active[3] ? 'active' : ''}`}
                    onClick={() => handleClick(3)}
                >
                    <i className="fa-solid fa-arrow-down-a-z custom-icon"></i>
                    <span className='text-function'>Quy trình</span>
                </div>
            </Link>
            <Link to='/main/charts' className='text-dark'>
                <div
                    className={`item-function ${active[4] ? 'active' : ''}`}
                    onClick={() => handleClick(4)}
                >
                    <i className="fa-solid fa-chart-area custom-icon"></i>
                    <span className='text-function'>Biểu đồ sản lượng lúa</span>
                </div>
            </Link>
            <Link to="/" className='bottom-item'>
                <div
                    className="item-function"
                    onClick={() => handleLogout()}
                >
                    <i className="fa-solid fa-right-from-bracket custom-icon text-danger"></i>
                    <span className='text-function text-danger'>Đăng xuất</span>
                </div>
            </Link>
        </div>
    );
};

export default Menu;