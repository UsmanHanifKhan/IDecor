import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomeNavbar from './components/HomeNavbar';
import Home from './pages/Home'
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import IndustryDecor from './pages/IndustryDecor';
import EventDecor from './pages/EventDecor';
import AboutUs from './pages/AboutUs';
import CommercialDecorProducts from './pages/CommercialDecorProducts';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AutoCad from './pages/AutoCad';
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <>
      <HomeNavbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/autocad' element={<AutoCad />} />
        <Route path='/commercial-decor/:id' element={<CommercialDecorProducts />} />
        <Route path='/interiordesign' element={<IndustryDecor />} />
        <Route path='/event-decor' element={<EventDecor />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
