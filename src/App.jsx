// import { Routes, Route } from "react-router-dom";
//  import MainPage from "./views/MainPage";

//  export default function App() {
//    return (
//      <Routes>
//        <Route path="*" element={<MainPage />} />
//      </Routes>
//    );
// }



import { FarmersQuoteHero } from "./components/FarmersQuoteHero/FarmersQuoteHero";
import Navbar from "./components/Navbar";

function App() {
  const handleCtaClick = ({ label, href }) => {
    console.log("BPO CTA tracked:", label, href);
  };

  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <FarmersQuoteHero onCtaClick={handleCtaClick} />
        </section>

        {/* Other sections */}
        {/* <section id="services">...</section> */}
        {/* <section id="about">...</section> */}
        {/* <section id="testimonials">...</section> */}
        {/* <section id="contact">...</section> */}
      </main>
    </>
  );
}

export default App;