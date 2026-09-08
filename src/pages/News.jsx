import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/news.css'

const NEWS_ITEMS = [
  { id: 1, date: '20 January 2025', read: '4 min read', title: 'Major Update to Asset Management Dashboard', desc: 'Explore the latest enhancements to our Asset Management Dashboard, designed to provide deeper insights and streamlined workflows.' },
  { id: 2, date: '18 January 2025', read: '5 min read', title: 'How PlantIQX Helps Reduce Product Wastage', desc: 'Learn how our intelligent monitoring and predictive analytics help manufacturers minimize waste and optimize production efficiency.' },
  { id: 3, date: '15 January 2025', read: '3 min read', title: 'PlantIQX Wins Best Industrial IoT Platform Award', desc: "We're proud to announce that PlantIQX has been recognized as the Best Industrial IoT Platform at the 2025 Industry Innovation Awards." },
  { id: 4, date: '12 January 2025', read: '6 min read', title: 'Integrating AI-Powered Predictive Maintenance', desc: "Discover how PlantIQX's AI-powered predictive maintenance helps prevent equipment failures and reduce downtime significantly." },
  { id: 5, date: '10 January 2025', read: '4 min read', title: 'Experts & Executives Embrace Data-Driven Decisions', desc: "Industry leaders share how PlantIQX's data analytics platform has transformed their decision-making processes and operational efficiency." },
  { id: 6, date: '8 January 2025', read: '5 min read', title: 'PlantIQX Expands Offices Internationally', desc: "We're excited to announce the opening of new offices in Europe and Asia to better serve our growing global customer base." },
  { id: 7, date: '5 January 2025', read: '7 min read', title: 'Case Study: Automotive Module Delivered 40% Efficiency Gain', desc: 'Read how a leading automotive manufacturer achieved 40% efficiency improvement using PlantIQX\'s comprehensive industrial solutions.' },
  { id: 8, date: '3 January 2025', read: '4 min read', title: 'Upcoming Webinar: Mastering Data Insights', desc: 'Join our upcoming webinar to learn best practices for leveraging industrial data insights to drive operational excellence.' },
  { id: 9, date: '1 January 2025', read: '3 min read', title: 'New Event Management System Streamlined', desc: 'Introducing our new event management system that makes organizing and tracking industrial events easier than ever before.' },
  { id: 10, date: '28 December 2024', read: '5 min read', title: 'Cybersecurity Measures Gets Major Upgrade', desc: "Learn about the enhanced security features we've implemented to protect your industrial data and ensure compliance with global standards." },
  { id: 11, date: '25 December 2024', read: '4 min read', title: 'Year-End Review: Celebrating Milestones', desc: 'Reflecting on an incredible year of innovation, growth, and success with our valued customers and partners worldwide.' },
  { id: 12, date: '22 December 2024', read: '6 min read', title: 'Partnership Announcement: Expanding Ecosystem', desc: "We're thrilled to announce strategic partnerships with leading technology providers to enhance our platform capabilities." },
]

const PER_PAGE = 9

export default function News() {
  const [page, setPage] = useState(1)

  useEffect(() => {
    document.title = 'News & Announcements - PlantIQX'
  }, [])

  const totalPages = Math.ceil(NEWS_ITEMS.length / PER_PAGE)
  const pageItems = NEWS_ITEMS.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Hero Section */}
      <section className="news-hero">
        <div className="container">
          <div className="section-label">News &amp; Announcements</div>
          <h1>Stay Informed with Our Latest News</h1>
          <p>Stay updated with the latest company updates, industry news, and important notifications. PlantIQX keeps your team informed and aligned in real-time.</p>
        </div>
      </section>

      {/* Featured News */}
      <section className="featured-news">
        <div className="container">
          <div className="featured-card">
            <div className="featured-image">
              <img src="https://picsum.photos/800/400?random=featured" alt="Featured News" />
            </div>
            <div className="featured-content">
              <div className="news-meta">
                <span className="news-date"><i className="far fa-calendar"></i> 25 January 2025 | 3 min read</span>
              </div>
              <h2>Revolutionizing Industrial Operations: Introducing the New IoT Integration Module by PlantIQX</h2>
              <p>Discover how PlantIQX's new IoT Integration Module is transforming industrial operations by enabling seamless connectivity between machines, sensors, and systems for smarter, data-driven decision-making.</p>
              <Link to="/news-detail" className="read-more">Read More <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="news-grid-section">
        <div className="container">
          <div className="news-grid">
            {pageItems.map((item) => (
              <Link to="/news-detail" className="news-card" key={item.id}>
                <div className="news-card-image">
                  <img src={`https://picsum.photos/400/200?random=${item.id}`} alt="News" />
                </div>
                <div className="news-card-content">
                  <div className="news-meta">
                    <span className="news-date"><i className="far fa-calendar"></i> {item.date} | {item.read}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="read-more">Read More <i className="fas fa-arrow-right"></i></span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination-wrapper">
            <div className="pagination">
              <button
                className="pagination-btn pagination-prev"
                disabled={page === 1}
                onClick={() => setPage(p => Math.max(1, p - 1))}
              >
                <i className="fas fa-chevron-left"></i> Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  className={`pagination-number${page === n ? ' active' : ''}`}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
              <button
                className="pagination-btn pagination-next"
                disabled={page === totalPages}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              >
                Next <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="news-cta-section">
        <div className="container">
          <div className="news-cta-box">
            <div className="news-cta-content">
              <h2>Get started today and take the first step toward a smarter, more connected industrial future.</h2>
              <p>Experience the power of PlantIQX firsthand. See how real-time monitoring, predictive analytics, and intelligent automation can transform your operations.</p>
            </div>
            <div className="news-cta-button-wrapper">
              <Link to="/contact" className="news-cta-button">Request For Demo <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
