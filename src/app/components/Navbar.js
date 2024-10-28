"use client"
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex-grow bg-white shadow dark:bg-gray-800 w-full">
      <div className="container  py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            
              <img className="w-auto h-6 sm:h-7" src="checkit-logo.svg" alt="Logo" />
              
            

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                type="button" 
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:opacity-100`}>
            <div className="flex flex-col lg:flex-row lg:items-center">
              
              <a href="#" className="px-3 py-2 mt-2 lg:mt-0 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">Browse</a>
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              <img src='bell (1).svg'/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
