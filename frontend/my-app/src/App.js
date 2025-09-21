import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Destinations from './components/Destinations';
import LocalArtisans from './components/LocalArtisans';
import Accommodations from './components/Accommodations';
import Experiences from './components/Experiences';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/local-artisans" element={<LocalArtisans />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
