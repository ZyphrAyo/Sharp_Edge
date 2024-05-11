import React from 'react';
import './about.css';

const About = () => {
  
  const handleTimelineItemClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="page-section" id="about">
      <div className='container'>
      <h1 className="section-heading text-uppercase" style={{textAlign:"center"}}>Welcome to The Sharp Edge.</h1>
      <h2 className="section-heading text-uppercase" style={{textAlign:"center"}}>Multi-disciplinary Partnership (MDP) Firm</h2>
      <h3 className="section-subheading text-muted">

We provide you a complete support on Accounts Management, Direct and Indirect Taxes, Tax Services for individuals, companies and small businesses. We are also providing Digital Marketing Services like Web Designing, Web Development, Social Media Management, Search Engine Optimization & Online - Offline Advertisement facilities. Our philosophy is to provide each & every client with personal service and deliver professional results. The Sharp Edge is a connecting point for moving your business forward.
The firm had been established in the year of 2016 with a vision to shape new standards in deliverance of services. Since, it has been synergic and as a consequence of Herculean endeavors, now we are associated with loads of partners.
The Head Office of this firm is located at Serampore, Hooghly and we have multiple branch offices in Lake Town, Alipore, Bardhaman, Arambag, Basirhat, Shayamnagar, Nadia, Chandannagar Tarakeshwar, Haldia, Durgapur, Bandel & Bagnan. Our experienced professionals oversee all affairs in order to have a clear comprehension of our customer’s needs, based on which a consistency of quality services is assured. We emphasize on maximum communication to ensure clear-cut apprehension of issues and areas of concern. Therefore, we stress on strong communication with the client and consider their feedback extremely valuable. When we learn about things we could do better, we act swiftly to address this.
The professional work which is being handled is annexed along-with a detailed list of assignment jobs by the partners and executives of the firm along with a strong and experienced team members.
</h3>
      </div>
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">We are here to serve you the best as possible with a minimum and affordable fee.</h3>
        </div>
        <ul className="timeline">
          {/* Timeline item 1 */}
          <li>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://i.postimg.cc/6Tx61Nz9/imresizer-1701783300194.jpg" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                
                <h4 className="subheading">Our Humble Service</h4>
              </div>
              <div className="timeline-body"><p className="text-muted">We are here with experienced Accountants who are here to help you with your business
finance and are there to help you in managing your files in the best possible way.</p></div>
            </div>
          </li>

          {/* Timeline item 2 */}
          <li className="timeline-inverted">
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://i.postimg.cc/Dy51H2Rj/imresizer-1701783830498.jpg" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">

                <h4 className="subheading">Digital Marketing Services </h4>
              </div>
              <div className="timeline-body"><p className="text-muted">We are providing Digital Marketing Services to grow your business to the next level. Experience the Future of Marketing & Advertisement with US! We’re not just a company, we’re your growth partners. </p></div>
            </div>
          </li>

          {/* Timeline item 3 */}
          <li>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://i.postimg.cc/hG3H4W6c/imresizer-1701784803624.jpg" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">Legal Support </h4>
              </div>
              <div className="timeline-body"><p className="text-muted">
	Legal support is another feature of our firm. We are here to give service and help you in decision making of finance related queries after completing with the deal of your work.
</p></div>
            </div>
          </li>

          {/* Timeline item 4 */}
          <li className="timeline-inverted">
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://i.postimg.cc/YCnZrBL8/imresizer-1701784038144.jpg" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">Work on Finance & Taxes </h4>
              </div>
              <div className="timeline-body"><p className="text-muted">We work according to client’s requirements to fulfil their desire. We try our best to manage your work in the best possible and simple way.⦁	Our work on finance and taxes are related with business and industries. We also serve people individually whose works are related with sole proprietorship business like wholesale and retail.</p></div>
            </div>
          </li>
          <li>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://i.postimg.cc/zB8Z3yzM/imresizer-1702022330009.jpg" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">Goals/Mission </h4>
              </div>
              <div className="timeline-body"style={{marginBottom: "10px"}}><p className="text-muted" style={{fontSize: "14px", margin:"0"}}>
              We are driven by 3 C’s: Commitment, Consistency, Confidence. Our main mission is to provide complete support to our client’s business. We help people to be successful in their life and business that’s the core point of our firm. We are here to handle your business in the realm of Taxes, Finance, Marketing, Advertisement & Legislation. But we do more than that for our clients. We serve here to help you to understand your past, see clearly the present and predict (with reason) about the future in matters relating to finance, taxes, visibility and publicity. 
</p></div>
            </div>
          </li>
          
          <li id="customTimelineItem" className="timeline-inverted">
            <div
              className="timeline-image"
              style={{ backgroundColor: '#696b70', cursor: 'pointer',color:"#f4ce14" }}
              onClick={handleTimelineItemClick}
            >
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Service!
              </h4>
            </div>
            
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;