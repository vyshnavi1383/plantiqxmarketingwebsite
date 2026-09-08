import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function AnalyticsDashboard() {
  useEffect(() => { document.title = 'Analytics Dashboard - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="inner-hero-label">Product</div>
              <h1>Analytics Dashboard<br /><span>Decisions Powered by Data</span></h1>
              <p>Visualize your entire operations with real-time dashboards and deep analytics. Turn raw operational data into actionable insights that drive performance improvements.</p>
              <Link to="/contact" className="inner-hero-btn">Request a Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center" style={{ height: '320px' }}>
              <i className="fas fa-chart-bar" style={{ fontSize: '10rem', color: 'var(--primary-color)', opacity: 0.15 }}></i>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="inner-stats-bar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 stat-item"><h3>70%</h3><p>Faster root cause identification</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>5×</h3><p>More insights vs manual reporting</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Real-time</h3><p>Data refresh across all KPIs</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>100+</h3><p>Pre-built dashboard templates</p></div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="inner-section">
        <div className="container">
          <div className="inner-overview">
            <div className="asset-image-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px', background: '#f4f1ff', borderRadius: '16px' }}>
              <i className="fas fa-chart-bar" style={{ fontSize: '7rem', color: 'var(--primary-color)', opacity: 0.3 }}></i>
            </div>
            <div>
              <div className="section-label">What It Does</div>
              <h2 className="section-title">See Everything That Matters — Live</h2>
              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-tachometer-alt"></i></div>
                  <div><strong>Unified Operations View</strong><br /><small className="text-muted">See all your KPIs — OEE, downtime, throughput, quality — in one consolidated dashboard with live data feeds.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-chart-line"></i></div>
                  <div><strong>Trend &amp; Anomaly Detection</strong><br /><small className="text-muted">AI-powered trend analysis flags emerging issues before they become failures, with visual timeline overlays.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-filter"></i></div>
                  <div><strong>Drill-Down Analytics</strong><br /><small className="text-muted">Navigate from plant-level totals down to individual machine metrics with one click — no SQL required.</small></div>
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
            <h2 className="section-title">Everything You Need</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-sliders-h', title: 'Drag-and-Drop Dashboard Builder', desc: 'Build custom dashboards without code. Drag widgets, resize panels, and pin your most critical metrics.' },
              { icon: 'fa-clock', title: 'Time-Series Analysis', desc: 'Compare performance across any time range — shift vs shift, week vs week, this year vs last year.' },
              { icon: 'fa-file-export', title: 'Automated Reports', desc: 'Schedule and distribute PDF or Excel reports to stakeholders automatically — daily, weekly, or on-demand.' },
              { icon: 'fa-mobile-alt', title: 'Mobile-Ready Dashboards', desc: 'Access your full analytics suite on any device. Dashboards auto-adapt to tablets and smartphones.' },
              { icon: 'fa-bell', title: 'KPI Threshold Alerts', desc: 'Set target ranges for any metric and get instant notifications when performance drifts outside acceptable bounds.' },
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
            <p className="section-subtitle mx-auto">Real-world applications of PlantIQX Analytics Dashboard across industrial sectors.</p>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'Production Performance Monitoring', desc: 'Track OEE, cycle times, and reject rates across all production lines in real time to identify bottlenecks and improvement opportunities.' },
              { num: '02', title: 'Executive Reporting', desc: 'Deliver automated weekly and monthly operations summaries to leadership with visual KPI scorecards and trend highlights.' },
              { num: '03', title: 'Maintenance Analytics', desc: 'Analyse MTBF, MTTR, and maintenance cost trends to optimize PM schedules and identify chronic failure modes.' },
              { num: '04', title: 'Energy Analytics', desc: 'Correlate energy consumption with production output by shift, line, and machine to pinpoint inefficiencies and reduce per-unit costs.' },
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
          <h2>Ready to See Your Operations Clearly?</h2>
          <p>PlantIQX Analytics Dashboard gives you the real-time visibility you need to make faster, smarter decisions.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
