import React from 'react';
import { NavLink } from 'react-router-dom';
import ListProduct from '../components/admin/ListProduct';

const AdminProduct = (props) => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản Lý Sản Phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <NavLink type="button" to="/admin/product/add" className="btn btn-sy btn-outline-secondary">Thêm Sản Phẩm </NavLink>
                    </div>
                </div>
            </div>
            <div className="table-responsive" id="list-product">
                <ListProduct {...props}></ListProduct>
            </div>
        </>
    )
}

export default AdminProduct
