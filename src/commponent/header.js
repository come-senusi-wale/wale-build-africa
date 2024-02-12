import React, {useState, useRef } from "react";
import '../style/header.css';


export const Header = () => {

    return(<>
        <section id="header">
            <div id="heading">
                <h1>Supercharging African Communities Building for the OpenWeb</h1>
            </div>
            <div id="text">
                <p>Experience the future of the openweb through the African lens.</p>
            </div>
            <div id="link">
                <ul>
                    <li><a href="#">get started now</a></li>
                    <li><a href="#">Discover Our Buidl Communities</a></li>
                </ul>
            </div>
        </section>
    </>)
}