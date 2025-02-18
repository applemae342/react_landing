import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Hero from "./pages/Hero";
import Patients from "./pages/Patients";
import OurDifferences from "./pages/OurDifferences";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT SECTION */}
        <section className="mt-20 py-5" id="About">
          <About />
        </section>

        {/* SERVICES SECTION */}
        <section className="py-16 bg-[#F2EDE5]" id="Services">
          <Services />
        </section>

        {/* PATIENTS */}
        <section className="py-16" id="Patients">
          <Patients />
        </section>

        {/* OUR DIFFERENCE */}
        <section className="py-25" id="OurDifferences">
          <OurDifferences />
        </section>

        {/* CONTACT */}
        <section className="py-16"  id="Contact">
          <Contact />
        </section >
      </main>
      <Footer />
    </div>
  );
};

export default App;
