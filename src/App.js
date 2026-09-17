import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const [location, setLocation] = useState({ country: "IN" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(window.location.hostname === "localhost"
      ? "https://www.firstgendigital.in//api/location"
      : "/api/location")
      .then(res => res.json())
      .then(data => {
        setLocation(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home country={location.country} loading={loading} />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}