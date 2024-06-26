import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa"
import Hakkımızda from "./pages/Hakkımızda"
import İletişim from "./pages/İletişim"
import Ürünlerimiz from "./pages/Ürünlerimiz"
import "./App.css"

function App() {
  return (
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Anasayfa />} />
          <Route path="/Hakkımızda" element={<Hakkımızda />} />
          <Route path="/İletişim" element={<İletişim />} />
          <Route path="/Ürünlerimiz" element={<Ürünlerimiz />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
