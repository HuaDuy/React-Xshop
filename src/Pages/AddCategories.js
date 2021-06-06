import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const AddCategories = (props) => {
    let history = useHistory();
    const { onAddCate } = props;
    const { register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        const cate = new FormData();
        cate.append('name',data.name); 
        onAddCate(cate);
        history.push('/admin/categories') ;
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <main className="h-full pb-16 col-xl-8 ">
                    <div className="container px-6 mx-auto grid pt-5">
                        {/* CTA */}
                        <p className="flex items-center justify-between p-4 mb-8 text-xl font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                            Thêm danh mục:
        </p>
                        <label className="block text-sm">
                            <form id="form-add" className="form-group" onSubmit={handleSubmit(onSubmit)}>
                                <p>Tên danh mục: <i style={{ color: 'red' }}>(*)</i>  &nbsp;</p>
                                <i><span id="cateErr" style={{ color: 'red' }} /></i>
                                <input {...register('name', { required: true })} id="cate-name" type="text" className="form-control border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200" />
                                <button type="submit" className="btn btn-success">Thêm</button>
                                <a href="/#/listcate" className="btn btn-danger">Về trang quản trị</a>
                            </form>
                        </label></div></main>
            </div>
        </div>

    )
}

export default AddCategories
