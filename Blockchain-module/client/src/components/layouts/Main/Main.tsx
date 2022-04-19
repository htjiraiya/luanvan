import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from '../../partials/menu/menu';
import Start from '../../partials/start/start';
import Transactions from '../../partials/transactions/transactions';
import Products from '../../partials/products/products';
import Logs from '../../partials/logs/logs';
import NotFound from '../NotFound/NotFound';


function Main() {
    return (
        <div className='main-component'>
            <Menu/>
            <Routes>
                <Route path='/' element={<Start/>}></Route>
                <Route path='/transactions' element={<Transactions/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/logs' element={<Logs/>}></Route>
            </Routes>
        </div>
    );
}

export default Main;