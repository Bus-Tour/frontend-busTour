import React from 'react';
import './Footer.css'
import img from './img/bus-tour-logo.png';
import fBus from './img/fBus.png';
import gBus from './img/gBus.png';
import cBus from './img/callBus.png';



class Footer extends React.Component {

    render() {
        return (
            <div id="FooterMainBar" >
                <div id="FooterContentLeft">

                    <h3 id="FooterContactUs">
                        Suggested Links
                    </h3>
                    <ul id="FooterUL">
                        <li class="FooterLi"><a href="...">Ministry Of Education</a></li>
                        <li class="FooterLi"><a href="...">Ministry Of Transportation</a></li>
                        <li class="FooterLi"><a href="...">Ministry Of Labor</a> </li>
                    </ul>


                </div>
                <div id="centerFooter">

                    <h3 id="FooterContactUs">
                        Contact Us
                    </h3>
                    <ul id="FooterULLeft">
                        <li class="FooterLiLeft"><a href="..."><img class="FooterLogoImgContactUs" src={fBus} alt="facebook img" /></a></li>
                        <li class="FooterLiLeft"><a href="..."><img class="FooterLogoImgContactUs" src={gBus} alt="github img" /></a></li>
                        <li class="FooterLiLeft"><a href="tel:+96263555214"><img class="FooterLogoImgContactUs" src={cBus} alt="call img" /></a> </li>
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