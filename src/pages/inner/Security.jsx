import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'


const MODULES = [
  {
    key: 'visitor', icon: 'fa-user-check', title: 'Visitor Management',
    desc: 'Digitize every visitor interaction from pre-registration to exit — eliminating paper registers, reducing gate queues, and maintaining a real-time record of everyone on-site.',
    cards: [
      { icon: 'fa-calendar-plus', title: 'Pre-Registration & Scheduling', desc: 'Hosts can register expected visitors in advance with purpose, duration, and access zone details.' },
      { icon: 'fa-qrcode', title: 'QR-Based Entry Passes', desc: 'Issue digital passes via email or SMS that guards scan at entry — no paper slips, no manual verification.' },
      { icon: 'fa-id-badge', title: 'Digital ID Verification', desc: 'Capture and store visitor ID details, photos, and purpose of visit with every check-in record.' },
      { icon: 'fa-map-marked-alt', title: 'Zone Access Control', desc: 'Restrict visitor access to specific areas and track their movement across authorized zones only.' },
      { icon: 'fa-sign-out-alt', title: 'Automated Check-Out', desc: 'Record exit times automatically with timestamps for complete on-site duration tracking and reporting.' },
      { icon: 'fa-file-alt', title: 'Compliance-Ready Reports', desc: 'Generate visit history reports, audit logs, and emergency evacuation lists on demand.' },
    ],
  },
  {
    key: 'vehicle', icon: 'fa-truck', title: 'Vehicle Management',
    desc: 'Track every vehicle entering and exiting your facility — from delivery trucks to employee vehicles — with digital logs, weighbridge integration, and real-time status dashboards.',
    cards: [
      { icon: 'fa-car', title: 'License Plate Capture', desc: 'Automatic or manual plate number logging at entry and exit — cross-referenced against approved vendor and employee lists.' },
      { icon: 'fa-weight', title: 'Weighbridge Integration', desc: 'Connect to weighbridge systems for gross and tare weight capture, with digital challan generation for goods vehicles.' },
      { icon: 'fa-parking', title: 'Parking Management', desc: 'Assign parking bays, track occupancy, and manage visitor and employee vehicle allocation in real time.' },
      { icon: 'fa-clock', title: 'TAT Monitoring', desc: 'Track turnaround time for delivery vehicles — identifying delays at loading bays and dock bottlenecks.' },
      { icon: 'fa-user-shield', title: 'Driver Verification', desc: 'Record driver name, licence, and contact details at the gate, with photo capture for every trip.' },
      { icon: 'fa-clipboard-list', title: 'Digital Gate Pass', desc: 'Generate vehicle gate passes with QR verification, driver details, and authorized signatory records.' },
    ],
  },
  {
    key: 'material', icon: 'fa-boxes', title: 'Material Management',
    desc: 'Control every item that moves through your gates — inward, outward, and returnable — with digital records matched to purchase orders, invoices, and approvals.',
    cards: [
      { icon: 'fa-arrow-circle-down', title: 'Inward Material Entry', desc: 'Log incoming goods against purchase orders and invoices at the gate, with quantity and vendor details.' },
      { icon: 'fa-arrow-circle-up', title: 'Outward Material Tracking', desc: 'Record every outgoing consignment with delivery notes, destination, and authorizing department.' },
      { icon: 'fa-undo-alt', title: 'Returnable Gate Passes', desc: 'Track tools, equipment, and samples sent out for repair or trial, with due dates and return alerts.' },
      { icon: 'fa-file-invoice', title: 'PO & Invoice Matching', desc: 'Automatically match gate entries to purchase orders to flag short, excess, or unapproved deliveries.' },
      { icon: 'fa-check-double', title: 'Approval Workflows', desc: 'Route material passes to the right approvers digitally — no material leaves without authorization.' },
      { icon: 'fa-chart-bar', title: 'Material Movement Reports', desc: 'Get real-time and historical reports of all material movement for audits and stock reconciliation.' },
    ],
  },
]

