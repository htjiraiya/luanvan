import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './Main.scss';
import Menu from '../../Partials/Main/Menu/Menu';
import Start from '../../Partials/Main/Start/Start';
import Transactions from '../../Partials/Main/Transactions/Transactions';
import Products from '../../Partials/Main/Products/Products';
import Logs from '../../Partials/Main/Logs/Logs';
import Procedures from '../../Partials/Main/Procedures/Procedures';
import Charts from '../../Partials/Main/Charts/Charts';
import Profile from '../../Partials/Main/Profile/Profile';


function Main() {
    return (
        <div className='main-component'>
            <Menu/>
            <Routes>
                <Route path='/' element={<Start/>}></Route>
                <Route path='/transactions' element={<Transactions/>}></Route>
                <Route path='/logs' element={<Logs/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/procedures' element={<Procedures/>}></Route>
                <Route path='/charts' element={<Charts/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
            </Routes>
        </div>
    );
}

export default Main;