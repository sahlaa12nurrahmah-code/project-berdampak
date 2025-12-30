import React from 'react';
import logo from "../assets/logo.jpg";
import { ChevronDown, Bell, MessageSquare } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="NF Academy Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-lg">NF ACADEMY</div>
              <div className="text-xs text-orange-500">DIGITAL TRAINING SOLUTIONS</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-4 relative left-12">
            <button className="flex items-center space-x-1 text-lg text-gray-700 hover:text-blue-600">
              <span>Categories</span>
              <ChevronDown size={16} />
            </button>
            <a href="#" className="text-lg text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-lg text-gray-700 hover:text-blue-600">Dashboard</a>
            <a href="#" className="text-lg text-gray-700 hover:text-blue-600">My courses</a>
            <a href="#" className="text-lg text-gray-700 hover:text-blue-600">Reports & Analytics Free</a>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-blue-600">
            <span className="text-lg">Recent</span>
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            <Bell size={20} />
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            <MessageSquare size={20} />
          </button>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg text-gray-700 font-semibold">
            SN
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;