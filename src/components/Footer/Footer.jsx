import React from "react";
import { FaFacebook, FaGithub, FaHands, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center dark:bg-[#1d1d1d] bg-gray-100 dark:text-[#e0e0e0] p-10">
      <aside className="flex flex-col justify-center items-center">
        <FaHands className="text-7xl text-green-500" />
        <p className="font-bold uppercase tracking-widest text-green-500 text-4xl">
          Volunary
          <br />
          <span className="text-lg tracking-normal font-normal text-gray-500 dark:text-[#e0e0e0] normal-case">
            A volunteer managment site
          </span>
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/ansarulislamriyad" target="_blank">
            <FaFacebook className="text-3xl hover:scale-125 transition-all duration-300" />
          </a>
          <a href="https://github.com/AnsarulIslam10" target="_blank">
            <FaGithub className="text-3xl hover:scale-125 transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/ansarul-islam-riyad/"
            target="_blank"
          >
            <FaLinkedin className="text-3xl hover:scale-125 transition-all duration-300" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
