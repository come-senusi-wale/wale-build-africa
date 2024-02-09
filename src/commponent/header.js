import React, {useState, useRef } from "react";
import '../style/header.css';


export const Header = () => {

    return(<>
        <section id="header">
            <div id="heading">
                <h1>Unleash Your Creativity with MarsX</h1>
            </div>
            <div id="text">
                <p>Experience the future of design with our innovative software solutions.</p>
            </div>
            <div id="link">
                <ul>
                    <li><a href="#">get started now</a></li>
                    <li><a href="#">discover more</a></li>
                </ul>
            </div>
        </section>
    </>)
}