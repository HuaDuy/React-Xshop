import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const AddProduct = (props) => {

  const { onAddProduct, categories } = props;
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const product = new FormData();
    product.append('name', data.name);
    product.append('price', data.price);
    product.append('quantity', data.quantity);
    product.append('description', data.description);
    product.append('photo', data.photo[0]);
    product.append('category', data.category);
    onAddProduct(product);
    history.push('/admin/product');
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div id="sidebar" className="col-xl-2">
        </div>
        <div className="col-xl-10">
          <section className="panel panel-default">
            <div className="panel-body">
              <p className="flex items-center justify-between p-4 mb-8 text-xl font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                Thêm Sản Phẩm:
                            </p>
              <form id="form-add" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Tên sản phẩm <i style={{ color: 'red' }}>(*)</i>  &nbsp;</label>
                  <i><span id="nameErr" style={{ color: 'red' }} /></i>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="product-name" {...register('name', { required: true })} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Giá <i style={{ color: 'red' }}>(*)</i>  &nbsp;</label>
                  <i><span id="priceErr" style={{ color: 'red' }} /></i>
                  <div className="col-sm-9">
                    <input type="number" className="form-control" id="product-price" {...register('price', { required: true })} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Mô tả</label>
                  <div className="col-sm-9">
                    <textarea className="form-control" id="product-description" {...register('description', { required: true })} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Số lượng <i style={{ color: 'red' }}>(*)</i>  &nbsp;</label>
                  <i><span id="quantityErr" style={{ color: 'red' }} /></i>
                  <div className="col-sm-3">
                    <input type="number" className="form-control" id="product-quantity" {...register('quantity', { required: true })} />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="name" className="col-sm-3 control-label">Hình ảnh sản phẩm <i style={{ color: 'red' }}>(*)</i>  &nbsp;</label>
                    <i><span id="imageErr" style={{ color: 'red' }} /></i>
                    <div className="col-sm-3">
                      <label className="control-label small">Định dạng (jpg/png):</label>
                      <input type="file" id="product-image" className="form-control" {...register('photo', { required: true })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-3 control-label">Danh mục <i style={{ color: 'red' }}>(*)</i>  &nbsp;</label>
                    <i><span id="cateErr" style={{ color: 'red' }} /></i>
                    <div className="col-sm-3">
                      <select className="form-control" id="cate-product" {...register('category', { required: true })}>
                        {categories.map(category =>
                          <option key={category._id} value={category._id}>{category.name}</option>
                        )}
                      </select>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group">
                    <div className="col-sm-offset-3 col-sm-9">
                      <button type="submit" className="btn btn-success">Thêm sản phẩm</button>
                      <NavLink to="/admin/product" className="btn btn-danger" style={{ marginLeft: '100px' }}>Về Trang Quản Trị</NavLink>
                    </div>
                  </div>
                </div></form>
            </div>
          </section>
        </div>
      </div>
    </div>

  )
}

export default AddProduct
