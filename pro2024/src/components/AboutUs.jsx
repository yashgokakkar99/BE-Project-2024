import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="container mx-auto text-center ">
      <h1 className="text-5xl font-bold mb-16 text-gray-300 mt-4">
        We Are Website Name
      </h1>

      <p className="text-lg leading-relaxed mb-8 text-gray-300 text-justify mx-16">
        Website is a cutting-edge document storage solution leveraging
        blockchain technology for enhanced security and accessibility. This
        innovative platform is designed to redefine decentralized data
        management, placing privacy at the forefront. Users experience a
        seamless and secure way to control their documents, offering
        unparalleled privacy and management capabilities.
      </p>

      <p className="text-lg leading-relaxed mb-8 text-gray-300 text-justify mx-16">
        At the heart of Websitename is a robust backend built on Node.js and
        MySQL, ensuring reliable and scalable performance. The server
        facilitates user registration and login processes with encrypted
        password handling, incorporating bcrypt for advanced security. The
        system employs a user-friendly interface, making document storage and
        retrieval intuitive, and a sleek frontend designed with React for a
        seamless user experience.
      </p>

      <p className="text-lg leading-relaxed mb-8 text-gray-300 text-justify mx-16">
        websitename document preview feature enhances the user experience,
        allowing individuals to visualize their uploaded documents directly
        within the platform. This functionality streamlines the process of
        verifying and accessing documents, making it an ideal solution for users
        who prioritize efficiency in managing their digital assets.
      </p>
      <h1 className="text-5xl font-bold mb-16 text-red-400 mt-4">
        Why Choose Us?
      </h1>

      <h1 className="text-3xl font-bold mb-16 text-blue-300 mt-4">
        Our Services
      </h1>

      <div className="flex justify-center flex-wrap mb-12">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="mx-6 text-center mb-8"
            style={{ flex: "0 0 30%" }}
          >
            <img
              src={`https://placekitten.com/150/15${index}`}
              alt={`Icon ${index + 1}`}
              className="w-20 h-20 object-cover rounded-full border-4 border-00ADB5 mb-4 mx-auto"
            />
            <p className="text-lg font-bold text-gray-300">
              Description {index + 1}. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        ))}
      </div>

      <div className=" p-8 bg-gray-100 shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          We Will Be Happy to Provide You Services
        </h1>
        <h3 className="text-lg font-bold mb-8 text-gray-600">
          Please connect with us and make your documents more secure.
        </h3>

        <div className="flex justify-center space-x-4">
          <button className="bg-teal-500 text-white py-2 px-4 rounded-md border border-light-blue-700 hover:bg-light-blue-700 transition duration-300 ease-in-out">
            <Link to="/contact"> Contact Us</Link>
          </button>
          <button className="bg-blue-300 text-white py-2 px-4 rounded-md border border-green-700 hover:bg-green-700 transition duration-300 ease-in-out">
            LinKeldn
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md border border-yellow-700 hover:bg-yellow-700 transition duration-300 ease-in-out">
            WhatsApp
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md border border-red-700 hover:bg-red-700 transition duration-300 ease-in-out">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

{
  /* <div className="flex justify-center mb-12">
        <div className="mx-6 text-center">
          <img
            src="https://placekitten.com/150/150"
            alt="Icon 1"
            className="w-20 h-20 object-cover rounded-full border-4 border-00ADB5 mb-4 mx-auto"
          />
          <p className="text-lg font-bold text-gray-800">
            Description 1. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <div className="mx-6 text-center">
          <img
            src="https://placekitten.com/150/151"
            alt="Icon 2"
            className="w-20 h-20 object-cover rounded-full border-4 border-00ADB5 mb-4 mx-auto"
          />
          <p className="text-lg font-bold text-gray-800">
            Description 2. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <div className="mx-6 text-center">
          <img
            src="https://placekitten.com/150/152"
            alt="Icon 3"
            className="w-20 h-20 object-cover rounded-full border-4 border-00ADB5 mb-4 mx-auto"
          />
          <p className="text-lg font-bold text-gray-800">
            Description 3. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>

        <div className="mx-6 text-center">
          <img
            src="https://placekitten.com/150/150"
            alt="Icon 1"
            className="w-20 h-20 object-cover rounded-full border-4 border-00ADB5 mb-4 mx-auto"
          />
          <p className="text-lg font-bold text-gray-800">
            Description 1. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <div className="mx-6 text-center">
          <img
            src="https://placekitten.com/150/151"
            alt="Icon 2"
            className="w-20 h-20 object-cover rounded-full border-4 border-00ADB5 mb-4 mx-auto"
          />
          <p className="text-lg font-bold text-gray-800">
            Description 2. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <div className="mx-6 text-center">
          <img
            src="https://placekitten.com/150/152"
            alt="Icon 3"
            className="w-20 h-20 object-cover rounded-full border-4 border-00ADB5 mb-4 mx-auto"
          />
          <p className="text-lg font-bold text-gray-800">
            Description 3. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
      </div> */
}
