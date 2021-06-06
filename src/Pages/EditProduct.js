import React from 'react'
import { useParams } from 'react-router-dom';
import { NavLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EditProduct = (props) => {
    let { id } = useParams();
    const { products, categories, onUpdateProduct } = props;
    const { 0: product} = products.filter((item) => item._id === id);
    let history = useHistory();
    const { register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        const product = new FormData();
        product.append('name',data.name); 
        product.append('price',data.price); 
        product.append('quantity',data.quantity); 
        product.append('description',data.description); 
        product.append('photo',data.photo[0]); 
        product.append('category',data.category); 
        onUpdateProduct(id, product);
        history.push('/admin/product') ;
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <section className="panel panel-default col-xl-8">
                    <div className="panel-body">
                        <p className="flex items-center justify-between p-4 mb-8 text-xl font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            Chỉnh sửa sản phẩm
                        </p>
                        <form id="form-update" onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Tên sản phẩm <i style={{ color: 'red' }}>(*)</i></label>
                                <i><span id="nameErr" style={{ color: 'red' }} /></i>
                                <div className="col-sm-9">
                                    <input {...register('name', { required: true })} type="text" className="form-control" id="product-name" defaultValue={product.name} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Giá <i style={{ color: 'red' }}>(*)</i></label>
                                <i><span id="priceErr" style={{ color: 'red' }} /></i>
                                <div className="col-sm-9">
                                    <input type="number" {...register('price', { required: true })} className="form-control" defaultValue={product.price} id="product-price" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Mô tả </label>
                                <div className="col-sm-9">
                                    <textarea {...register('description', { required: true })} style={{ height: 200 }} className="form-control" id="product-description" defaultValue={product.description} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Số lượng <i style={{ color: 'red' }}>(*)</i></label>
                                <i><span id="quantityErr" style={{ color: 'red' }} /></i>
                                <div className="col-sm-3">
                                    <input type="number" {...register('quantity', { required: true })} className="form-control" defaultValue={product.quantity} id="product-quantity" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="name" className="col-sm-3 control-label">Hình ảnh sản phẩm <i style={{ color: 'red' }}>(*)</i></label>
                                    <div className="col-sm-3">
                                        <img src={"http://localhost:4000/api/product/photo/" +product._id} />
                                        <label className="control-label small">Định dạng (jpg/png):</label>
                                        <input type="file" {...register('photo', { required: true })} id="product-image" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Danh mục <i style={{ color: 'red' }}>(*)</i></label>
                                    <div className="col-sm-3">
                                        <select className="form-control" id="cate-product">
                                            {categories.map(category => 
                                                <option {...register('category', { required: true })} key={categories._id} value={category._id}>{category.name}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <hr />
                                <div className="form-group">
                                    <div className="col-sm-offset-3 col-sm-9">
                                        <button type="submit" className="btn btn-success">Lưu Chỉnh Sửa</button>
                                        <NavLink to="/admin/product" className="btn btn-danger" style={{ marginLeft: 100 }}>Về Trang Quản Trị</NavLink>
                                    </div>
                                </div>
                            </div></form>
                    </div></section>
            </div>
        </div>

    )
}

export default EditProduct
