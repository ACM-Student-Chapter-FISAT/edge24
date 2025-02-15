import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ContactUs from './pages/Contact'
import Navbar from './components/Navbar'
import Workshops from './pages/Workshops'
import Teams from './pages/teams'
import EventDetails from './pages/EventDetails'
import Footer from './components/Footer'
import Hackathon from './pages/Hackathon'
import Loader from './components/Loader'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout=setTimeout(()=>{
      setLoading(false);
    },2000)
    return ()=>clearTimeout(timeout);
  }, []);
  return loading ? (
    <div className="flex justify-center items-center h-screen bg-black">
      <Loader /></div>
  ) : (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path='/workshops/:id' element={<EventDetails />} />
        <Route path='/hackathon' element={<Hackathon />} />
        <Route path='/teams' element={<Teams/>} />
      </Routes>
      <ContactUs />
      <Footer />
    </Router>
    //<LoadingPage/>
  )
}

export default App
