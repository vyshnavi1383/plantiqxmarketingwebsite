import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function Surveillance() {
  useEffect(() => { document.title = 'Surveillance - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
          <source src="/assets/videos/survelliance.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,10,60,0.75) 0%, rgba(13,31,60,0.65) 60%, rgba(10,42,94,0.6) 100%)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              <div className="z-label">Product</div>
              <h1>Surveillance</h1>
              <p>AI-powered video intelligence that monitors your facility 24/7 — detecting safety violations, security threats, and operational inefficiencies in real time.</p>
              <Link to="/contact" className="inner-hero-btn">Request a Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="inner-stats-bar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 stat-item"><h3>99.5%</h3><p>Defect detection accuracy</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>&lt;50ms</h3><p>Inspection cycle time</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>70%</h3><p>Reduction in quality escapes</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>24/7</h3><p>Tireless automated inspection</p></div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="inner-section">
        <div className="container">
          <div className="inner-overview">
            <div className="asset-image-box">
              <img src="/assets/images/surveillance.png.jpeg" alt="Surveillance Overview" />
            </div>
            <div>
              <div className="section-label">What It Does</div>
              <h2 className="section-title">Vision Intelligence for Safer Sites</h2>
              <p className="section-subtitle">PlantIQX Surveillance transforms your existing camera infrastructure into a proactive AI monitoring system. It watches every corner of your facility continuously — detecting events humans miss and alerting the right people instantly.</p>
              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-users"></i></div>
                  <div><strong>Facility &amp; Activity Monitoring</strong><br /><small className="text-muted">Track personnel movement, zone occupancy, and operational activity across your entire facility in real time.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-hard-hat"></i></div>
                  <div><strong>Safety &amp; Compliance Alerts</strong><br /><small className="text-muted">Automatically detect PPE violations, restricted zone breaches, and unsafe behaviors before accidents occur.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-shield-alt"></i></div>
                  <div><strong>Security Incident Detection</strong><br /><small className="text-muted">Identify unauthorized access, after-hours intrusions, and suspicious activity with instant alert escalation.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-cogs"></i></div>
                  <div><strong>Operational Efficiency Monitoring</strong><br /><small className="text-muted">Measure queue lengths, idle time, and workflow bottlenecks to drive continuous operational improvements.</small></div>
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
            <h2 className="section-title">Built for Industrial-Scale Surveillance</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-chart-bar', title: 'Live Site Analytics', desc: 'Real-time dashboards showing headcount, zone activity, dwell times, and facility-wide occupancy trends.' },
              { icon: 'fa-fire', title: 'Fire & Smoke Detection', desc: 'Early fire and smoke detection through AI video analysis — triggering alerts faster than traditional smoke detectors.' },
              { icon: 'fa-hard-hat', title: 'PPE Compliance Monitoring', desc: 'Automatically verify helmets, vests, gloves, and other safety gear compliance across all active zones.' },
              { icon: 'fa-moon', title: 'After Hours Security', desc: 'Detect unauthorized presence, perimeter breaches, and suspicious activity outside operational hours.' },
              { icon: 'fa-recycle', title: 'Operational Waste Reduction', desc: 'Identify idle workers, blocked equipment, and workflow inefficiencies using behavioral pattern analysis.' },
              { icon: 'fa-bell', title: 'Smart Alerts & Integration', desc: 'Multi-channel alerts via SMS, email, and app — integrated with access control and alarm systems.' },
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
            <h2 className="section-title">Surveillance Modules for Every Need</h2>
            <p className="section-subtitle mx-auto">PlantIQX Surveillance ships as purpose-built modules tailored to specific operational challenges.</p>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'VisionFlow', desc: 'Optimize production flow by monitoring personnel movement, machine utilization, and material handling patterns — eliminating bottlenecks and improving throughput.' },
              { num: '02', title: 'VisionSafe', desc: 'Enforce safety protocols with AI that detects PPE non-compliance, restricted zone violations, unsafe postures, and fire/smoke events — preventing accidents before they happen.' },
              { num: '03', title: 'VisionSecure', desc: 'Protect your facility around the clock with after-hours intrusion detection, perimeter monitoring, tailgating alerts, and instant security escalation workflows.' },
              { num: '04', title: 'VisionOps', desc: 'Drive operational excellence by analyzing queue lengths, idle time, crowd densities, and workflow deviations — turning camera footage into continuous improvement data.' },
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
          <h2>Zero Defects Start Here</h2>
          <p>See how PlantIQX Surveillance transforms your facility into a proactive, AI-monitored environment with a personalized demo.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
