import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// ──────────────────────────────────────────────
// Hero Section with Canvas Particle Animation
// ──────────────────────────────────────────────
function HeroSection() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const CONFIG = {
      particleCount: 80,
      connectionDistance: 160,
      particleSpeed: 0.4,
      particleRadius: { min: 1.5, max: 3.5 },
      colors: {
        particle: 'rgba(160, 120, 255, VAL)',
        line: 'rgba(130, 90, 220, VAL)',
        glow: 'rgba(105, 65, 198, 0.15)',
      },
    }

    let particles = []
    let animId

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    function createParticle() {
      const r = CONFIG.particleRadius.min + Math.random() * (CONFIG.particleRadius.max - CONFIG.particleRadius.min)
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * CONFIG.particleSpeed,
        vy: (Math.random() - 0.5) * CONFIG.particleSpeed,
        r,
        opacity: 0.4 + Math.random() * 0.6,
      }
    }

    function initParticles() {
      particles = []
      for (let i = 0; i < CONFIG.particleCount; i++) {
        particles.push(createParticle())
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONFIG.connectionDistance) {
            const alpha = (1 - dist / CONFIG.connectionDistance) * 0.5
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = CONFIG.colors.line.replace('VAL', alpha.toFixed(3))
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      particles.forEach(p => {
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4)
        grd.addColorStop(0, CONFIG.colors.glow)
        grd.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = CONFIG.colors.particle.replace('VAL', p.opacity.toFixed(3))
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    const resizeHandler = () => { resize(); initParticles() }
    window.addEventListener('resize', resizeHandler)
    resize()
    initParticles()
    draw()

    return () => {
      window.removeEventListener('resize', resizeHandler)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section id="hero" className="hero-section">
      <canvas ref={canvasRef} id="heroCanvas" className="hero-canvas"></canvas>
      <div className="hero-overlay"></div>
      <div className="hero-static-content">
        <img src="/assets/svg/logo white.png" alt="PlantIQX Logo" className="hero-logo" />
        <h1 className="hero-title">Where Minds and Machines Merge</h1>
        <p className="hero-description">Intelligent Industrial Operations Platform</p>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// About Section
// ──────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <span className="section-label">About US</span>
        <div className="d-flex justify-content-between align-items-start mb-4">
          <img src="/assets/svg/UpArrow.svg" alt="Arrow" className="btn-arrow ms-2" />
        </div>
        <div className="row">
          <div className="col-lg-12 mx-auto"></div>
          <p className="section-description">At PlantIQX, we believe that the future of manufacturing lies in
            intelligence — not just of automation, but of people. We're not just building software; we're
            building a smarter, more connected future for industries worldwide. Our mission is simple yet
            powerful — to help industries monitor, analyze, and centralize their production with data-driven
            precision.</p>
          <p className="section-description">Right from the foundation of Industrial Intelligence, PlantIQX
            software integrates seamlessly with existing equipment and Technical Insight. We empower
            businesses to make smarter, faster, and more informed decisions. Our platform provides a 360°
            view into your operations, giving you the clarity you need to optimize every aspect of your
            production.</p>
        </div>
      </div>

      <div className="container">
        <div className="features-grid mt-5">
          {[
            { icon: '/assets/svg/ArtificialInteligence.svg', label: 'AI Powered Insights' },
            { icon: '/assets/svg/IOT.svg', label: 'IoT & Machine to Machine' },
            { icon: '/assets/svg/Edge.svg', label: 'Edge Computing' },
            { icon: '/assets/svg/Advance.svg', label: 'Advance Analytics' },
            { icon: '/assets/svg/CloudTechnology.svg', label: 'Cloud Technology' },
            { icon: '/assets/svg/Automatic.svg', label: 'Enterprise-Grade Security' },
          ].map(({ icon, label }) => (
            <div className="feature-card" key={label}>
              <div className="feature-icon">
                <img src={icon} alt={label} />
              </div>
              <h5>{label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// Products Slider Section
// ──────────────────────────────────────────────
const PRODUCT_SLIDES = [
  [
    { img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop', title: 'Asset Management', desc: 'Gain complete visibility and control over all your plant assets. Predict maintenance, reduce downtime, and enhance asset reliability across your operations.', link: '/asset-management' },
    { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop', title: 'Energy Management', desc: 'Monitor and optimize energy consumption across your facility. Reduce costs and environmental impact.', link: '/energy-management' },
    { img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop', title: 'Asset Monitoring', desc: 'Connect every sensor and system to a single platform. Experience real-time monitoring, analytics, and automated alerts for smarter operations.', link: '/iot-integration' },
    { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', title: 'Analytics Dashboard', desc: 'Visualize your operations with real-time dashboards. Make data-driven decisions with comprehensive analytics tools.', link: '/analytics-dashboard' },
  ],
  [
    { img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop', title: 'Predictive Maintenance', desc: 'Anticipate equipment failures before they happen. Reduce unplanned downtime with AI-powered predictive analytics.', link: '/predictive-maintenance' },
    { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', title: 'Quality Control', desc: 'Maintain consistent quality standards across all production lines. Automated inspection and reporting systems.', link: '/quality-automation' },
    { img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop', title: 'Inventory Management', desc: 'Track inventory levels in real-time. Optimize stock levels and reduce waste with intelligent inventory systems.', link: '/analytics-dashboard' },
    { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop', title: 'User Management', desc: 'Manage roles, permissions, and access with simplicity and security. Build a transparent and efficient user ecosystem across your organization.', link: '/security' },
  ],
  [
    { img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop', title: 'Security & Administration', desc: 'Enterprise-grade protection with multi-level authentication, data encryption, and system monitoring to keep your operations secure.', link: '/security' },
    { img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', title: 'Compliance Tracking', desc: 'Stay compliant with industry regulations. Automated documentation and audit trail management.', link: '/security' },
    { img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop', title: 'Workforce Optimization', desc: 'Maximize productivity with intelligent workforce planning. Schedule shifts and track performance efficiently.', link: '/products' },
    { img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop', title: 'Mobile Access', desc: 'Access your operations from anywhere. Full-featured mobile apps for iOS and Android platforms.', link: '/products' },
  ],
]

function ProductsSection() {
  const [page, setPage] = useState(0)

  const goPrev = () => setPage(p => (p - 1 + PRODUCT_SLIDES.length) % PRODUCT_SLIDES.length)
  const goNext = () => setPage(p => (p + 1) % PRODUCT_SLIDES.length)

  return (
    <section id="products" className="products-section">
      <div className="container">
        <span className="section-label-light">Our Products</span>
        <h2 className="section-title text-white">Empowering Industries Through Smart Technology</h2>
        <p className="section-description text-white-50">PlantIQX brings together a suite of powerful, scalable, and intelligent modules that redefine industrial performance.</p>

        <div className="products-slider-wrapper">
          <div className="products-slider-container">
            {PRODUCT_SLIDES.map((slide, idx) => (
              <div key={idx} style={{
                display: idx === page ? 'grid' : 'none',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {slide.map((card) => (
                  <div key={card.title} style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    border: '2px solid transparent',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden'
                  }}>
                    <img src={card.img} alt={card.title} style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      flexShrink: 0,
                      display: 'block'
                    }} />
                    <div style={{
                      padding: '1.8rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      background: '#ffffff'
                    }}>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: '#18181a' }}>{card.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: '#475467', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>{card.desc}</p>
                      <Link to={card.link} style={{ color: '#6941c6', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center' }}>
                        Learn More <i className="fas fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="products-controls">
            <div className="products-indicators">
              {PRODUCT_SLIDES.map((_, idx) => (
                <span
                  key={idx}
                  className={`product-indicator${idx === page ? ' active' : ''}`}
                  onClick={() => setPage(idx)}
                ></span>
              ))}
            </div>
            <div className="products-nav">
              <button className="products-nav-btn prev" onClick={goPrev}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="products-nav-btn next" onClick={goNext}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// What We Do Section
// ──────────────────────────────────────────────
function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="what-we-do-section">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="positioning-list">
              {[
                { title: 'One Platform. Any Industry. Any Scale.', desc: 'While most competitors target a single niche, PlantIQX works across industries and scales seamlessly from a single plant to an enterprise-wide rollout with fast time-to-value.' },
                { title: 'Modular by Design', desc: 'Unlike full-turnkey integrators, PlantIQX lets you adopt individual modules — Asset Management, IoT Integration, Reports & Analytics — incrementally, at your own pace.' },
                { title: 'From Data to Decisions in Real Time', desc: 'PlantIQX goes beyond automation — it delivers intelligence. Monitor, analyse, and act on live plant data so your team always stays one step ahead.' },
                { title: 'Real Numbers. Proven Impact.', desc: 'We lead with measurable outcomes — uptime improvements, downtime reduction, and cost savings — so you can clearly see the ROI, not just the promise.' },
                { title: 'Trusted by Those Who Know the Industry', desc: 'Case studies, client testimonials, and thought leadership content back every claim we make — building the credibility that separates PlantIQX from lower-visibility players.' },
              ].map(({ title, desc }) => (
                <div className="positioning-card" key={title}>
                  <h4>{title}</h4>
                  <p style={{ fontWeight: 500 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5 ps-lg-5">
            <div className="what-we-do-summary">
              <span style={{ color: 'var(--secondary-color)' }}>What We Do</span>
              <h2 className="section-title mt-3">Implications for PlantIQX Positioning</h2>
              <p className="section-description mt-4" style={{ fontWeight: 500 }}>We deliver end-to-end Industrial Intelligence Solutions designed to transform traditional plants into smart, self-optimizing ecosystems — where every machine, line, and shift operates at peak efficiency.</p>
              <p className="section-description" style={{ fontWeight: 500 }}>PlantIQX empowers you to monitor smarter, produce better, and grow faster. Our platform bridges the gap between raw operational data and the decisions that actually move the needle on output, quality, and cost.</p>
              <p className="section-description mt-4">Whether you're running discrete manufacturing, process industries, or mixed-mode production, PlantIQX adapts to your workflows — not the other way around.</p>
              <Link to="/contact" className="btn btn-dark-pill mt-4">Request For Demo <span className="ms-1">↗</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// FAQ Section
// ──────────────────────────────────────────────
const FAQS = [
  { q: 'Q1: What is PlantIQX?', a: 'A: PlantIQX is an advanced industrial intelligence platform designed to help factories and enterprises automate operations, monitor assets in real time, and make data-driven decisions. It combines IoT integration, predictive analytics, and enterprise reporting to optimize industrial performance.' },
  { q: 'Q2: Who can benefit from PlantIQX?', a: 'A: PlantIQX is designed for manufacturing plants, industrial facilities, energy companies, utilities, and any enterprise looking to digitize and optimize their operations. It serves plant managers, operations teams, maintenance engineers, and C-level executives.' },
  { q: 'Q3: What modules does PlantIQX include?', a: 'A: PlantIQX includes modules for Asset Management, Utility Monitoring, IoT Integration, Security & Administration, Predictive Maintenance, Condition Monitoring, Energy Management, Vision AI, Surveillance, and Reports & Analytics — all accessible from a single unified platform.' },
  { q: 'Q4: How does PlantIQX integrate with existing systems?', a: 'A: PlantIQX is built for seamless integration. It supports standard industrial protocols, REST APIs, and edge computing devices. Our team works closely with your IT and operations teams to ensure smooth connectivity with your existing equipment, ERP, and SCADA systems.' },
  { q: 'Q5: Is my data secure with PlantIQX?', a: 'A: Absolutely. PlantIQX employs enterprise-grade security including multi-level authentication, end-to-end data encryption, role-based access control, and continuous system monitoring. Your operational data stays protected at all times.' },
  { q: 'Q6: How long does it take to implement PlantIQX?', a: 'A: Implementation timelines vary based on scope and scale, but most deployments are completed within 1-4 weeks. Our modular approach means you can go live with individual modules quickly and expand adoption incrementally.' },
  { q: 'Q7: Does PlantIQX support predictive maintenance?', a: 'A: Yes. PlantIQX includes a dedicated Predictive Maintenance module powered by AI and real-time sensor data. It detects early signs of equipment degradation, forecasts failures before they occur, and helps you schedule maintenance proactively.' },
  { q: 'Q8: Can PlantIQX generate custom reports?', a: 'A: Yes. The Reports & Analytics module allows you to create fully customizable reports tailored to your KPIs and operational goals. Reports can be scheduled, exported, and shared with stakeholders across your organization.' },
  { q: 'Q9: Is PlantIQX suitable for multiple plants or locations?', a: 'A: Yes. PlantIQX is built to scale across multiple sites and geographies. You can manage all your plants from a single centralized dashboard, with location-specific views and consolidated reporting for enterprise-wide visibility.' },
  { q: 'Q10: Do you offer support and training?', a: 'A: Yes. We provide comprehensive onboarding, training sessions, and ongoing technical support. Our dedicated customer success team is available to help your team get the most out of PlantIQX at every stage of your journey.' },
]

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex(prev => prev === idx ? -1 : idx)
  }

  return (
    <section id="faq" className="faq-section-new">
      <div className="container">
        <div className="text-center mb-5">
          <span style={{ color: 'var(--secondary-color)' }}>FAQ's</span>
          <h2 className="section-title mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => (
            <div key={idx} className={`faq-list-item${openIndex === idx ? ' active' : ''}`}>
              <div className="faq-list-header" onClick={() => toggle(idx)} style={{ cursor: 'pointer' }}>
                <h5>{faq.q}</h5>
                <button className="faq-list-toggle">
                  <i className={`fas fa-${openIndex === idx ? 'minus' : 'plus'}`}></i>
                </button>
              </div>
              <div
                className="faq-list-body"
                style={{ maxHeight: openIndex === idx ? '500px' : null }}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// CTA Section
// ──────────────────────────────────────────────
function CtaSection() {
  return (
    <section className="cta-section-full">
      <div className="container">
        <div className="cta-section-inner">
          <div className="cta-section-text">
            <h3>Get started today and take the first step toward a smarter, more connected industrial future.</h3>
            <p>Experience the power of PlantIQX firsthand. See how real-time monitoring, predictive analytics, and intelligent automation can transform your operations.</p>
          </div>
          <Link to="/contact" className="btn btn-purple-pill">Request For Demo <span className="ms-1">↗</span></Link>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// Home Page (assembles all sections)
// ──────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhatWeDoSection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}
