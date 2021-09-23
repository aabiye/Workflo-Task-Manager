import React from "react";

const Footer = () => (
  <div className="footer">
    {/* <p>Copyright @WorkFlo</p> */}
    <footer class="footer">
      <div class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <span> About WorkFlo</span> WorkFlo is the best and easiest way to manage team projects and tasks
        </p>
        <div class="icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-google-plus"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="footer-center col-md-4 col-sm-6">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span> 1234 React St</span> Dallas, TX
          </p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p> (+1) 123 456 7890</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="#"> info@workflo.com</a>
          </p>
        </div>
      </div>
      <div class="footer-right col-md-4 col-sm-6">
      <h4 className="titleNav">
            WORK<span className="flo">FLO</span>
          </h4>
        <p class="menu">
          <a href="/home"> Home</a> 
          <br/>
          <a href="/about"> About</a> 
          <br/>
          <a href="/projects"> Projects</a> 
        </p>
        <p class="name"> WorkFlo &copy; 2021</p>
      </div>
    </footer>
  </div>
);

export default Footer;
