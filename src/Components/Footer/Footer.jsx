import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="container mx-auto ">
        <footer className="footer  pt-28 sm:footer-horizontal text-gray-300 p-8 md:py-20">
          <aside>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-gray-200 flex justify-center items-center gap-2">
              <img className="h-7 w-auto" src="/favicon.png" alt="" />
              DigiTools
            </h2>
            <p className="max-w-96 opacity-80 leading-6">
              Premium digital tools for creators,
              <br /> professionals, and businesses. Work smarter <br /> with our
              suite of powerful tools.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title text-white opacity-90">Product</h6>
            <a className="link link-hover opacity-80 ">Features</a>
            <a className="link link-hover opacity-80 ">Pricing</a>
            <a className="link link-hover opacity-80 ">Templates</a>
            <a className="link link-hover opacity-80 ">Integrations</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white opacity-90">Company</h6>
            <a className="link link-hover opacity-80 ">About</a>
            <a className="link link-hover opacity-80 ">Blog</a>
            <a className="link link-hover opacity-80  ">Careers</a>
            <a className="link link-hover opacity-80 ">Press</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white opacity-90">Careers</h6>
            <a className="link link-hover opacity-80 ">Documentation</a>
            <a className="link link-hover opacity-80 ">Help Center</a>
            <a className="link link-hover opacity-80 ">Community</a>
            <a className="link link-hover opacity-80 ">Contact</a>
          </nav>
          <nav>
            <h6 className="mb-2 font-semibold  text-white ">Social Links</h6>
            <div className="grid grid-flow-col gap-4">
              <a className=" rounded-full p-1 bg-white">
                <AiFillInstagram className="text-[#101727] text-2xl" />
              </a>
              <a className=" rounded-full p-1 bg-white">
                <FaSquareFacebook className="text-[#101727] text-2xl" />
              </a>
              <a className=" rounded-full p-1 bg-white">
                <FaXTwitter className="text-[#101727] text-2xl" />
              </a>
            </div>
          </nav>
        </footer>
        <footer className=" text-gray-300 border-gray-700 border-t p-10 md:py-4 ">
          <div className="flex justify-between items-center flex-wrap text-sm">
            <p className="opacity-50">
              © {new Date().getFullYear()} Digitools. All right reserved
            </p>
            <ul className="flex justify-between items-center gap-4 flex-wrap">
              <li className="opacity-50">Privacy Policy</li>
              <li className="opacity-50"> Terms of Service </li>
              <li className="opacity-50"> Cookies</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
