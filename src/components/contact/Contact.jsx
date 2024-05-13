import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_zbh0o99';
    const templateID = 'template_vdd755j';
    const userID = 'VdK-2gGV1MV6UYlTr';

    const data = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, data, userID)
      .then((result) => {
        console.log(result.text);
        document.getElementById('submitSuccessMessage').classList.remove('d-none');
        setTimeout(() => {
          document.getElementById('submitSuccessMessage').classList.add('d-none');
        }, 2000);
      }, (error) => {
        console.log(error.text);
        document.getElementById('submitErrorMessage').classList.remove('d-none');
      });
  };

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Get in touch with us!</h3>
        </div>

        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  data-sb-validations="required"
                  onChange={handleChange}
                />
                <div className="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  data-sb-validations="required,email"
                  onChange={handleChange}
                />
                <div className="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div className="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
              <div className="form-group mb-md-0">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  data-sb-validations="required"
                  onChange={handleChange}
                />
                <div className="invalid-feedback" data-sb-feedback="phone:required">
                  A phone number is required.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your Message *"
                  data-sb-validations="required"
                  onChange={handleChange}
                ></textarea>
                <div className="invalid-feedback" data-sb-feedback="message:required">
                  A message is required.
                </div>
              </div>
            </div>
          </div>

          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center text-white mb-3">
              <div className="fw-bolder">Form submission successful!</div>
              Our Professionals will be contacting you soon!
              <br />
            </div>
          </div>

          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">Error sending message!</div>
          </div>

          <div className="text-center">
            <button
              className="btn btn-primary btn-xl text-uppercase cursor:pointer"
              id="submitButton"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
