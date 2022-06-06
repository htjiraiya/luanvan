import { MDBFile, MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import './add-product.scss';

const AddProduct = () => {
    return (
        <div className='add-product-wrapper'>
            <br />
            <h1>Thêm lô hàng</h1>
            <form action="" className='form-add-product'>
                <div className="input-product">
                    <MDBInput label='Tên lô hàng' id='form1' type='text' />
                </div>
                <br />
                <div className="input-product">
                    <MDBInput label='Tên lô hàng' id='form1' type='text' />
                </div>
                <br />
                <div className="quantity-price">
                    <div className="input-product">
                        <MDBInput label='Tên lô hàng' id='form1' type='text' />
                    </div>
                    <div className="input-product">
                        <MDBInput label='Tên lô hàng' id='form1' type='text' />
                    </div>
                </div>
                <br />
                <div className='file-container'>
                    <MDBFile label='Default file input example' id='customFile' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;