import React from "react";
import { FaFacebook, FaHands, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="dark:bg-[#1d1d1d] py-10 sm:py-16 md:py-20 dark:text-[#e0e0e0] p-6 sm:p-10">
      <section className="footer footer-center max-w-7xl mx-auto px-2  p-10">
        <aside>
          <FaHands className="text-7xl text-green-500" />
          <p className="font-bold uppercase tracking-widest text-green-500 text-3xl">
            Volunary
            <br />
            <span className="text-lg tracking-normal text-[#e0e0e0] normal-case">
              A volunteer managment site
            </span>
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaXTwitter className="text-3xl hover:scale-125 transition-all duration-300" />
            </a>
            <a>
              <FaYoutube className="text-3xl hover:scale-125 transition-all duration-300" />
            </a>
            <a>
              <FaFacebook className="text-3xl hover:scale-125 transition-all duration-300" />
            </a>
          </div>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
