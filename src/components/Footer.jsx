 import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 dark:bg-gray-900 text-base-content py-10 mt-10 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">🎨 ArtShare</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            A creative space for artists to share, explore, and connect through art.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-1 text-gray-700 dark:text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/addarts">Upload</Link></li>
            <li><Link to="/">About</Link></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Support
          </h3>
          <ul className="space-y-1 text-gray-700 dark:text-gray-400">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Follow Us
          </h3>
          <div className="flex gap-4 text-2xl text-gray-600 dark:text-gray-400">
            <a href="#"><FaFacebook className="hover:text-blue-500" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-400" /></a>
            <a href="#"><FaGithub className="hover:text-gray-300" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-8 text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-4">
        © {new Date().getFullYear()} ArtShare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
