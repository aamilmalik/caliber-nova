import React, { useState } from 'react';
import './Footer.css';
import logo from '../assets/images/logo.png';
import facebookIcon from '../assets/images/facebook.png';
import twitterIcon from '../assets/images/twitter.png';
import instagramIcon from '../assets/images/instagram.png';
import youtubeIcon from '../assets/images/youtube.png';
import logo2 from '../assets/images/17.jpg';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
    setName('');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logos" data-aos="fade-right">
          <img src={logo} alt="Caliber Nova Logo" className="footer-logo" />
          <img src={logo2} alt="Caliber Nova Logo" className="footer-logo-17" />
        </div>
        <div className="footer-courses">
          <h3 className="footer-title">Courses Offered</h3>
          <ul className="course-list">
            <li><b>9<sup>th</sup>, 10<sup>th</sup>, 11<sup>th</sup>, 12<sup>th</sup></b></li>
            <li><b>MBA_CAT, MBA_CET, MCA_CET</b></li>
            <li><b>B.Com, BCA, B.Sc</b></li>
            <li><b>B.Sc IT, BBA, BCCA</b></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <p><b>Phone: <a href="tel:9595253778">9595253778</a></b></p>
          <p><b>Email: <a href="mailto:calibernova@gmail.com">calibernova@gmail.com</a></b></p>
          <p><b>Website: <a href="https://www.calibersnova.com/">calibersnova</a></b></p>
        </div>
        <div className="footer-social">
          <h3 className="footer-title">Follow Us</h3>
          <ul className="social-list">
            {[
              { href: 'https://www.facebook.com/calibersnova/', src: facebookIcon, alt: 'Facebook' },
              { href: 'https://x.com/CalibersNova', src: twitterIcon, alt: 'Twitter' },
              { href: 'https://www.instagram.com/calibersnovacoachingclasses/', src: instagramIcon, alt: 'Instagram' },
              { href: 'https://www.youtube.com/channel/UCrAmhQGYeH13eyL8FKFu86g', src: youtubeIcon, alt: 'YouTube' },
            ].map((icon) => (
              <li key={icon.alt}>
                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                  <img src={icon.src} alt={icon.alt} className="social-icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Caliber Nova. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
