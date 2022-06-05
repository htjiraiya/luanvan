import React from 'react';
import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import Menu from '../../partials/menu/menu';
import Footer from '../../partials/footer/footer';
import Dashboard from '../../partials/dashboard/dashboard';
import Products from '../../partials/products/products';
import AddProduct from '../../partials/add-product/add-product';
import ProductDetails from '../../partials/product-details/product-details';
import TransactionDetails from '../../partials/transaction-details/transaction-details';
import Transactions from '../../partials/transactions/transactions';
import AddTransaction from '../../partials/add-transaction/add-transaction';
import Profile from '../../partials/profile/profile';
import NotFound from '../not-found/not-found';
import Background from '../../partials/background/background';
import Header from '../../partials/header/header';
import './main.scss';

const Main = () => {
    return (
        <>
            <Menu />
            <div className="main-wrapper">
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route path='/add-product' element={<AddProduct />}></Route>
                        <Route path='/product-details' element={<ProductDetails />}></Route>
                        <Route path='/transactions' element={<Transactions />}></Route>
                        <Route path='/add-transaction' element={<AddTransaction />}></Route>
                        <Route path='/transaction-details' element={<TransactionDetails />}></Route>
                        <Route path='/profile' element={<Profile />}></Route>
                        <Route path='/' element={<Navigate to='/main/dashboard' />}></Route>
                        <Route path='/*' element={<NotFound />}></Route>
                    </Routes>
                    <Footer />
                </div>
            </div>
            <Background />
        </>
    );
};

export default Main;