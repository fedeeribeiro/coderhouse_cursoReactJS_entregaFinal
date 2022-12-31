import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <Navbar className="navbar-css" expand="md" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand>
                    <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
                        <img src={require("../images/logo-csa.jpg")} alt={"Logo"} width="50" height="50"/>
                        <span> Casa de Sorrentinos Antolini</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link><Link to='/category/1' style={{ textDecoration: 'none', color: '#fff' }}>Pastas</Link></Nav.Link>
                        <Nav.Link><Link to='/category/2' style={{ textDecoration: 'none', color: '#fff' }}>Extras</Link></Nav.Link>
                        <Nav.Link><Link to='/category/3' style={{ textDecoration: 'none', color: '#fff' }}>Bebidas</Link></Nav.Link>
                        <Container>
                            <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;