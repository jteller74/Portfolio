import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import Projects from '../Projects';
import { Link } from 'react-router-dom'; 

const NavHeader = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const customLinkStyle = {
        color: "white",
        fontSize: ".8em"
    };

    return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={Link} to="/">Jared Teller</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/projects">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                        <NavLink style={customLinkStyle} href="https://reactjs.org/">Created with React</NavLink>
                    </Collapse>
                </Navbar>
            </div>
    );
}

export default NavHeader;