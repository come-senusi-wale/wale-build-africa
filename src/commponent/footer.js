import React, {useState, useRef } from "react";
import '../style/footer.css';
import logo from "./../image/builogo.jpeg";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {

    return(<>
        <section id="forter">
            <div id="footrt-container">
                <div id="mar-div" className="mars-footer">
                    <h1>
                        <div className="img">
                            <img src={logo} alt=""/>
                        </div>
                    </h1>
                    <p>© 2024 MarsX Innovations.</p>
                    <p>All rights reserved.</p>
                </div>
                <div id="company" className="mars-footer">
                    <h1>Company</h1>
                    <ul>
                        <li><a href="#" onClick={() => { window.location.href = '/about';}}>About Us</a></li>
                        <li><a href="#" onClick={() => { window.location.href = '/contactus';}}>Contact Us</a></li>
                    </ul>
                </div>
                <div id="resource" className="mars-footer">
                    <h1>Resources</h1>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div id="follow" className="mars-footer">
                    <h1>Follow Us</h1>
                    <ul>
                        <li><a href="#" ><FaFacebookSquare></FaFacebookSquare></a></li>
                        <li><a href="#"><FaXTwitter></FaXTwitter></a></li>
                        <li><a href="#"><FaInstagram></FaInstagram></a></li>
                    </ul>
                </div>
            </div>
        </section>
    </>)
}