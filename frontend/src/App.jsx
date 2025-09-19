import { useState, memo, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import AnimateSection from './components/AnimateSection';
import ScrollToTop from './components/animations/ScrollToTop';

const AboutPage = lazy(() => import('./pages/About'))
const ContactPage = lazy(() => import('./pages/Contact'))
const ServicesPage = lazy(() => import('./pages/Services'))
const EquipmentsPage = lazy(() => import('./pages/Equipments'))
const EquipmentDetailPage = lazy(() => import('./pages/EquipmentDetail'))
function App() {

  return (
    <>
      <Router>
        <ScrollToTop /> {/* Scroll to top on route change */}
        <Navbar /> {/* Include Navbar at the top */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/equipments" element={<EquipmentsPage />} />
          <Route path="/equipment/:id" element={<EquipmentDetailPage />} />
        </Routes>
        <AnimateSection>
          <Footer /> {/* Include Footer at the bottom */}
        </AnimateSection>
      </Router>
    </>
  )
}

export default memo(App)
