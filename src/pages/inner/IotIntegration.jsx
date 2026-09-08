import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/inner-page.css'

export default function IotIntegration() {
  useEffect(() => { document.title = 'IoT Integration - PlantIQX' }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="inner-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="inner-hero-label">Product</div>
              <h1>IoT Integration<br /><span>Connect Everything, Monitor Anything</span></h1>
              <p>Connect every sensor, device, and system to a single intelligent platform. Experience real-time monitoring, automated alerts, and seamless data flow across your entire facility.</p>
              <Link to="/contact" className="inner-hero-btn">Request a Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center" style={{ height: '320px' }}>
              <i className="fas fa-network-wired" style={{ fontSize: '10rem', color: 'var(--primary-color)', opacity: 0.15 }}></i>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="inner-stats-bar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 stat-item"><h3>10K+</h3><p>Devices supported per deployment</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>50ms</h3><p>Average data latency</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>99.5%</h3><p>Device uptime monitoring accuracy</p></div>
            <div className="col-6 col-md-3 stat-item"><h3>40%</h3><p>Reduction in integration costs</p></div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="inner-section">
        <div className="container">
          <div className="inner-overview">
            <div className="asset-image-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '260px', background: '#f4f1ff', borderRadius: '16px' }}>
              <i className="fas fa-network-wired" style={{ fontSize: '7rem', color: 'var(--primary-color)', opacity: 0.3 }}></i>
            </div>
            <div>
              <div className="section-label">What It Does</div>
              <h2 className="section-title">One Platform for Every Connected Device</h2>
              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-plug"></i></div>
                  <div><strong>Universal Device Connectivity</strong><br /><small className="text-muted">Connect PLCs, SCADA systems, sensors, and edge devices using OPC-UA, MQTT, Modbus, and REST APIs.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-stream"></i></div>
                  <div><strong>Real-Time Data Streaming</strong><br /><small className="text-muted">Ingest millions of data points per second with sub-50ms latency for true real-time operational visibility.</small></div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="feature-card-icon flex-shrink-0"><i className="fas fa-cloud-upload-alt"></i></div>
                  <div><strong>Edge-to-Cloud Architecture</strong><br /><small className="text-muted">Process data locally at the edge for low-latency decisions while syncing critical insights to the cloud.</small></div>
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
            <h2 className="section-title">Everything You Need</h2>
          </div>
          <div className="feature-cards-grid">
            {[
              { icon: 'fa-microchip', title: 'Multi-Protocol Support', desc: 'Support for OPC-UA, MQTT, Modbus TCP/RTU, BACnet, EtherNet/IP, and REST APIs out of the box.' },
              { icon: 'fa-tachometer-alt', title: 'Real-Time Dashboards', desc: 'Live sensor feeds displayed on customizable dashboards with drill-down to individual device metrics.' },
              { icon: 'fa-exclamation-triangle', title: 'Intelligent Alerting', desc: 'Configure threshold-based or ML-driven alerts that trigger actions, notifications, or automated responses.' },
              { icon: 'fa-shield-alt', title: 'Secure Device Management', desc: 'Certificate-based device authentication, encrypted communications, and remote firmware update capabilities.' },
              { icon: 'fa-history', title: 'Historical Data Storage', desc: 'Store years of time-series data with efficient compression for trend analysis, audits, and ML training.' },
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
            <h2 className="section-title">How Industries Use It</h2>
            <p className="section-subtitle mx-auto">Real-world applications of PlantIQX IoT Integration across industrial sectors.</p>
          </div>
          <div className="usecase-list mt-5">
            {[
              { num: '01', title: 'Smart Manufacturing', desc: 'Connect CNC machines, conveyors, and robotic arms to track production rates, detect faults early, and optimize throughput in real time.' },
              { num: '02', title: 'Utilities & Infrastructure', desc: 'Monitor pumping stations, substations, and pipelines remotely with automatic leak and fault detection across distributed assets.' },
              { num: '03', title: 'Cold Chain Logistics', desc: 'Track temperature, humidity, and GPS location of perishable goods from warehouse to delivery with real-time alerts for excursions.' },
              { num: '04', title: 'Building Management', desc: 'Integrate HVAC, lighting, and access control systems into one dashboard for energy optimization and predictive maintenance.' },
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
          <h2>Ready to Connect Your Plant?</h2>
          <p>See how PlantIQX IoT Integration eliminates data silos and delivers real-time intelligence across your operations.</p>
          <Link to="/contact" className="inner-cta-btn">Schedule a Demo <i className="fas fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  )
}
