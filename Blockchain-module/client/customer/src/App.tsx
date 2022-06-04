import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import NotFault from './pages/not-fault'
import Main from './pages/main'
import Product from './pages/product'
import ProductDetail from './pages/product-detail'
import SaleDetail from './pages/sale-detail'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/product-detail/:id' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/sale-detail/:id' element={<SaleDetail></SaleDetail>}></Route>
        <Route path='/'></Route>
        <Route path='/'></Route>
        <Route path='*' element={<NotFault></NotFault>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App