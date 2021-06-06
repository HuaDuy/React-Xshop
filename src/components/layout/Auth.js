import React from 'react'
import { NavLink } from 'react-router-dom';

const Auth = () => {
    const { user } = JSON.parse(localStorage.getItem('user') || '{}');
    return (
        <div>
            {user
                ?
                <div className="dropdown">
                    <button className="dropbtn py-2 d-none d-md-inline-block">{user.name}</button>
                    <div div className="dropdown-content">
                        <NavLink className="py-2 d-none d-md-inline-block logout" to={"/profile/" + user._id}>Thông tin</NavLink>
                        <NavLink className="py-2 d-none d-md-inline-block" to="/signout">Đăng xuất</NavLink>
                    </div>
                </div>
                :
                <div className="dropdown">
                    <button className="dropbtn py-2 d-none d-md-inline-block">Tài Khoản</button>
                    <div div className="dropdown-content">
                        <NavLink className="py-2 d-none d-md-inline-block logout" to="/signin">Đăng nhập</NavLink>
                        <NavLink className="py-2 d-none d-md-inline-block" to="/signup">Đăng kí</NavLink>
                    </div>
                </div>}
        </div>
    )
}

export default Auth
