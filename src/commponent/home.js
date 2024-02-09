import React, {useState, useRef } from "react";
import '../style/crafted.css';
import { Header } from "./header";
import { Crafted } from "./crafted";
import { Partner } from "./ourpartner";
import { Faq } from "./faq";

export const Home = () => {
    return(<>
        <section id="home">
            <Header></Header> 
            <Crafted></Crafted>
            <Partner></Partner>
            <Faq></Faq>
        </section>
    </>)
}