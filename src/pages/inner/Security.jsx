import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function Security() {
  const [activeTab, setActiveTab] = useState('visitor')

  useEffect(() => { document.title = 'Security & Gate Management - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="z-label">Product</div>
              <h1>Security &amp; Gate Management</h1>
              <p>Control every entry point with digital visitor logs, vehicle tracking, and real-time access management — replacing manual registers with intelligent, audit-ready systems.</p>
              <Link to="/contact" className="inner-hero-btn">Request a Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-center">
              <img src="/assets/svg/BlockChain.svg" alt="Security" style={{ maxWidth: '380px', width: '100%', opacity: 0.9 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="inner-stats-bar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 stat-item"><h3>100%</h3><p>Digital visitor records</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Zero</h3><p>Unregistered entries</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Real-time</h3><p>Vehicle &amp; visitor tracking</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Full</h3><p>Audit trail &amp; compliance</p></div>
          </div>
        </div>
      </div>

      {/* Two-Tab Section */}
      <section className="inner-section">
        <div className="container">
          <div className="text-center mb-4">
            <div className="section-label">Management Modules</div>
            <h2 className="section-title">Complete Entry Control System</h2>
            <p className="section-subtitle mx-auto">Manage every visitor and vehicle that enters your facility with digitized, trackable, and auditable workflows.</p>
          </div>

          {/* Tab Buttons */}
          <div className="d-flex justify-content-center gap-3 mb-5" style={{ flexWrap: 'wrap' }}>
            <button
              className={`btn ${activeTab === 'visitor' ? 'btn-primary' : 'btn-outline-primary'}`}
              style={{ borderRadius: '50px', padding: '10px 28px', fontWeight: 600 }}
              onClick={() => setActiveTab('visitor')}
            >
              <i className="fas fa-user-check me-2"></i>Visitor Management
            </button>
            <button
              className={`btn ${activeTab === 'vehicle' ? 'btn-primary' : 'btn-outline-primary'}`}
              style={{ borderRadius: '50px', padding: '10px 28px', fontWeight: 600 }}
              onClick={() => setActiveTab('vehicle')}
            >
              <i className="fas fa-truck me-2"></i>Vehicle Management
            </button>
          </div>

          {/* Visitor Management Tab */}
          {activeTab === 'visitor' && (
            <div>
              <div className="inner-overview mb-5">
                <div style={{ flex: '1 1 300px' }}>
                  <div className="feature-card-icon" style={{ width: '64px', height: '64px', fontSize: '28px', marginBottom: '20px' }}>
                    <i className="fas fa-user-check"></i>
                  </div>
                  <h3 style={{ fontWeight: 700, marginBottom: '16px' }}>Visitor Management</h3>
                  <p style={{ color: '#555', marginBottom: '20px' }}>Digitize every visitor interaction from pre-registration to exit — eliminating paper registers, reducing gate queues, and maintaining a real-time record of everyone on-site.</p>
                </div>
                <div className="feature-cards-grid" style={{ flex: '2 1 500px' }}>
                  {[
                    { icon: 'fa-calendar-plus', title: 'Pre-Registration & Scheduling', desc: 'Hosts can register expected visitors in advance with purpose, duration, and access zone details.' },
                    { icon: 'fa-qrcode', title: 'QR-Based Entry Passes', desc: 'Issue digital passes via email or SMS that guards scan at entry — no paper slips, no manual verification.' },
                    { icon: 'fa-id-badge', title: 'Digital ID Verification', desc: 'Capture and store visitor ID details, photos, and purpose of visit with every check-in record.' },
                    { icon: 'fa-map-marked-alt', title: 'Zone Access Control', desc: 'Restrict visitor access to specific areas and track their movement across authorized zones only.' },
                    { icon: 'fa-sign-out-alt', title: 'Automated Check-Out', desc: 'Record exit times automatically with timestamps for complete on-site duration tracking and reporting.' },
                    { icon: 'fa-file-alt', title: 'Compliance-Ready Reports', desc: 'Generate visit history reports, audit logs, and emergency evacuation lists on demand.' },
                  ].map(({ icon, title, desc }) => (
                    <div className="feature-card" key={title}>
                      <div className="feature-card-icon"><i className={`fas ${icon}`}></i></div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Vehicle Management Tab */}
          {activeTab === 'vehicle' && (
            <div>
              <div className="inner-overview mb-5">
                <div style={{ flex: '1 1 300px' }}>
                  <div className="feature-card-icon" style={{ width: '64px', height: '64px', fontSize: '28px', marginBottom: '20px' }}>
                    <i className="fas fa-truck"></i>
                  </div>
                  <h3 style={{ fontWeight: 700, marginBottom: '16px' }}>Vehicle Management</h3>
                  <p style={{ color: '#555', marginBottom: '20px' }}>Track every vehicle entering and exiting your facility — from delivery trucks to employee vehicles — with digital logs, weighbridge integration, and real-time status dashboards.</p>
                </div>
                <div className="feature-cards-grid" style={{ flex: '2 1 500px' }}>
                  {[
                    { icon: 'fa-car', title: 'License Plate Capture', desc: 'Automatic or manual plate number logging at entry and exit — cross-referenced against approved vendor and employee lists.' },
                    { icon: 'fa-weight', title: 'Weighbridge Integration', desc: 'Connect to weighbridge systems for gross and tare weight capture, with digital challan generation for goods vehicles.' },
                    { icon: 'fa-boxes', title: 'Material Movement Tracking', desc: 'Log incoming and outgoing goods against purchase orders and delivery notes to prevent unauthorized material movement.' },
                    { icon: 'fa-parking', title: 'Parking Management', desc: 'Assign parking bays, track occupancy, and manage visitor and employee vehicle allocation in real time.' },
                    { icon: 'fa-clock', title: 'TAT Monitoring', desc: 'Track turnaround time for delivery vehicles — identifying delays at loading bays and dock bottlenecks.' },
                    { icon: 'fa-clipboard-list', title: 'Digital Gate Pass', desc: 'Generate material gate passes with QR verification, driver details, and authorized signatory records.' },
                  ].map(({ icon, title, desc }) => (
                    <div className="feature-card" key={title}>
                      <div className="feature-card-icon"><i className={`fas ${icon}`}></i></div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Unified Features */}
      <section className="inner-section bg-light-purple">
        <div className="container">
          <div className="text-center mb-2">
            <div className="section-label">Platform Features</div>
            <h2 className="section-title">Security Intelligence Across the Board</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-shield-alt', title: 'Blacklist Management', desc: 'Maintain and enforce blacklists of banned visitors or vehicles — triggering instant alerts on attempted entry.' },
              { icon: 'fa-bell', title: 'Real-Time Notifications', desc: 'Notify hosts on visitor arrival, alert security on unauthorized access attempts, and send departure confirmations automatically.' },
              { icon: 'fa-search', title: 'Searchable Audit Logs', desc: 'Instantly search historical visitor and vehicle records by name, date, vehicle number, or host for complete audit readiness.' },
              { icon: 'fa-mobile-alt', title: 'Mobile Guard Interface', desc: 'Security personnel use a mobile app to scan passes, verify IDs, log vehicles, and raise alerts without a desktop setup.' },
              { icon: 'fa-chart-bar', title: 'Analytics Dashboard', desc: 'Monitor peak entry times, visitor frequency, vehicle TAT trends, and gate congestion with visual reporting dashboards.' },
              { icon: 'fa-cloud', title: 'Cloud-Based & Scalable', desc: 'Deploy across single or multiple facilities with centralized data, role-based access, and no on-premise server requirement.' },
            ].map(({ icon, title, desc }) => (
              <div className="feature-card" key={title}>
                <div className="feature-card-icon"><i className={`fas ${icon}`}></i></div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="inner-cta">
        <div className="container">
          <h2>Take Control of Every Entry Point</h2>
          <p>See how PlantIQX Security &amp; Gate Management digitizes and secures your facility access with a personalized demo.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
