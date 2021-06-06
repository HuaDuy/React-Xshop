import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import AuthApi from '../api/AuthApi';
import swal from 'sweetalert';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const history = useHistory();
    const onSubmit = (data, e) => {
        AuthApi.signUp(data);
        swal("Success!", "Tạo tài khoản thành công!", "success");
        setTimeout( () => {
            history.push('/signin');
        }, 1000)
    }
    const SignUpForm = () => {
        return (
            <form id="signUp" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row">
                    <div className="col-sm-12 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" id="name" placeholder="Tên" { ...register('name') }/>
                        <i><span id="name" style={{ color: 'red' }} /></i>
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control form-control-user" id="email" placeholder="Địa chỉ Email" { ...register('email') }/>
                    <i><span id="emailErr" style={{ color: 'red' }} /></i>
                </div>
                <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" className="form-control form-control-user" id="password" placeholder="Mật khẩu" { ...register('password') }/>
                        <i><span id="passwordErr" style={{ color: 'red' }} /></i>
                    </div>
                    <div className="col-sm-6">
                        <input type="password" className="form-control form-control-user" id="rePassword" placeholder="Nhập lại mật khẩu"/>
                        <i><span id="rePasswordErr" style={{ color: 'red' }} /></i>
                    </div>
                </div>
                <button type="submit" className="btn btn-success btn-user btn-block mb-3">
                    Tạo tài khoản
                </button>
                <hr />
                <a href="index.html" className="btn btn-danger btn-user btn-block">
                    <i className="fab fa-google fa-fw" /> Đăng nhập với google
                </a>
                <a href="index.html" className="btn btn-primary btn-user btn-block">
                    <i className="fab fa-facebook-f fa-fw mb-3" /> Đăng nhập với facebook
                </a>
            </form>
        )
    }
    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image">
                            <img src="https://firebasestorage.googleapis.com/v0/b/xshop-e4d14.appspot.com/o/images%2Fcreate-account-office.jpeg?alt=media&token=fac68988-0570-415f-b71b-18ac20c65750" />
                        </div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Tạo tài khoản mới</h1>
                                </div>
                                <SignUpForm />
                                <hr />
                                <div className="text-center">
                                    <Link className="small" to="/signin">Bạn đã có tài khoản? Đăng nhập!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp
