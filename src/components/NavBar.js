import React, { useState } from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
} from 'mdb-react-ui-kit';

const NavBar = () => {
    const [showNavNoToggler, setShowNavNoToggler] = useState(false);

    return (
        <>
        <MDBNavbar expand='md' sticky dark style={{backgroundColor: '#333'}}>
            <MDBContainer fluid>
                <MDBNavbarBrand>
                    <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
                        <img src={require("../images/logo-csa.jpg")} alt={'Logo'} width='50' height='50' loading='lazy' />
                        <span className='business-name'> Casa de Sorrentinos Antolini</span>
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarTogglerDemo01'
                    aria-controls='navbarTogglerDemo01'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavNoToggler(!showNavNoToggler)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
            </MDBContainer>
            <MDBContainer fluid>
                <MDBCollapse navbar show={showNavNoToggler}>
                    <MDBNavbarNav className='justify-content-end'>
                        <MDBNavbarItem>
                            <Link to='/category/6JJbisI1yKptubgPnDYt' style={{ textDecoration: 'none', color: '#fff' }}>
                                <MDBNavbarLink>
                                    Pastas
                                </MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/category/2zNCTvaC41bRPsjl5iV4' style={{ textDecoration: 'none', color: '#fff' }}>
                                <MDBNavbarLink>
                                    Bebidas
                                </MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/category/1oS4esOVE6dhEptmLxhs' style={{ textDecoration: 'none', color: '#fff' }}>
                                <MDBNavbarLink>
                                    Extras
                                </MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/cart' style={{ textDecoration: 'none', color: '#fff' }}>
                                <MDBNavbarLink>
                                    <CartWidget />
                                </MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        </>
    );
}

export default NavBar;