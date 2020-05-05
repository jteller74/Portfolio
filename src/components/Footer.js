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
import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';


const customTextStyle = {
    fontSize: ".8em",
    float: "right",
    margin: "0 auto"
};

const Footer = (props) => {

  return (
    <div style={{float: 'right'}} className="fixed-bottom">      
		    <p style={customTextStyle}>Designed by: &copy;<a style={{color: '#212529'}} href="https://jteller.dev/">Jared Teller</a> All rights reserved.</p>
    </div>
  );
}

export default Footer;