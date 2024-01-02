

import React from "react";

const ShareDoc = () => {
  return (
    <div className="flex h-screen bg-[#1A2027]">
      {/* Column 1: Search Bar */}
      <div className="w-1/3 p-8 border-r border-gray-600">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded"
        />
      </div>

      {/* Column 2: Two Search Bars and Text */}
      <div className="w-1/3 p-8 border-r border-l border-gray-600">
        <div className="text-center mb-4">
          {/* Text at the top center */}
          <h2 className="text-lg font-bold text-white">Selected Users Docs</h2>
        </div>

        {/* First Search Bar with Button */}
        <div className="mb-4">
          <div className="flex flex-col">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search 1..."
                className="w-full p-2 pl-10 pr-12 bg-gray-700 border border-gray-600 text-white rounded"
              />
              <button className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded">
                Request
              </button>
            </div>
          </div>
          <div className="mt-4 text-white">Before.</div>
        </div>

        {/* Second Search Bar with Button */}
        <div>
          <div className="flex flex-col">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search 1..."
                className="w-full p-2 pl-10 pr-12 bg-gray-700 border border-gray-600 text-white rounded"
              />
              <button className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded">
                Requested
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 text-white">After.</div>
      </div>

      {/* Column 3: Container 2 */}
      <div className="flex flex-col p-12 w-1/3 border-l border-gray-600">
        {/* Column 3 Content */}
        <div className="text-white text-center mb-4">Request History</div>

        <div className="flex items-center justify-center h-full">
          <div className="p-4 bg-gray-800 text-white">
            <p>Username: John Doe</p>
            <p>Document Name: Sample Document</p>
            <p>Date: July 24, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareDoc;
