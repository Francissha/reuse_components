import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top CTA Section */}
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-white/10 py-7">
        <h1 className='lg:text-4xl text-3xl md:mb-6 lg:leading-normal font-semibold md:w-2/5'>
          <span className='text-teal-400'>Free </span>until you're ready to launch 
        </h1>
        <div>
          <input 
            type='text' 
            placeholder='Enter your phone no' 
            className='text-gray-300 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'
          />
          <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 p-2.5 font-[Poppins] rounded-md text-white'>
            Request Code
          </button>
        </div>
      </div>

      {/* Footer Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10 text-sm bg-gray-800">
        <div>
          <h3 className="text-teal-400 font-semibold mb-3">Company</h3>
          <ul>
            <li className="mb-2 hover:text-teal-300 cursor-pointer">About Us</li>
            <li className="mb-2 hover:text-teal-300 cursor-pointer">Careers</li>
            <li className="mb-2 hover:text-teal-300 cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="text-teal-400 font-semibold mb-3">Support</h3>
          <ul>
            <li className="mb-2 hover:text-teal-300 cursor-pointer">Help Center</li>
            <li className="mb-2 hover:text-teal-300 cursor-pointer">Terms of Service</li>
            <li className="mb-2 hover:text-teal-300 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-teal-400 font-semibold mb-3">Contact</h3>
          <ul>
            <li className="mb-2">Email: support@example.com</li>
            <li className="mb-2">Phone: +123 456 7890</li>
            <li className="mb-2">Location: Nairobi, Kenya</li>
          </ul>
        </div>
        <div>
          <h3 className="text-teal-400 font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-teal-300 text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-teal-300 text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-teal-300 text-xl"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center py-4 text-gray-400 text-xs border-t border-gray-700">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

