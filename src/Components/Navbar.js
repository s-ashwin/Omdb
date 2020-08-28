import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavbarBrand, Navbar } from "reactstrap";
import {RiMovie2Line} from "react-icons/ri"

const Nav = () => {
    return(
        
        <Navbar  dark>
            <NavbarBrand><RiMovie2Line></RiMovie2Line> lens</NavbarBrand>
        </Navbar>
    )
}

export default Nav;