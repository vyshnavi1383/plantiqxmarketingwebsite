import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function FreightBid() {
  useEffect(() => { document.title = 'FreightBid - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="z-label">Product</div>
              <h1>FreightBid</h1>
              <p>Digitize your entire freight procurement process — from bid creation to carrier selection — with intelligent automation that cuts costs and eliminates logistics delays.</p>
              <Link to="/contact" className="inner-hero-btn">Request a Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-center">
              <img src="/assets/images/freightbid-original.png" alt="FreightBid" style={{ maxWidth: '420px', width: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="inner-stats-bar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 stat-item"><h3>30%</h3><p>Reduction in freight costs</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>Real-time</h3><p>Shipment visibility</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>100%</h3><p>Digital documentation</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>24/7</h3><p>Carrier bid availability</p></div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="inner-section">
        <div className="container">
          <div className="inner-overview">
            <div className="asset-image-box">
              <img src="/assets/images/freightbid.png" alt="FreightBid Overview" />
            </div>
            <div>
              <div className="section-label">What It Does</div>
              <h2 className="section-title">Centralize Every Freight Decision</h2>
              <p className="section-subtitle">PlantIQX FreightBid replaces fragmented email-and-phone freight negotiations with a structured digital platform where carriers compete for every shipment — driving down rates and improving service accountability.</p>
              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-gavel"></i></div>
                  <div><strong>Bid Automation</strong><br /><small className="text-muted">Automatically broadcast freight requirements to your carrier network and collect competitive bids — all from a single dashboard.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-route"></i></div>
                  <div><strong>Shipment Visibility</strong><br /><small className="text-muted">Track every shipment from dispatch to delivery in real time — with milestone alerts and proof-of-delivery confirmation.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-file-invoice"></i></div>
                  <div><strong>Digital Documentation</strong><br /><small className="text-muted">Generate e-way bills, lorry receipts, and freight invoices digitally — eliminating manual paperwork and speeding up payments.</small></div>
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
            <h2 className="section-title">Everything Your Logistics Team Needs</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-truck-loading', title: 'Vendor Management', desc: 'Maintain a verified carrier database with ratings, compliance status, and historical performance scores for smarter selection.' },
              { icon: 'fa-chart-line', title: 'Rate Intelligence', desc: 'Compare historical rates, market benchmarks, and carrier bids side-by-side to make cost-optimal freight decisions.' },
              { icon: 'fa-map-marker-alt', title: 'Fleet Coordination', desc: 'Assign and monitor vehicle allocation, driver details, and trip status — ensuring the right resource reaches the right place.' },
              { icon: 'fa-exclamation-circle', title: 'Exception Alerts', desc: 'Get instant notifications for shipment delays, detention charges, route deviations, and delivery failures.' },
              { icon: 'fa-tasks', title: 'Approval Workflows', desc: 'Route freight decisions through configurable multi-level approval chains before carrier confirmation and dispatch.' },
              { icon: 'fa-chart-bar', title: 'Analytics Dashboard', desc: 'Monitor freight spend by lane, carrier, and period — identifying savings opportunities and underperforming vendor routes.' },
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
            <h2 className="section-title">Built for Every Logistics Stakeholder</h2>
            <p className="section-subtitle mx-auto">PlantIQX FreightBid serves the full spectrum of industrial freight users.</p>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'Manufacturing Dispatch', desc: 'Coordinate outbound finished goods shipments across multiple carriers — comparing bids, assigning vehicles, and tracking deliveries to customer sites in real time.' },
              { num: '02', title: 'Procurement Teams', desc: 'Digitize inbound raw material freight — receive bids from approved vendors, compare rates, and issue freight POs within minutes instead of days.' },
              { num: '03', title: 'Warehouse Operations', desc: 'Manage inter-warehouse transfers and last-mile distribution with digital trip sheets, driver assignments, and delivery confirmation workflows.' },
              { num: '04', title: 'Multi-Site Logistics', desc: 'Centralize freight management across multiple plant locations — standardizing carrier selection, rate visibility, and freight cost allocation by business unit.' },
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
          <h2>Ready to Simplify Freight Operations?</h2>
          <p>See how PlantIQX FreightBid reduces logistics costs and brings complete visibility to your freight operations with a personalized demo.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