const FLOWS = {
  visitor: [
    { icon: 'fa-calendar-plus', title: 'Host pre-registers visitor', detail: 'Ravi K. · Vendor meeting · 11:00 AM' },
    { icon: 'fa-qrcode', title: 'QR pass sent', detail: 'Digital pass delivered by SMS & email' },
    { icon: 'fa-id-card', title: 'Scanned & ID verified at gate', detail: 'Photo captured · ID matched' },
    { icon: 'fa-bell', title: 'Host notified, access granted', detail: 'Zone B · Meeting room 2' },
    { icon: 'fa-sign-out-alt', title: 'Checked out automatically', detail: 'On-site 1h 42m · Record logged' },
  ],
  vehicle: [
    { icon: 'fa-car', title: 'Vehicle arrives, plate captured', detail: 'TN 09 AB 4521 · Delivery truck' },
    { icon: 'fa-list-check', title: 'Matched to approved vendor', detail: 'Driver verified · Trip #V-882' },
    { icon: 'fa-weight', title: 'Gross weight recorded', detail: 'Weighbridge · 18,420 kg' },
    { icon: 'fa-clock', title: 'Unloading tracked at dock', detail: 'Dock 3 · TAT 38 min' },
    { icon: 'fa-clipboard-list', title: 'Gate pass issued, exit logged', detail: 'Tare 7,960 kg · Net 10,460 kg' },
  ],
  material: [
    { icon: 'fa-arrow-circle-down', title: 'Inward material logged', detail: 'PO-5512 · 120 × valve kits' },
    { icon: 'fa-file-invoice', title: 'Matched to PO & invoice', detail: 'Qty ✓ · Price ✓ · Vendor ✓' },
    { icon: 'fa-check-double', title: 'Approval routed', detail: 'Approved by Stores In-charge' },
    { icon: 'fa-undo-alt', title: 'Returnable pass tracked', detail: 'Tools out for repair · Due in 5 days' },
    { icon: 'fa-chart-bar', title: 'Stock & audit report updated', detail: 'Movement synced in real time' },
  ],
}

