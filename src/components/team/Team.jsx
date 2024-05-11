import React, { useState } from 'react';
import './team.css';

const Team = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleImageClick = (member) => {
    setShowInfo(true);
    setSelectedMember(member);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
    setSelectedMember(null);
  };

  return (
    <section className="page-section bg-light" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Special Team</h2>
          <h3 className="section-subheading text-muted">Guardians of Justice, Architects of Legal Success.</h3>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4" key={index}>
              <div className="team-member member-hover" style={{cursor: "pointer"}}>
                <img
                  className="mx-auto rounded-circle"
                  src={member.image}
                  style={{ objectFit: "contain" }}
                  onClick={() => handleImageClick(member)}
                  alt={member.name}
                />
                <h4>{member.name}</h4>
                <p className="text-muted">{member.role}</p>
                <div className="row additional-info">
                  <div className="col-lg-8 mx-auto text-center">
                    <p className="large text-muted">{member.additionalInfo}</p>
                  </div>
                </div>
                <a className="social py-1 mx-2" href="#!" aria-label={`${member.name} Twitter Profile`}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="social py-1 mx-2" href="#!" aria-label={`${member.name} Facebook Profile`}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="social py-1 mx-2" href="#!" aria-label={`${member.name} LinkedIn Profile`}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showInfo && selectedMember && (
        <div className="popup-info">
          <span className="close-btn" onClick={handleCloseInfo}>
            &times;
          </span>
          <img
            className="mx-auto rounded-circle"
            src={selectedMember.image}
            style={{ objectFit: "contain", width: "100px", height: "100px" }}
            alt={selectedMember.name}
          />
          <h3>{selectedMember.name}</h3>
          <p>{selectedMember.additionalInfo}</p>
        </div>
      )}
    </section>
  );
};

const teamMembers = [
  {
    name: 'Sougata Nandy',
    image: 'https://i.postimg.cc/13GW22ZH/07-12-2023-15-43-34-REC.png',
    role: 'CEO',
    additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    name: 'Divya Bhagat',
    image: 'https://www.thesharpedge.in/img/team/2.jpg',
    role: 'COO',
    additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    name: 'Subhajit Paul',
    image: 'https://www.thesharpedge.in/img/team/5.jpg',
    role: 'CFO',
    additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    name: 'Suprio Chatterjee',
    image: 'https://www.thesharpedge.in/img/team/4.jpg',
    role: 'Marketing & Communication',
    additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    name: 'Kaushik Bakshi',
    image: 'https://www.thesharpedge.in/img/team/k.jpg',
    role: 'Legal Advisor',
    additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
];

export default Team;
