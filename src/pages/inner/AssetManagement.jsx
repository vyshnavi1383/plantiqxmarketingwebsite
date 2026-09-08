import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function AssetManagement() {
  useEffect(() => { document.title = 'Asset Management - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
          <source src="/assets/videos/asset-management.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,10,60,0.75) 0%, rgba(13,31,60,0.65) 60%, rgba(10,42,94,0.6) 100%)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              <div className="z-label">Product</div>
              <h1>Asset Management</h1>
              <p>Optimize asset performance, reduce downtime, and maximize the lifecycle of your critical equipment.</p>
              <Link to="/contact" className="inner-hero-btn">Request a Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="inner-stats-bar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 stat-item"><h3>35%</h3><p>Reduction in unplanned downtime</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>80%</h3><p>Less manual asset reporting</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>2×</h3><p>Faster maintenance response</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>100%</h3><p>Asset visibility across facility</p></div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="inner-section">
        <div className="container">
          <div className="inner-overview">
            <div className="asset-image-box">
              <img src="/assets/svg/AssetDetails.svg" alt="Asset Overview" />
            </div>
            <div>
              <div className="section-label">What It Does</div>
              <h2 className="section-title">Complete Visibility Over Every Asset</h2>
              <p className="section-subtitle">PlantIQX Asset Management gives you a unified, real-time view of all your industrial equipment — their health, location, usage, maintenance history, and predicted lifespan. No more spreadsheets, guesswork, or reactive firefighting.</p>
              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-broadcast-tower"></i></div>
                  <div><strong>Live Asset Tracking</strong><br /><small className="text-muted">Monitor every asset's status, location, and performance in real time from a central dashboard.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-history"></i></div>
                  <div><strong>Full Lifecycle Management</strong><br /><small className="text-muted">Track assets from procurement through decommissioning with complete audit trails.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-bell"></i></div>
                  <div><strong>Intelligent Alerts</strong><br /><small className="text-muted">Get notified instantly when an asset deviates from expected performance thresholds.</small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="inner-section bg-light-purple">
        <div className="container">
          <div className="text-center mb-2">
            <div className="section-label">Key Features</div>
            <h2 className="section-title">Everything You Need to Manage Assets Smarter</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-chart-line', title: 'Performance Monitoring', desc: 'Track OEE, utilization rates, and performance KPIs for every asset with live dashboards and trend charts.' },
              { icon: 'fa-tools', title: 'Predictive Maintenance Scheduling', desc: 'AI models predict when each asset needs servicing — before a failure occurs — reducing emergency repairs.' },
              { icon: 'fa-qrcode', title: 'Asset Tagging & Identification', desc: 'QR code and RFID-based tagging for instant asset lookup, inspection records, and service history access.' },
              { icon: 'fa-file-alt', title: 'Work Order Management', desc: 'Create, assign, and track work orders digitally. Technicians get mobile alerts with step-by-step job instructions.' },
              { icon: 'fa-project-diagram', title: 'Asset Hierarchy Mapping', desc: 'Build structured asset trees — from plant to department to equipment — for granular reporting and accountability.' },
              { icon: 'fa-download', title: 'Automated Reporting', desc: 'Generate compliance, maintenance, and cost reports automatically — saving hours of manual effort every week.' },
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

      {/* Use Cases */}
      <section className="inner-section">
        <div className="container">
          <div className="text-center mb-2">
            <div className="section-label">Use Cases</div>
            <h2 className="section-title">How Industries Use It</h2>
            <p className="section-subtitle mx-auto">Real-world applications of PlantIQX Asset Management across industrial sectors.</p>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'Manufacturing Plant Floor', desc: 'Monitor hundreds of production machines simultaneously. Detect vibration anomalies, track OEE, and auto-schedule preventive maintenance to keep lines running continuously.' },
              { num: '02', title: 'Oil & Gas Facility', desc: 'Track rotating equipment like pumps, compressors, and turbines in real time. Alert engineers instantly when pressure or temperature thresholds are exceeded.' },
              { num: '03', title: 'Pharmaceutical Production', desc: 'Maintain compliance-ready asset logs and calibration records for regulated equipment — audit-ready at any time with full traceability.' },
              { num: '04', title: 'Power & Utilities', desc: 'Manage transmission and distribution assets across multiple sites with centralized visibility, reducing field trips and emergency response costs.' },
              { num: '05', title: 'Food & Beverage Processing', desc: 'Track sanitation schedules, equipment runtime, and cleaning cycles for each production asset to meet food safety standards and avoid contamination risks.' },
              { num: '06', title: 'Automotive Assembly', desc: 'Coordinate multi-shift maintenance windows, track jig and fixture performance, and minimize costly line stoppages with proactive asset health alerts.' },
            ].map(({ num, title, desc }) => (
              <div className="usecase-item" key={num}>
                <div className="usecase-num">{num}</div>
                <div><h5>{title}</h5><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="inner-cta">
        <div className="container">
          <h2>Ready to Take Control of Your Assets?</h2>
          <p>See how PlantIQX Asset Management transforms your facility's operations with a personalized demo.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
