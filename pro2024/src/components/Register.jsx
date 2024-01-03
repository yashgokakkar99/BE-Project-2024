import React from "react";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Register() {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [aadharNumber, setAadharNumber] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [userProfile,SetuserProfile] = useState({
    fullName:"",
    Email:"",
    Telephone:"",
    Aadhar:"",
    Password:"",
  })

  const handleChange =(e)=>{
    SetuserProfile(prev=>({...prev,[e.target.name]:e.target.value}))
  };
  // Function to handle form submission
  const navigate = useNavigate();
const handleClick = () =>{
  axios.post("http://localhost:8700/userProfile",userProfile);

  alert("Data Submitted Successfully");
  
  navigate("/");
}
  console.log(userProfile)
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Perform form validation and submission logic here
  //   // For simplicity, we'll just log the form data for now
  //   console.log({
  //     // userProfile.fullName,
  //     // userProfile.Email,
  //     // userProfile.Telephone,
  //     // userProfile.Aadhar,
  //     // userProfile.Password,
      
  //   });
  // // };

  // JSX code for the registration form
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#1E1E1E]">
      <div className="w-3/4 m-auto rounded-lg bg-[#393E46] drop-shadow-md">
        <h2 className="flex justify-center p-6 text-[#00ADB5] font-bold text-2xl">
          Site name | Register
        </h2>
       
          <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-16">
            <input onChange={handleChange}
              className="border-2 border-black w-2/4 m-auto  placeholder-black p-1"
              type="text"
              //value={fullName}
              name="fullName"
              //onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="FULL NAME"
            />

            <input onChange={handleChange}
              className="border-2 border-black w-2/4 m-auto  placeholder-black p-1"
              type="email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              name="Email"
              required
              placeholder="EMAIL"
            />

            <input onChange={handleChange}
              className="border-2 border-black w-2/4 m-auto  placeholder-black p-1"
              type="tel"
              //value={phoneNumber}
              //onChange={(e) => setPhoneNumber(e.target.value)}
              name="Telephone"
              required
              placeholder="TELEPHONE"
            />

            <input onChange={handleChange}
              className="border-2 border-black w-2/4 m-auto  placeholder-black p-1"
              type="text"
              //value={aadharNumber}
              //onChange={(e) => setAadharNumber(e.target.value)}
              name="Aadhar"
              required
              placeholder="AADHAR NUMBER"
            />

            <input onChange={handleChange}
              className="border-2 border-black w-2/4 m-auto  placeholder-black p-1"
              type="password"
              //value={newPassword}
              //onChange={(e) => setNewPassword(e.target.value)}
              name="Password"
              required
              placeholder="NEW PASSWORD"
            />

            <input onChange={handleChange}
              className="border-2 border-black w-2/4 m-auto  placeholder-black p-1"
              type="password"
              //value={confirmPassword}
              //onChange={(e) => setConfirmPassword(e.target.value)}
              name="NewPassword"
              required
              placeholder="CONFIRM PASSWORD"
            />
          </div>

          <button onClick={handleClick}
            type="submit"
            className="w-full mt-6 p-2 bg-[#00ADB5] text-[#FFFFFF] font-bold text-xl rounded-b-lg "
          >
            Register
          </button>
       
      </div>
      <p className="text-center text-[#FFFFFF] mb-2 font-bold">
        Already registered ? | Sign Up
      </p>
    </div>
  );
}

export default Register;
