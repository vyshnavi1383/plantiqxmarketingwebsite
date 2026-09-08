import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/news-detail.css'

export default function NewsDetail() {
  useEffect(() => {
    document.title = 'News Detail - PlantIQX'
  }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Breadcrumb */}
      <section className="breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/news">News &amp; Announcements</Link></li>
              <li className="breadcrumb-item active">Revolutionizing Industrial Operations: Introducing the New IoT Integration Module by PlantIQX</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="article-header">
        <div className="container">
          <h1>Revolutionizing Industrial Operations: Introducing the New IoT Integration Module by PlantIQX</h1>
          <div className="article-meta">
            <div className="author-info">
              <div className="author-avatar"></div>
              <div className="author-details">
                <span className="author-name">PlantIQX Team</span>
                <span className="publish-date"><i className="far fa-calendar"></i> 25 January 2025 | 3 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-content">
        <div className="container">
          <div className="article-image">
            <img src="https://picsum.photos/1200/600?random=article" alt="Article" />
          </div>
          <div className="article-body">
            <h2>Why IoT Matters in Modern Factories</h2>
            <p>In today's fast-paced industrial world, the efficiency of a factory depends on how well machines communicate with each other, and with decision-makers. Traditional setups often rely on manual monitoring, reactive maintenance, and isolated data — leading to inefficiencies, downtime, and missed opportunities.</p>

            <h3>Enter the Digital Ecosystem</h3>
            <p>Imagine a factory floor where every machine, sensor, and device is connected in a seamless digital ecosystem. The IoT Integration module makes this possible:</p>
            <ul>
              <li><strong>Real-Time Connectivity:</strong> Collect, analyze, and visualize data from multiple sources (PLC, SCADA, sensors, etc.)</li>
              <li><strong>Centralized Coordination:</strong> Ensure that machinery and systems are integrated for optimal production outcomes</li>
              <li><strong>Predictive Intelligence:</strong> Leverage AI-driven insights to anticipate failures and optimize energy usage</li>
            </ul>

            <h2>Turning Raw Data into Actionable Insights</h2>
            <p>The IoT Integration Module doesn't just collect data — it transforms it into intelligence. With PlantIQX, data is transformed into intelligence:</p>
            <ul>
              <li>Collect measurable KPIs and visualize trends</li>
              <li>Identify bottlenecks and inefficiencies</li>
              <li>Make informed operational decisions instantly</li>
              <li>Automate workflows and alerts to minimize human error</li>
            </ul>

            <h2>Key Advantages of PlantIQX IoT Integration</h2>
            <ul>
              <li><strong>Seamless Interoperability:</strong> Connects with existing industrial systems without major infrastructure changes</li>
              <li><strong>Scalable Architecture:</strong> Grow your operations as needed without compromising performance</li>
              <li><strong>User-Friendly Dashboards:</strong> Intuitive interfaces designed for operators, engineers, and executives</li>
            </ul>

            <h2>Empowering the Future of Smart Factories</h2>
            <p>PlantIQX's IoT Module is not just a tool — it's a transformation enabler. By integrating IoT into your operations, you're not just improving efficiency; you're positioning your business for the future of Industry 4.0 — a world where connectivity, intelligence, and automation converge to create smarter, faster, and fully connected factories.</p>
            <p>This transformation extends way beyond just connectivity — it empowers industries with real-time intelligence, predictive decision-making, and adaptive productivity.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="article-cta-section">
        <div className="container">
          <div className="article-cta-box">
            <div className="news-cta-content">
              <h2>Take the Next Step</h2>
              <p>Ready to transform your operations? Let PlantIQX help transform your industrial operations. Request a demo today and experience a factory that's smarter, faster, and fully connected.</p>
            </div>
            <div className="news-cta-button-wrapper">
              <Link to="/contact" className="article-cta-button">Request For Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
