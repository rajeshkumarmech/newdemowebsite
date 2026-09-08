// import { Routes, Route } from "react-router-dom";
//  import MainPage from "./views/MainPage";

//  export default function App() {
//    return (
//      <Routes>
//        <Route path="*" element={<MainPage />} />
//      </Routes>
//    );
// }



// src/App.jsx

import React from "react";
import { FarmersQuoteHero } from "./components/FarmersQuoteHero/FarmersQuoteHero";

function App() {
  const handleCtaClick = ({ label, href }) => {
    // Example: send to analytics / BPO dashboard
    console.log("BPO CTA tracked:", label, href);
    // e.g. window.dataLayer.push({ event: 'cta_click', label, href });
  };

  return (
    <>
      <FarmersQuoteHero onCtaClick={handleCtaClick} />
      {/* Other sections like pricing, features, contact can go here */}
    </>
  );
}

export default App;