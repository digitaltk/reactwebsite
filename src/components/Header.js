import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <header id="header" class="fixed-top d-flex align-items-center">
          <div class="container d-flex align-items-center">
            <div class="logo mr-auto">
              <h1 class="text-light">
                <a href="#">
                  <span>Dobsonville Human Rights Centre</span>
                </a>
              </h1>

              <nav class="nav-menu d-none d-lg-block">
                <ul>
                  <li class="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
