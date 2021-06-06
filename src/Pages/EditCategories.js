import React from 'react'
import { useParams } from 'react-router-dom';
import { NavLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EditCategories = (props) => {
    let { id } = useParams();
    const { categories, onUpdateCate } = props;
    const { 0: category } = categories.filter((item) => item._id === id);
    let history = useHistory();
    const { register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        const cate = new FormData();
        cate.append('name',data.name); 
        onUpdateCate(id, cate);
        history.push('/admin/categories') ;
    }
    return (
        <div className="container">
            <section className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Chỉnh Sửa Danh Mục</h3>
                </div>
                <div className="panel-body">
                    <form id="form-update" onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-group">
                            <label className="col-sm-3 control-label">Tên danh mục</label>
                            <div className="col-sm-9">
                                <input type="text" {...register('name', { required: true })} className="form-control" id="cate-name" defaultValue={category.name} />
                            </div>
                        </div>
                        <hr />
                        <div className="form-group">
                            <div className="col-sm-offset-3 col-sm-9">
                                <button type="submit" className="btn btn-success">Lưu Thay Đổi</button>
                                <NavLink to="/admin/categories" className="btn btn-danger" style={{ marginLeft: 100 }}>Về Trang Quản Trị</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    )
}

export default EditCategories
