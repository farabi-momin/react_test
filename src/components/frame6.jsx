import React from "react";
import clckImg from "../assets/clock.png"
import phnImg from "../assets/call-alt.png"
import mail from "../assets/mail.png"
import pin from "../assets/map-pin.png"
import fb from "../assets/facebook.png"
import insta from "../assets/instagram.png"
import lnkdn from "../assets/linkedin.png"
import xIcon from "../assets/x.png"

function Frame6(){

    return(
        <div className="frame6" id="con">
            <div className="container">
                <h1>We ready to have you the best dining experiences</h1>
                <div className="card">    
                    <img src={clckImg}/>
                    <h3>OPENNING HOURS</h3>
                    <p>Monday - Sunday</p>
                    <p>9:00 AM to 11:30 PM</p>
                </div>
                <div className="card">    
                    <img src={phnImg}/>
                    <h3>LET'S TALK</h3>
                    <p>Phone: 1-800-222-4545</p>
                    <p>Fax: 1-800-222-4545</p>
                </div>
                <div className="card">
                    <img src={mail}/>
                    <h3>BOOK A TABLE</h3>
                    <p>Email: demo@website.com</p>
                    <p>Support: support@website.com</p>
                </div>
                <div className="card">
                    <img src={pin}/>
                    <h3>OUR ADDRESS</h3>
                    <p>123 Street, New York,</p>
                    <p>United States of America</p>
                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="social-links">
                    <a href="#"><img src={fb}/></a>
                    <a href="#"><img src={insta}/></a>
                    <a href="#"><img src={lnkdn}/></a>
                    <a href="#"><img src={xIcon}/></a>
                    <p>© 2023 All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
export default Frame6;