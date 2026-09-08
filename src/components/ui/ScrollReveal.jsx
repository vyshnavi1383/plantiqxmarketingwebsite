import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Rules for scroll reveal animations
const RULES = [
  { sel: '.section-label, .section-label-purple, .section-label-light', dir: 'up' },
  { sel: '.section-title', dir: 'up' },
  { sel: '.section-description', dir: 'up' },
  { sel: '.section-subtitle', dir: 'up' },
  { sel: '.about-section .content-wrapper', dir: 'up' },
  { sel: '.image-content', dir: 'right' },
  { sel: '.text-content h2, .text-content p, .text-content ul', dir: 'left' },
  { sel: '.value-card', dir: 'up', stagger: true },
  { sel: '.team-card', dir: 'up', stagger: true },
  { sel: '.stat-card', dir: 'up', stagger: true },
  { sel: '.vision-quote', dir: 'scale' },
  { sel: '.section-header', dir: 'up' },
  { sel: '.submodule-card', dir: 'up', stagger: true },
  { sel: '.product-cta-box', dir: 'scale' },
  { sel: '.automation-block', dir: 'up' },
  { sel: '.inner-stats-bar .stat-item', dir: 'up', stagger: true },
  { sel: '.inner-overview > div:first-child', dir: 'left' },
  { sel: '.inner-overview > div:last-child', dir: 'right' },
  { sel: '.usecase-item', dir: 'up', stagger: true },
  { sel: '.inner-cta h2, .inner-cta p', dir: 'up' },
  { sel: '.inner-cta .inner-cta-btn', dir: 'scale' },
  { sel: '.feature-card', dir: 'up', stagger: true },
  { sel: '.product-card', dir: 'up', stagger: true },
  { sel: '.service-card', dir: 'up', stagger: true },
  { sel: '.contact-hero h1, .contact-hero p', dir: 'up' },
  { sel: '.request-demo', dir: 'left' },
  { sel: '.contact-form', dir: 'right' },
  { sel: '.contact-reason', dir: 'up', stagger: true },
  { sel: '.location-card', dir: 'up', stagger: true },
  { sel: '.demo-feature', dir: 'up', stagger: true },
  { sel: '.expect-box', dir: 'scale' },
  { sel: '.news-card', dir: 'up', stagger: true },
  { sel: '.testimonial-card', dir: 'up', stagger: true },
  { sel: '.faq-list-item', dir: 'up', stagger: true },
  { sel: '.footer-col', dir: 'up', stagger: true },
  { sel: '.cta-section-full h2, .cta-section-full p', dir: 'up' },
  { sel: '.cta-section-full .btn', dir: 'scale' },
  { sel: '.positioning-card', dir: 'left', stagger: true },
  { sel: '.what-we-do-summary', dir: 'right' },
  { sel: '.wwd-stat', dir: 'up', stagger: true },
]

const OBSERVER_OPTIONS = {
  rootMargin: '0px 0px -80px 0px',
  threshold: 0.12,
}

export default function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const tagged = new WeakSet()

    function tagElements() {
      RULES.forEach(({ sel, dir, stagger }) => {
        const els = document.querySelectorAll(sel)
        els.forEach((el, i) => {
          if (tagged.has(el)) return
          if (el.closest('#hero')) return
          tagged.add(el)
          el.setAttribute('data-sr', dir)
          if (stagger) {
            el.setAttribute('data-sr-delay', (i % 6) + 1)
          }
        })
      })
    }

    function initObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible')
            observer.unobserve(entry.target)
          }
        })
      }, OBSERVER_OPTIONS)

      document.querySelectorAll('[data-sr]').forEach(el => observer.observe(el))
      return observer
    }

    // Small delay to let React render the page content
    const timer = setTimeout(() => {
      tagElements()
      const obs = initObserver()
      return () => obs.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
