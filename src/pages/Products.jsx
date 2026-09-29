import React, { useEffect, useState, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import '../styles/products.css'

const STACK_PRODUCTS = [
  {
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&h=900&fit=crop',
    label: 'Asset Management',
    title: 'Asset Management',
    desc: 'Track, monitor, and optimize every asset in your facility with real-time insights and predictive maintenance capabilities.',
    features: ['Real-time asset tracking & performance monitoring', 'Predictive maintenance scheduling', 'Asset lifecycle management', 'Downtime alerts & analytics'],
    link: '/asset-management',
  },
  {
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=900&fit=crop',
    label: 'Security',
    title: 'Visitor Entry Management System',
    desc: 'Unified gate, visitor, and vehicle management for industrial plants — digitise every entry point with full audit trails and compliance.',
    features: ['Gate management with biometric & RFID integration', 'Digital visitor registration & badge printing', 'Vehicle tracking with ANPR & weighbridge integration', 'Real-time alerts & regulatory compliance reports'],
    link: '/security',
  },
  {
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1400&h=900&fit=crop',
    label: 'Surveillance',
    title: 'Surveillance',
    desc: 'Integrated video surveillance with AI-powered analytics for enhanced security and operational monitoring.',
    features: ['Real-time video monitoring', 'AI-powered threat detection', 'Incident recording & playback', 'Integration with access control'],
    link: '/surveillance',
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop',
    label: 'Utilities',
    title: 'Utilities Monitoring',
    desc: 'Monitor and optimize consumption of electricity, water, gas, and other utilities to reduce costs and environmental impact.',
    features: ['Real-time utility consumption tracking', 'Cost analysis & optimization', 'Anomaly detection & alerts', 'Sustainability reporting'],
    link: '/utilities-monitoring',
  },
  {
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&h=900&fit=crop',
    label: 'Logistics',
    title: 'FreightBid',
    desc: 'A comprehensive logistics automation platform designed to streamline transportation operations, improve visibility, and reduce freight costs.',
    features: ['Freight Procurement Automation', 'Real-Time Shipment Visibility', 'Vendor & Fleet Management', 'Analytics & Decision Intelligence'],
    link: '/freightbid',
  },
  {
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1400&h=900&fit=crop',
    label: 'Procurement',
    title: 'ProcureX',
    desc: 'Automate the procurement cycle from purchase requisition and RFQ creation through vendor comparison, approvals, and purchase order generation.',
    features: ['ERP/Excel purchase requisition intake', 'RFQ and quotation management', 'L1/L2/L3 vendor comparison', 'Multi-level approval workflow'],
    link: '/pr-to-po-automation',
  },
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop',
    label: 'Quality',
    title: 'Quality Automation',
    desc: 'Digitize quality inspections with automated tolerance validation, deviation workflows, revision control, and complete product traceability.',
    features: ['Digital job-based inspection forms', 'Design vs. observed value validation', 'Deviation alerts and approvals', 'Automatic quality dossier generation'],
    link: '/quality-automation',
  },
]

