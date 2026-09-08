import { useEffect } from 'react'

// Knowledge Base (ported from original chatbot.js)
const KB = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'greetings', 'sup', 'start'],
    response: `Hello! 👋 Welcome to <strong>PlantIQX</strong>!<br><br>I'm IQX, your virtual assistant. I can answer questions about our platform, products, technology, and more.<br><br>What would you like to know today?`,
    quickReplies: ['What is PlantIQX?', 'Our Products', 'Contact Us', 'Request a Demo']
  },
  {
    keywords: ['what is plantiqx', 'what is plant iqx', 'about plantiqx', 'tell me about', 'who are you', 'what do you do', 'overview', 'introduction'],
    response: `<strong>PlantIQX</strong> is an <strong>Intelligent Industrial Operations Platform</strong> built on the vision of <em>"Where Minds and Machines Merge."</em><br><br>We help industries <strong>monitor, analyze, and centralize</strong> their production with data-driven precision. Our platform combines:<ul><li>Real-time IoT monitoring</li><li>AI-powered predictive analytics</li><li>Edge computing & video analytics</li><li>Cloud-based dashboards</li></ul>`,
    quickReplies: ['Our Products', 'Our Technology', 'Our Impact', 'Contact Us']
  },
  {
    keywords: ['mission', 'vision', 'goal', 'purpose', 'objective', 'aim'],
    response: `<strong>🎯 Mission</strong><br>To help industries monitor, analyze, and centralize their production with data-driven precision.<br><br><strong>🔭 Vision</strong><br>We envision a world where every factory <em>thinks, learns, and evolves</em> — where data speaks, machines collaborate, and decisions are made in real time.`,
    quickReplies: ['Our Values', 'Our Products', 'Our Impact']
  },
  {
    keywords: ['product', 'products', 'solution', 'solutions', 'module', 'modules', 'offering', 'features', 'capabilities', 'what can you do'],
    response: `PlantIQX offers a comprehensive suite across three categories:<br><br><strong>📦 Products</strong><ul><li>Asset Management</li><li>Security & Access Control</li><li>Surveillance (AI-powered)</li><li>Utilities Monitoring</li></ul><strong>⚙️ Automation</strong><ul><li>PLC – Programmable Logic Control</li><li>SCADA – Supervisory Control</li><li>VFD – Variable Frequency Drive</li><li>HMI – Human Machine Interface</li></ul><strong>💡 Solutions</strong><ul><li>Predictive Maintenance</li><li>Condition Monitoring</li><li>Vision AI</li><li>Energy Management System</li></ul>`,
    quickReplies: ['Asset Management', 'Predictive Maintenance', 'SCADA', 'Vision AI']
  },
  {
    keywords: ['asset management', 'asset tracking', 'asset monitor'],
    response: `<strong>📊 Asset Management</strong><br><br>Track, monitor, and optimize every asset in your facility with real-time insights.<ul><li>Real-time asset tracking & performance monitoring</li><li>Predictive maintenance scheduling</li><li>Asset lifecycle management</li><li>Downtime alerts & analytics</li></ul>`,
    quickReplies: ['Predictive Maintenance', 'Our Products', 'Request a Demo']
  },
  {
    keywords: ['predictive maintenance', 'predict', 'breakdown', 'downtime', 'failure', 'equipment failure', 'preventive', 'maintenance'],
    response: `<strong>🔧 Predictive Maintenance</strong><br><br>Anticipate equipment failures <em>before they happen</em> using AI-driven analytics.<ul><li>Machine learning-based failure predictions</li><li>Automated maintenance scheduling</li><li>ROI optimization through reduced downtime</li></ul><strong>Impact:</strong> Average <strong>35% reduction in unplanned downtime</strong>.`,
    quickReplies: ['Condition Monitoring', 'Our Impact', 'Request a Demo']
  },
  {
    keywords: ['condition monitoring', 'vibration', 'temperature', 'equipment health', 'health monitoring'],
    response: `<strong>❤️ Condition Monitoring</strong><br><br>Continuous monitoring of equipment health through:<ul><li>Vibration & temperature analysis</li><li>Real-time health monitoring</li><li>Early fault detection</li><li>Performance trending over time</li></ul>`,
    quickReplies: ['Predictive Maintenance', 'Asset Management', 'Request a Demo']
  },
  {
    keywords: ['scada', 'supervisory control', 'data acquisition'],
    response: `<strong>🖥️ SCADA</strong><br><br>Comprehensive supervisory control:<ul><li>Centralized monitoring & control</li><li>Real-time data acquisition</li><li>Historical data logging</li><li>Alarm management & reporting</li></ul>`,
    quickReplies: ['PLC', 'HMI', 'Our Products']
  },
  {
    keywords: ['plc', 'programmable logic', 'programming logic control', 'controller'],
    response: `<strong>⚡ PLC — Programmable Logic Controller</strong><br><br>Robust controllers for reliable industrial automation:<ul><li>Real-time process control</li><li>High reliability & durability</li><li>Seamless system integration</li></ul>`,
    quickReplies: ['SCADA', 'HMI', 'VFD']
  },
  {
    keywords: ['hmi', 'human machine interface', 'touchscreen', 'operator interface'],
    response: `<strong>👆 HMI — Human Machine Interface</strong><br><br>Intuitive interfaces bridging operators and industrial systems:<ul><li>User-friendly touchscreen interfaces</li><li>Real-time visualization</li><li>Customizable dashboards</li><li>Remote access capabilities</li></ul>`,
    quickReplies: ['SCADA', 'PLC', 'Our Products']
  },
  {
    keywords: ['vfd', 'variable frequency drive', 'motor control', 'drive'],
    response: `<strong>🔄 VFD — Variable Frequency Drive</strong><br><br>Precision motor control for energy efficiency:<ul><li>Energy-efficient motor control</li><li>Speed & torque optimization</li><li>Soft start/stop capabilities</li></ul>`,
    quickReplies: ['PLC', 'SCADA', 'Energy Management']
  },
  {
    keywords: ['vision ai', 'computer vision', 'visual inspection', 'defect detection', 'quality inspection'],
    response: `<strong>👁️ Vision AI</strong><br><br>Computer vision & AI-powered visual inspection:<ul><li>Automated visual inspection</li><li>Defect detection & classification</li><li>Quality assurance automation</li><li>Real-time anomaly detection</li></ul>`,
    quickReplies: ['Condition Monitoring', 'Our Solutions', 'Request a Demo']
  },
  {
    keywords: ['energy management', 'energy', 'utilities', 'electricity', 'power consumption', 'sustainability'],
    response: `<strong>🌱 Energy Management System</strong><br><br>Monitor and optimize energy consumption:<ul><li>Real-time energy consumption tracking</li><li>Cost optimization strategies</li><li>Carbon footprint reduction</li><li>Sustainability reporting</li></ul>`,
    quickReplies: ['Our Solutions', 'Our Impact', 'Request a Demo']
  },
  {
    keywords: ['security', 'access control', 'rbac', 'authentication', 'encryption', 'data protection'],
    response: `<strong>🔒 Security & Administration</strong><br><br>Enterprise-grade security built in:<ul><li>Role-Based Access Control (RBAC)</li><li>Multi-factor authentication (MFA)</li><li>End-to-end encryption & data protection</li><li>Compliance management & audit trails</li></ul>`,
    quickReplies: ['Surveillance', 'Our Products', 'Contact Us']
  },
  {
    keywords: ['surveillance', 'camera', 'cctv', 'video monitoring', 'threat detection'],
    response: `<strong>📹 Surveillance</strong><br><br>Integrated video surveillance with AI analytics:<ul><li>Real-time video monitoring</li><li>AI-powered threat detection</li><li>Incident recording & playback</li><li>Integration with access control</li></ul>`,
    quickReplies: ['Security', 'Vision AI', 'Our Products']
  },
  {
    keywords: ['iot', 'internet of things', 'sensors', 'connected', 'machine to machine', 'integration', 'connect equipment'],
    response: `<strong>🌐 IoT & Machine-to-Machine Integration</strong><br><br>PlantIQX connects every piece of equipment:<ul><li>Seamless IoT device integration</li><li>Real-time data streaming from machines</li><li>Machine-to-machine (M2M) communication</li><li>Cross-system analytics and alerts</li></ul>`,
    quickReplies: ['Edge Computing', 'Asset Management', 'Request a Demo']
  },
  {
    keywords: ['ai', 'artificial intelligence', 'analytics', 'machine learning', 'insights', 'dashboard', 'reporting', 'real-time'],
    response: `<strong>🤖 AI-Powered Insights & Analytics</strong><br><br>Turn raw industrial data into clear, actionable intelligence:<ul><li>Pattern recognition & anomaly detection</li><li>Deep-dive production KPIs</li><li>360° operational dashboards</li><li>Automated reporting — reduce manual effort by 80%</li></ul>`,
    quickReplies: ['Predictive Maintenance', 'Our Impact', 'Request a Demo']
  },
  {
    keywords: ['impact', 'results', 'statistics', 'stats', 'numbers', 'roi', 'efficiency', 'performance', 'benefit', 'savings'],
    response: `<strong>📈 Real Intelligence. Real Results.</strong><br><br>PlantIQX delivers measurable transformation:<ul><li>🔻 <strong>35%</strong> average reduction in unplanned downtime</li><li>📊 <strong>25–30%</strong> improvement in operational efficiency</li><li>⚡ <strong>50%</strong> faster decision-making</li><li>📋 <strong>80%</strong> reduction in manual reporting</li></ul>`,
    quickReplies: ['Predictive Maintenance', 'Our Products', 'Request a Demo']
  },
  {
    keywords: ['contact', 'reach', 'phone', 'email', 'address', 'location', 'office', 'get in touch', 'call'],
    response: `<strong>📬 Contact PlantIQX</strong><br><br>📞 <strong>+91 6302288170</strong><br>📧 <strong>info@plantiqx.in</strong><br>📍 Office No. 812, Fairmount Downtown, Kompally, Hyderabad, Telangana 500100<br><br>Our team responds within <strong>one business day</strong>.`,
    quickReplies: ['Request a Demo', 'What is PlantIQX?', 'Our Products']
  },
  {
    keywords: ['demo', 'demonstration', 'trial', 'try', 'see it', 'show me', 'request demo', 'schedule', 'book'],
    response: `<strong>🎯 Request a Demo</strong><br><br>Experience the full power of PlantIQX with a <strong>personalized demonstration</strong>:<ul><li>Witness real-time monitoring in action</li><li>See how predictive analytics reduces downtime</li><li>Get guidance tailored to your plant's needs</li></ul>📞 <strong>+91 6302288170</strong> | 📧 <strong>info@plantiqx.in</strong>`,
    quickReplies: ['Contact Us', 'Our Products', 'Our Impact']
  },
  {
    keywords: ['career', 'job', 'hiring', 'join', 'opportunities', 'employment', 'vacancy'],
    response: `<strong>🚀 Career Opportunities at PlantIQX</strong><br><br>We're always looking for passionate people to join our team!<br><br>📧 <strong>info@plantiqx.in</strong><br>📞 <strong>+91 6302288170</strong>`,
    quickReplies: ['Contact Us', 'What is PlantIQX?']
  },
  {
    keywords: ['thank', 'thanks', 'thank you', 'bye', 'goodbye', 'great', 'awesome', 'helpful'],
    response: `You're welcome! 😊 It was a pleasure helping you learn about <strong>PlantIQX</strong>.<br><br>If you're ready to see the platform in action, feel free to request a demo. Have a great day! 🚀`,
    quickReplies: ['Request a Demo', 'Contact Us']
  }
]

