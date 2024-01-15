import { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from './components/HomeNavbar';
const Home = lazy(()=>import('./pages/Home'))
const Footer = lazy(()=>import('./components/Footer'))
const AboutUs = lazy(()=>import('./pages/AboutUs'))
const Contact = lazy(()=>import('./pages/Contact'))
const Blog = lazy(()=>import('./pages/Blog'))
const AutoCad = lazy(()=>import('./pages/AutoCad'))
const Error = lazy(()=>import('./pages/Error'))
const Portfolio = lazy(()=>import('./pages/Portfolio'))
const IndustryDecor = lazy(()=>import('./pages/IndustryDecor'))
const EventDecor = lazy(()=>import('./pages/EventDecor'))
const CommercialDecorProducts = lazy(()=>import('./pages/CommercialDecorProducts'))
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Spineer from './components/Spineer';
function App() {
  return (
    <>
     <Suspense fallback={<Spineer/>}>
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
     </Suspense>
    </>
  )
}

export default App
