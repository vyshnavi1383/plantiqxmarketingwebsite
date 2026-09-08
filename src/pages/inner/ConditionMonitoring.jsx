import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function ConditionMonitoring() {
  useEffect(() => { document.title = 'Condition Monitoring - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="inner-hero-label">Solution</div>
              <h1>Condition Monitoring<br /><span>Always-On Equipment Health</span></h1>
              <p>Continuously track the health of your industrial equipment through vibration, temperature, and performance data — catching faults early before they become failures.</p>
              <Link to="/contact" className="inner-hero-btn">Request a Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="col-lg-6 text-center">
              <img src="/assets/svg/AssetDetails.svg" alt="Condition Monitoring" className="inner-hero-img" style={{ maxWidth: '380px', width: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="inner-stats-bar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 stat-item"><h3>24/7</h3><p>Continuous equipment monitoring</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Early</h3><p>Fault detection before failure</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>40%</h3><p>Fewer unexpected breakdowns</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Live</h3><p>Real-time health dashboards</p></div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="inner-section">
        <div className="container">
          <div className="inner-overview">
            <div className="asset-image-box">
              <img src="/assets/svg/Advance.svg" alt="Condition Monitoring" />
            </div>
            <div>
              <div className="section-label">What It Does</div>
              <h2 className="section-title">Know the Health of Every Machine, All the Time</h2>
              <p className="section-subtitle">PlantIQX Condition Monitoring connects to your equipment's sensors and continuously analyses vibration, temperature, current, and pressure data — building an accurate, real-time picture of each machine's health.</p>
              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-wave-square"></i></div>
                  <div><strong>Vibration Analysis</strong><br /><small className="text-muted">Detect imbalance, misalignment, and bearing wear through continuous vibration spectrum analysis.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-thermometer-half"></i></div>
                  <div><strong>Thermal Monitoring</strong><br /><small className="text-muted">Track temperature trends across equipment to detect overheating, friction, or cooling failures early.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-chart-line"></i></div>
                  <div><strong>Performance Trending</strong><br /><small className="text-muted">Historical trend lines reveal gradual degradation that would be invisible in point-in-time inspections.</small></div>
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
            <h2 className="section-title">Deep Equipment Insight</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-satellite-dish', title: 'Multi-Parameter Sensing', desc: 'Simultaneously monitor vibration, temperature, current, pressure, RPM, and flow for a complete equipment picture.' },
              { icon: 'fa-bell', title: 'Threshold-Based Alerts', desc: 'Configure alert thresholds per parameter and asset type. Get notified via email, SMS, or mobile app the moment a limit is exceeded.' },
              { icon: 'fa-microscope', title: 'Spectral Analysis', desc: 'Advanced FFT and time-waveform analysis help engineers pinpoint the exact fault type — bearing, imbalance, looseness, or resonance.' },
              { icon: 'fa-history', title: 'Historical Data Archive', desc: 'Unlimited historical sensor data storage enables long-term trend analysis and root cause investigation of recurring issues.' },
              { icon: 'fa-mobile-alt', title: 'Mobile App Access', desc: 'Maintenance engineers can view equipment health, alerts, and trend charts from any mobile device — on the floor or off-site.' },
              { icon: 'fa-sitemap', title: 'Equipment Hierarchy View', desc: 'Visualise the entire plant hierarchy — from site to system to component — and drill into any asset\'s health in one click.' },
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
            <h2 className="section-title">Industry Applications</h2>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'Rotating Machinery Health', desc: 'Continuously monitor pumps, fans, motors, and gearboxes. Detect bearing defects, shaft misalignment, and lubrication failures before they cascade.' },
              { num: '02', title: 'Electrical Asset Health', desc: 'Monitor current signature and thermal profiles of motors and transformers — identifying insulation breakdown, winding faults, and load imbalances.' },
              { num: '03', title: 'Process Equipment Monitoring', desc: 'Track reactor temperatures, pressure vessel integrity, and heat exchanger performance — ensuring safe, efficient process operations.' },
              { num: '04', title: 'Paper & Pulp Industry', desc: 'Monitor rollers, dryers, and paper machines that run at high speed and are critical to continuous production — preventing costly unplanned stops.' },
              { num: '05', title: 'Mining & Heavy Equipment', desc: 'Track vibration and thermal signatures of crushers, screens, and conveyors operating in harsh environments where manual checks are hazardous.' },
              { num: '06', title: 'Steel & Metal Processing', desc: 'Monitor rolling mill drives, furnace fans, and cooling systems — assets where unexpected failure means hours of production loss.' },
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
          <h2>Know Before It Fails</h2>
          <p>PlantIQX Condition Monitoring keeps a constant watch on your most critical assets — so you never get caught off guard.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
