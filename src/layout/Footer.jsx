import React from "react"; 
import logo from "../assets/logo-light.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import youtubeIcon from "../assets/youtube.png";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="bg-[#5A5826] text-white py-16">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
          
          {/* LEFT - LOGO & CONTACT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={logo} className="w-70 mb-6" alt="Logo" /> {/* Biggest Logo */}
            <p className="text-xl w-[250px] text-center py-3 bg-white text-black font-medium border-2 rounded-full">
              (000)-000-0000
            </p>
            <button className="mt-4 w-[250px] px-6 py-3 bg-[#5A5826] border-2 border-white text-white text-lg font-medium rounded-full hover:text-black hover:bg-white transition duration-150">
              Request an Appointment 
            </button>
          </div>

          {/* CENTER - HOURS & ADDRESS */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-2">Hours & Address</h3>
            <div className="space-y-1">
              <p>Monday: Closed</p>
              <p>Tuesday - Thursday: 8am - 5pm</p>
              <p>Wednesday: 8am - 5pm</p>
              <p>Thursday: 8am - 5pm</p>
              <p>Friday: Closed</p>
              <p>Saturday & Sunday: Closed</p>
            </div>
          </div>

          {/* CENTER - NAVIGATION LINKS */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-2">Navigation Links</h3>
            <div className="space-y-1">
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Patients</p>
              <p>Our Differences</p>
              <p>Contact</p>
            </div>
          </div>

          {/* RIGHT - SOCIAL MEDIA ICONS */}
          <div className="text-center md:text-left mb-36">
            <h3 className="font-semibold text-lg mb-2">Review Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <img src={facebookIcon} alt="Facebook" className="w-3 h-6 cursor-pointer hover:opacity-80" />
              <img src={twitterIcon} alt="Twitter" className="w-8 cursor-pointer hover:opacity-80" />
              <img src={youtubeIcon} alt="YouTube" className="w-6 cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      </footer>

      {/* BOTTOM FOOTER COPYRIGHT */}
      <div className="bg-[#403d1f] text-center py-3 text-white">
        <p className="text-sm">&copy; 2023 Village Creek Dental | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
