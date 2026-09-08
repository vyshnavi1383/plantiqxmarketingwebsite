import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function UtilitiesMonitoring() {
  useEffect(() => { document.title = 'Utilities Monitoring - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
          <source src="/assets/videos/utility.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,10,60,0.75) 0%, rgba(13,31,60,0.65) 60%, rgba(10,42,94,0.6) 100%)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              <div className="z-label">Product</div>
              <h1>Utilities Monitoring</h1>
              <p>Track electricity, water, gas, and compressed air consumption in real time — cut costs, eliminate waste, and achieve sustainability targets.</p>
              <Link to="/contact" className="inner-hero-btn">Request a Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="inner-stats-bar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-4 stat-item"><h3>Real-time</h3><p>Consumption visibility</p></div>
            <div className="col-6 col-md-4 stat-item"><h3>4+</h3><p>Utility types tracked</p></div>
            <div className="col-6 col-md-4 stat-item"><h3>30%</h3><p>Reduction in utility waste</p></div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="inner-section">
        <div className="container">
          <div className="inner-overview">
            <div className="asset-image-box">
              <img src="/assets/images/utilities-monitoring-dashboard.png" alt="Utilities Monitoring Overview" />
            </div>
            <div>
              <div className="section-label">What It Does</div>
              <h2 className="section-title">See Every Unit of Energy You Use</h2>
              <p className="section-subtitle">PlantIQX Utilities Monitoring gives you granular, real-time visibility into all utility consumption across your facility. Identify wastage hotspots, detect leaks and faults early, and drive measurable savings with data-backed decisions.</p>
              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-bolt"></i></div>
                  <div><strong>Multi-Utility Tracking</strong><br /><small className="text-muted">Monitor electricity, water, gas, compressed air, and steam from a single unified dashboard — across every meter and sub-meter.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-exclamation-triangle"></i></div>
                  <div><strong>Anomaly Detection</strong><br /><small className="text-muted">Automatically flag unusual consumption spikes, equipment faults, and wastage patterns before they become costly problems.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-leaf"></i></div>
                  <div><strong>Sustainability Reporting</strong><br /><small className="text-muted">Generate carbon footprint reports, track ESG targets, and demonstrate environmental compliance with automated documentation.</small></div>
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
            <h2 className="section-title">Complete Control Over Every Utility</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-tachometer-alt', title: 'Real-Time Dashboards', desc: 'Live consumption data displayed by machine, department, shift, or facility — updated every second for instant operational awareness.' },
              { icon: 'fa-coins', title: 'Cost Analysis & Budgeting', desc: 'Convert consumption into monetary costs, compare against budgets, and identify the highest-cost areas for targeted reduction.' },
              { icon: 'fa-search', title: 'Leak & Fault Detection', desc: 'AI algorithms detect consumption anomalies that indicate leaks, faulty meters, or equipment inefficiency — minimizing waste.' },
              { icon: 'fa-bullseye', title: 'Benchmarking & Targets', desc: 'Set per-unit or per-shift consumption targets and track performance against benchmarks across teams and facilities.' },
              { icon: 'fa-globe', title: 'Carbon Footprint Tracking', desc: 'Automatically calculate Scope 1 and 2 emissions from utility data and monitor progress toward net-zero goals.' },
              { icon: 'fa-plug', title: 'Meter & Sensor Integration', desc: 'Connect to smart meters, IoT sensors, and existing SCADA/BMS systems with plug-and-play hardware integration.' },
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
            <h2 className="section-title">Where Industries Apply It</h2>
            <p className="section-subtitle mx-auto">Real-world applications of PlantIQX Utilities Monitoring across diverse sectors.</p>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'Factory Energy Optimization', desc: 'Monitor power consumption per machine, per line, and per shift to identify energy hogs, reduce peak demand charges, and optimize production scheduling around energy costs.' },
              { num: '02', title: 'Water Treatment Plants', desc: 'Track water flow, chemical dosing, and pump energy consumption in real time — detecting leaks, reducing chemical waste, and ensuring compliance with discharge regulations.' },
              { num: '03', title: 'ESG & Sustainability Reporting', desc: 'Automatically compile utility consumption into ESG-compliant carbon reports, reducing the manual effort of sustainability disclosures and improving data accuracy.' },
              { num: '04', title: 'Multi-Tenant Industrial Parks', desc: 'Sub-meter and allocate utility costs accurately across tenants, reduce billing disputes, and provide transparent consumption dashboards to each occupant.' },
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
          <h2>Cut Costs. Reduce Waste. Go Green.</h2>
          <p>See how PlantIQX Utilities Monitoring delivers measurable savings and sustainability outcomes with a personalized demo.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
