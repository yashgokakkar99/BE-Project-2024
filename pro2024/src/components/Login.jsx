import React from "react";
import { useState } from "react";

function Login() {
  const [aadharNumber, setAadharNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation and submission logic here
    // For simplicity, we'll just log the form data for now
    console.log({
      aadharNumber,
      password,
    });
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#1E1E1E]">
      <div className="w-3/4 m-auto rounded-lg bg-[#393E46] drop-shadow-md">
        <h2 className="flex justify-center p-6 text-[#00ADB5] font-bold text-2xl">
          Site name | Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-16">
            <input
              className="border-2 border-black w-2/4 m-auto  placeholder-black p-1"
              type="text"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              required
              placeholder="AADHAR NUMBER"
            />

            <input
              className="border-2 border-black w-2/4 m-auto  placeholder-black p-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="NEW PASSWORD"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 p-2 bg-[#00ADB5] text-[#FFFFFF] font-bold text-xl rounded-b-lg "
          >
            Login
          </button>
        </form>
      </div>
      <p className="text-center text-[#FFFFFF] mb-2 font-bold">
        Forgot password ?
      </p>
    </div>
  );
}

export default Login;
