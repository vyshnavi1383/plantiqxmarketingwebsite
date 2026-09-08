import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Global styles
import './styles/style.css'
import './styles/responsive.css'
import './styles/chatbot.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
