import { NavBar } from "./commponent/navbar";
import { Header } from "./commponent/header";
import { Crafted } from "./commponent/crafted";
import { Partner } from "./commponent/ourpartner";
import { Faq } from "./commponent/faq";
import { Footer } from "./commponent/footer";
import { About } from "./commponent/about";
import { Contact } from "./commponent/contactus";
import { Home } from "./commponent/home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";

import './App.css';

function App() {
 const [showMobileNav, setShowMobileNav] = useState(false)
 const NavHandler = () => {
  setShowMobileNav((current)=>!current)
}

  return (
   <>
    <section id="app_container">
      <Router>
        <NavBar
         NavHandler = {NavHandler}
        ></NavBar>
        <div className={`${showMobileNav ? 'hidden' : ''}`}>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/contactus'>
            <Contact></Contact>
          </Route>
        </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </section>
   </>
  );
}

export default App;
