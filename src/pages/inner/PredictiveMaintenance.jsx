import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function PredictiveMaintenance() {
  useEffect(() => { document.title = 'Predictive Maintenance - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero" style={{
        backgroundImage: 'url(/assets/images/predictive main banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,10,60,0.80) 0%, rgba(13,31,60,0.70) 60%, rgba(10,42,94,0.65) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              <div className="inner-hero-label">Product</div>
              <h1>Predictive Maintenance</h1>
              <p>AI-driven failure prediction that tells you when equipment will break — before it does. Eliminate unplanned downtime, reduce maintenance costs, and extend asset life.</p>
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
            <div className="col-6 col-md-3 stat-item"><h3>3×</h3><p>Longer equipment lifespan</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>50%</h3><p>Lower maintenance costs</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>25%</h3><p>Improvement in OEE</p></div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="inner-section">
        <div className="container">
          <div className="inner-overview">
            <div className="asset-image-box">
              <img src="/assets/svg/BreakDown.svg" alt="Predictive Maintenance Overview" />
            </div>
            <div>
              <div className="section-label">What It Does</div>
              <h2 className="section-title">From Reactive to Predictive — In One Platform</h2>
              <p className="section-subtitle">PlantIQX Predictive Maintenance continuously analyzes sensor data from your equipment to detect early warning signs of failure — giving your maintenance team the time to act before a breakdown disrupts production.</p>
              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-robot"></i></div>
                  <div><strong>AI Failure Prediction</strong><br /><small className="text-muted">Machine learning models trained on your equipment's operational data detect failure signatures weeks before breakdowns occur.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-calendar-check"></i></div>
                  <div><strong>Smart Maintenance Scheduling</strong><br /><small className="text-muted">AI recommends the optimal maintenance window based on predicted failure timelines, production schedules, and spare parts availability.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-chart-area"></i></div>
                  <div><strong>Health Scoring</strong><br /><small className="text-muted">Each asset receives a live health score based on vibration, temperature, current, and other sensor parameters — making asset risk instantly visible.</small></div>
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
            <h2 className="section-title">Predictive Power for Industrial Assets</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-brain', title: 'Failure Pattern Recognition', desc: 'AI models learn normal operating signatures and detect deviations — identifying failure precursors like bearing wear, imbalance, and thermal anomalies.' },
              { icon: 'fa-heartbeat', title: 'Real-Time Health Scores', desc: 'Continuously updated health scores for every monitored asset — with color-coded dashboards that show at a glance which machines need attention.' },
              { icon: 'fa-tools', title: 'Automated Work Orders', desc: 'Trigger maintenance work orders automatically when health scores fall below thresholds — ensuring no alert is missed or delayed.' },
              { icon: 'fa-box', title: 'Spare Parts Forecasting', desc: 'Predict which parts will be needed before failure — enabling proactive procurement and eliminating emergency part shortages.' },
              { icon: 'fa-chart-line', title: 'ROI Dashboard', desc: 'Track downtime prevented, maintenance costs saved, and production hours recovered — quantifying the financial return of predictive maintenance.' },
              { icon: 'fa-microchip', title: 'Multi-Sensor Integration', desc: 'Connect vibration sensors, thermal cameras, current clamps, ultrasonic probes, and OPC-UA/MQTT data streams into one unified platform.' },
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
            <h2 className="section-title">Equipment We Protect</h2>
            <p className="section-subtitle mx-auto">PlantIQX Predictive Maintenance applies across all critical industrial assets.</p>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'Rotating Equipment', desc: 'Monitor motors, pumps, fans, and blowers for vibration anomalies, bearing degradation, and misalignment — preventing unexpected seizures and catastrophic failures.' },
              { num: '02', title: 'Compressors & Turbines', desc: 'Track pressure, temperature, and vibration patterns in compressors and turbines — detecting valve wear, surge conditions, and lubrication breakdown before they escalate.' },
              { num: '03', title: 'CNC & Production Machines', desc: 'Monitor spindle health, coolant flow, and axis load patterns — predicting tool wear, chuck failures, and servo degradation to protect precision machining uptime.' },
              { num: '04', title: 'Electrical Panels & Transformers', desc: 'Use thermal and current monitoring to detect hot spots, loose connections, and insulation breakdown in high-value electrical assets — preventing fires and outages.' },
              { num: '05', title: 'Conveyor & Material Handling', desc: 'Monitor belt tension, roller wear, drive motor health, and chain elongation — avoiding conveyor stoppages that block entire production lines.' },
              { num: '06', title: 'HVAC & Cooling Systems', desc: 'Track chiller performance, cooling tower efficiency, and refrigerant system health — preventing production facility temperature deviations that affect product quality.' },
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
          <h2>Fix It Before It Breaks</h2>
          <p>See how PlantIQX Predictive Maintenance eliminates unplanned downtime and dramatically reduces maintenance costs with a personalized demo.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
