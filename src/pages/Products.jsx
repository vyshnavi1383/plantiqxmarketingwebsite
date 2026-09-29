import React, { useEffect, useState, useRef } from 'react' // scroll-stack v3
import { Link, useSearchParams } from 'react-router-dom'
import '../styles/products.css'

const STACK_PRODUCTS = [
  {
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop',
    label: 'Asset Management',
    title: 'Asset Management',
    desc: 'Track, monitor, and optimize every asset in your facility with real-time insights and predictive maintenance capabilities.',
    features: ['Real-time asset tracking & performance monitoring', 'Predictive maintenance scheduling', 'Asset lifecycle management', 'Downtime alerts & analytics'],
    link: '/asset-management',
    accent: '#7c3aed',
  },
  {
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&h=900&fit=crop',
    label: 'Security & Gate Management',
    title: 'Visitor Entry Management System',
    desc: 'Unified gate, visitor, and vehicle management for industrial plants — digitise every entry point with full audit trails and compliance.',
    features: ['Gate management with biometric & RFID integration', 'Digital visitor registration & badge printing', 'Vehicle tracking with ANPR & weighbridge integration', 'Real-time alerts & regulatory compliance reports'],
    link: '/security',
    accent: '#0891b2',
  },
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop',
    label: 'Surveillance',
    title: 'AI Surveillance System',
    desc: 'Integrated video surveillance with AI-powered analytics for enhanced security and operational monitoring across your facility.',
    features: ['Real-time video monitoring across all zones', 'AI-powered threat detection & alerts', 'Incident recording & instant playback', 'Seamless access control integration'],
    link: '/surveillance',
    accent: '#dc2626',
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop',
    label: 'Utilities Monitoring',
    title: 'Utilities Monitoring',
    desc: 'Monitor and optimize consumption of electricity, water, gas, and other utilities to reduce costs and environmental impact.',
    features: ['Real-time utility consumption tracking', 'Cost analysis & optimization reports', 'Anomaly detection & instant alerts', 'Sustainability & compliance reporting'],
    link: '/utilities-monitoring',
    accent: '#059669',
  },
  {
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop',
    label: 'Logistics',
    title: 'FreightBid',
    desc: 'A comprehensive logistics automation platform designed to streamline transportation operations, improve visibility, and reduce freight costs.',
    features: ['Freight procurement automation', 'Real-time shipment visibility', 'Vendor & fleet management', 'Analytics & decision intelligence'],
    link: '/freightbid',
    accent: '#d97706',
  },
  {
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1600&h=900&fit=crop',
    label: 'Procurement',
    title: 'ProcureX',
    desc: 'Automate the procurement cycle from purchase requisition and RFQ creation through vendor comparison, approvals, and purchase order generation.',
    features: ['ERP/Excel purchase requisition intake', 'RFQ and quotation management', 'L1/L2/L3 vendor comparison matrix', 'Multi-level approval workflow'],
    link: '/pr-to-po-automation',
    accent: '#7c3aed',
  },
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop',
    label: 'Quality',
    title: 'Quality Automation',
    desc: 'Digitize quality inspections with automated tolerance validation, deviation workflows, revision control, and complete product traceability.',
    features: ['Digital job-based inspection forms', 'Design vs. observed value validation', 'Deviation alerts and approvals', 'Automatic quality dossier generation'],
    link: '/quality-automation',
    accent: '#0891b2',
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
      style={{ height: `${N * 100}vh`, position: 'relative', background: '#07050f' }}
    >
      {/* Sticky viewport */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

        {/* Background glow */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(109,40,217,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {STACK_PRODUCTS.map((product, i) => {
          const slotStart = i / N
          const slotEnd = (i + 1) / N
          const raw = (scrollProgress - slotStart) / (slotEnd - slotStart)
          const slotProgress = Math.max(0, Math.min(1, raw))
          // ease-out cubic
          const eased = 1 - Math.pow(1 - slotProgress, 3)
          const translateY = i === 0 ? 0 : (1 - eased) * 100

          return (
            <div
              key={product.title}
              style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                transform: `translateY(${translateY}%)`,
                zIndex: i + 1,
                willChange: 'transform',
              }}
            >
              {/* Card — full viewport rectangle */}
              <div style={{
                height: '100%',
                display: 'grid',
                gridTemplateColumns: '55% 45%',
                overflow: 'hidden',
                background: `linear-gradient(135deg, #0a0f2e 0%, #110828 60%, #050510 100%)`,
                borderTop: i > 0 ? `3px solid ${product.accent}` : 'none',
              }}>
                {/* Left — image */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={product.img}
                    alt={product.title}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', display: 'block',
                      transform: `scale(${1 + (1 - eased) * 0.06})`,
                      transition: 'transform 0.1s linear',
                    }}
                  />
                  {/* dark overlay so content is readable */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to right, rgba(5,5,20,0.5) 0%, rgba(5,5,20,0.1) 70%, transparent 100%)',
                  }} />
                  {/* product number watermark */}
                  <div style={{
                    position: 'absolute', bottom: '32px', left: '32px',
                    fontSize: '5rem', fontWeight: 900, lineHeight: 1,
                    color: 'rgba(255,255,255,0.07)',
                    fontVariantNumeric: 'tabular-nums',
                    userSelect: 'none',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Right — content */}
                <div style={{
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  padding: 'clamp(32px, 5vw, 80px) clamp(28px, 4vw, 64px)',
                  position: 'relative', color: '#fff',
                }}>
                  {/* Label chip */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                    <div style={{ width: '32px', height: '2px', background: product.accent, flexShrink: 0 }} />
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 700, letterSpacing: '3px',
                      textTransform: 'uppercase', color: product.accent,
                    }}>
                      {product.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.6rem)', fontWeight: 800,
                    lineHeight: 1.1, marginBottom: '16px', color: '#fff',
                    letterSpacing: '-0.02em',
                  }}>
                    {product.title}
                  </h2>

                  {/* Desc */}
                  <p style={{
                    fontSize: 'clamp(0.85rem, 1.1vw, 0.98rem)', lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.6)', maxWidth: '400px', marginBottom: '28px',
                  }}>
                    {product.desc}
                  </p>

                  {/* Features */}
                  <ul style={{
                    listStyle: 'none', padding: 0, margin: '0 0 36px',
                    display: 'flex', flexDirection: 'column', gap: '10px',
                  }}>
                    {product.features.map(f => (
                      <li key={f} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '10px',
                        fontSize: 'clamp(0.8rem, 1vw, 0.88rem)', color: 'rgba(255,255,255,0.72)',
                      }}>
                        <span style={{
                          width: '18px', height: '18px', borderRadius: '50%',
                          background: `${product.accent}22`, border: `1.5px solid ${product.accent}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0, marginTop: '1px',
                        }}>
                          <i className="fas fa-check" style={{ fontSize: '0.55rem', color: product.accent }}></i>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <Link to={product.link} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: product.accent,
                    color: '#fff', padding: '13px 28px', borderRadius: '50px',
                    fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
                    width: 'fit-content',
                    boxShadow: `0 6px 24px ${product.accent}55`,
                    letterSpacing: '0.03em',
                  }}>
                    Explore <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
                  </Link>

                  {/* Progress dots */}
                  <div style={{
                    position: 'absolute', bottom: '28px', right: '32px',
                    display: 'flex', gap: '6px', alignItems: 'center',
                  }}>
                    {STACK_PRODUCTS.map((_, di) => (
                      <div key={di} style={{
                        width: di === i ? '20px' : '6px',
                        height: '6px',
                        borderRadius: '3px',
                        background: di === i ? product.accent : 'rgba(255,255,255,0.2)',
                        transition: 'width 0.3s ease, background 0.3s ease',
                      }} />
                    ))}
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
          { key: 'products', label: 'Products', icon: 'fa-cube' },
          { key: 'automation', label: 'Automation', icon: 'fa-cogs' },
          { key: 'solutions', label: 'Solutions', icon: 'fa-lightbulb' },
        ].map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            style={{
              padding: '9px 26px', borderRadius: '50px', border: 'none', cursor: 'pointer',
              fontWeight: 600, fontSize: '0.9rem',
              background: activeTab === t.key ? 'linear-gradient(135deg,#6d28d9,#4f46e5)' : '#f5f5f8',
              color: activeTab === t.key ? '#fff' : '#555',
              transition: 'all 0.25s ease',
              display: 'flex', alignItems: 'center', gap: '7px',
            }}
          >
            <i className={`fas ${t.icon}`} style={{ fontSize: '0.8rem' }}></i>
            {t.label}
          </button>
        ))}
      </div>

      {/* Products Tab — scroll stack */}
      {activeTab === 'products' && <ProductsStackSection />}

      {/* Automation Section */}
      {activeTab === 'automation' && (
        <section id="automation-section" className="main-section active">
          <div className="container">
            <div className="section-header">
              <h2>Industrial Automation &amp; Control Systems</h2>
              <p>Advanced automation technologies for seamless industrial control and monitoring</p>
            </div>
            <div className="modules-grid">
              <Link to="/plc-scada" className="module-card" id="plc-scada">
                <div className="module-icon"><i className="fas fa-microchip"></i></div>
                <h3>PLC/SCADA Systems</h3>
                <p>Advanced programmable logic controllers and SCADA systems for industrial process automation and monitoring.</p>
                <ul className="module-features">
                  <li>Real-time process monitoring</li>
                  <li>Automated control sequences</li>
                  <li>HMI integration</li>
                  <li>Remote monitoring capability</li>
                </ul>
              </Link>
              <Link to="/vfd-drives" className="module-card" id="vfd-drives">
                <div className="module-icon"><i className="fas fa-tachometer-alt"></i></div>
                <h3>VFD Drives</h3>
                <p>Variable frequency drives for precise motor control, energy optimization, and process efficiency.</p>
                <ul className="module-features">
                  <li>Precise speed control</li>
                  <li>Energy optimization</li>
                  <li>Soft start/stop capability</li>
                  <li>Advanced motor protection</li>
                </ul>
              </Link>
              <Link to="/hmi-systems" className="module-card" id="hmi-systems">
                <div className="module-icon"><i className="fas fa-desktop"></i></div>
                <h3>HMI Systems</h3>
                <p>Human Machine Interface systems for intuitive operator control and real-time process visualization.</p>
                <ul className="module-features">
                  <li>Intuitive touch interface</li>
                  <li>Real-time data visualization</li>
                  <li>Alarm management</li>
                  <li>Historical trending</li>
                </ul>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {activeTab === 'solutions' && (
        <section id="solutions-section" className="main-section active">
          <div className="container">
            <div className="section-header">
              <h2>Industrial Intelligence Solutions</h2>
              <p>AI-powered solutions for predictive, preventive, and proactive industrial management</p>
            </div>
            <div className="submodules-grid">
              <Link to="/predictive-maintenance" className="submodule-card" id="predictive-maintenance">
                <div className="submodule-icon"><i className="fas fa-chart-line"></i></div>
                <h3>Predictive Maintenance</h3>
                <p>AI-powered predictive maintenance to prevent equipment failures and reduce unplanned downtime.</p>
                <ul className="submodule-features">
                  <li>AI failure prediction</li>
                  <li>Sensor data analysis</li>
                  <li>Maintenance scheduling</li>
                  <li>Cost reduction analytics</li>
                </ul>
              </Link>
              <Link to="/condition-monitoring" className="submodule-card" id="condition-monitoring">
                <div className="submodule-icon"><i className="fas fa-heartbeat"></i></div>
                <h3>Condition Monitoring</h3>
                <p>Continuous equipment health monitoring with vibration, temperature, and performance analytics.</p>
                <ul className="submodule-features">
                  <li>Vibration analysis</li>
                  <li>Thermal monitoring</li>
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
