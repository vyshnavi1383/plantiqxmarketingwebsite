import React, { useEffect, useState } from 'react'
import '../styles/contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    mobileNumber: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    document.title = 'Contact Us - PlantIQX'
  }, [])

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const payload = {
        access_key: 'ad435e54-d56a-4cce-b5d1-8bea8c883118',
        subject: 'New PlantIQX Demo Request',
        from_name: 'PlantIQX Website',
        ...formData,
      }
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      }
    } catch (err) {
      console.error(err)
    }
    setSubmitting(false)
  }

  const resetForm = () => {
    setFormData({ fullName: '', companyName: '', businessEmail: '', mobileNumber: '', message: '' })
    setSubmitted(false)
  }

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="section-label" style={{ color: '#ff9500' }}>Contact Us</div>
          <h1>We're Here to Help You Build Smarter Operations</h1>
          <p>Have a question, feedback, or want to request a demo? The PlantIQX team is ready to assist you. Reach out to us and let's explore how our industrial intelligence solutions can transform your operations.</p>
        </div>
      </section>

      {/* Request Demo & Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            {/* Left Side - Request Demo */}
            <div className="request-demo">
              <div className="section-label" style={{ color: '#ff9500' }}>Request A Demo</div>
              <h2>See PlantIQX in Action</h2>
              <p>Experience the full power of PlantIQX with a personalized demonstration. Explore real-time monitoring, predictive analytics, and intelligent IoT integration. Analytics — can transform your industrial operations.</p>
              <div className="demo-features">
                <div className="demo-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Witness real-time monitoring and intelligent insights in action</span>
                </div>
                <div className="demo-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Understand how to optimize assets, workflows, and maintenance</span>
                </div>
                <div className="demo-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>See how predictive analytics can reduce downtime and improve efficiency</span>
                </div>
                <div className="demo-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Get guidance tailored to your plant's specific needs</span>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form">
              <div className="section-label" style={{ color: '#ff9500' }}>Fill Out the Form</div>

              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" name="fullName" placeholder="Enter Your Full Name" value={formData.fullName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input type="text" name="companyName" placeholder="Enter Your Company Name" value={formData.companyName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Business Email Address *</label>
                    <input type="email" name="businessEmail" placeholder="Enter Your Business Email Address" value={formData.businessEmail} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input type="tel" name="mobileNumber" placeholder="+91 | Enter Your Mobile Number" value={formData.mobileNumber} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Message (Optional)</label>
                    <textarea name="message" rows="4" placeholder="Enter Your Message" value={formData.message} onChange={handleChange}></textarea>
                  </div>
                  <button type="submit" className="submit-btn" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              ) : (
                <div className="thank-you-message">
                  <div className="thank-you-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Thank You — Request Received!</h3>
                  <p className="thank-you-text">Your details have been submitted successfully. Our PlantIQX expert team will contact you shortly.</p>
                  <div className="what-happens-next">
                    <h4>What happens next:</h4>
                    <ul>
                      <li>We review your requirement</li>
                      <li>Our expert will reach out within one business day</li>
                      <li>A demo / consultation will be scheduled at your convenience</li>
                    </ul>
                  </div>
                  <button className="btn-back-to-form" onClick={resetForm}>Submit Another Request</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact & Get in Touch Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-content">
            {/* Left Side - Why Contact */}
            <div className="why-contact">
              <h2>Why Contact PlantIQX?</h2>
              <div className="contact-reasons">
                <div className="contact-reason">
                  <img src="/assets/svg/verify.svg" alt="" />
                  <span>Get personalized guidance for your industrial automation needs</span>
                </div>
                <div className="contact-reason">
                  <img src="/assets/svg/verify.svg" alt="" />
                  <span>Request a demo of our smart factory modules</span>
                </div>
                <div className="contact-reason">
                  <img src="/assets/svg/verify.svg" alt="" />
                  <span>Speak directly with our experts about integration, analytics, and IoT solutions</span>
                </div>
                <div className="contact-reason">
                  <img src="/assets/svg/verify.svg" alt="" />
                  <span>Receive timely support for any technical or operational questions</span>
                </div>
              </div>
            </div>

            {/* Right Side - Get in Touch */}
            <div className="get-in-touch">
              <div className="section-label" style={{ color: '#ff9500' }}>Contact Us</div>
              <h2>Get in Touch</h2>
              <p>Whether you're interested in a product demo, need technical support, or have a general inquiry, we want to hear from you.</p>
              <div className="contact-locations">
                <div className="location-card">
                  <div className="location-flag">
                    <span>PlantIQX (INDIA)</span>
                  </div>
                  <div className="location-details">
                    <div className="location-item">
                      <i className="fas fa-phone"></i>
                      <span>+91 6302288170</span>
                    </div>
                    <div className="location-item">
                      <i className="fas fa-envelope"></i>
                      <span>info@plantiqx.com</span>
                    </div>
                    <div className="location-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Office no. 812, Fairmount Downtown, Kompally, Hyderabad, Telangana 500100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="expect-section">
        <div className="container">
          <div className="expect-box">
            <div className="expect-content">
              <h2>What to Expect</h2>
              <p>Once you submit your request, a PlantIQX expert will contact you to:</p>
              <ol>
                <li>Schedule a demo at a convenient time</li>
                <li>Walk you through the platform features relevant to your operations</li>
                <li>Answer any questions and discuss integration possibilities</li>
              </ol>
            </div>
            <div className="expect-button-wrapper">
              <button className="expect-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Book your demo today <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
