import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex items-end w-full bg-white">
        <footer className="w-full text-gray-700 bg-gray-100 body-font">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                LOGo
              </a>
              <p className="mt-2 text-sm text-gray-500">Design, Code and Ship!</p>
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                    <FaFacebook className="w-5 h-5"></FaFacebook>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <FaTwitter className="w-5 h-5"></FaTwitter>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <FaInstagram className="w-5 h-5"></FaInstagram>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <FaLinkedinIn className="w-5 h-5"></FaLinkedinIn>
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  About
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Company
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Careers
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Blog
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Support
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Contact Support
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Help Resources
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Release Updates
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Platform
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Terms &amp; Privacy
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Pricing
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      FAQ
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Contact
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Send a Message
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Request a Quote
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      +123-456-7890
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-300">
            <div className="container px-5 py-4 mx-auto">
              <p className="text-sm text-gray-700 capitalize xl:text-center">
                © 2020 All rights reserved{" "}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
