import React from "react";
import DcoMartLogo from "../assets/DcoMartLogo.png";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-100">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 text-left">
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-blue-950 text-center sm:text-left">
              Customer Information
            </h2>
            <ul className="text-blue-950 dark:text-blue-950 font-medium text-center sm:text-left">
              <li className="mb-4">
                <a
                  href="/HowToBuy"
                  className="text-blue-950 dark:text-blue-950 font-medium"
                >
                  How To Buy
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/PaymentInformation"
                  className="text-blue-950 dark:text-blue-950 font-medium"
                >
                  Payment Information
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/shipping-information"
                  className="text-blue-950 dark:text-blue-950 font-medium"
                >
                  Shipping Information
                </a>
              </li>
              <li>
                <a
                  href="/ContactUs"
                  className="text-blue-950 dark:text-blue-950 font-medium"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-blue-950 text-center sm:text-left">
              Information
            </h2>
            <ul className="text-blue-950 dark:text-blue-950 font-medium text-center sm:text-left">
              <li className="mb-4">
                <a
                  href="/OurStory"
                  className="text-blue-950 dark:text-blue-950 font-medium"
                >
                  Our Story
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/ProductCategory"
                  className="text-blue-950 dark:text-blue-950 font-medium"
                >
                  Product Category
                </a>
              </li>
              <li>
                <a
                  href="/PrivacyPolicy"
                  className="text-blue-950 dark:text-blue-950 font-medium"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mb-6 text-sm font-bold text-center text-gray-900 uppercase dark:text-blue-950">
              Follow Us
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium flex justify-center">
              <li>
                <a
                  href="https://www.instagram.com/dco.mart?igsh=MWFkeThwdWw3anpraQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram"
                    className="w-12 h-12"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between px-4 sm:px-6 pb-4">
        <div className="flex items-center space-x-2">
          <img src={DcoMartLogo} alt="d'Co Mart Logo" className="w-16" />
          <h3 className="text-gray-800 font-bold text-lg">d'Co Mart</h3>
        </div>
        <p className="text-gray-600 text-sm mt-4 md:mt-0 text-center sm:text-right">
          © 2025 d'Co Mart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
