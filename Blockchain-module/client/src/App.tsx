import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Login from './components/layouts/Login/Login';
import Main from './components/layouts/Main/Main';
import NotFound from './components/layouts/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/main/*' element={<Main/>}></Route>
          <Route path='/' element={<Navigate to='/login'/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
