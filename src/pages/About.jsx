import aboutPic from "../assets/aboutPic.png";


import React from "react";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* About Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={aboutPic}
          alt="About Us"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>

      {/* About Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl  font-bold mb-4 text-gray-900">
          Enriching Coastal<br /> Healthcare Journey
        </h2>
        <p className="text-lg text-black mb-6 leading-relaxed">
          Drs. Uleff and Hernandez, esteemed dental experts, have <br />
          selected a picturesque coastal enclave as the setting to <br />
          enrich the community's healthcare journey through their<br />
          advanced dentistry skills and profound knowledge.
        </p>
        <p className="text-lg text-black mb-6 leading-relaxed">
          Driven by the mission to seamlessly intertwine healthcare, <br />
          beauty, and comfort, they focus on making each dental visit <br />
          not just a routine check-up, but an enlightening, soothing <br />experience.
        </p>
        <p className="text-lg text-black mb-6 leading-relaxed">
          Their ultimate aspiration is to craft and maintian radiant,<br />
          healthy smiles that reflect the vitality of our community.
        </p>
        <p className="text-lg text-black mb-6 leading-relaxed">
          In the heart of Village Creek Dental, we aren't merely<br />
          treating teeth; we are empowering individuals,<br />
          transforming lives, and lithing up the community one <br />
          smile at a time.
        </p>
        <button className="px-6 py-3 bg-[#7E8D5E] text-white font-medium rounded-full hover:bg-[#7E8D5E] transition duration-150">
          Request an Appointment
        </button>
      </div>
    </div>
  );
};

export default About;
