import React from 'react';
import "./footer.css"
import { CiMobile1,CiMail,CiLocationOn,CiFacebook,CiTwitter,CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    
      <footer className="footer-10">
        <div className="container">
          <div className="row mb-3 pb-3 no-gutters">
            <div className="col-md-4 mb-md-0 mb-4 d-flex">
              <div className="con con-1 w-100 py-5">
                <div className="con-info w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span><CiMobile1/></span>
                  </div>
                  <div className="text">
                    <span>(+91) 9830960636,<br /> (+91) 9830351636,<br /> (+91) 9830370636</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-4 d-flex">
              <div className="con con-2 w-100 py-5">
                <div className="con-info w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span><CiMail/></span>
                  </div>
                  <div className="text">
                    <span>thesharpedge543@gmail.com,<br /> thesharpedge.gst@gmail.com, <br />Web:www.thesharpedge.in</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-4 d-flex">
              <div className="con con-3 w-100 py-5">
                <div className="con-info w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span><CiLocationOn/> </span>
                  </div>
                  <div className="text">
                    <span>Location: 16/3, Barabagan Ln, Shibtala, Serampore, Dakshin Rajyadharpur, P.O - Mallickpara,Pin: 712201, West Bengal, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-4 mb-md-0 mb-4">
                  <img src="https://i.postimg.cc/Pxp36qLq/white-logo.png" alt="Logo" style={{height:"30px",marginBottom:"10px"}}/>
                  <span className="footer-heading"> The Sharp Edge </span>
                  <div  className="subscribe-form" style={{fontSize:"10px",lineHeight:"20px"}}>
                
                <span className="subheading" style={{  whiteSpace: "nowrap"}}>Multi-disciplinary Partnership (MDP) Firm <br />Don't ever let your business get ahead of the financial side of your business.<br/> Accounting, accounting, accounting. Know your numbers.</span>
                <ul className='socials' style={{zIndex:"999"}}>
                  <li><CiFacebook style={{ fontSize: "35px" }}/></li>
                  <li><CiTwitter style={{ fontSize: "35px" }}/></li>
                  <li><CiInstagram style={{ fontSize: "35px" }}/></li>
                </ul>

              </div>
                </div>
                {/* <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">Company</h2>
                  <ul className="list-unstyled">
                    <li><a href="#" className="d-block">Our services</a></li>
                    <li><a href="#" className="d-block">Clients</a></li>
                    <li><a href="#" className="d-block">Contact</a></li>
                    <li><a href="#" className="d-block">Press</a></li>
                  </ul>
                </div> */}
                {/* <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">Resources</h2>
                  <ul className="list-unstyled">
                    <li><a href="#" className="d-block">Blog</a></li>
                    <li><a href="#" className="d-block">Newsletter</a></li>
                    <li><a href="#" className="d-block">Privacy Policy</a></li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-md-5 mb-md-0 mb-4">
              <h2 className="footer-heading">INFORMATION</h2>
              <div  className="subscribe-form" style={{fontSize:"10px",lineHeight:"20px"}}>
                
                <span className="subheading">The Sharp Edge has helped hundreds of business owners till date and we can’t wait to help you too. Connect with our specialists today, leverage advanced, data-driven strategies, and take your business to the next level. Get in touch with us today and let’s discuss how we can move forward and assist you to achieve all your goals.</span>
                <span className="subheading">Tel: 9830960636, 9830351636, 9830370636</span>
                <span className="subheading">Email:thesharpedge543@gmail.com, thesharpedge.gst@gmail.com</span>
                <span className="subheading">Working Hours: 9am-5pm</span>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-2 border-top">
            <div className="col-md-6 col-lg-8 mb-md-0 mb-4">
              <p className="copyright mb-0" style={{fontSize:"10.5px"}}>
                Copyright &copy;All rights reserved. | This Website is designed by <a href="https://www.linkedin.com/in/niladri-howladar-39a287297/">Niladri Howladar</a>
              </p>
            </div>
            
          </div>
        </div>
      </footer>

  );
}

export default Footer;
