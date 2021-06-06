import React from 'react';

const Product = ({ products }) => {
    const result = products.map(item => {
        return <div key={item._id} className="bg-light col-6 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center show overflow-hidden">
            <div className="bg-white shadow-sm mx-auto" style={{ width: '80%', height: 800, borderRadius: '21px 21px 0 0' }}>
                <div className="my-3 p-3">
                    <h2 className="display-5 text-2xl font-bold">{item.name}</h2>
                    <p className="lead">GIÁ : {item.price}Đ</p>
                    <a className="btn btn-outline-secondary" href={"/products/" + item._id}>SHOW DETAIL</a>
                </div>
                <center>
                    <img src={"http://localhost:4000/api/product/photo/" + item._id} alt={item.name} />
                </center>
            </div>
        </div>
    });
    return (
        <div className="content">
            <div className="row" id="products">
                {result}
            </div>
        </div>
    )
}

export default Product
