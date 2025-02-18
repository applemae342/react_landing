import React from "react";
import hero from "../assets/hero-background.png";
import heroPic from "../assets/hero-pic.png";
import heroExp from "../assets/hero-exp.png";
import heroTooth from "../assets/hero-teeth.png";
import heroBrush from "../assets/hero-brush.png";

const Hero = () => {
  return (
    <div
      className="relative w-full h-auto md:h-[620px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxHeight: "700px",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-center justify-center py-12 md:py-16">
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left mt-6 md:mt-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight mb-4 mt-8">
            Creating Radiant Healthy Smiles
          </h1>
          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed mb-4">
            Your Destination for Personalized Dental Wellness.
          </p>
          <button className="px-5 py-3 h-[50px] sm:h-[60px] w-full sm:w-[240px] bg-[#7e8d5e] text-white font-medium rounded-full hover:bg-[#6a7b4c] transition duration-150 shadow-md">
            Request an Appointment
          </button>
        </div>

        {/* Right Image */}
        <div className="flex w-full md:w-1/2  justify-center mt-8 md:mt-10 relative">
          <img
            src={heroPic}
            alt="Hero"
            className="w-[80%] sm:w-[90%] md:w-[100%] lg:w-[110%] max-w-lg z-10 mt-[20px] md:mt-[40px]"
          />
        </div>
      </div>

      {/* HERO INFO SECTION */}
      <div className="absolute left-1/2 bottom-[-20px] md:bottom-[-40px] transform -translate-x-1/2 w-[90%] lg:max-w-4xl bg-white shadow-lg py-6 px-4 md:py-8 md:px-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-gray-600 text-center rounded-2xl border border-gray-200 z-20">
        <div className="flex items-center gap-2] sm:gap-3">
          <img src={heroExp} alt="Experience" className="w-6 sm:w-8" />
          <span className="text-base sm:text-lg font-medium">Experience Sincere</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <img src={heroTooth} alt="Tooth" className="w-6 sm:w-8" />
          <span className="text-base sm:text-lg font-medium">Genuine</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <img src={heroBrush} alt="Brush" className="w-6 sm:w-8" />
          <span className="text-base sm:text-lg font-medium">Advanced Dental Care</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
