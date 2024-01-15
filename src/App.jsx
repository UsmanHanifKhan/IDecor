import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from './components/HomeNavbar';
import Home from './pages/Home'
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import IndustryDecor from './pages/IndustryDecor';
import EventDecor from './pages/EventDecor';
import AboutUs from './pages/AboutUs';
import './App.css'
import CommercialDecorProducts from './pages/CommercialDecorProducts';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AutoCad from './pages/AutoCad';
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <>
      {/* <Header /> */}
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
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
