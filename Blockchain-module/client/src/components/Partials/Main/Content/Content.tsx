import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import $ from 'jquery';
import './Content.scss';
import Charts from './Charts/Charts';
import Logs from './Logs/Logs';
import Procedures from './Procedures/Procedures';
import Products from './Products/Products';
import Profile from './Profile/Profile';
import Start from './Start/Start';
import Transactions from '../Transactions/Transactions';

const Content = () => {
    //-----Redux-----//
    const menuIsShow = useSelector(store => (store as any).menu.isShow);
   
    //-----Jquery----//
    if (menuIsShow && (($(window).width() as number) > 820)) {
        $('.content-container').css('width', 'calc(100% - 5rem)');
    } else {
        $('.content-container').css('width', 'calc(100% - 25rem)');
    }


    return (
        <div className='content-container'>
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
};

export default Content;