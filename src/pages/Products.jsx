import React, { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import '../styles/products.css'

// ──────────────────────────────────────────────
// Scroll-stacking product cards (desktop only)
// Every product is a full-screen page that pins under the header; the next
// page slides up over it while the one underneath shrinks back and dims. Phones / tablets / reduced-motion keep
// the normal card grid.
// ────────────────────────────────────────────────
function useProductStack(trackRef, enabled) {
  useEffect(() => {
    const track = trackRef.current
    if (!track || !enabled) return
    const cards = [...track.querySelectorAll(':scope > .submodule-card')]
    const n = cards.length
    if (!n) return

    const mqDesktop = window.matchMedia('(min-width: 992px)')
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
    // position: sticky needs the page (not <body>) to be the scroll container.
    // The site sets overflow-x: hidden on html/body, which breaks sticky, so while
    // the stack is active we use overflow-x: clip instead (same visual result).
    const roots = [document.documentElement, document.body]
    const setRootOverflow = (pin) => roots.forEach(el => {
      el.style.overflowX = pin ? 'clip' : ''
      el.style.overflowY = pin ? 'visible' : ''
    })
    let raf = 0
    let on = false

    const reset = () => {
      setRootOverflow(false)
      track.classList.remove('is-stacked')
      cards.forEach(card => {
        card.style.transform = ''
        card.style.removeProperty('--pq-dim')
        card.querySelectorAll(':scope > :not(.pq-visual)').forEach(el => {
          el.style.transform = ''
          el.style.opacity = ''
        })
      })
    }

    const update = () => {
      raf = 0
      if (!on) return
      const vh = window.innerHeight
      const start = vh - 100                         // like "top bottom-=100"
      const progress = cards.map(card => {
        const stickyTop = parseFloat(getComputedStyle(card).top) || 0
        const top = card.getBoundingClientRect().top
        return clamp((start - top) / (start - stickyTop))  // 0 → 1 while arriving
      })
      cards.forEach((card, i) => {
        const p = progress[i]
        // the incoming page covers the whole screen; the page underneath
        // shrinks back slightly and darkens as it is covered
        const next = progress[i + 1] || 0
        const scale = 1 - next * 0.08
        card.style.transform = `scale(${scale.toFixed(4)})`
        card.style.setProperty('--pq-dim', (next * 0.35).toFixed(3))
        // text settles in as the card arrives
        const tp = clamp((p - 0.35) / 0.65)
        card.querySelectorAll(':scope > :not(.pq-visual)').forEach((el, j) => {
          el.style.transform = `translate3d(0, ${((1 - tp) * (30 + j * 14)).toFixed(1)}px, 0)`
          el.style.opacity = (0.15 + tp * 0.85).toFixed(3)
        })
      })
    }

    const layout = () => {
      on = mqDesktop.matches && !mqReduce.matches
      if (!on) { reset(); return }
      setRootOverflow(true)
      track.classList.add('is-stacked')
      update()
    }

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    layout()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', layout)
    mqDesktop.addEventListener('change', layout)
    mqReduce.addEventListener('change', layout)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', layout)
      mqDesktop.removeEventListener('change', layout)
      mqReduce.removeEventListener('change', layout)
      if (raf) cancelAnimationFrame(raf)
      reset()
    }
  }, [trackRef, enabled])
}

