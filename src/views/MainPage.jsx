import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import CostComparison from "../components/CostComparison";
import Process from "../components/Process";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

import "../styles/website.css";

export default function MainPage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      return undefined;
    }

    const sectionId = decodeURIComponent(hash.substring(1));

    const scrollTimer = window.setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (!section) {
        console.warn(
          `Section with id "${sectionId}" was not found.`
        );
        return;
      }

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 100);

    return () => {
      window.clearTimeout(scrollTimer);
    };
  }, [location.hash]);

  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="cost-comparison">
          <CostComparison />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <section className="final-cta">
          <div className="container final-cta-content">
            <span className="section-label light-label">
              Ready to grow?
            </span>
            

            <h2>Ready to automate your agency’s growth?</h2>

            <p>
              Let’s build a custom operational plan for your Farmers Insurance
              agency. Our team is ready to step in, take over the backend, and
              help you scale without the overhead.
            </p>

            <a href="#contact" className="btn btn-light">
              Request a Free Consultation <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}