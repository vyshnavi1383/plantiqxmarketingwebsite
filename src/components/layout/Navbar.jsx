import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [logoHidden, setLogoHidden] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const closeTimerRef = useRef({})

  // Scroll handler for navbar transparency + logo visibility
  useEffect(() => {
    const onScroll = () => {
      if (isHome) {
        if (window.scrollY > 80) {
          setScrolled(true)
          setLogoHidden(false)
        } else {
          setScrolled(false)
          setLogoHidden(true)
        }
      } else {
        setScrolled(true)
        setLogoHidden(false)
      }
    }

    // Initialize
    if (isHome) {
      setScrolled(false)
      setLogoHidden(true)
    } else {
      setScrolled(true)
      setLogoHidden(false)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  // Close mobile nav on route change
  useEffect(() => {
    setNavOpen(false)
    setProductsOpen(false)
    setSolutionsOpen(false)
  }, [location.pathname])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('.piqx-dropdown')) {
        setProductsOpen(false)
        setSolutionsOpen(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const isMobileOpen = navOpen

  const handleProductsEnter = () => {
    if (!isMobileOpen) {
      clearTimeout(closeTimerRef.current.products)
      setSolutionsOpen(false)
      setProductsOpen(true)
    }
  }
  const handleProductsLeave = () => {
    if (!isMobileOpen) {
      closeTimerRef.current.products = setTimeout(() => setProductsOpen(false), 200)
    }
  }
  const handleSolutionsEnter = () => {
    if (!isMobileOpen) {
      clearTimeout(closeTimerRef.current.solutions)
      setProductsOpen(false)
      setSolutionsOpen(true)
    }
  }
  const handleSolutionsLeave = () => {
    if (!isMobileOpen) {
      closeTimerRef.current.solutions = setTimeout(() => setSolutionsOpen(false), 200)
    }
  }

  const handleProductsToggle = (e) => {
    if (isMobileOpen) {
      e.preventDefault()
      setProductsOpen(p => !p)
      setSolutionsOpen(false)
    }
  }
  const handleSolutionsToggle = (e) => {
    if (isMobileOpen) {
      e.preventDefault()
      setSolutionsOpen(s => !s)
      setProductsOpen(false)
    }
  }

  const navbarClass = `navbar navbar-expand-lg navbar-dark fixed-top${scrolled ? ' scrolled' : ''}${logoHidden ? ' logo-hidden' : ''}`

  return (
    <header className="header-section">
      <nav className={navbarClass}>
        <div className="container">
          <Link className="navbar-brand header-brand me-4" to="/">
            <img
              src="/assets/svg/plantiqx-final-logo.svg"
              alt="PlantIQX"
              className="header-logo"
            />
          </Link>

          <button
            className={`navbar-toggler${navOpen ? '' : ' collapsed'}`}
            type="button"
            onClick={() => setNavOpen(o => !o)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse${navOpen ? ' show' : ''}`} id="navbarNav">
            <ul className="navbar-nav header-nav mx-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link header-nav-link${isActive ? ' active' : ''}`}
                  to="/about"
                  style={{ fontWeight: 900 }}
                  onClick={() => setNavOpen(false)}
                >
                  About Us
                </NavLink>
              </li>

              {/* Products Dropdown */}
              <li
                className={`nav-item piqx-dropdown${productsOpen ? ' open' : ''}`}
                onMouseEnter={handleProductsEnter}
                onMouseLeave={handleProductsLeave}
              >
                <NavLink
                  className={({ isActive }) => `nav-link header-nav-link piqx-dropdown-toggle${isActive ? ' active' : ''}`}
                  to="/products"
                  role="button"
                  style={{ fontWeight: 900 }}
                  onClick={handleProductsToggle}
                >
                  Products
                  <svg className="dropdown-chevron" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </NavLink>
                <ul className="piqx-dropdown-menu">
                  <li>
                    <Link to="/asset-management" onClick={() => { setNavOpen(false); setProductsOpen(false) }}>
                      <span className="ddrop-icon"><i className="fas fa-cubes"></i></span>
                      <span className="ddrop-text"><strong>Asset Management</strong><small>Track &amp; optimize every asset</small></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/security" onClick={() => { setNavOpen(false); setProductsOpen(false) }}>
                      <span className="ddrop-icon"><i className="fas fa-shield-alt"></i></span>
                      <span className="ddrop-text"><strong>Gate Management System</strong><small>Gate, visitor &amp; vehicle management</small></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/surveillance" onClick={() => { setNavOpen(false); setProductsOpen(false) }}>
                      <span className="ddrop-icon"><i className="fas fa-video"></i></span>
                      <span className="ddrop-text"><strong>Surveillance</strong><small>AI-powered video monitoring</small></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/utilities-monitoring" onClick={() => { setNavOpen(false); setProductsOpen(false) }}>
                      <span className="ddrop-icon"><i className="fas fa-bolt"></i></span>
                      <span className="ddrop-text"><strong>Utilities Monitoring</strong><small>Energy, water &amp; gas tracking</small></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/freightbid" onClick={() => { setNavOpen(false); setProductsOpen(false) }}>
                      <span className="ddrop-icon"><i className="fas fa-truck"></i></span>
                      <span className="ddrop-text"><strong>FreightBid</strong><small>Logistics automation platform</small></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/pr-to-po-automation" onClick={() => { setNavOpen(false); setProductsOpen(false) }}>
                      <span className="ddrop-icon"><i className="fas fa-file-invoice"></i></span>
                      <span className="ddrop-text"><strong>ProcureX</strong><small>PR to PO Automation</small></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/quality-automation" onClick={() => { setNavOpen(false); setProductsOpen(false) }}>
                      <span className="ddrop-icon"><i className="fas fa-check-double"></i></span>
                      <span className="ddrop-text"><strong>Quality Automation</strong><small>Automated quality control workflows</small></span>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Automation */}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link header-nav-link${isActive ? ' active' : ''}`}
                  to="/products?tab=automation"
                  style={{ fontWeight: 900 }}
                  onClick={() => setNavOpen(false)}
                >
                  Automation
                </NavLink>
              </li>

              {/* Solutions Dropdown */}
              <li
                className={`nav-item piqx-dropdown${solutionsOpen ? ' open' : ''}`}
                onMouseEnter={handleSolutionsEnter}
                onMouseLeave={handleSolutionsLeave}
              >
                <NavLink
                  className={({ isActive }) => `nav-link header-nav-link piqx-dropdown-toggle${isActive ? ' active' : ''}`}
                  to="/products?tab=solutions"
                  role="button"
                  style={{ fontWeight: 900 }}
                  onClick={handleSolutionsToggle}
                >
                  Solutions
                  <svg className="dropdown-chevron" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </NavLink>
                <ul className="piqx-dropdown-menu">
                  <li>
                    <Link to="/predictive-maintenance" onClick={() => { setNavOpen(false); setSolutionsOpen(false) }}>
                      <span className="ddrop-icon"><i className="fas fa-tools"></i></span>
                      <span className="ddrop-text"><strong>Predictive Maintenance</strong><small>AI-driven failure prevention</small></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/condition-monitoring" onClick={() => { setNavOpen(false); setSolutionsOpen(false) }}>
                      <span className="ddrop-icon"><i className="fas fa-heartbeat"></i></span>
                      <span className="ddrop-text"><strong>Condition Monitoring</strong><small>Real-time equipment health</small></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/vision-ai" onClick={() => { setNavOpen(false); setSolutionsOpen(false) }}>
                      <span className="ddrop-icon"><i className="fas fa-eye"></i></span>
                      <span className="ddrop-text"><strong>Vision AI</strong><small>Computer vision inspection</small></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/energy-management" onClick={() => { setNavOpen(false); setSolutionsOpen(false) }}>
                      <span className="ddrop-icon"><i className="fas fa-leaf"></i></span>
                      <span className="ddrop-text"><strong>Energy Management System</strong><small>Optimize consumption &amp; costs</small></span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link header-nav-link${isActive ? ' active' : ''}`}
                  to="/career"
                  style={{ fontWeight: 900 }}
                  onClick={() => setNavOpen(false)}
                >
                  Career
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link header-nav-link${isActive ? ' active' : ''}`}
                  to="/contact"
                  style={{ fontWeight: 900 }}
                  onClick={() => setNavOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center header-buttons ms-4">
              <Link
                to="/contact"
                className="btn btn-demo header-btn-demo me-2"
                onClick={() => setNavOpen(false)}
              >
                Request For Demo
                <img
                  src="/assets/svg/UpArrow.svg"
                  alt="Arrow"
                  className="btn-arrow ms-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
