import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import ScrollToTop from './components/animations/ScrollToTop';
import Loader from './components/animations/Loaded';
import SmoothScroll from './components/animations/SmoothScroll';
import ScrollProgress from './components/animations/ScrollProgress';

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))
const ContactPage = lazy(() => import('./pages/Contact'))
const ServicesPage = lazy(() => import('./pages/Services'))
const EquipmentsPage = lazy(() => import('./pages/Equipments'))
const EquipmentDetailPage = lazy(() => import('./pages/EquipmentDetail'))

function App() {

  return (
    <>
      <Router>
        <SmoothScroll>
          <ScrollToTop /> {/* Scroll to top on route change */}
          <ScrollProgress /> {/* Brand progress bar tracking page scroll */}
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/equipments" element={<EquipmentsPage />} />
              <Route path="/equipment/:id" element={<EquipmentDetailPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </SmoothScroll>
      </Router>
    </>
  )
}

export default App
