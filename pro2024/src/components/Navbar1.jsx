
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { userSignOut } from '../redux/Users';

function Navbar1() {
  const dispatch = useDispatch();
    const navigate=useNavigate();

    const handleLogout=()=>{
      dispatch(userSignOut());
    }

    const handleChnagePassword=()=>{
        navigate('#');
    }

  return (
    <div className="bg-[#393E46] p-4 flex justify-between items-center">
      {/* Left side buttons */}
      <div className="flex items-center space-x-4">
        <Link to="/">
          <button className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded">
            LOGO
          </button>
        </Link>
        <Link to="/UploadFile">
          <button className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded">
            Upload
          </button>
        </Link>
        <Link to="/get_docs">
          <button className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded">
            Get Docs
          </button>
        </Link>
        <Link to="/share_docs">
          <button className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded">
            Share Docs
          </button>
        </Link>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center space-x-4">
        <Link to="#">
          <button className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded" onClick={handleChnagePassword}>
            Change Password
          </button>
        </Link>
        <Link to="/">
          <button className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded" onClick={handleLogout}>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar1;

