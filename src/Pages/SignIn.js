import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthApi from '../api/AuthApi';
import swal from 'sweetalert';

const SignInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        AuthApi.signIn(data)
            .then((response) => {
                const user = JSON.stringify(response.data);
                if ((response.data.user.role) == 0) {
                    setTimeout(() => {
                        history.push('/');
                    }, 1000)
                } else if ((response.data.user.role) == 1) {
                    setTimeout(() => {
                        history.push('/admin/dashboard');
                    }, 1000)
                };
                localStorage.setItem('user', user);
            }).catch((error) => {
                if (error.response) {
                    swal("Error!", `${error.response.data.error}`, "error");
                }
            });
        swal("Success!", "Đăng nhập thành công!", "success");
    }
    return (
        <form id="signIn" onSubmit={handleSubmit(onSubmit)} >
            <div className="form-group">
                <input type="email" className="form-control form-control-user" id="email" aria-describedby="emailHelp" placeholder="Email" {...register('email')} />
                <i><span id="emailErr" style={{ color: 'red' }} /></i>
            </div>
            <div className="form-group">
                <input type="password" className="form-control form-control-user" id="password" placeholder="Password" {...register('password')}/>
                <i><span id="passwordErr" style={{ color: 'red' }} /></i>
            </div>
            <button href="index.html" type="submit" className="btn btn-success btn-user btn-block mb-3">
                Đăng nhập
            </button>
            <hr />
            <a href="index.html" className="btn btn-danger btn-user btn-block">
                <i className="fab fa-google fa-fw" /> Đăng nhập với Google
            </a>
            <a href="index.html" className="btn btn-primary btn-user btn-block mb-3">
                <i className="fab fa-facebook-f fa-fw" /> Đăng nhập với Facebook
            </a>
        </form>
    )
}

const SignIn = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/xshop-e4d14.appspot.com/o/images%2Fcreate-account-office.jpeg?alt=media&token=fac68988-0570-415f-b71b-18ac20c65750" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Đăng nhập</h1>
                                        </div>
                                        <SignInForm></SignInForm>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Quên mật khẩu?</a>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to="/signup">Tạo tài khoản mới!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignIn
