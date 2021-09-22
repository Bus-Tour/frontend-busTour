import React from 'react';
import img from './img/bus-tour-logo.png';
import './Header.css';
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
class Header extends React.Component {

    render() {
        const isAuth = this.props.auth0.isAuthenticated;
        return (
            <div id="HeaderDiv">

                <img id="logoIMG" src={img} alt="" />
                <h2 id="Pname">BUS TOUR</h2>
                <nav id="headerNav">
                    <ul id="HeaderUL">
                        <li>
                            {
                                isAuth ? <LogoutButton /> : <LoginButton />
                            }
                        </li>
                    </ul>
                </nav>


            </div>
        )
    }
}

export default withAuth0(Header);