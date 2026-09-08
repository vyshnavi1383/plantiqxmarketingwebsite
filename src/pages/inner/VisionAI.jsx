import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function VisionAI() {
  useEffect(() => { document.title = 'Vision AI - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero" style={{
        background: "url('/assets/images/vision ai banner.png') center center / cover no-repeat",
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(26,10,60,0.78) 0%,rgba(13,31,60,0.68) 60%,rgba(10,42,94,0.62) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              <div className="inner-hero-label">Solution</div>
              <h1>Vision AI<br /><span>Teaching Machines to See &amp; Act</span></h1>
              <p>Deep learning–powered visual intelligence that automates defect detection, enforces worker safety, prevents equipment failure, and drives measurable efficiency gains across your industrial facility.</p>
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
              <img src="/assets/svg/ArtificialInteligence.svg" alt="Vision AI Overview" />
            </div>
            <div>
              <div className="section-label">What Is Vision AI</div>
              <h2 className="section-title">Machines That See, Learn &amp; Decide</h2>
              <p className="section-subtitle">Vision AI enables machines to interpret visual data using deep learning algorithms — replacing slow, inconsistent manual oversight with smart cameras that detect anomalies, enforce compliance, and trigger real-time action.</p>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.8, marginTop: '16px' }}>Unlike rule-based machine vision systems of the past, modern Vision AI continuously self-improves from new data. Models can be trained with as few as a handful of reference images, then deployed across your facility — on-premise or at the edge — without cloud dependency.</p>
              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-brain"></i></div>
                  <div><strong>Deep Learning Algorithms</strong><br /><small className="text-muted">Neural networks trained on industrial imagery detect micro-defects, behavioural anomalies, and structural faults with far greater consistency than human operators.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-microchip"></i></div>
                  <div><strong>Edge Processing</strong><br /><small className="text-muted">On-device GPU inference means images never leave the facility — latency is measured in milliseconds, and data security is guaranteed.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-sync-alt"></i></div>
                  <div><strong>Continuous Model Improvement</strong><br /><small className="text-muted">Every flagged event feeds back into the model, so detection accuracy improves over time without manual retraining cycles.</small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Industrial Applications */}
      <section className="inner-section bg-light-purple">
        <div className="container">
          <div className="text-center mb-2">
            <div className="section-label">Key Industrial Applications</div>
            <h2 className="section-title">Where Vision AI Transforms Operations</h2>
            <p style={{ color: '#555', maxWidth: '620px', margin: '12px auto 0', fontSize: '15px', lineHeight: 1.7 }}>From the assembly line to the warehouse gate, Vision AI covers every critical visual task across your plant.</p>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-search', title: 'Quality Inspection', desc: 'AI systems identify micro-defects, scratches, and surface flaws on assembly lines in real time — functioning with far higher consistency than human operators and virtually eliminating false passes.' },
              { icon: 'fa-hard-hat', title: 'Worker Safety', desc: 'Systems continuously monitor facility floors for dangerous conditions, enforce PPE compliance (helmets, vests, goggles), and instantly flag personnel entering restricted or high-risk zones.' },
              { icon: 'fa-tools', title: 'Predictive Maintenance', desc: 'Vision AI analyses thermal and structural imagery from industrial equipment, spotting wear patterns or developing faults days or weeks before they lead to costly unplanned downtime.' },
              { icon: 'fa-warehouse', title: 'Logistics & Warehousing', desc: 'Smart cameras and vision-guided autonomous forklifts track inventory in real time, prevent bottlenecks, and scan for out-of-stock items across high-throughput smart warehouses.' },
              { icon: 'fa-fire-alt', title: 'Fire & Hazard Detection', desc: 'Visual AI detects early signs of smoke or fire from camera feeds — often faster than conventional smoke sensors — enabling rapid response before damage or injury occurs.' },
              { icon: 'fa-car-alt', title: 'Gate & Vehicle Management', desc: 'Automate facility entry with AI-based licence plate recognition, vehicle classification, and personnel verification — reducing manual checkpoints and improving site security.' },
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

      {/* How It Works */}
      <section className="inner-section">
        <div className="container">
          <div className="text-center mb-2">
            <div className="section-label">How It Works</div>
            <h2 className="section-title">From Camera Feed to Corrective Action</h2>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'Capture', desc: 'Existing IP cameras or new smart cameras stream continuous video across monitored zones.' },
              { num: '02', title: 'Analyse', desc: 'On-device or edge GPU runs deep learning inference on every frame in under 50ms.' },
              { num: '03', title: 'Detect', desc: 'Anomalies, defects, safety violations, or security events are flagged with high confidence scores.' },
              { num: '04', title: 'Act', desc: 'Alerts fire to dashboards, mobile apps, or existing SCADA/ERP systems for immediate response.' },
            ].map(({ num, title, desc }) => (
              <div className="usecase-item" key={num}>
                <div className="usecase-num">{num}</div>
                <div><h5>{title}</h5><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="inner-section" style={{ background: 'linear-gradient(135deg, #0f0629 0%, #0d1f3c 100%)' }}>
        <div className="container">
          <div className="text-center mb-2">
            <div className="section-label" style={{ color: '#a78bfa' }}>Core Technologies</div>
            <h2 className="section-title" style={{ color: '#fff' }}>Built on Advanced AI Infrastructure</h2>
            <p style={{ color: '#b0c4de', maxWidth: '580px', margin: '12px auto 0', fontSize: '15px', lineHeight: 1.7 }}>Vision AI has evolved from simple rule-based algorithms to self-adapting neural networks and foundational vision models.</p>
          </div>
          <div className="feature-cards-grid mt-4">
            {[
              { icon: 'fa-microchip', title: 'Edge AI & On-Device Processing', desc: 'Image analysis happens locally on GPUs inside or alongside cameras — keeping data secure, eliminating cloud latency, and ensuring operations continue even without network connectivity.' },
              { icon: 'fa-cube', title: 'Digital Twins & Simulation', desc: 'Platforms allow industrial planners to digitally simulate factory floor operations and camera placements before physical deployment — reducing integration risk and time-to-value.' },
              { icon: 'fa-network-wired', title: 'Foundation Vision Models', desc: 'Large pre-trained models require minimal labelled data to fine-tune for new defect types or environments — dramatically shortening deployment timelines.' },
              { icon: 'fa-thermometer-half', title: 'Thermal & Multi-Spectral Imaging', desc: 'Beyond standard RGB cameras, thermal sensors reveal heat anomalies in motors and electrical panels — detecting faults invisible to the naked eye and conventional cameras.' },
              { icon: 'fa-project-diagram', title: 'IoT & SCADA Integration', desc: 'Vision AI events feed directly into existing IoT platforms, SCADA dashboards, and ERP systems — creating a unified operational intelligence layer with no data silos.' },
              { icon: 'fa-shield-alt', title: 'Secure & Compliant Architecture', desc: 'Role-based access, encrypted video streams, and configurable data retention policies ensure Vision AI deployments meet industrial data governance and privacy requirements.' },
            ].map(({ icon, title, desc }) => (
              <div className="feature-card" key={title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                <div className="feature-card-icon" style={{ background: 'rgba(105,65,198,0.35)', color: '#c4b5fd' }}><i className={`fas ${icon}`}></i></div>
                <h4 style={{ color: '#fff' }}>{title}</h4>
                <p style={{ color: '#444' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Modules */}
      <section className="inner-section">
        <div className="container">
          <div className="text-center mb-2">
            <div className="section-label">Deployment Suites</div>
            <h2 className="section-title">PlantIQX Vision AI Modules</h2>
            <p style={{ color: '#555', maxWidth: '600px', margin: '12px auto 0', fontSize: '15px', lineHeight: 1.7 }}>Deploy one module or the full suite — each is purpose-built for a critical operational challenge.</p>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'VisionQC — Quality & Defect Inspection', desc: 'Automated real-time inspection of every part on the line. Detects micro-defects, scratches, dimensional errors, and surface anomalies with 99.5% accuracy — flagging rejects before they reach the next station.' },
              { num: '02', title: 'VisionSafe — Worker Safety & PPE Compliance', desc: 'Continuously monitors all facility zones for PPE violations, restricted area intrusions, unsafe postures, and dangerous proximity to machinery — with instant alerts to safety officers.' },
              { num: '03', title: 'VisionMaint — Predictive Maintenance Vision', desc: 'Analyses thermal and visible-spectrum imagery of equipment to spot early wear signatures, overheating, leaks, and structural fatigue — triggering maintenance before failure occurs.' },
              { num: '04', title: 'VisionFlow — Facility & Activity Monitoring', desc: 'Tracks crowd density, walking paths, canteen occupancy, and vehicle idle time across the site to surface operational inefficiencies and keep workflows moving smoothly.' },
              { num: '05', title: 'VisionSecure — Security & Perimeter Protection', desc: 'Identifies after-hours presence, perimeter intrusion, and theft in progress with intelligent analytics — and integrates directly with access control systems for automated lockdown responses.' },
              { num: '06', title: 'VisionOps — Operational Efficiency Monitoring', desc: 'Flags prolonged mobile device use, unauthorised idling, and early fatigue indicators so supervisors can intervene before productivity drops or safety risks emerge.' },
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
          <h2>Ready to Deploy Visual Intelligence?</h2>
          <p>Tell us your industry and the problem you want to solve — quality control, safety compliance, predictive maintenance, or logistics — and our team will identify the best Vision AI deployment for your facility.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
