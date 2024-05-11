import React from 'react';
// import './legalservices.css';
const Legalservices = () => {
  return (
    <section className="page-section" id="legalservices">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Legal Services</h2>
          <h3 className="section-subheading text-muted">We Customize Our Services Exclusively For You.</h3>
          <h3 className="section-subheading text-muted"><h3 className="section-subheading text-muted">The Sharp Edge brings together under one roof all the services that can make your business be born, dress up, educated and informed to have a flourishing life ahead in terms of profit & success. </h3></h3>
        </div>
        
      </div>
      <div className="container">
        <div className="text-center">
          {/* <h2 className="section-heading text-uppercase">Services</h2> */}
        </div>
        <div className="row text-center">
          <div className="col-md-4 " >
            <span className="fa-stack fa-4x rotate-on-hover" >
              <i className="fas fa-circle fa-stack-2x text-primary " ></i>
              <i className="fa fa-briefcase fa-stack-1x fa-inverse" ></i>
            </span>
            <h4 className="my-3">Company Accounts Maintainance</h4>
            <p className="text-muted hide-on-hover">We are here to provide you full support on maintenance of company's accounts manually and also by computer accounting. These accounts will be maintained by the experts who have immense experience of working with various companies.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x rotate-on-hover">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-industry fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Accounts Maintenance for all Business on Various Software</h4>
            <p className="text-muted hide-on-hover">We also serve people individually whose works are related with sole proprietorship business like Distributors, Wholesalers and Retails. The software’s available for the maintenance of your accounts are: MS Excel; MS Access; ACE; Fact; Busy; Tally Latest and Updated Version</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x rotate-on-hover">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-globe fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">TDS & TCS </h4>
            <p className="text-muted hide-on-hover">We plan and maintain TDS and TCS for people individually like professionals, organizations and businessman. We provide valid documents and proofs to our clients in a limited period of time which will help then to lead a stress-free life.</p>
          </div>
        </div>
      </div>
      
    </section>
    
  );
}

export default Legalservices;
