import React from 'react';
import img from './img/bus-tour-logo2.png';
import './Header.css'

class Header extends React.Component {

    render() {
        return (
            <div id="HeaderDiv">

                <img id="logoIMG" src={img} alt="" />
                <h2 id="Pname">BUS TOUR</h2>
                <nav id="headerNav">
                    <ul id="HeaderUL">
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>


            </div>
        )
    }
}

export default Header;