import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './component/Dashboard';
import About from './component/About';
import Faq from './component/Faq';
import Contact from './component/Contact';
import PrivacyPolicy from './component/PrivacyPolicy';
import TermCondition from './component/TermConditions';
import Step2 from './component/Step2';
import Step3 from './component/Step3';
import Step4 from './component/Step4';
import Booknow from './component/Booknow';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/faq" element={<Faq />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/policy" element={<PrivacyPolicy />}></Route>
        <Route exact path="/term-condition" element={<TermCondition />}></Route>
        <Route exact path="/step2" element={<Step2 />}></Route>
        <Route exact path="/step3" element={<Step3 />}></Route>
        <Route exact path="/step4" element={<Step4 />}></Route>
        <Route exact path="/booknow" element={<Booknow />}></Route>
      </Routes>
    </BrowserRouter>
  );
}