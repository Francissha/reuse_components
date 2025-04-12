import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-4">
      {/* Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden mt-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill fill-gray-800"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill fill-gray-700"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill fill-gray-600"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        <div>
          <h2 className="text-teal-400 font-bold text-lg mb-4">Fidmind</h2>
          <p className="text-sm text-gray-300">
            Your one-stop platform for books, learning, and more. We believe in
            the power of knowledge and accessibility.
          </p>
        </div>

        <div>
          <h2 className="text-teal-400 font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-300 cursor-pointer">Home</li>
            <li className="hover:text-teal-300 cursor-pointer">Books</li>
            <li className="hover:text-teal-300 cursor-pointer">Blog</li>
            <li className="hover:text-teal-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-teal-400 font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-300 cursor-pointer">Help Center</li>
            <li className="hover:text-teal-300 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-teal-300 cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        <div>
          <h2 className="text-teal-400 font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaFacebookF className="hover:text-teal-300" /></a>
            <a href="#"><FaTwitter className="hover:text-teal-300" /></a>
            <a href="#"><FaInstagram className="hover:text-teal-300" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700 relative z-10">
        &copy; {new Date().getFullYear()} Fidmind. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
