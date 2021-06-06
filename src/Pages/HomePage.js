import React from 'react';
import Product from '../components/user/Product';
const HomePage = (props) => {
    console.log(props);
    return (
        <main>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">XSHOP</h1>
                    <p className="lead fw-normal">Uy tín, chất lượng hàng đầu Việt Nam</p>
                </div>
                <div className="product-device shadow-sm d-none d-md-block" />
                <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
            </div>
            <div className="container"></div>
            <Product {...props}></Product>
        </main>

    )
}

export default HomePage
