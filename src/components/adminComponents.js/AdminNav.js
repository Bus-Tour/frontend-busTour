import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminNav.css'
export class AdminNav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="NavBarAdmin">
                <NavItem><Link to="/user" className="nav-link">Useres Control Panel</Link></NavItem>
                <NavItem><Link to="/students" className="nav-link">Students Control Panel</Link></NavItem>
                <NavItem><Link to="/teacher" className="nav-link">Teachers Control Panel</Link></NavItem>
                <NavItem><Link to="/busses" className="nav-link">Busses Control Panel</Link></NavItem>
                <NavItem><Link to="/" className="nav-link">Admin monitor</Link></NavItem>
            </Navbar>
        )
    }
}
export default AdminNav
//THIS WILL IMPORTED ON THE MAIN