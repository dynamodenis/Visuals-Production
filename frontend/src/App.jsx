import { useState, memo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Equipments from './pages/Equipments';
import EquipmentDetail from './pages/EquipmentDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar /> {/* Include Navbar at the top */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/equipment/:id" element={<EquipmentDetail />} />
        </Routes>
        <Footer /> {/* Include Footer at the bottom */}
      </Router>
    </>
  )
}

export default memo(App)