const FALLBACK = {
  response: `I'm sorry, I didn't quite catch that. I can help with:<ul><li>PlantIQX products & modules</li><li>Technology & features</li><li>Contact & demo requests</li></ul>Try asking <em>"What products do you offer?"</em>`,
  quickReplies: ['What is PlantIQX?', 'Our Products', 'Request a Demo', 'Contact Us']
}

const DEFAULT_QUICK_REPLIES = ['What is PlantIQX?', 'Our Products', 'Our Impact', 'Contact Us']

function findResponse(input) {
  const text = input.toLowerCase().trim()
  let best = null
  let bestScore = 0
  for (const entry of KB) {
    for (const kw of entry.keywords) {
      if (text.includes(kw)) {
        const score = kw.length
        if (score > bestScore) {
          bestScore = score
          best = entry
        }
      }
    }
  }
  return best || FALLBACK
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default function Chatbot() {
  useEffect(() => {
    // Check if already initialized
    if (document.getElementById('piqx-chat-toggle')) return

    // Toggle button
    const toggle = document.createElement('button')
    toggle.id = 'piqx-chat-toggle'
    toggle.setAttribute('aria-label', 'Open PlantIQX Chat')
    toggle.innerHTML = `
      <svg class="icon-chat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h3l3 3 3-3h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 9h10v2H7zm0 3h7v2H7z"/>
      </svg>
      <svg class="icon-close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
      <span class="notif-dot"></span>
    `

    // Chat window
    const win = document.createElement('div')
    win.id = 'piqx-chat-window'
    win.setAttribute('role', 'dialog')
    win.setAttribute('aria-label', 'PlantIQX Chat Assistant')
    win.innerHTML = `
      <div id="piqx-chat-header">
        <div class="chat-avatar">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
        </div>
        <div class="chat-header-info">
          <h4>IQX Assistant</h4>
          <span>Online — PlantIQX</span>
        </div>
        <button class="chat-close-btn" aria-label="Close chat">
          <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
      <div id="piqx-chat-messages" aria-live="polite"></div>
      <div id="piqx-quick-replies"></div>
      <div id="piqx-chat-input-area">
        <input id="piqx-chat-input" type="text" placeholder="Ask me anything…" autocomplete="off" maxlength="200">
        <button id="piqx-chat-send" aria-label="Send message">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
    `

    document.body.appendChild(toggle)
    document.body.appendChild(win)

    const messagesEl = () => document.getElementById('piqx-chat-messages')
    const quickRepliesEl = () => document.getElementById('piqx-quick-replies')

    function scrollToBottom() {
      const el = messagesEl()
      if (el) el.scrollTop = el.scrollHeight
    }

    function addMessage(html, sender) {
      const el = messagesEl()
      const wrapper = document.createElement('div')
      wrapper.className = `chat-msg ${sender}`
      if (sender === 'bot') {
        wrapper.innerHTML = `
          <div class="msg-bot-avatar">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
          </div>
          <div class="msg-bubble">${html}</div>
        `
      } else {
        wrapper.innerHTML = `<div class="msg-bubble">${escapeHtml(html)}</div>`
      }
      el.appendChild(wrapper)
      scrollToBottom()
    }

    function showTyping() {
      const el = messagesEl()
      const wrapper = document.createElement('div')
      wrapper.className = 'chat-msg bot typing-indicator'
      wrapper.innerHTML = `
        <div class="msg-bot-avatar">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
        </div>
        <div class="msg-bubble">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      `
      el.appendChild(wrapper)
      scrollToBottom()
      return wrapper
    }

    function setQuickReplies(replies) {
      const el = quickRepliesEl()
      el.innerHTML = ''
      if (!replies || !replies.length) return
      replies.forEach(text => {
        const btn = document.createElement('button')
        btn.className = 'quick-reply-btn'
        btn.textContent = text
        btn.addEventListener('click', () => handleUserInput(text))
        el.appendChild(btn)
      })
    }

    function handleUserInput(text) {
      if (!text.trim()) return
      setQuickReplies([])
      addMessage(text, 'user')
      const typing = showTyping()
      const delay = 400 + Math.random() * 400
      setTimeout(() => {
        typing.remove()
        const { response, quickReplies } = findResponse(text)
        addMessage(response, 'bot')
        setQuickReplies(quickReplies || DEFAULT_QUICK_REPLIES)
      }, delay)
    }

    const input = document.getElementById('piqx-chat-input')
    const sendBtn = document.getElementById('piqx-chat-send')
    const closeBtn = win.querySelector('.chat-close-btn')
    let isOpen = false

    function openChat() {
      isOpen = true
      toggle.classList.add('open')
      win.classList.add('visible')
      const dot = toggle.querySelector('.notif-dot')
      if (dot) dot.remove()
      input.focus()
    }

    function closeChat() {
      isOpen = false
      toggle.classList.remove('open')
      win.classList.remove('visible')
    }

    toggle.addEventListener('click', () => { if (isOpen) closeChat(); else openChat() })
    closeBtn.addEventListener('click', closeChat)
    sendBtn.addEventListener('click', () => {
      const val = input.value.trim()
      if (val) { handleUserInput(val); input.value = '' }
    })
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = input.value.trim()
        if (val) { handleUserInput(val); input.value = '' }
      }
    })

    // Greeting
    setTimeout(() => {
      const greet = findResponse('hello')
      addMessage(greet.response, 'bot')
      setQuickReplies(greet.quickReplies || DEFAULT_QUICK_REPLIES)
    }, 600)

    // Cleanup
    return () => {
      const t = document.getElementById('piqx-chat-toggle')
      const w = document.getElementById('piqx-chat-window')
      if (t) t.remove()
      if (w) w.remove()
    }
  }, [])

  return null
}
