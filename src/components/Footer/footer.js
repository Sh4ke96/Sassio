import React from "react";
import { Container } from "./footer.styled";

function Footer() {
  return (
    <Container>
      <div className="footer-wrapper">
        <div className="footer-main">
          <div className="footer-main-info">
            <img src="/images/logo-light.png" alt="" />
            <div className="footer-main-about">
              <div className="footer-main-about-text-container">
                <span className="footer-main-about-text">
                  30 Commercial Road Fratton
                </span>
                <span className="footer-main-about-text">
                  PORTSMOUTH Hampshire PO1 1AA
                </span>
                <span className="footer-main-about-text">UNITED KINGDOM</span>
              </div>
              <div className="footer-main-open">
                <span className="footer-main-open-hours">Open Hours:</span>
                <span className="footer-main-open-hours">
                  Mon - Sat: 8am - 5pm
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <h2 className="footer-links-title">Links</h2>
          <div className="footer-links-container">
            <ul className="footer-links-ul">
              <a href="/" className="footer-links-link">
                <li className="footer-links-item">
                  <i className="fas fa-chevron-right"></i>Home
                </li>
              </a>
              <a href="/" className="footer-links-link">
                <li className="footer-links-item">
                  <i className="fas fa-chevron-right"></i>FAQ
                </li>
              </a>
              <a href="/" className="footer-links-link">
                <li className="footer-links-item">
                  <i className="fas fa-chevron-right"></i>Gallery
                </li>
              </a>
              <a href="/" className="footer-links-link">
                <li className="footer-links-item">
                  <i className="fas fa-chevron-right"></i>Contact
                </li>
              </a>
              <a href="/" className="footer-links-link">
                <li className="footer-links-item">
                  <i className="fas fa-chevron-right"></i>News
                </li>
              </a>
            </ul>
            <ul className="footer-links-ul">
              <a href="/" className="footer-links-link">
                <li className="footer-links-item">
                  <i className="fas fa-chevron-right"></i>Team
                </li>
              </a>
              <a href="/" className="footer-links-link">
                <li className="footer-links-item">
                  <i className="fas fa-chevron-right"></i>Services
                </li>
              </a>
              <a href="/" className="footer-links-link">
                <li className="footer-links-item">
                  <i className="fas fa-chevron-right"></i>About us
                </li>
              </a>
              <a href="/" className="footer-links-link">
                <li className="footer-links-item">
                  <i className="fas fa-chevron-right"></i>Testimonials
                </li>
              </a>
              <a href="/" className="footer-links-link">
                <li className="footer-links-item">
                  <i className="fas fa-chevron-right"></i>Portfolio
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer-socials">
          <h2 className="footer-socials-title">Socials</h2>
          <div className="footer-socials-container">
            <i className="footer-socials-icon fab fa-facebook"></i>
            <i className="footer-socials-icon fab fa-instagram"></i>
            <i className="footer-socials-icon fab fa-twitter-square"></i>
            <i className="footer-socials-icon fab fa-behance-square"></i>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
