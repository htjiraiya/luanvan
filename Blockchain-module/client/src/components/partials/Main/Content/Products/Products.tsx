import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './Product-item/Product-item'
import "./Products.scss";
import productService from '../../../../../APIs/product.service';

type ProductType = {
    id_lohang: number,
    name_lohang: string,
    date_thuhoach: string,
    soluong_lua: number,
    status_lohang: number
}

const Products = () => {

    const [products, setProducts] = useState<ProductType[]>()

    const data = products?.map((value, index) => {
        return (
            <ProductItem
                itemPosition={products.length - 1 === 0 ? `row-start row-end` : index === 0 ? `row-start` : index === products.length - 1 ? `row-end` : `row-center`}
                productNumber={index + 1}
                productName={value.name_lohang}
                productHarvestDate={value.date_thuhoach}
                productQuantity={value.soluong_lua}
                productStatus={value.status_lohang}
                productId = {value.id_lohang}
            />
        )
    })

    useEffect(() => {
        try {
            (async () => {
                const result = await productService.getAll()
                if (result && result.status === 200) {
                    setProducts(result.data.data)
                }
            })()
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <div className='main-container center'>
            <br />
            <h1>Lô hàng</h1>
            <Link to='/main/add-product' className='btn btn-primary'>Thêm lô hàng</Link>
            <div className='title-list-transaction'>
                <div className="stt title-table text-center">
                    STT
                </div>
                <div className="name-product title-table text-center">
                    Tên lô
                </div>
                <div className="quantity-product title-table text-center">
                    Số lượng
                </div>
                <div className="date-product title-table text-center">
                    Dấu thời gian
                </div>
                <div className="status title-table text-center">
                    Trạng thái
                </div>
                <div className="control title-table text-center">
                    Hành động
                </div>
            </div>
            {data}
        </div>
    );
};

export default Products;