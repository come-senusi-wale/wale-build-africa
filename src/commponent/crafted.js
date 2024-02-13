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
                                <h1>Onboard</h1>
                                {/* <span>Identification and Mapping</span> */}
                            </div>
                            <div className="base_line"></div>
                            <div className="text">
                                <p>Identification, mapping and onboarding of active web2 buidl communities in Africa into web3.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div className="range">
                                <h1>Training</h1>
                                {/* <span>3-4 weeks Educational Program (3-4 Weeks).</span> */}
                            </div>
                            <div className="base_line"></div>
                            <div className="text">
                                <p>3-4 weeks, Program designed to equip builder with the necessary skills and knowledge to engage effectively with Near's technology and opportunities.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div className="range">
                                <h1>Integration</h1>
                                {/* <span>Grants and Ecosystem access</span> */}
                            </div>
                            <div className="base_line"></div>
                            <div className="text">
                                <p> Facilitate the seamless integration of onboarded communities into the web3 and Near ecosystem. This involves providing access to funds and resources through the necessary funding channels on Near.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </>)
}