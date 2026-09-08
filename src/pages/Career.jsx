import React, { useEffect, useState } from 'react'

export default function Career() {
  const [modalJob, setModalJob] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', resume_link: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    document.title = 'Careers - PlantIQX'
  }, [])

  const openModal = (job) => {
    setModalJob(job)
    setSubmitted(false)
    setFormData({ name: '', email: '', phone: '', resume_link: '' })
  }

  const closeModal = () => setModalJob(null)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const payload = {
        access_key: 'bc8aa27c-9cf2-47b0-8efc-f134537fc11d',
        subject: 'New PlantIQX Job Application',
        from_name: 'PlantIQX Careers',
        position: modalJob,
        ...formData,
      }
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.success) setSubmitted(true)
    } catch (err) {
      console.error(err)
    }
    setSubmitting(false)
  }

  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4">Openings</h1>

          {/* Junior Embedded Firmware Engineer */}
          <details className="career-opening">
            <summary>Junior Embedded Firmware Engineer</summary>
            <div className="career-description">
              <p>
                <strong>Job Title:</strong> Junior Embedded Firmware Engineer<br />
                <strong>Experience:</strong> 3 Years<br />
                <strong>Gender:</strong> Male/Female<br />
                <strong>Location:</strong> Kompally, Secunderabad
              </p>
              <h6>Job Summary</h6>
              <p>We are hiring a Junior Embedded Firmware Engineer to support firmware development for microcontroller-based systems. The role involves Embedded C programming, sensor interfacing, serial communication, debugging, and documentation.</p>
              <h6>Key Responsibilities</h6>
              <ul>
                <li>Develop firmware using Embedded C basics</li>
                <li>Assist in microcontroller programming (ARM/STM32/ESP32/PIC)</li>
                <li>Sensor interfacing and serial communication (UART, SPI, I2C)</li>
                <li>Use debugging tools and perform code testing</li>
                <li>Read hardware schematics and support integration</li>
                <li>Maintain code using Git and prepare documentation</li>
              </ul>
              <h6>Required Skills</h6>
              <ul>
                <li>Basic Embedded C knowledge</li>
                <li>Understanding of microcontrollers and RTOS concepts</li>
                <li>Familiarity with debugging tools</li>
                <li>Good documentation and communication skills</li>
              </ul>
              <h6>Qualification</h6>
              <p>Diploma/B.E./B.Tech in Electronics, ECE, Embedded Systems, or a related field.</p>
              <button className="btn btn-primary" type="button" onClick={() => openModal('Junior Embedded Firmware Engineer')}>
                Apply
              </button>
            </div>
          </details>

          {/* IoT Application Engineer */}
          <details className="career-opening">
            <summary>IoT Application Engineer</summary>
            <div className="career-description">
              <p>
                <strong>Job Title:</strong> IoT Application Engineer<br />
                <strong>Experience:</strong> 4–5 Years<br />
                <strong>Gender:</strong> Male<br />
                <strong>Location:</strong> Kompally, Secunderabad
              </p>
              <h6>Job Summary</h6>
              <p>We are hiring an IoT Application Engineer to configure IoT platforms, develop dashboards, onboard devices, and support deployment activities. The role involves API integration, data visualization, troubleshooting IoT devices, and providing customer and field support.</p>
              <h6>Key Responsibilities</h6>
              <ul>
                <li>Configure and manage IoT platforms</li>
                <li>Develop dashboards and IoT applications</li>
                <li>Device onboarding and provisioning</li>
                <li>API integration with third-party systems</li>
                <li>Data visualization and reporting</li>
                <li>Troubleshoot IoT devices and connectivity issues</li>
                <li>Testing, deployment, and post-implementation support</li>
              </ul>
              <h6>Required Skills</h6>
              <ul>
                <li>IoT platform configuration experience</li>
                <li>Dashboard and application development</li>
                <li>Basic cloud knowledge (AWS/Azure/GCP)</li>
                <li>SQL/NoSQL basics</li>
                <li>Strong troubleshooting and customer support skills</li>
              </ul>
              <h6>Qualification</h6>
              <p>B.E./B.Tech in Computer Science, IT, Electronics, or a related field.</p>
              <button className="btn btn-primary" type="button" onClick={() => openModal('IoT Application Engineer')}>
                Apply
              </button>
            </div>
          </details>
        </div>
      </section>

      {/* Application Modal */}
      {modalJob && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content" style={{ background: '#e6e0f8' }}>
              <div className="modal-header">
                <h5 className="modal-title">Application Form</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Position</label>
                      <input type="text" className="form-control" value={modalJob} readOnly />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Resume Link</label>
                      <input type="url" className="form-control" name="resume_link" placeholder="Paste Google Drive, OneDrive or Dropbox Resume Link" value={formData.resume_link} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-success" disabled={submitting}>
                      {submitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <i className="fas fa-check-circle text-success" style={{ fontSize: '60px' }}></i>
                    <h4 className="mt-3">Application Submitted!</h4>
                    <p>Thank you for applying. We'll be in touch soon.</p>
                    <button className="btn btn-primary" onClick={closeModal}>Close</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .career-opening {
          margin-bottom: 16px;
          overflow: hidden;
          background: #e6e0f8;
          border: 1px solid #d8cef3;
          border-radius: 8px;
        }
        .career-opening summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 20px;
          color: purple;
          font-weight: 700;
          cursor: pointer;
          list-style: none;
        }
        .career-opening summary::-webkit-details-marker { display: none; }
        .career-opening summary::after {
          content: "\\f078";
          font-family: "Font Awesome 6 Free";
          font-size: 14px;
          font-weight: 900;
          transition: transform 0.2s ease;
        }
        .career-opening[open] summary::after { transform: rotate(180deg); }
        .career-opening[open] summary { border-bottom: 1px solid #d8cef3; }
        .career-description { padding: 20px; color: #333; }
        .career-description h6 { margin-top: 20px; font-weight: 700; }
        .career-description h6:first-of-type { margin-top: 0; }
        .career-description li { margin-bottom: 6px; }
      `}</style>
    </main>
  )
}