export default function Products() {
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState('products')
  const stackRef = useRef(null)
  useProductStack(stackRef, activeTab === 'products')
  const solutionsStackRef = useRef(null)
  useProductStack(solutionsStackRef, activeTab === 'solutions')

  useEffect(() => {
    document.title = 'Our Products - PlantIQX'
    const tab = searchParams.get('tab')
    if (tab === 'automation' || tab === 'solutions') {
      setActiveTab(tab)
    } else {
      setActiveTab('products')
    }
  }, [searchParams])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Products Section */}
      <section id="products-section" className={`main-section${activeTab === 'products' ? ' active' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Comprehensive Industrial Management Solutions</h2>
            <p>Our product suite provides complete visibility and control over your industrial operations</p>
          </div>
          <div className="submodules-grid pq-track" ref={stackRef}>
            {/* Asset Management */}
            <Link to="/asset-management" className="submodule-card" id="asset-management" style={{ "--pq-i": 0 }}>
              <div className="pq-visual" aria-hidden="true"><img src="/assets/images/AssetManegement.png" alt="" loading="lazy" decoding="async" /></div>
              <div className="submodule-card-header">
                <div className="submodule-icon">
                  <img src="/assets/svg/Assets.svg" alt="Asset Management" />
                </div>
                <h3>Asset Management</h3>
              </div>
              <p>Track, monitor, and optimize every asset in your facility with real-time insights and predictive maintenance capabilities.</p>
              <ul className="submodule-features">
                <li>Real-time asset tracking & performance monitoring</li>
                <li>Predictive maintenance scheduling</li>
                <li>Asset lifecycle management</li>
                <li>Downtime alerts & analytics</li>
              </ul>
            </Link>

            {/* Gate Management */}
            <Link to="/security" className="submodule-card" id="security" style={{ "--pq-i": 1 }}>
              <div className="pq-visual" aria-hidden="true"><img src="/assets/images/visitor-entry-card.jpg" alt="" loading="lazy" decoding="async" /></div>
              <div className="submodule-card-header">
                <div className="submodule-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Gate Management Systems</h3>
              </div>
              <p>Unified gate, visitor, and vehicle management for industrial plants — digitise every entry point with full audit trails and compliance.</p>
              <ul className="submodule-features">
                <li>Gate management with biometric &amp; RFID integration</li>
                <li>Digital visitor registration &amp; badge printing</li>
                <li>Vehicle tracking with ANPR &amp; weighbridge integration</li>
                <li>Real-time alerts &amp; regulatory compliance reports</li>
              </ul>
            </Link>

            {/* Surveillance */}
            <Link to="/surveillance" className="submodule-card" id="surveillance" style={{ "--pq-i": 2 }}>
              <div className="pq-visual" aria-hidden="true"><img src="/assets/images/surveillance.png.jpeg" alt="" loading="lazy" decoding="async" /></div>
              <div className="submodule-card-header">
                <div className="submodule-icon">
                  <i className="fas fa-video"></i>
                </div>
                <h3>Surveillance</h3>
              </div>
              <p>Integrated video surveillance with AI-powered analytics for enhanced security and operational monitoring.</p>
              <ul className="submodule-features">
                <li>Real-time video monitoring</li>
                <li>AI-powered threat detection</li>
                <li>Incident recording & playback</li>
                <li>Integration with access control</li>
              </ul>
            </Link>

            {/* Utilities Monitoring */}
            <Link to="/utilities-monitoring" className="submodule-card" id="utilities-monitoring" style={{ "--pq-i": 3 }}>
              <div className="pq-visual" aria-hidden="true"><img src="/assets/images/utilities-monitoring-dashboard.png" alt="" loading="lazy" decoding="async" /></div>
              <div className="submodule-card-header">
                <div className="submodule-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3>Utilities Monitoring</h3>
              </div>
              <p>Monitor and optimize consumption of electricity, water, gas, and other utilities to reduce costs and environmental impact.</p>
              <ul className="submodule-features">
                <li>Real-time utility consumption tracking</li>
                <li>Cost analysis & optimization</li>
                <li>Anomaly detection & alerts</li>
                <li>Sustainability reporting</li>
              </ul>
            </Link>

            {/* FreightBid */}
            <Link to="/freightbid" className="submodule-card" id="freightbid" style={{ "--pq-i": 4 }}>
              <div className="pq-visual" aria-hidden="true"><img src="/assets/images/freightbid.png" alt="" loading="lazy" decoding="async" /></div>
              <div className="submodule-card-header">
                <div className="submodule-icon">
                  <img src="/assets/images/freightbid.png" alt="FreightBid Icon" />
                </div>
                <h3>FreightBid</h3>
              </div>
              <p>A comprehensive logistics automation platform designed to streamline transportation operations, improve visibility, reduce freight costs, and enhance operational efficiency.</p>
              <ul className="submodule-features">
                <li>Freight Procurement Automation</li>
                <li>Real-Time Shipment Visibility</li>
                <li>Vendor & Fleet Management</li>
                <li>Workflow & Documentation Automation</li>
                <li>Analytics & Decision Intelligence</li>
              </ul>
            </Link>

            {/* PR to PO Automation */}
            <Link to="/pr-to-po-automation" className="submodule-card" style={{ "--pq-i": 5 }}>
              <div className="pq-visual" aria-hidden="true"><img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=70&auto=format&fit=crop" alt="" loading="lazy" decoding="async" /></div>
              <div className="submodule-card-header">
                <div className="submodule-icon">
                  <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <h3>ProcureX</h3>
              </div>
              <p>Automate the procurement cycle from purchase requisition and RFQ creation through vendor comparison, approvals, and purchase order generation.</p>
              <ul className="submodule-features">
                <li>ERP/Excel purchase requisition intake</li>
                <li>RFQ and quotation management</li>
                <li>L1/L2/L3 vendor comparison</li>
                <li>Multi-level approval workflow</li>
                <li>PO generation and audit reporting</li>
              </ul>
            </Link>

            {/* Quality Automation */}
            <Link to="/quality-automation" className="submodule-card" style={{ "--pq-i": 6 }}>
              <div className="pq-visual" aria-hidden="true"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=70&auto=format&fit=crop" alt="" loading="lazy" decoding="async" /></div>
              <div className="submodule-card-header">
                <div className="submodule-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h3>Quality Automation</h3>
              </div>
              <p>Digitize quality inspections with automated tolerance validation, deviation workflows, revision control, and complete product traceability.</p>
              <ul className="submodule-features">
                <li>Digital job-based inspection forms</li>
                <li>Design vs. observed value validation</li>
                <li>Deviation alerts and approvals</li>
                <li>Revision and audit history</li>
                <li>Automatic quality dossier generation</li>
              </ul>
            </Link>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section id="automation-section" className={`main-section${activeTab === 'automation' ? ' active' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Industrial Automation & Control Systems</h2>
            <p>Advanced automation technologies for seamless industrial control and monitoring</p>
          </div>

          {/* PLC */}
          <div className="automation-block" id="plc">
            <div className="automation-img">
              <img src="/assets/images/plc.jpg" alt="PLC" />
            </div>
            <div className="automation-content">
              <h3>PLC <span>— Programmable Logic Control</span></h3>
              <p>Robust programmable logic controllers that form the backbone of reliable industrial automation. PLCs execute deterministic, real-time control logic for every production process — from simple conveyors to complex multi-axis systems.</p>
              <ul className="automation-features">
                <li><i className="fas fa-check-circle"></i> Real-time process control with microsecond cycle times</li>
                <li><i className="fas fa-check-circle"></i> Flexible programming — Ladder, FBD, ST, IL, SFC</li>
                <li><i className="fas fa-check-circle"></i> High reliability & industrial-grade durability</li>
                <li><i className="fas fa-check-circle"></i> Seamless integration with SCADA, HMI & MES</li>
              </ul>
            </div>
          </div>

          {/* SCADA */}
          <div className="automation-block reverse" id="scada">
            <div className="automation-img">
              <img src="/assets/images/scada.jpg" alt="SCADA Systems" />
            </div>
            <div className="automation-content">
              <h3>SCADA <span>— Supervisory Control & Data Acquisition</span></h3>
              <p>A centralised system that monitors, controls, and gathers data from industrial processes across your entire facility — or across multiple sites — giving supervisors complete operational visibility.</p>
              <ul className="automation-features">
                <li><i className="fas fa-check-circle"></i> Centralised monitoring & control of all processes</li>
                <li><i className="fas fa-check-circle"></i> Real-time data acquisition from PLCs & field devices</li>
                <li><i className="fas fa-check-circle"></i> Historical data logging & trend analysis</li>
                <li><i className="fas fa-check-circle"></i> Alarm management, reporting & event logging</li>
              </ul>
            </div>
          </div>

          {/* VFD */}
          <div className="automation-block" id="vfd">
            <div className="automation-img">
              <img src="/assets/images/vfd.jpg" alt="VFD" />
            </div>
            <div className="automation-content">
              <h3>VFD <span>— Variable Frequency Drive</span></h3>
              <p>Precision motor speed and torque control that dramatically reduces energy consumption and mechanical wear. VFDs are critical for pumps, fans, compressors, and conveyors where variable speed delivers significant efficiency gains.</p>
              <ul className="automation-features">
                <li><i className="fas fa-check-circle"></i> Energy-efficient variable speed motor control</li>
                <li><i className="fas fa-check-circle"></i> Soft start/stop — eliminates current spikes</li>
                <li><i className="fas fa-check-circle"></i> Speed & torque optimisation in real time</li>
                <li><i className="fas fa-check-circle"></i> Reduced mechanical stress & extended motor life</li>
              </ul>
            </div>
          </div>

          {/* HMI */}
          <div className="automation-block reverse" id="hmi">
            <div className="automation-img">
              <img src="/assets/images/hmi.jpg" alt="HMI" />
            </div>
            <div className="automation-content">
              <h3>HMI <span>— Human Machine Interface</span></h3>
              <p>Intuitive touchscreen interfaces that bridge your operators and industrial control systems. HMIs deliver real-time process visualisation, alarm management, and system control — designed for clarity and speed of operation.</p>
              <ul className="automation-features">
                <li><i className="fas fa-check-circle"></i> User-friendly touchscreen interface design</li>
                <li><i className="fas fa-check-circle"></i> Real-time process visualisation & control</li>
                <li><i className="fas fa-check-circle"></i> Customisable dashboards per operator role</li>
                <li><i className="fas fa-check-circle"></i> Remote access via web browser & mobile app</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions-section" className={`main-section${activeTab === 'solutions' ? ' active' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Intelligent Industrial Solutions</h2>
            <p>AI-powered solutions for predictive insights and operational excellence</p>
          </div>

          <div className="submodules-grid pq-track" ref={solutionsStackRef}>
            {/* Predictive Maintenance */}
            <Link to="/predictive-maintenance" className="submodule-card" id="predictive-maintenance" style={{ "--pq-i": 0 }}>
              <div className="pq-visual" aria-hidden="true"><img src="/assets/images/predictive-maintenance-banner.jpg" alt="" loading="lazy" decoding="async" /></div>
              <div className="submodule-icon">
                <img src="/assets/svg/PreventiveMaintenances.svg" alt="Predictive Maintenance" />
              </div>
              <h3>Predictive Maintenance</h3>
              <p>AI-driven predictive analytics to anticipate equipment failures before they happen and minimize unplanned downtime.</p>
              <ul className="submodule-features">
                <li>Machine learning-based predictions</li>
                <li>Failure pattern recognition</li>
                <li>Automated maintenance scheduling</li>
                <li>ROI optimization</li>
              </ul>
            </Link>

            {/* Condition Monitoring */}
            <Link to="/condition-monitoring" className="submodule-card" id="condition-monitoring" style={{ "--pq-i": 1 }}>
              <div className="pq-visual" aria-hidden="true"><img src="/assets/images/condition-monitoring-banner.jpg" alt="" loading="lazy" decoding="async" /></div>
              <div className="submodule-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Condition Monitoring</h3>
              <p>Continuous monitoring of equipment health through vibration analysis, temperature sensing, and performance metrics.</p>
              <ul className="submodule-features">
                <li>Real-time health monitoring</li>
                <li>Vibration & temperature analysis</li>
                <li>Early fault detection</li>
                <li>Performance trending</li>
              </ul>
            </Link>

            {/* Vision AI */}
            <Link to="/vision-ai" className="submodule-card" id="vision-ai" style={{ "--pq-i": 2 }}>
              <div className="pq-visual" aria-hidden="true"><img src="/assets/images/vision-ai-banner.jpg" alt="" loading="lazy" decoding="async" /></div>
              <div className="submodule-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Vision AI</h3>
              <p>Computer vision and AI-powered visual inspection for quality control, defect detection, and process optimization.</p>
              <ul className="submodule-features">
                <li>Automated visual inspection</li>
                <li>Defect detection & classification</li>
                <li>Quality assurance automation</li>
                <li>Real-time anomaly detection</li>
              </ul>
            </Link>

            {/* Energy Management System */}
            <Link to="/energy-management" className="submodule-card" id="energy-management" style={{ "--pq-i": 3 }}>
              <div className="pq-visual" aria-hidden="true"><img src="/assets/images/energy-management-banner.jpg" alt="" loading="lazy" decoding="async" /></div>
              <div className="submodule-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Energy Management System</h3>
              <p>Comprehensive energy monitoring and optimization to reduce costs and achieve sustainability goals.</p>
              <ul className="submodule-features">
                <li>Real-time energy consumption tracking</li>
                <li>Cost optimization strategies</li>
                <li>Carbon footprint reduction</li>
                <li>Sustainability reporting</li>
              </ul>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta-section" style={{ paddingBottom: '100px' }}>
        <div className="container">
          <div className="product-cta-box">
            <div className="product-cta-content">
              <h2>Get started today and take the first step toward a smarter, more connected industrial future.</h2>
              <p>Experience the power of PlantIQX firsthand. See how real-time monitoring, predictive analytics, and intelligent automation can transform your operations.</p>
            </div>
            <div className="product-cta-button-wrapper">
              <Link to="/contact" className="product-cta-button">
                Request For Demo <img src="/assets/svg/UpArrow.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
