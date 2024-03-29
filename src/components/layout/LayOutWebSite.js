import React from 'react'
import Footer from './Footer'
import Header from './Header'

const LayOutWebSite = (props) => {
    return (
        <div>
            <Header {...props}></Header>
            {props.children}
            <Footer></Footer>
        </div>
    )
}

export default LayOutWebSite
