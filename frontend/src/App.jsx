import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import AnimateSection from './components/AnimateSection';
import ScrollToTop from './components/animations/ScrollToTop';
import Loader from './components/animations/Loaded';

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
        <ScrollToTop /> {/* Scroll to top on route change */}
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
        <AnimateSection>
          <Footer /> {/* Include Footer at the bottom */}
        </AnimateSection>
      </Router>
    </>
  )
}

export default App
