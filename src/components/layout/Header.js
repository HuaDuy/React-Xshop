import React from 'react'
import Nav from './Nav';

const Header = (props) => {
    return (
            <header className="site-header sticky-top py-1">
                <Nav {...props}></Nav>
            </header>
    )
}

export default Header
