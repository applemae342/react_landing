import React from "react";
import clock from "../assets/clock.svg";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import message from "../assets/message.png";
import form from "../assets/form.png";
import first_visit from "../assets/first_visit.png";

const Services = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {/* Hours */}
        <div className="bg-white p-6 rounded-3xl flex flex-col items-start w-full max-w-[23rem] h-56 shadow-lg relative">
          <h3 className="text-xl font-semibold text-gray-800">Hours</h3>
          <br />
          <p className="text-black font-medium font-serif">Monday Closed</p>
          <p className="text-black font-medium font-serif">
            Tuesday to Thursday 8:00 am<br /> to 5:00 pm
          </p>
          <p className="text-black font-medium font-serif">Friday Closed</p>
          <img src={clock} alt="Clock" className="absolute bottom-4 right-5" />
        </div>

        {/* Contact Number */}
        <div className="bg-white p-6 rounded-3xl flex flex-col items-start w-full max-w-[23rem] h-56 shadow-lg relative">
          <h3 className="text-xl font-semibold text-gray-800">Contact Number</h3>
          <br />
          <p className="text-black font-medium font-serif">(000) 000-0000</p>
          <img src={phone} alt="Phone" className="absolute bottom-4 right-5" />
        </div>

        {/* Location */}
        <div className="bg-white p-6 rounded-3xl flex flex-col items-start w-full max-w-[23rem] h-56 shadow-lg relative">
          <h3 className="text-xl font-semibold text-gray-800">Location</h3>
          <br />
          <p className="text-black font-medium font-serif">
            Oakridge Business Park,<br /> AS Fortuna, Banilad, Cebu
          </p>
          <img src={location} alt="Location" className="absolute bottom-4 right-5" />
        </div>

        {/* Get in Touch */}
        <div className="bg-white p-6 rounded-3xl flex flex-col items-start w-full max-w-[23rem] h-56 shadow-lg relative">
          <h3 className="text-xl font-semibold text-gray-800">Get In Touch</h3>
          <br />
          <p className="text-black font-medium font-serif">
            Connecting possibilities, one <br /> conversation at a time.
          </p>
          <img src={message} alt="Message" className="absolute bottom-4 right-5" />
        </div>

        {/* New Patient Form */}
        <div className="bg-white p-6 rounded-3xl flex flex-col items-start w-full max-w-[23rem] h-56 shadow-lg relative">
          <h3 className="text-xl font-semibold text-gray-800">New Patient Form</h3>
          <br />
          <p className="text-black font-medium font-serif">
            We can't wait to meet you and<br /> welcome you to our warm and friendly
            dental team,<br /> dedicated to better oral health.
          </p>
          <img src={form} alt="Form" className="absolute bottom-4 right-5" />
        </div>

        {/* Your First Visit */}
        <div className="bg-white p-6 rounded-3xl flex flex-col items-start w-full max-w-[23rem] h-56 shadow-lg relative">
          <h3 className="text-xl font-semibold text-gray-800">Your First Visit</h3>
          <br />
          <p className="text-black font-medium font-serif">
            Our first priority is you!<br /> Read About Your First Visit to <br /> 
            Our Practice Infection Control
          </p>
          <img src={first_visit} alt="First Visit" className="absolute bottom-4 right-5" />
        </div>
      </div>
    </div>
  );
};

export default Services;
