import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    // <Router>
      <header>
        <nav>
          <div className="nav__top">
            <a href=''>
              Want to learn how to create and NFT? Click HERE to read more!
            </a>
            <a href=''>
              To read more about our digital museum, click HERE.
            </a>
            <a href=''>
              Interested to buy some rare MINTR NFTS? Click HERE.
            </a>
          </div>
          <div className="nav__bottom">
            <div className="nav__botom__left">
              <div className="nav__botom__left__item nav__bottom__left__logo">
                {/* <img src="" alt="" /> */}
                <span>MINTR</span>
              </div>
              <div className="nav__botom__left__item nav__botom__left__explore">
                <a href=''>Explore</a>
              </div>
              <button className="nav__botom__left__item nav__botom__left__mode__button flex-center">
                <span></span>
              </button>
            </div>
            <div className="nav__bottom__right flex-center">
              <div className="nav__bottom__right__item nav__bottom__right__form-wrapper">
                <form>
                  <input
                    type="text"
                    placeholder="Search by items, collection, and creators"
                  />
                </form>
              </div>
              <div className="nav__bottom__right__item nav__bottom__right__buttons">
                <button className="accent">Create</button>
                <button>Connect Wallet</button>
              </div>
            </div>
          </div>
          <div className="nav-bottom-after">
              
          </div>
        </nav>
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </header>
    // </Router>
  );
}

export default Navbar;
