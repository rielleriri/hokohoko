// React
import { React, Component } from 'react';
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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Lists</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;