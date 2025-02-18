import React from "react";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row items-center gap-12">
      {/* Contact Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl sm:text-4xl font-bold mb-4 text-gray-900">
          Meet the Village Creek <br /> Dental Team
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Our highly skilled professional team brings<br />
          their best to Village Creek Dental every day,<br />
          passionate about your dental care.
        </p>
        <button className="px-6 py-3 bg-[#7E8D5E] text-white font-medium rounded-full hover:bg-gray-700 transition duration-150">
          Meet the Team
        </button>
      </div>

      {/* Contact Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={contact}
          alt="Contact"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Contact;
