import React from 'react'

const Footer = () => {
    return (
        <footer className="container py-5">
            <div className="row">
                <div className="col-2 col-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={55} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx={12} cy={12} r={10} /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" /></svg>
                    <small className="d-block mb-3 text-muted">© 2017-2021</small>
                </div>
                <div className="col-5 col-md">
                    <h3>Tổng Đài Hỗ Trợ</h3>
                    <br />
                    <p>Tư vấn mua hàng (miễn phí):</p>
                    <h5 style={{ color: 'red', fontWeight: 'bolder' }}>1800.6229</h5>
                    <p>Hỗ trợ kỹ thuật:</p>
                    <h5 style={{ color: 'red', fontWeight: 'bolder' }}>1900.2043</h5>
                    <p>Khiếu nại - Góp ý ( 9h00-21h) :</p>
                    <h5 style={{ color: 'red', fontWeight: 'bolder' }}>088.9999933</h5>
                </div>
                <div className="col-5 col-md">
                    <h4>HỆ THỐNG SHOWROOM ĐIỆN THOẠI DI ĐỘNG XSHOP</h4>
                    <ul className="list-unstyled text-small">
                        <li><a href="#" style={{ color: 'black' }}>50 Trần Quang Khải, Phường Tân Định, Quận 1, TP.HCM</a></li>
                        <li><a href="#" style={{ color: 'black' }}>650 Lê Hồng Phong, Phường 10, Quận 10, TP.HCM</a></li>
                        <li><a href="#" style={{ color: 'black' }}>421 Hoàng Văn Thụ, Phường 2, Q.Tân Bình, TP.HCM (nằm giữa nhà hàng Adora và CGV Hoàng Văn Thụ)</a></li>
                        <li><a href="#" style={{ color: 'black' }}>250 Võ Văn Ngân, Phường Bình Thọ, Q.Thủ Đức, TP.HCM</a></li>
                    </ul>
                </div>
            </div></footer>


    )
}

export default Footer
