// React
import { React, Component } from 'react';
import { Link } from 'react-router-dom';
// Others
import { Nav, Navbar } from 'react-bootstrap';
// Components

// CSS
import '../styles.css';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Link className='form-child-small back-link' to='/'>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="../../images/icon.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                    Hokohoko
                    </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className='form-child-small back-link' to='/'>
                                <Nav.Link href="/">Lists</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;