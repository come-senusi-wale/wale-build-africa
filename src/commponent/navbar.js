import React, {useState, useRef } from "react";
import '../style/navbar.css';
import logo from "./../image/builogo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


export const NavBar = ({NavHandler}) => {
    let showRef = useRef(null);

    let [openSideBar, setOpenSideBar] = useState(false)

    let showSideBar = () => {
        // let sidebar = showRef.current; 
        // sidebar.classList.toggle('show_hight');

        NavHandler();
        setOpenSideBar(true)
    }

    let closeSideBar = () => {
        //let sidebar = showRef.current; 
        //sidebar.classList.toggle('show_hight');
        NavHandler();
        setOpenSideBar(false)
    }


    return(<>
        <nav>
            <section>
                <div id="nav_container">
                    <nav id="nav">
                            <div id="logo">
                                <div>
                                    <img src={logo} alt=""  />
                                    <h2>BuidlAfrica</h2>
                                </div>
                            </div>
                            <div>
                                <div id="link_container">
                                    <ul>
                                        <li>
                                            <Link to='/about' className="link">about us</Link>
                                        </li>                                 
                                        <li>
                                            <Link to='/contactus' className="link">contact us</Link>
                                        </li>  
                                        <li>
                                            <Link to='/' className="link start">get started</Link>
                                        </li>                                  
                                        
                                    </ul>
                                </div>
                                <div id="toggle">
                                    {!openSideBar? <h2 onClick={() => showSideBar()}><FaBars></FaBars></h2> :  <h2 onClick={() => closeSideBar()}><FaTimes></FaTimes></h2>}
                                </div>
                            </div>
                    </nav>
                </div> 
                {openSideBar ?  
                    <div id="sidebar" className="show_hight" ref={showRef}>
                        <div  id="sidebar_container">
                            <ul>
                                <li>
                                    <a className="side_link" onClick={() => { window.location.href = '/about';}}>about us</a>
                                </li>
                                <li>
                                    <a className="side_link" onClick={() => { window.location.href = '/contactus';}}>contact us</a>
                                </li>  
                                <li>
                                    <a className="side_link start" onClick={() => { window.location.href = '/';}}>get started</a>
                                </li>                           
                            </ul>
                        </div>
                    </div>
                : 
                    <div></div>
                }
            </section>
        </nav>
    </>)
}