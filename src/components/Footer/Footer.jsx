import React from "react";
import { FaFacebook, FaHands, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="dark:bg-[#1d1d1d] bg-gray-100 py-10 sm:py-16 md:py-20 dark:text-[#e0e0e0] p-6 sm:p-10">
      <footer className="footer max-w-7xl mx-auto px-2 p-10">
        <aside className="flex flex-col justify-center items-center">
          <FaHands className="text-7xl text-green-500" />
          <p className="font-bold uppercase tracking-widest text-green-500 text-4xl">
            Volunary
            <br />
            <span className="text-lg tracking-normal font-normal text-gray-500 dark:text-[#e0e0e0] normal-case">
              A volunteer managment site
            </span>
          </p>
          <div className="flex gap-3 justify-center items-center">
            <FaFacebook className="text-3xl hover:scale-125 transition-all duration-300" />
            <FaXTwitter className="text-3xl hover:scale-125 transition-all duration-300" />
            <FaWhatsapp className="text-3xl hover:scale-125 transition-all duration-300" />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Volunteer Opportunities</a>
          <a className="link link-hover">Event Management</a>
          <a className="link link-hover">Skill Development</a>
          <a className="link link-hover">Community Projects</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Team</a>
          <a className="link link-hover">Our Impact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Volunteer Guidelines</a>
        </nav>
      </footer>
      <p className="text-gray-500 bg-[#f0eded] dark:bg-[#242323] p-4 text-center dark:text-gray-400">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
