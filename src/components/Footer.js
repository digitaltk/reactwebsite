import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6 text-lg-left text-center">
              <div class="copyright">
                &copy; Copyright{" "}
                <strong>Dobsonville Humans Rights Center</strong>. All Rights
                Reserved
              </div>
            </div>
            <div class="col-lg-6">
              <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href="#intro" class="scrollto">
                  Home
                </a>
                <a href="#about" class="scrollto">
                  About
                </a>
                <a href="#about">Privacy Policy</a>
                <a href="#about">Terms of Use</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