function ProductsStackSection() {
  const sectionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const N = STACK_PRODUCTS.length

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const scrolled = -rect.top
      const total = rect.height - window.innerHeight
      if (total <= 0) return
      setScrollProgress(Math.max(0, Math.min(1, scrolled / total)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ height: `${N * 100}vh`, position: 'relative', background: '#050510' }}
    >
      {/* Header */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        padding: '80px 60px 0', pointerEvents: 'none', zIndex: 0,
      }}>
        <p style={{ color: '#a78bfa', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Products</p>
        <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, maxWidth: '650px', lineHeight: 1.2 }}>
          Comprehensive Industrial Management Solutions
        </h2>
      </div>

      {/* Sticky stack */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        {STACK_PRODUCTS.map((product, i) => {
          const slotStart = i / N
          const slotEnd = (i + 1) / N
          const slotProgress = Math.max(0, Math.min(1, (scrollProgress - slotStart) / (slotEnd - slotStart)))
          const translateY = i === 0 ? 0 : (1 - slotProgress) * 100

          return (
            <div
              key={product.title}
              style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                transform: `translateY(${translateY}%)`,
                zIndex: i + 1,
                willChange: 'transform',
                transition: 'transform 0.05s linear',
              }}
            >
              <div style={{
                height: '100%', display: 'flex', overflow: 'hidden',
                borderRadius: i > 0 ? '28px 28px 0 0' : '0',
                background: 'linear-gradient(135deg, #0d1b3e 0%, #1a0a3c 60%, #06101f 100%)',
              }}>
                {/* Image */}
                <div style={{ flex: '0 0 52%', position: 'relative', overflow: 'hidden' }}>
                  <img src={product.img} alt={product.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to right, rgba(10,20,60,0.5) 0%, transparent 60%)',
                  }} />
                </div>

                {/* Content */}
                <div style={{
                  flex: '0 0 48%', display: 'flex', flexDirection: 'column',
                  justifyContent: 'center', padding: 'clamp(28px,4vw,72px)',
                  color: '#fff', position: 'relative',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '36px', height: '2px', background: '#7c3aed' }} />
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#a78bfa' }}>
                      {product.label}
                    </span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '16px', color: '#fff' }}>
                    {product.title}
                  </h2>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', maxWidth: '420px', marginBottom: '24px' }}>
                    {product.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {product.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)' }}>
                        <i className="fas fa-check-circle" style={{ color: '#7c3aed', fontSize: '0.8rem', flexShrink: 0 }}></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to={product.link} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: 'linear-gradient(135deg, #6d28d9, #4f46e5)',
                    color: '#fff', padding: '12px 26px', borderRadius: '50px',
                    fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none',
                    width: 'fit-content', boxShadow: '0 4px 20px rgba(109,40,217,0.4)',
                  }}>
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                  <div style={{
                    position: 'absolute', bottom: '32px', right: '36px',
                    fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)',
                    fontWeight: 700, letterSpacing: '2px',
                  }}>
                    {String(i + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function Products() {
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState('products')

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

      {/* Tab Nav */}
      <div style={{
        position: 'sticky', top: '80px', zIndex: 100,
        background: '#fff', borderBottom: '1px solid #eee',
        display: 'flex', justifyContent: 'center', gap: '8px', padding: '12px 20px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}>
        {[
          { key: 'products', label: 'Products' },
          { key: 'automation', label: 'Automation' },
          { key: 'solutions', label: 'Solutions' },
        ].map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            style={{
              padding: '8px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer',
              fontWeight: 600, fontSize: '0.9rem',
              background: activeTab === t.key ? 'linear-gradient(135deg,#6d28d9,#4f46e5)' : 'transparent',
              color: activeTab === t.key ? '#fff' : '#555',
              transition: 'all 0.3s ease',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Products Tab */}
      {activeTab === 'products' && <ProductsStackSection />}

      {/* Automation Section */}
      {activeTab === 'automation' && (
        <section id="automation-section" className="main-section active">
          <div className="container">
            <div className="section-header">
              <h2>Industrial Automation &amp; Control Systems</h2>
              <p>Advanced automation technologies for seamless industrial control and monitoring</p>
            </div>
            <div className="automation-block" id="plc">
              <div className="automation-img"><img src="/assets/images/plc.jpg" alt="PLC" /></div>
              <div className="automation-content">
                <h3>PLC <span>— Programmable Logic Control</span></h3>
                <p>Robust programmable logic controllers that form the backbone of reliable industrial automation. PLCs execute deterministic, real-time control logic for every production process — from simple conveyors to complex multi-axis systems.</p>
                <ul className="automation-features">
                  <li><i className="fas fa-check-circle"></i> Real-time process control with microsecond cycle times</li>
                  <li><i className="fas fa-check-circle"></i> Flexible programming — Ladder, FBD, ST, IL, SFC</li>
                  <li><i className="fas fa-check-circle"></i> High reliability &amp; industrial-grade durability</li>
                  <li><i className="fas fa-check-circle"></i> Seamless integration with SCADA, HMI &amp; MES</li>
                </ul>
              </div>
            </div>
            <div className="automation-block reverse" id="scada">
              <div className="automation-img"><img src="/assets/images/scada.jpg" alt="SCADA Systems" /></div>
              <div className="automation-content">
                <h3>SCADA <span>— Supervisory Control &amp; Data Acquisition</span></h3>
                <p>A centralised system that monitors, controls, and gathers data from industrial processes across your entire facility — giving supervisors complete operational visibility.</p>
                <ul className="automation-features">
                  <li><i className="fas fa-check-circle"></i> Centralised monitoring &amp; control of all processes</li>
                  <li><i className="fas fa-check-circle"></i> Real-time data acquisition from PLCs &amp; field devices</li>
                  <li><i className="fas fa-check-circle"></i> Historical data logging &amp; trend analysis</li>
                  <li><i className="fas fa-check-circle"></i> Alarm management, reporting &amp; event logging</li>
                </ul>
              </div>
            </div>
            <div className="automation-block" id="vfd">
              <div className="automation-img"><img src="/assets/images/vfd.jpg" alt="VFD" /></div>
              <div className="automation-content">
                <h3>VFD <span>— Variable Frequency Drive</span></h3>
                <p>Precision motor speed and torque control that dramatically reduces energy consumption and mechanical wear. VFDs are critical for pumps, fans, compressors, and conveyors.</p>
                <ul className="automation-features">
                  <li><i className="fas fa-check-circle"></i> Energy-efficient variable speed motor control</li>
                  <li><i className="fas fa-check-circle"></i> Soft start/stop — eliminates current spikes</li>
                  <li><i className="fas fa-check-circle"></i> Speed &amp; torque optimisation in real time</li>
                  <li><i className="fas fa-check-circle"></i> Reduced mechanical stress &amp; extended motor life</li>
                </ul>
              </div>
            </div>
            <div className="automation-block reverse" id="hmi">
              <div className="automation-img"><img src="/assets/images/hmi.jpg" alt="HMI" /></div>
              <div className="automation-content">
                <h3>HMI <span>— Human Machine Interface</span></h3>
                <p>Intuitive touchscreen interfaces that bridge your operators and industrial control systems. HMIs deliver real-time process visualisation, alarm management, and system control.</p>
                <ul className="automation-features">
                  <li><i className="fas fa-check-circle"></i> User-friendly touchscreen interface design</li>
                  <li><i className="fas fa-check-circle"></i> Real-time process visualisation &amp; control</li>
                  <li><i className="fas fa-check-circle"></i> Customisable dashboards per operator role</li>
                  <li><i className="fas fa-check-circle"></i> Remote access via web browser &amp; mobile app</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {activeTab === 'solutions' && (
        <section id="solutions-section" className="main-section active">
          <div className="container">
            <div className="section-header">
              <h2>Intelligent Industrial Solutions</h2>
              <p>AI-powered solutions for predictive insights and operational excellence</p>
            </div>
            <div className="submodules-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <Link to="/predictive-maintenance" className="submodule-card" id="predictive-maintenance">
                <div className="submodule-icon"><img src="/assets/svg/PreventiveMaintenances.svg" alt="Predictive Maintenance" /></div>
                <h3>Predictive Maintenance</h3>
                <p>AI-driven predictive analytics to anticipate equipment failures before they happen and minimize unplanned downtime.</p>
                <ul className="submodule-features">
                  <li>Machine learning-based predictions</li>
                  <li>Failure pattern recognition</li>
                  <li>Automated maintenance scheduling</li>
                  <li>ROI optimization</li>
                </ul>
              </Link>
              <Link to="/condition-monitoring" className="submodule-card" id="condition-monitoring">
                <div className="submodule-icon"><i className="fas fa-heartbeat"></i></div>
                <h3>Condition Monitoring</h3>
                <p>Continuous monitoring of equipment health through vibration analysis, temperature sensing, and performance metrics.</p>
                <ul className="submodule-features">
                  <li>Real-time health monitoring</li>
                  <li>Vibration &amp; temperature analysis</li>
                  <li>Early fault detection</li>
                  <li>Performance trending</li>
                </ul>
              </Link>
              <Link to="/vision-ai" className="submodule-card" id="vision-ai">
                <div className="submodule-icon"><i className="fas fa-eye"></i></div>
                <h3>Vision AI</h3>
                <p>Computer vision and AI-powered visual inspection for quality control, defect detection, and process optimization.</p>
                <ul className="submodule-features">
                  <li>Automated visual inspection</li>
                  <li>Defect detection &amp; classification</li>
                  <li>Quality assurance automation</li>
                  <li>Real-time anomaly detection</li>
                </ul>
              </Link>
              <Link to="/energy-management" className="submodule-card" id="energy-management">
                <div className="submodule-icon"><i className="fas fa-leaf"></i></div>
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
      )}

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
