import React from 'react';
import './Footer.css'
import img from './img/bus-tour-logo.png';



class Footer extends React.Component {

    render() {
        return (
            <div id="FooterMainBar" >
                <div id="FooterContentLeft">
                    <h3 id="FooterContactUs">
                        Contact Us
                    </h3>
                    <ul id="FooterUL">
                        <li class="FooterLi"><a href="...">Facebook</a></li>
                        <li class="FooterLi"><a href="...">Linkedin</a></li>
                        <li class="FooterLi"><a href="tel:+96263555214">06-3555214</a> </li>
                    </ul>


                </div>
                <div id="centerFooter">
                    <h3 id="FooterContactUs">
                        Suggested Links
                    </h3>
                    <ul id="FooterUL">
                        <li class="FooterLi"><a href="...">Ministry Of Education</a></li>
                        <li class="FooterLi"><a href="...">Ministry Of Transportation</a></li>
                        <li class="FooterLi"><a href="...">Ministry Of Work</a> </li>
                    </ul>

                </div>
                <div id="FooterContentRight">
                    <img id="FooterLogoIMG" src={img} alt="" />
                </div>





            </div>
        )
    }
}

export default Footer;