import React from "react";

const Footer = () => (
  <div className="footer">

    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About WorkFlo</span> WorkFlo is the best and easiest way to manage team projects and tasks
        </p>

      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> 1234 React St</span> Dallas, TX
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+1) 123 456 7890</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="#"> info@workflo.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
      <h2> WorkFlo</h2>
        <p className="menu">
          <a href="/home"> Home</a> 
          <br/>
          <a href="/about"> About</a> 
          <br/>
          <a href="/projects"> Projects</a> 
        </p>
        <p className="name"> WorkFlo &copy; 2021</p>
      </div>
    </footer>
  </div>
);

export default Footer;
