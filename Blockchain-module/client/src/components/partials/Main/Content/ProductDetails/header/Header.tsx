import React from 'react'
import './Header.scss'

type PropsType = {
    product: any
}

function Header({product}: PropsType) {
    return (
        <div className='product-header'>
            <p className='name'>{product.name_lohang}</p>
            <p className='number'>{product.id_lohang}</p>
            <p className='status'>{product.status_lohang ? 'Đã bán' : 'Chưa bán'}</p>
        </div>
    );
}

export default Header