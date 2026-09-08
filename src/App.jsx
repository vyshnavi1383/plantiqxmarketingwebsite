import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout
import Layout from './components/layout/Layout'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Career from './pages/Career'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'

// Inner Product Pages
import AssetManagement from './pages/inner/AssetManagement'
import Surveillance from './pages/inner/Surveillance'
import UtilitiesMonitoring from './pages/inner/UtilitiesMonitoring'
import Security from './pages/inner/Security'
import FreightBid from './pages/inner/FreightBid'
import PrToPoAutomation from './pages/inner/PrToPoAutomation'
import QualityAutomation from './pages/inner/QualityAutomation'

// Inner Solution Pages
import PredictiveMaintenance from './pages/inner/PredictiveMaintenance'
import ConditionMonitoring from './pages/inner/ConditionMonitoring'
import VisionAI from './pages/inner/VisionAI'
import EnergyManagement from './pages/inner/EnergyManagement'

// Other Inner Pages
import IotIntegration from './pages/inner/IotIntegration'
import AnalyticsDashboard from './pages/inner/AnalyticsDashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
          <Route path="news" element={<News />} />
          <Route path="news-detail" element={<NewsDetail />} />

          {/* Product Pages */}
          <Route path="asset-management" element={<AssetManagement />} />
          <Route path="surveillance" element={<Surveillance />} />
          <Route path="utilities-monitoring" element={<UtilitiesMonitoring />} />
          <Route path="security" element={<Security />} />
          <Route path="freightbid" element={<FreightBid />} />
          <Route path="pr-to-po-automation" element={<PrToPoAutomation />} />
          <Route path="quality-automation" element={<QualityAutomation />} />

          {/* Solution Pages */}
          <Route path="predictive-maintenance" element={<PredictiveMaintenance />} />
          <Route path="condition-monitoring" element={<ConditionMonitoring />} />
          <Route path="vision-ai" element={<VisionAI />} />
          <Route path="energy-management" element={<EnergyManagement />} />

          {/* Other Pages */}
          <Route path="iot-integration" element={<IotIntegration />} />
          <Route path="analytics-dashboard" element={<AnalyticsDashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
