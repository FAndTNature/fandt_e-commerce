import React from 'react'
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavDropdown, Image, NavbarBrand } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="primary" variant= "dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                    <NavbarBrand>
                    <Image src='https://raw.githubusercontent.com/VibhorSingh19/FandT-v2.0/master/src/components/logo.png' alt="logo" fluid rounded width="30rem"></Image>
                    &nbsp;F&T Nature
                    </NavbarBrand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <LinkContainer to="/">
                            <Nav.Link><i className="fas fa-home"></i> About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/shop">
                            <Nav.Link><i className="fas fa-shopping-bag"></i> Shop</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        </LinkContainer>
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : 
                        <LinkContainer to="/login">
                            <Nav.Link><i className="fas fa-user"> </i> Login</Nav.Link>
                        </LinkContainer>}
                        </Nav>
                    </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header
