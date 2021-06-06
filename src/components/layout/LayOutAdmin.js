import React from 'react'
import SideBar from '../admin/SideBar'

const LayOutAdmin = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <SideBar></SideBar>
                <main className="col-md-9 ms-sm-auto col-lg-10 ">
                    {props.children}
                </main>
            </div>
        </div>

    )
}

export default LayOutAdmin
