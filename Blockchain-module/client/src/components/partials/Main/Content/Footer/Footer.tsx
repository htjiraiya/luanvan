import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>

                <ul className="nav col-md-6 justify-content-end">
                    <li className="nav-item"><Link to="/main" className="nav-link px-2 text-muted">Trang chủ</Link></li>
                    <li className="nav-item"><Link to="/main/transactions" className="nav-link px-2 text-muted">Giao dịch</Link></li>
                    <li className="nav-item"><Link to="/main/products" className="nav-link px-2 text-muted">Lô hàng</Link></li>                </ul>
            </footer>
        </div>
    );
};

export default Footer;