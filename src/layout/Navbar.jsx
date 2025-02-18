import React, { useState } from "react";
import logo from "../assets/logo-dark.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b shadow-lg z-50">
      <div className="container mx-auto py-2 flex items-center justify-between px-6 lg:px-20">
        {/* Logo - Now aligned with hero text */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-14 sm:h-16 cursor-pointer"
            onClick={() => (window.location.href = "/Navbar")}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 border border-[#7E8D5E] text-[#7E8D5E] rounded hover:bg-[#7E8D5E] hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          <li className="hover:text-[#7E8D5E] cursor-pointer">
            <a href="#About">About Us</a>t
          </li>
          <li className="hover:text-[#7E8D5E] cursor-pointer">
            <a href="#Services">Services</a>
          </li>
          <li className="hover:text-[#7E8D5E] cursor-pointer">
            <a href="#Patients">Patients</a>
          </li>
          <li className="hover:text-[#7E8D5E] cursor-pointer">
            <a href="#OurDifferences">Our Differences</a>
          </li>
          <li className="hover:text-[#7E8D5E] cursor-pointer">
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <button className="px-6 py-2.5 border-[2px] border-[#7E8D5E] text-[#7E8D5E] font-medium rounded-[30px]
                             hover:bg-[#7E8D5E] hover:text-white active:bg-[#7e8d5ebd] 
                             transition duration-150 ease-in-out
                             focus:outline-none focus:ring-2 focus:ring-[#7E8D5E] focus:ring-offset-2">
            Request an Appointment
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-md absolute w-full left-0 top-18">
          <ul className="flex flex-col items-center text-center">
            <li className="cursor-pointer hover:bg-[#7E8D5E] hover:text-white w-full py-3">
              <a href="#About" onClick={() => setIsOpen(false)}>
                About Us
              </a>
            </li>
            <li className="cursor-pointer hover:bg-[#7E8D5E] hover:text-white w-full py-3">
              <a href="#Services" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>
            <li className="cursor-pointer hover:bg-[#7E8D5E] hover:text-white w-full py-3">
              <a href="#Patients" onClick={() => setIsOpen(false)}>
                Patients
              </a>
            </li>
            <li className="cursor-pointer hover:bg-[#7E8D5E] hover:text-white w-full py-3">
              <a href="#OurDifferences" onClick={() => setIsOpen(false)}>
                Our Differences
              </a>
            </li>
            <li className="cursor-pointer hover:bg-[#7E8D5E] hover:text-white w-full py-3">
              <a href="#Contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
            <li className="py-3">
              <button
                className="px-6 py-2.5 border-[2px] border-[#7E8D5E] text-[#7E8D5E] font-medium rounded-[30px]
                           hover:bg-[#7E8D5E] hover:text-white active:bg-[#7e8d5ebd] 
                           transition duration-150 ease-in-out
                           focus:outline-none focus:ring-2 focus:ring-[#7E8D5E] focus:ring-offset-2"
                onClick={() => setIsOpen(false)}
              >
                Request an Appointment
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
