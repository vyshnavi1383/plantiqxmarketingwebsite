import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function PrToPoAutomation() {
  useEffect(() => { document.title = 'PR to PO Automation - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="z-label">Solution</div>
              <h1>PR to PO Automation</h1>
              <p>Agentic AI that autonomously handles your entire purchase requisition-to-order process — from vendor RFQs to techno-commercial comparison to controlled PO release.</p>
              <Link to="/contact" className="inner-hero-btn">Request a Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-center">
              <div style={{
                width: '200px', height: '200px', borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(120,60,220,0.25), rgba(60,120,220,0.25))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px solid rgba(255,255,255,0.2)'
              }}>
                <i className="fas fa-file-invoice-dollar" style={{ fontSize: '80px', color: 'rgba(255,255,255,0.85)' }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="inner-stats-bar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 stat-item"><h3>End-to-End</h3><p>Autonomous procurement</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>↓60%</h3><p>PO processing time</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>L1–L4</h3><p>Multi-tier approval workflow</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>100%</h3><p>Digital audit trail</p></div>
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
                <i className="fas fa-diagram-project" style={{ fontSize: '72px', color: '#fff' }}></i>
              </div>
            </div>
            <div>
              <div className="section-label">What It Does</div>
              <h2 className="section-title">Autonomous Procurement Intelligence</h2>
              <p className="section-subtitle">PlantIQX PR to PO Automation deploys agentic AI that reads purchase requisitions, sends RFQs to vendors, compares responses on technical and commercial parameters, and generates purchase orders — all with minimal human intervention and full auditability.</p>
              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-robot"></i></div>
                  <div><strong>Agentic AI Orchestration</strong><br /><small className="text-muted">AI agents autonomously execute procurement tasks — reading PRs, drafting RFQs, chasing vendors, and comparing responses without manual handholding.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-scale-balanced"></i></div>
                  <div><strong>Techno-Commercial Comparison</strong><br /><small className="text-muted">Automatically score and rank vendor quotes on delivery timelines, specifications, pricing, and past performance — presenting a clear recommendation.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-gauge-high"></i></div>
                  <div><strong>Accelerated PO Lead Time</strong><br /><small className="text-muted">Compress weeks of back-and-forth procurement communication into hours — with AI handling follow-ups and data extraction automatically.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-file-signature"></i></div>
                  <div><strong>Controlled PO Release</strong><br /><small className="text-muted">POs are only released after multi-tier human approval — ensuring AI speeds up the process while people retain final authority.</small></div>
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
            <h2 className="section-title">Procurement Intelligence at Every Step</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-robot', title: 'Agentic AI Engine', desc: 'Autonomous AI agents that read PRs, categorize items, identify suitable vendors, and initiate RFQ workflows without manual triggers.' },
              { icon: 'fa-envelope-open-text', title: 'Intelligent RFQ Management', desc: 'Auto-generate and send structured RFQs to multiple vendors simultaneously — tracking responses, sending reminders, and extracting quoted data.' },
              { icon: 'fa-trophy', title: 'AI Vendor Ranking', desc: 'Score each vendor response against configurable technical and commercial criteria — generating ranked comparison sheets for approver review.' },
              { icon: 'fa-bolt', title: 'PO Lead Time Reduction', desc: 'Compress procurement cycle time from days to hours by automating repetitive communication, data entry, and comparison tasks.' },
              { icon: 'fa-sitemap', title: 'Multi-Tier Approval Workflow', desc: 'Route PO recommendations through L1 to L4 approval hierarchies with escalation rules, delegate access, and mobile approvals.' },
              { icon: 'fa-clipboard-list', title: 'Reports & Audit Trail', desc: 'Maintain a complete, time-stamped log of every AI action, vendor communication, comparison, and approval for compliance and auditing.' },
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
            <h2 className="section-title">Four Steps to an Approved PO</h2>
            <p className="section-subtitle mx-auto">The agentic AI pipeline runs autonomously from PR receipt to PO release.</p>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'Read PR', desc: 'AI reads the incoming Purchase Requisition, extracts item details, quantities, required delivery dates, and categorizes items by commodity type and vendor eligibility.' },
              { num: '02', title: 'Collect & Compare', desc: 'RFQs are automatically sent to shortlisted vendors. AI tracks responses, sends reminders for pending quotes, extracts quoted data, and builds a structured comparison matrix.' },
              { num: '03', title: 'Recommend & Approve', desc: 'AI generates a ranked vendor recommendation with justification. The comparison and recommendation are routed through the configured approval hierarchy for human sign-off.' },
              { num: '04', title: 'Generate & Release', desc: 'Upon approval, the system auto-generates the Purchase Order with all agreed terms, sends it to the selected vendor, and records the complete transaction in the audit trail.' },
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
          <h2>Let Agentic AI Run Your Procurement</h2>
          <p>See how PlantIQX PR to PO Automation cuts procurement cycle times and eliminates manual effort with a personalized demo.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
