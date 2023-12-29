
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Navbar1() {
    const navigate=useNavigate();

    const handleLogout=()=>{
        navigate('/');
    }

    const handleChnagePassword=()=>{
        navigate('#');
    }

  return (
    <div className="bg-gray-700 p-4 flex justify-between items-center">
      {/* Left side buttons */}
      <div className="flex items-center space-x-4">
        <Link to="/">
          <button className="bg-teal-500 text-white border border-white px-4 py-2 rounded">
            LOGO
          </button>
        </Link>
        <Link to="/upload">
          <button className="bg-teal-500 text-white border border-white px-4 py-2 rounded">
            UPLOAD
          </button>
        </Link>
        <Link to="/get_docs">
          <button className="bg-teal-500 text-white border border-white px-4 py-2 rounded">
            GET DOCS
          </button>
        </Link>
        <Link to="/share_docs">
          <button className="bg-teal-500 text-white border border-white px-4 py-2 rounded">
            SHARE DOCS
          </button>
        </Link>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center space-x-4">
        <Link to="#">
          <button className="bg-teal-500 text-white border border-white px-4 py-2 rounded" onClick={handleChnagePassword}>
            CHANGE PASSWORD
          </button>
        </Link>
        <Link to="/">
          <button className="bg-teal-500 text-white border border-white px-4 py-2 rounded" onClick={handleLogout}>
            LOGOUT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar1;

