import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../components/HomePage";
import AboutPage from "../../components/AboutPage";
function App1BasicRouting() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App1BasicRouting;
