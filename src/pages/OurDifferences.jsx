import React from "react";
import our_difference from "../assets/our_difference.png";

const OurDifferences = () => {
  return (
    <div className="bg-[#F5F0E7] flex flex-col md:flex-row items-center min-h-screen">
      {/* Left Half - Image */}
      <div className="w-full md:w-1/2 h-full">
        <img
          src={our_difference}
          alt="Our Difference"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Half - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center md:items-start items-center text-center md:text-left px-6 md:px-16 py-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
          We Look Forward to <br /> Meeting You
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Every day, we cherish the conversations that allow us<br /> to know you
          better. We place great importance on<br /> cultivating enduring
          relationships with our clients, <br />their loved ones, and their friends.
          Our goal is to create<br /> a warm and welcoming atmosphere where you can
          feel<br /> at ease and experience our sincere and genuine care.
        </p>
        <button className="px-6 py-3 bg-[#7E8D5E] text-white font-medium rounded-full hover:bg-[#69754E] transition duration-200">
          Request an Appointment
        </button>
      </div>
    </div>
  );
};

export default OurDifferences;
