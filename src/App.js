
import Home from './components/Home/Home';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IPhone13Mini7 from './components/Mobile/IPhone13Mini7';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<IPhone13Mini7 />} />
      </Routes>
    </BrowserRouter>
    
    // <div className="app">
    //   <Home />
    // </div>
    );
}

export default App;
