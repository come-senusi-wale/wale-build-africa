import React, {useState, useRef } from "react";
import '../style/about.css';

export const Crafted = () => {
    return(<>
        <section id="crafted">
            <div id="crafting">
                <h1>Crafted by Builders for Builders</h1>
            </div>
            <div id="text">
                <p>Experience Africans building the dots that connects web2 and Web3.</p>
            </div>
            <div id="mars_type">
                <ul>
                    <li>
                        <div>
                            <div className="range">
                                <h1>39%</h1>
                                <span>Faster</span>
                            </div>
                            <div className="base_line"></div>
                            <div className="text">
                                <p>Experience a 39% increase in design speed with MarsX's innovative software solutions.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div className="range">
                                <h1>20%</h1>
                                <span>Cooler</span>
                            </div>
                            <div className="base_line"></div>
                            <div className="text">
                                <p>Experience a 39% increase in design speed with MarsX's innovative software solutions.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div className="range">
                                <h1>99.98%</h1>
                                <span>Uptime</span>
                            </div>
                            <div className="base_line"></div>
                            <div className="text">
                                <p>Experience a 39% increase in design speed with MarsX's innovative software solutions.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </>)
}