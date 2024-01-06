import React from 'react'
import {Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.usersReducer.user);

  const handleSignIn = () => {
    navigate('/Login'); 
  };

  const handleSignUp = () => {
    navigate('/Register');
  };
  return (
    <nav className="flex items-center justify-between bg-[#393E46] p-4">
      <div className="flex items-center mr-4"> 
        <Link to="/">
          <div className="bg-[#00ADB5] text-[#EEEEEE] p-4 rounded-md w-20 mr-2">
            Logo
          </div>
        </Link>
        <div className="text-[#EEEEEE]">SAFELOCK</div>
      </div>

      {user && (
  <div className='text-white'>{user.fullName}</div>)}

  <div className="flex items-center">
    {/* Button 1 */}
    <button
      className="bg-[#00ADB5] text-[#EEEEEE] p-2 rounded-md font-bold mr-8"
      onClick={handleSignIn}
    >
      Sign In
    </button>

    {/* Button 2 */}
    <button
      className="bg-[#00ADB5] text-[#EEEEEE] p-2 rounded-md font-bold mr-4"
      onClick={handleSignUp}
    >
      Sign Up
    </button>
  </div>

    </nav>
  )
}

export default Navbar