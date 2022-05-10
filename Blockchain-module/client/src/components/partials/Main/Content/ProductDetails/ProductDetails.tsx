import React, { useEffect, useState } from 'react';
import './ProductDetail.scss'
import Detail from './detail/Detail'
import Header from './header/Header'
import { useParams } from 'react-router-dom'
import ProductService from '../../../../../APIs/product.service'
import { isCatchClause } from 'typescript';

function ProductDetails() {

    const [product, setProduct] = useState({
        date_thuhoach: '',
        id_lichmuavu: '',
        id_lohang: '',
        id_nhatkydongruong: '',
        id_xavien: '',
        image_lohang: '',
        name_gionglua: '',
        name_lohang: '',
        soluong_lua: '',
        status_lohang: '',
        name_lichmuavu: '',
        phanbonthuocbaove: []
    })

    const { id } = useParams()

    useEffect(() => {
        try {
            (async () => {
                const result = await ProductService.getById(Number(id))
                if (result) {
                    setProduct(result.data.data)
                    console.log(result.data.data)
                }
            })()
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <div className="product-detail-wrapper responsive-details-page">
            <div className="product-detail-header">
                <i className="fa-solid fa-chevron-left"></i>
                <p>Chi tiết lô hàng</p>
            </div>
            <div className="product-body">
                <div className="product-image">
                    <img src="/img/test-image-2.jpg" alt="" />
                    <span></span>
                </div>
                <div className="product-content">
                    <Header product={product}></Header>
                    <Detail product={product}></Detail>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;