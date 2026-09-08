import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function EnergyManagement() {
  useEffect(() => { document.title = 'Energy Management System - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero" style={{
        background: "url('/assets/images/enery management banner.webp') center center / cover no-repeat",
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(26,10,60,0.75) 0%,rgba(13,31,60,0.65) 60%,rgba(10,42,94,0.6) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              <div className="inner-hero-label">Solution</div>
              <h1>Power Quality<br /><span>Analysis &amp; Optimization</span></h1>
              <p>Poor power quality costs more than you think. PlantIQX measures, analyses, and optimises your facility's power parameters — eliminating energy losses, preventing equipment failures, and improving plant reliability across every industry.</p>
              <Link to="/contact" className="inner-hero-btn">Request a Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="inner-stats-bar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 stat-item"><h3>IEEE 519</h3><p>Harmonic standard compliance</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Multiple Parameters</h3><p>Comprehensive PQ monitoring</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Class A</h3><p>IEC 61000-4-30 accuracy</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Real-time</h3><p>Waveform &amp; spectrum analysis</p></div>
          </div>
        </div>
      </div>

      {/* Power Quality Intro */}
      <section className="inner-section">
        <div className="container">
          <div className="inner-overview">
            <div className="asset-image-box" style={{ background: '#f0ebff', borderRadius: '16px', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/assets/svg/power-management-icon.svg" alt="Power Management" style={{ maxWidth: '320px', width: '100%' }} />
            </div>
            <div>
              <div className="section-label">Power Quality Monitoring</div>
              <h2 className="section-title">Measure · Analyze · Identify · Optimize · Improve</h2>
              <p className="section-subtitle">Poor power quality silently inflates your electricity bills, degrades equipment, and causes unplanned production stoppages. PlantIQX Power Quality Monitoring uses Class A accuracy analyzers (IEC 61000-4-30) to measure, diagnose, and correct voltage, current, harmonic, and power factor issues — delivering actionable engineering reports and proven savings.</p>
              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-wave-square"></i></div>
                  <div><strong>Real-Time Waveform Recording</strong><br /><small className="text-muted">High-speed transient capture with IEC 61000-4-30 compliant instruments records every voltage sag, swell, and harmonic event across all three phases.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-search-plus"></i></div>
                  <div><strong>Root Cause Identification</strong><br /><small className="text-muted">Advanced harmonic spectrum analysis pinpoints the exact source of power quality disturbances — whether non-linear loads, poor grounding, or supply issues.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-file-medical-alt"></i></div>
                  <div><strong>Actionable Engineering Reports</strong><br /><small className="text-muted">Detailed technical reports with trend analysis, corrective action recommendations, and energy savings potential quantified in rupees per year.</small></div>
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
            <div className="section-label">Monitoring Parameters</div>
            <h2 className="section-title">6 Pillars of Power Quality Analysis</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-bolt', title: 'Voltage Analysis', desc: 'Measure and diagnose Voltage Sag/Dip, Voltage Swell, Voltage Unbalance, Voltage Fluctuations, Voltage Stability, and Frequency Variation to ensure stable supply for reliable operations.' },
              { icon: 'fa-project-diagram', title: 'Current Analysis', desc: 'Identify Current Unbalance, Neutral Current issues, Load Distribution anomalies, Phase Current deviation, Inrush Current events, and Current Fluctuations to optimise load distribution.' },
              { icon: 'fa-wave-square', title: 'Harmonic Analysis', desc: 'Detect Voltage THD, Current THD, full Harmonic Spectrum, Harmonic Orders, Resonance Assessment, and THD as per IEEE 519 — preventing equipment overheating and failures.' },
              { icon: 'fa-tachometer-alt', title: 'Power Analysis', desc: 'Monitor Active Power (kW), Reactive Power (kVAR), Apparent Power (kVA), Power Factor, Displacement PF, Maximum Demand, and Energy (kWh/kVARh) to optimise power factor and reduce costs.' },
              { icon: 'fa-balance-scale', title: 'Unbalance Analysis', desc: 'Assess Voltage Unbalance (%), Current Unbalance (%), Negative Sequence, Zero Sequence, and Phase Angle Deviation to maintain balance for better efficiency and extended equipment life.' },
              { icon: 'fa-shield-alt', title: 'Grounding Assessment', desc: 'Conduct Earth Impedance Testing, measure Neutral-Earth Voltage, Ground Resistance, and evaluate Ground System integrity for safety, protection, and regulatory compliance.' },
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

      {/* Solutions / Use Cases */}
      <section className="inner-section">
        <div className="container">
          <div className="text-center mb-2">
            <div className="section-label">Our Solutions</div>
            <h2 className="section-title">Comprehensive Power Quality Services</h2>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'Power Quality Audits', desc: 'Comprehensive site-wide PQ assessment using Class A analyzers — identifying every source of energy loss, equipment stress, and utility penalty risk with a detailed corrective action roadmap.' },
              { num: '02', title: 'Harmonic Analysis & Mitigation', desc: 'Full harmonic spectrum measurement per IEEE 519 — identifying non-linear load sources, resonance risk, and prescribing passive or active harmonic filter solutions to prevent overheating and failures.' },
              { num: '03', title: 'Power Factor Optimization', desc: 'Measure displacement and true power factor across your facility, then design and validate capacitor bank or APFC panel corrections — eliminating utility penalties and reducing reactive power losses.' },
              { num: '04', title: 'APFC Panel Assessment', desc: 'Evaluate existing Automatic Power Factor Correction panels for proper sizing, relay settings, capacitor health, and switching sequences — ensuring your PF correction investment is performing optimally.' },
              { num: '05', title: 'Grounding & Earth Testing', desc: 'Measure earth impedance, neutral-earth voltage, ground resistance, and step/touch voltage — ensuring your grounding system meets BIS standards for personnel safety and equipment protection.' },
              { num: '06', title: 'Energy Efficiency Improvements', desc: 'Translate PQ findings into quantified energy saving projects — from VFD installation and motor efficiency upgrades to transformer right-sizing — with projected payback periods and ROI calculations.' },
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
          <h2>Schedule Your Power Quality Assessment Today</h2>
          <p>Expert analysis. Practical solutions. Better power. Better performance. Let PlantIQX engineers identify exactly what poor power quality is costing your facility — and fix it.</p>
          <Link to="/contact" className="inner-cta-btn">Book a PQ Assessment <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
