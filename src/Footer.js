import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';
 class Footer extends Component{
    render(){
        return(
            <footer>
                 <div className="social-links">
                    <div className="matter">Official website of s7</div>
                 <button className="social-button" onClick={() => window.open('https://youtube.com/@s7tech492')}>
            <i className="fab fa-facebook"></i>
          </button>
          <button className="social-button" onClick={() => window.open('https://youtube.com/@s7tech492')}>
            <i className="fab fa-instagram"></i>
          </button>
          <button className="social-button" onClick={() => window.open('https://youtube.com/@s7tech492')}>
            <i className="fab fa-youtube"></i>
          </button>
          <button className="social-button" onClick={() => window.open('https://youtube.com/@s7tech492')}>
            <i className="fab fa-twitter"></i>
          </button>
          </div>
            </footer>
        );
    }
 }
 export default Footer;