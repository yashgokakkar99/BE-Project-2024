// import React from 'react'
// import {Link, useNavigate } from 'react-router-dom';
// import logos from '../images/logo1.png';

// function Navbar() {
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     navigate('/Login'); 
//   };

//   const handleSignUp = () => {
//     navigate('/Register');
//   };
//   return (
//     <nav className="flex items-center justify-between bg-[#393E46] p-2">
//       <div className="flex items-center "> 
//         <Link to="/">
//           <img 
//             src={logos}
//             alt="logo image"
//             className="w-60 h-25 "
//             >
//           </img>
//         </Link>
//         {/* <div className="text-[#EEEEEE]">Crypt Drive</div> */}
//       </div>


//   <div className="flex items-center">
//     {/* Button 1 */}
//     <button
//       className="bg-[#00ADB5] text-[#EEEEEE] p-2 rounded-md font-bold mr-8"
//       onClick={handleSignIn}
//     >
//       Sign In
//     </button>

//     {/* Button 2 */}
//     <button
//       className="bg-[#00ADB5] text-[#EEEEEE] p-2 rounded-md font-bold mr-4"
//       onClick={handleSignUp}
//     >
//       Sign Up
//     </button>
//   </div>

//     </nav>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logos from '../images/logo1.png';

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignIn = () => {
    navigate('/Login');
    closeMobileMenu();
  };

  const handleSignUp = () => {
    navigate('/Register');
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative">
      <nav className="flex items-center justify-between bg-[#393E46] p-2">
        <div className="flex items-center">
          <Link to="/">
            <img src={logos} alt="logo image" className="w-60 h-25" />
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            className="text-[#EEEEEE] focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <div className="hamburger-icon">
              <span className="block h-0.5 w-8 bg-white mb-2"></span>
              <span className="block h-0.5 w-8 bg-white mb-2"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Desktop View Buttons */}
        <div className="hidden lg:flex items-center">
          <button
            className="bg-[#00ADB5] text-[#EEEEEE] p-2 rounded-md font-bold mr-8"
            onClick={handleSignIn}
          >
            Sign In
          </button>

          <button
            className="bg-[#00ADB5] text-[#EEEEEE] p-2 rounded-md font-bold mr-4"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="backdrop-blur-md p-2 absolute top-full left-0 right-0 flex flex-col">
          {/* Mobile Menu Buttons */}
          <div className="backdrop-blur-md p-4 flex flex-col items-center">
          <button
            className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded mb-2 w-[150px]"
            onClick={handleSignIn}
          >
            Sign In
          </button>

          <button
            className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded mb-2 w-[150px]"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;


