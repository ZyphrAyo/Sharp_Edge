import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Masthead from './components/masthead/Masthead.jsx'
import Services from './components/services/Services.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import About from './components/about/About.jsx'
import Team from './components/team/Team.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
// import Newsroom from './components/newsroom/Newsroom.jsx'
import DigitalMarketing from './components/digitalmarketing/DigitalMarketing.jsx'
import CharteredAccountant from "./components/CA/CA.jsx"
import Legalservices from './components/LegalServices/Legalservices.jsx'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Masthead/>
      <About/>
      {/* <Portfolio/> */}
      <Services/>
      <Team/>
      <CharteredAccountant/>
      <DigitalMarketing/>
      <Legalservices/>
      {/* <Newsroom/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

