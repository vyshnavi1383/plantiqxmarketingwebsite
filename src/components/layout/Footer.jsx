import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Newsletter subscription
    alert(`Thank you for subscribing with ${email}!`)
    setEmail('')
  }

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-12 mb-5">
            <div className="footer-brand">
              <img src="/assets/svg/plantiqx-final-logo.svg" alt="PlantIQX" className="footer-logo" />
              <p className="footer-description">
                PlantIQX is revolutionizing industrial operations with smart automation, real-time analytics,
                and data-driven insight. We help industries produce smarter, optimize processes, and achieve
                operational excellence.
              </p>
              <div className="footer-social">
                <span className="social-label">FOLLOW US :</span>
                <div className="social-links">
                  <a href="https://www.instagram.com/plantiqx.ai?igsh=aDQ1MXd1ZW4yYmpy&utm_source=qr" target="_blank" rel="noreferrer" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/plantiqx/" target="_blank" rel="noreferrer" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="col-lg-2 d-none d-lg-block"></div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-6 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/products?tab=automation">Automation</Link></li>
              <li><Link to="/products?tab=solutions">Solutions</Link></li>
              <li><Link to="/career">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products & Solutions */}
          <div className="col-lg-2 col-md-3 col-6 mb-4">
            <h5 className="footer-title">Products &amp; Solutions</h5>
            <ul className="footer-links">
              <li><Link to="/asset-management">Asset Management</Link></li>
              <li><Link to="/predictive-maintenance">Predictive Maintenance</Link></li>
              <li><Link to="/vision-ai">Vision AI</Link></li>
              <li><Link to="/security">Security &amp; Administration</Link></li>
              <li><Link to="/utilities-monitoring">Utilities Monitoring</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-2 col-md-4 col-12 mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+916302288170">+91 6302288170</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="https://mail.google.com/mail/?view=cm&to=info@plantiqx.in" target="_blank" rel="noopener noreferrer">info@plantiqx.in</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <a
                  href="https://maps.google.com/?q=Fairmount+Downtown,+Kompally,+Hyderabad,+Telangana+500100"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Office no. 812, Fairmount Downtown, Kompally, Hyderabad, Telangana 500100
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <div className="row">
            <div className="col-lg-4 mb-3 mb-lg-0">
              <h4 className="newsletter-title">Subscribe to Our Newsletter</h4>
              <p className="newsletter-subtitle">Stay updated with the latest innovations, insights, and updates from PlantIQX.</p>
            </div>
            <div className="col-lg-3 d-none d-lg-block"></div>
            <div className="col-lg-5">
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="input-group">
                  <span className="input-icon"><i className="far fa-envelope"></i></span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn btn-subscribe" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="copyright-text">© 2025 PlantIQX - All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#privacy" className="footer-link-small">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="footer-link-small">Term Of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