function GateFlowAnimation({ moduleKey }) {
  const steps = FLOWS[moduleKey] || []
  const total = steps.length
  const [step, setStep] = useState(0)

  useEffect(() => {
    setStep(0)
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setStep(total); return }
    const id = setInterval(() => setStep(s => (s >= total + 2 ? 0 : s + 1)), 1400)
    return () => clearInterval(id)
  }, [moduleKey, total])

  const done = step >= total
  return (
    <div className="gate-flow" aria-label="Animated example of the process">
      <div className="gate-flow-head">
        <div className={`gate-flow-bot${done ? ' done' : ''}`}><i className="fas fa-robot"></i></div>
        <div>
          <div className="gate-flow-name">PlantIQX Agent · live example</div>
          <div className="gate-flow-status" key={step}>
            {done ? <><i className="fas fa-check-circle"></i> Process complete</> : <><span className="po-dots"><i></i><i></i><i></i></span> {steps[step].title}…</>}
          </div>
        </div>
      </div>
      <div className="gate-flow-steps">
        <div className="gate-flow-rail"><div style={{ height: `${Math.min(step, total) / total * 100}%` }}></div></div>
        {steps.map((s, i) => {
          const state = i < step ? 'done' : i === step ? 'active' : 'pending'
          return (
            <div className={`gate-flow-step ${state}`} key={s.title}>
              <div className="gate-flow-icon"><i className={`fas ${state === 'done' ? 'fa-check' : s.icon}`}></i></div>
              <div>
                <div className="gate-flow-title">{s.title}</div>
                <div className="gate-flow-detail">{state === 'pending' ? 'Waiting' : s.detail}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CardScroller({ cards }) {
  const ref = useRef(null)
  const scroll = (dir) => {
    const el = ref.current
    if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
  }
  return (
    <div className="gate-scroller">
      <button type="button" className="gate-scroll-btn left" aria-label="Scroll left" onClick={() => scroll(-1)}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="gate-scroll-track" ref={ref}>
        {cards.map(({ icon, title, desc }) => (
          <div className="feature-card gate-card" key={title}>
            <div className="feature-card-icon"><i className={`fas ${icon}`}></i></div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
      <button type="button" className="gate-scroll-btn right" aria-label="Scroll right" onClick={() => scroll(1)}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  )
}

export default function Security() {
  const [activeTab, setActiveTab] = useState('visitor')

  useEffect(() => { document.title = 'Visitor Entry Management System - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="z-label">Product</div>
              <h1>Visitor Entry Management System</h1>
              <p>Control every entry point with digital visitor logs, vehicle tracking, and real-time access management — replacing manual registers with intelligent, audit-ready systems.</p>
              <Link to="/contact" className="inner-hero-btn">Request a Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="inner-stats-bar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 stat-item"><h3>100%</h3><p>Digital visitor records</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Zero</h3><p>Unregistered entries</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Real-time</h3><p>Vehicle &amp; visitor tracking</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Full</h3><p>Audit trail &amp; compliance</p></div>
          </div>
        </div>
      </div>

      {/* Two-Tab Section */}
      <section className="inner-section">
        <div className="container">
          <div className="text-center mb-4">
            <div className="section-label">Management Modules</div>
            <h2 className="section-title">Complete Entry Control System</h2>
            <p className="section-subtitle mx-auto">Manage every visitor and vehicle that enters your facility with digitized, trackable, and auditable workflows.</p>
          </div>

          {/* Tab Buttons */}
          <div className="d-flex justify-content-center gap-3 mb-5" style={{ flexWrap: 'wrap' }}>
            {MODULES.map(m => (
              <button
                key={m.key}
                className={`btn ${activeTab === m.key ? 'btn-primary' : 'btn-outline-primary'}`}
                style={{ borderRadius: '50px', padding: '10px 28px', fontWeight: 600 }}
                onClick={() => setActiveTab(m.key)}
              >
                <i className={`fas ${m.icon} me-2`}></i>{m.title}
              </button>
            ))}
          </div>

          {MODULES.filter(m => m.key === activeTab).map(m => (
            <div className="gate-module" key={m.key}>
              <div className="gate-module-intro">
                <div className="feature-card-icon" style={{ width: '64px', height: '64px', fontSize: '28px', marginBottom: '20px' }}>
                  <i className={`fas ${m.icon}`}></i>
                </div>
                <h3 style={{ fontWeight: 700, marginBottom: '16px' }}>{m.title}</h3>
                <p style={{ color: '#555', marginBottom: '20px' }}>{m.desc}</p>

              </div>
              <CardScroller cards={m.cards} />
            </div>
          ))}
        </div>
      </section>

      {/* Unified Features */}
      <section className="inner-section bg-light-purple">
        <div className="container">
          <div className="text-center mb-2">
            <div className="section-label">Platform Features</div>
            <h2 className="section-title">Security Intelligence Across the Board</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-shield-alt', title: 'Blacklist Management', desc: 'Maintain and enforce blacklists of banned visitors or vehicles — triggering instant alerts on attempted entry.' },
              { icon: 'fa-bell', title: 'Real-Time Notifications', desc: 'Notify hosts on visitor arrival, alert security on unauthorized access attempts, and send departure confirmations automatically.' },
              { icon: 'fa-search', title: 'Searchable Audit Logs', desc: 'Instantly search historical visitor and vehicle records by name, date, vehicle number, or host for complete audit readiness.' },
              { icon: 'fa-mobile-alt', title: 'Mobile Guard Interface', desc: 'Security personnel use a mobile app to scan passes, verify IDs, log vehicles, and raise alerts without a desktop setup.' },
              { icon: 'fa-chart-bar', title: 'Analytics Dashboard', desc: 'Monitor peak entry times, visitor frequency, vehicle TAT trends, and gate congestion with visual reporting dashboards.' },
              { icon: 'fa-cloud', title: 'Cloud-Based & Scalable', desc: 'Deploy across single or multiple facilities with centralized data, role-based access, and no on-premise server requirement.' },
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

      {/* CTA */}
      <section className="inner-cta">
        <div className="container">
          <h2>Take Control of Every Entry Point</h2>
          <p>See how PlantIQX Visitor Entry Management System digitizes and secures your facility access with a personalized demo.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
