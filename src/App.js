import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './component/Dashboard';
import About from './component/About';
import Faq from './component/Faq';
import Contact from './component/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/faq" element={<Faq />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>

      </Routes>
    </BrowserRouter>
  );
}