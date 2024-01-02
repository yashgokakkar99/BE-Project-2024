import React from 'react';
import contactImage from '../images/1.jpg'; // Replace with the actual path to your image

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
  };

  return (
    <>
    
    <div className="flex h-screen mx-4"> {/* Added margin to the parent div */}
      {/* Left side with image */}
      <div className="w-1/2 bg-gray-800 flex items-center justify-center">
        <img
          src={contactImage}
          alt="Contact"
          className="object-cover w-full h-64 pt-8"
        />
      </div>

      {/* Right side with the form */}
      <div className="w-1/2 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gray-800 shadow-md border rounded"> {/* Made form width adjustable */}
          <h2 className="text-2xl font-bold mb-8">Contact Us</h2>

          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-300 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full p-2 border border-gray-300 rounded bg-gray-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded bg-gray-500"
              required
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-2 border border-gray-300 rounded bg-gray-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-300 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full p-2 border border-gray-500 rounded bg-gray-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactForm;

