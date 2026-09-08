import React, { useEffect, useRef } from 'react'
import '../styles/about.css'

// Count-up hook
function useCountUp(target, suffix = '', prefix = '') {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const DURATION = 2000
    function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4) }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const start = performance.now()
          function step(now) {
            const elapsed = now - start
            const progress = Math.min(elapsed / DURATION, 1)
            const value = Math.round(easeOutQuart(progress) * target)
            el.textContent = prefix + value + suffix
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix, prefix])
  return ref
}

function StatCard({ target, suffix, prefix, desc, initialText }) {
  const ref = useCountUp(target, suffix, prefix)
  return (
    <div className="stat-card">
      <h3 ref={ref}>{initialText || `0${suffix}`}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default function About() {
  useEffect(() => {
    document.title = 'About Us - PlantIQX'
  }, [])

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Section 1: Introduction */}
      <section className="about-section about-intro">
        <div className="container-fluid">
          <div className="content-wrapper">
            <div className="text-content">
              <div className="section-label">Introduction</div>
              <h1>Automate Smarter.<br />Produce Better.</h1>
              <p>At PlantIQX, we are redefining the way industries operate. We combine data, intelligence, and
                engineering prowess to help organizations unlock their full potential. Through advanced IoT
                integration, real-time analytics, and AI-driven insights, we empower businesses to make
                smarter decisions faster.</p>
              <p>Our mission is simple — to help industries move from traditional control to intelligent
                command.</p>
            </div>
            <div className="image-content">
              <img src="/assets/svg/wellcomeDashboard.svg" alt="PlantIQX dashboard" style={{ borderRadius: '20px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="about-section about-story" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="content-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
            <div className="image-content" style={{ flex: '0 0 45%' }}>
              <img src="/assets/svg/OurStory.svg" alt="PlantIQX Journey" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="text-content" style={{ flex: 1 }}>
              <div className="section-label" style={{ color: '#6941C6', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', marginBottom: '20px', display: 'block' }}>Our Story</div>
              <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: '30px' }}>Our Journey</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '20px' }}>PlantIQX was born out of a vision to bridge the gap between people and technology in the
                industrial world.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '20px' }}>We started as a team of data scientists, tech-first thinkers, and engineers who saw how
                most industries were rich in machinery but poor in actionable insights. Machines generated
                data — but it wasn't being used effectively.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '20px' }}>We set out to create a unified platform that brings together real-time monitoring, predictive
                analytics, and automation — enabling teams to make informed decisions faster than ever
                before.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '20px' }}>Today, PlantIQX powers smarter factories and helps industries around the world work toward a
                future driven by intelligence, not guesswork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Intelligence That Works */}
      <section className="about-section about-intelligence" style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="content-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
            <div className="text-content" style={{ flex: 1 }}>
              <div className="section-label" style={{ color: '#6941C6', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', marginBottom: '20px', display: 'block' }}>Our Goal</div>
              <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: '30px' }}>Intelligence That Works</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '15px' }}>Our goal is to empower every industrial operation with tools that make automation smarter and
                decisions sharper.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '30px 0' }}>
                {[
                  'Simplify complex industrial data into clear, actionable insights.',
                  'Enable real-time decision-making with IoT connectivity and AI-backed analytics.',
                  'Reduce downtime, improve efficiency, and optimize operations through intelligent automation.',
                  'Deliver scalable, secure, and functionally industrial solutions.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#6941C6', fontWeight: 'bold', fontSize: '20px' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '15px' }}>At PlantIQX, every feature, every module, and every innovation is built with one goal in mind
                — to make your plant perform at its best.</p>
            </div>
            <div className="image-content" style={{ flex: '0 0 45%' }}>
              <img src="/assets/svg/OurGoalAnimated.svg" alt="PlantIQX Intelligence" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Values */}
      <section className="about-section about-values" style={{ padding: '100px 0', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <div className="section-label" style={{ color: '#6941C6', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', display: 'block' }}>Our Values</div>
          <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: '60px' }}>The Core of Everything We Do</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
            {[
              { icon: '/assets/svg/InovationFirst.svg', title: 'Innovation-First', desc: "We don't just follow trends; we create them. Innovation drives everything we do." },
              { icon: '/assets/svg/IntegrityAlways.svg', title: 'Integrity Always', desc: 'Ethical AI, secure data, and transparency with clients. We build trust through action.' },
              { icon: '/assets/svg/SusMatters.svg', title: 'Sustainability Matters', desc: 'From reducing waste to optimizing energy, we support a greener future.' },
              { icon: '/assets/svg/WinnerSuccess.svg', title: 'Customer Success', desc: "Your success is our success — and we obsess over it. We're accountable for the outcomes we deliver." },
              { icon: '/assets/svg/Cullabrution.svg', title: 'Collaboration Over Competition', desc: 'We succeed as a team — not just internally, but with our clients, partners, and the broader industrial ecosystem.' },
              { icon: '/assets/svg/Execution.svg', title: 'Results-Driven', desc: "We believe in data-driven decisions. We're not just building platforms; we're delivering measurable ROI, efficiency gains, and smarter operations." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ textAlign: 'left', padding: '20px', border: '1px solid #EAECF0', borderRadius: '12px', backgroundColor: '#ffffff' }}>
                <div style={{ width: '48px', height: '48px', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={icon} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#667085', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our Vision */}
      <section className="about-section about-vision" style={{ padding: '100px 0', backgroundColor: '#1a1a2e', textAlign: 'center' }}>
        <div className="container">
          <div style={{ color: '#FB6514', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Our Vision</div>
          <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '40px' }}>Redefining Industrial Intelligence</h2>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#ffffff', marginBottom: '30px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>We envision a world where every factory thinks, learns, and evolves. A world
            where industries are not just automated but intelligent — where data speaks, machines collaborate,
            and decisions are made in real time.</p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#ffffff', marginBottom: '50px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>PlantIQX aims to lead this transformation by delivering the most fully equipped
            ecosystems that make industrial operations efficient, sustainable, and intelligent than ever before.</p>

          <div style={{ background: 'rgba(236, 74, 10, 0.05)', borderLeft: '4px solid #FB6514', padding: '30px 40px', margin: '50px auto 0', textAlign: 'left', maxWidth: '900px' }}>
            <p style={{ fontSize: '16px', lineHeight: 1.2, color: '#FB6514', marginBottom: '15px' }}>Our vision is simple yet powerful —</p>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: 0 }}>To merge human insight with machine intelligence and build the future of
              smart industries.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Our Team */}
      <section className="about-section about-team" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content">
              <div className="section-label" style={{ color: '#6941C6', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', display: 'block' }}>Our Team</div>
              <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: '30px' }}>Engineers of Intelligence</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '20px' }}>Behind every PlantIQX innovation is a team of passionate thinkers, engineers, and data
                visionaries.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '20px' }}>We come from diverse backgrounds — bringing together expertise in industrial automation, IoT,
                data science, and AI-driven analytics.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '20px' }}>We believe in creativity, collaboration, and continuous learning — and that's what makes us
                different. We're not just building software; we're shaping the future of intelligent
                industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Our Impact */}
      <section className="about-section about-impact" style={{ padding: '100px 0', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div className="container">
          <div className="section-label" style={{ color: '#6941C6', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', display: 'block' }}>Our Impact</div>
          <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: '30px' }}>Real Intelligence. Real Results.</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '20px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>PlantIQX is powering transformation across industries by helping businesses:</p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '60px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>We are proud to see our technology driving measurable improvements in
            performance, safety, and profitability — proving that when intelligence meets industry, innovation
            happens.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginTop: '50px' }}>
            <StatCard target={35} suffix="%" desc="Our clients see an average 35% reduction in unplanned downtime." />
            <StatCard target={30} prefix="25-" suffix="%" desc="Improvement in operational efficiency using real-time analytics." initialText="25-0%" />
            <StatCard target={50} suffix="%" desc="Faster decision-making through intelligent workflows." />
            <StatCard target={80} suffix="%" desc="Reduction in manual reporting with unified data dashboards." />
          </div>
        </div>
      </section>
    </main>
  )
}
