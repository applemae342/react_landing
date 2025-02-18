import React from "react";
import patientPic from "../assets/patient.png";

const Patients = () => {
  return (
    <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row items-center gap-12">
      {/* Patient Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Emergency Visit
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Dr. Ulep and Dr. Hernandez understand that emergencies<br />
          are bound to happen at any time. Give us a call or send a <br />
          message to our office number, and our doctors will reach out.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Our office number also receives images, so sending us a<br />
          photo of the area of concern helps Dr. Ulep and Dr. Hernandez<br />
          prepare for your visit.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Emergency visits can take place on our closed office days<br />
          (Mondays/Fridays) based on the doctor's availability.
        </p>
        <button className="px-6 py-3 bg-[#7E8D5E] text-white font-medium rounded-full hover:bg-[#7E8D5E] transition duration-150">
          Dental Emergencies
        </button>
      </div>

      {/* Patient Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={patientPic}
          alt="Patient"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Patients;
