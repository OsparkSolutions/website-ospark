import React from 'react';
import * as styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () =>{
  return (
    <footer className={styles.footer}>
      <div className='footerLeft'>
        <p className='footerLogo'>O<span>Spark</span></p>
        <p className='footerLinks'>
          <a href="#" className="link1">Home</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </p>
        <p className='footerCompanyName'>OrangeSpark Solutions LLC © 2023</p>
      </div>
      <div className='footerCenter'>
        <div>
          <i className="fa fa-map-marker"><FontAwesomeIcon icon={faLocationDot} /></i>
          <p><span>Washington, DC</span></p>
        </div>
        <div>
          <i className="fa fa-phone"><FontAwesomeIcon icon={faPhone} /></i>
          <p>+1.555.555.5555</p>
        </div>
        <div>
          <i className='faEnvelope'><FontAwesomeIcon icon={faEnvelope} /></i>
          <p><a href="mailto:support@company.com">help@ospark.com</a></p>
        </div>
      </div>

      <div className='footerRight'>
        <p className='companyAbout'>
          <span>About the company</span>
          Orange Spark Solutions, LLC is small, full-service IT, Web & Development Solution provider based out of Washington, DC. We focus on web design, mobile/web/database development and cloud centric infrastructure solutions.
        </p>
        <div className='footerIcons'>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </footer>
  )
}