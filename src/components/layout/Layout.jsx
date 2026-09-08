import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Chatbot from '../ui/Chatbot'
import ScrollReveal from '../ui/ScrollReveal'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Chatbot />
      <ScrollReveal />
    </>
  )
}
