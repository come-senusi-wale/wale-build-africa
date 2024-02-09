import React, {useState, useRef } from "react";
import '../style/crafted.css';

export const About = () => {
    return(<>
        <section id="about">
            <div id="about-container">
                <div id="about-head">
                    <h1>About</h1>
                    <p>By understanding, imagining and expressing change, we create simpler, lighter, more desirable ideas for the future. We design for life. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                <div id="funture-container">
                    <div className="about-flex">
                        <h2>Futurists</h2>
                        <p>Morbi tincidunt augue interdum velit euismod in pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sed euismod nisi porta lorem. Volutpat odio facilisis mauris sit amet. Curabitur gravida arcu ac tortor dignissim convallis aenean.</p>
                    </div>
                    <div className="about-flex">
                        <h2>Strategists</h2>
                        <p>Morbi tincidunt augue interdum velit euismod in pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sed euismod nisi porta lorem. Volutpat odio facilisis mauris sit amet. Curabitur gravida arcu ac tortor dignissim convallis aenean.</p>
                    </div>
                    <div className="about-flex">
                        <h2>Designers</h2>
                        <p>Morbi tincidunt augue interdum velit euismod in pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sed euismod nisi porta lorem. Volutpat odio facilisis mauris sit amet. Curabitur gravida arcu ac tortor dignissim convallis aenean.</p>
                    </div>
                    <div className="about-flex">
                        <h2>Realisers</h2>
                        <p>Morbi tincidunt augue interdum velit euismod in pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sed euismod nisi porta lorem. Volutpat odio facilisis mauris sit amet. Curabitur gravida arcu ac tortor dignissim convallis aenean.</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}