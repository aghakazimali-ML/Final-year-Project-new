import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Vendors from './pages/Vendors';
import Weddings from './pages/Weddings';
import Birthdays from './pages/Birthdays';
import Advertise from './pages/Advertise';
import Info from './pages/Info';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-[66px]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vendors" element={<Vendors />} />
                <Route path="/weddings" element={<Weddings />} />
                <Route path="/birthdays" element={<Birthdays />} />
                <Route path="/advertise" element={<Advertise />} />
                <Route path="/info" element={<Info />} />
              </Routes>
            </main>
            <Footer />
            <Chatbot />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
