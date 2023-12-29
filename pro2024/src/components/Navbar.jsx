import React from 'react'
import {Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/Login'); 
  };

  const handleSignUp = () => {
    navigate('/Register');
  };
  return (
    <nav className="flex items-center justify-between bg-gray-700 p-4">
      <div className="flex items-center mr-4"> 
        <Link to="/">
          <div className="bg-teal-500 text-white p-4 rounded-md w-20 mr-2">
            Logo
          </div>
        </Link>
        <div className="text-white">Your Logo Name</div>
      </div>

      <div className="flex items-center">
        {/* Button 1 */}
        <button className="bg-teal-500 text-white p-2 rounded-md border border-white mr-8" onClick={handleSignIn}>
          SIGNIN
        </button>

        {/* Button 2 */}
        <button className="bg-teal-500 text-white p-2 rounded-md border border-white mr-4" onClick={handleSignUp}>
          SIGNUP
        </button>
      </div>
    </nav>
  )
}

export default Navbar