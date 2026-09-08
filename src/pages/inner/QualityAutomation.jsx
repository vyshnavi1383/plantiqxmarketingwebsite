import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function QualityAutomation() {
  useEffect(() => { document.title = 'Quality Automation - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="z-label">Solution</div>
              <h1>Quality Automation</h1>
              <p>Digitize inspection forms, enforce tolerances automatically, and generate quality dossiers — building a complete, traceable quality record for every job and component.</p>
              <Link to="/contact" className="inner-hero-btn">Request a Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-center">
              <div style={{
                width: '200px', height: '200px', borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(120,60,220,0.25), rgba(60,120,220,0.25))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px solid rgba(255,255,255,0.2)'
              }}>
                <i className="fas fa-clipboard-check" style={{ fontSize: '80px', color: 'rgba(255,255,255,0.85)' }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="inner-stats-bar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 stat-item"><h3>100%</h3><p>Digital documentation</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Real-time</h3><p>Tolerance validation</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Full</h3><p>Revision history</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>PDF/Excel</h3><p>Quality dossiers</p></div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="inner-section">
        <div className="container">
          <div className="inner-overview">
            <div className="asset-image-box d-flex align-items-center justify-content-center" style={{ minHeight: '260px' }}>
              <div style={{
                width: '180px', height: '180px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #7b3fce, #3a78d4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <i className="fas fa-microscope" style={{ fontSize: '72px', color: '#fff' }}></i>
              </div>
            </div>
            <div>
              <div className="section-label">What It Does</div>
              <h2 className="section-title">Build a Digital Quality Record for Every Job</h2>
              <p className="section-subtitle">PlantIQX Quality Automation replaces paper inspection sheets with dynamic digital forms — capturing measurements, validating against tolerances in real time, flagging deviations, and packaging everything into customer-ready quality dossiers.</p>
              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-list-check"></i></div>
                  <div><strong>Configurable Inspection Forms</strong><br /><small className="text-muted">Build inspection templates for any process — incoming, in-process, or final — with custom fields, measurement points, and acceptance criteria.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-ruler-combined"></i></div>
                  <div><strong>Automatic Result Validation</strong><br /><small className="text-muted">The system validates each recorded measurement against configured tolerances instantly — flagging out-of-spec values for immediate action.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-folder-tree"></i></div>
                  <div><strong>Job-Level Traceability</strong><br /><small className="text-muted">Link every inspection record to a job order, batch, or serial number — enabling complete forward and backward traceability for any part or lot.</small></div>
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
            <h2 className="section-title">Digital Quality Intelligence End-to-End</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-wpforms', title: 'Digital Inspection Forms', desc: 'Replace paper checksheets with dynamic digital forms — built in minutes, accessible on tablets, and stored permanently in the cloud.' },
              { icon: 'fa-sliders-h', title: 'Tolerance Engine', desc: 'Configure upper and lower tolerances per measurement point — with real-time pass/fail validation and color-coded result indicators.' },
              { icon: 'fa-exclamation-triangle', title: 'Deviation Management', desc: 'Log, track, and resolve out-of-spec deviations with root cause capture, corrective action assignment, and closure verification.' },
              { icon: 'fa-code-branch', title: 'Revision Control', desc: 'Maintain a full version history of every inspection form — ensuring inspections always use the current approved revision.' },
              { icon: 'fa-chart-pie', title: 'Quality Dashboard', desc: 'Monitor defect rates, first-pass yield, inspection completion rates, and deviation trends across jobs, machines, and operators.' },
              { icon: 'fa-file-pdf', title: 'Automatic Dossiers', desc: 'Auto-compile all inspection records for a job into a formatted PDF or Excel quality dossier — ready to share with customers or auditors.' },
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

      {/* Workflow Steps */}
      <section className="inner-section">
        <div className="container">
          <div className="text-center mb-2">
            <div className="section-label">How It Works</div>
            <h2 className="section-title">Four Steps to a Complete Quality Record</h2>
            <p className="section-subtitle mx-auto">The digital quality workflow from form setup to final dossier.</p>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'Create Form', desc: 'Engineers configure inspection templates with measurement points, tolerance ranges, inspection sequence, and required photographs — using a no-code form builder.' },
              { num: '02', title: 'Capture & Validate', desc: 'Inspectors record measurements on tablets or phones. The system validates each entry against tolerances in real time — highlighting deviations immediately.' },
              { num: '03', title: 'Resolve Deviations', desc: 'Out-of-tolerance readings trigger deviation workflows — capturing root cause, corrective action, and re-inspection results before job closure.' },
              { num: '04', title: 'Approve & Generate', desc: 'Completed inspection records are reviewed and signed off digitally. A formatted quality dossier is auto-generated in PDF or Excel for the customer or internal records.' },
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
          <h2>Ready to Digitize Quality Inspection?</h2>
          <p>See how PlantIQX Quality Automation eliminates paper, enforces standards, and builds audit-ready records with a personalized demo.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
