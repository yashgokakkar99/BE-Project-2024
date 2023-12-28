import React from "react";
import { useState } from "react";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation and submission logic here
    // For simplicity, we'll just log the form data for now
    console.log({
      fullName,
      email,
      phoneNumber,
      aadharNumber,
      newPassword,
      confirmPassword,
    });
  };

  // JSX code for the registration form
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#1E1E1E]">
      <div className="w-3/4 m-auto rounded-lg bg-[#393E46] drop-shadow-md">
        <h2 className="flex justify-center p-6 text-[#00ADB5] font-bold text-2xl">
          Site name | Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-16">
            <input
              className="border-2 border-black w-2/4 m-auto  placeholder-black p-1"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="FULL NAME"
            />

            <input
              className="border-2 border-black w-2/4 m-auto  placeholder-black p-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="EMAIL"
            />

            <input
              className="border-2 border-black w-2/4 m-auto  placeholder-black p-1"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="TELEPHONE"
            />

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
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder="NEW PASSWORD"
            />

            <input
              className="border-2 border-black w-2/4 m-auto  placeholder-black p-1"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="CONFIRM PASSWORD"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 p-2 bg-[#00ADB5] text-[#FFFFFF] font-bold text-xl rounded-b-lg "
          >
            Register
          </button>
        </form>
      </div>
      <p className="text-center text-[#FFFFFF] mb-2 font-bold">
        Already registered ? | Sign Up
      </p>
    </div>
  );
}

export default Register;
