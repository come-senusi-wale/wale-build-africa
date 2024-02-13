import React, {useState, useRef } from "react";
import '../style/crafted.css';

export const About = () => {
    return(<>
        <section id="about">
            <div id="about-container">
                <div id="about-head">
                    <h1>About</h1>
                    <p>BuidlAfrica is an ecosystem of African buidl communities building for the openweb. </p>
                </div>
                <div id="funture-container">
                    <div className="about-flex">
                        <h2>Primary Objective</h2>
                        <p>Our primary objective is to successfully onboard, train and retain active buidl communities outside the the web3 ecosystem in Africa, starting with Nigeria. This is with a particular emphasis on fostering a thriving developer and builder community of Africans in the web3 ecosystem.</p>
                    </div>
                    <div className="about-flex">
                        <h2>Outcome</h2>
                        <p>By following this comprehensive onboarding approach, we ensure that our efforts go beyond mere community onboarding. Instead, we are actively onboarding and nurturing trained communities, creating a sustainable and impactful ecosystem for web3 coming out of Africa, starting with Nigeria.</p>
                    </div>
                    {/* <div className="about-flex">
                        <h2>Designers</h2>
                        <p>Morbi tincidunt augue interdum velit euismod in pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sed euismod nisi porta lorem. Volutpat odio facilisis mauris sit amet. Curabitur gravida arcu ac tortor dignissim convallis aenean.</p>
                    </div>
                    <div className="about-flex">
                        <h2>Realisers</h2>
                        <p>Morbi tincidunt augue interdum velit euismod in pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sed euismod nisi porta lorem. Volutpat odio facilisis mauris sit amet. Curabitur gravida arcu ac tortor dignissim convallis aenean.</p>
                    </div> */}
                </div>
            </div>
        </section>
    </>)
}