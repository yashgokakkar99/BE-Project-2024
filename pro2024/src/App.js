import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import UploadFile from './components/UploadFile';
import Navbar1 from './components/Navbar1';
import GetDoc from './components/GetDoc';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Set the container to take at least the full height of the viewport */}
        <div className="flex-grow">
          <Navbar />
          <Navbar1 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/UploadFile" element={<UploadFile />} />
            <Route path="/get_docs" element={<GetDoc />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Navbar1 from './components/Navbar1';
// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import UploadFile from './components/UploadFile';
// import Register from './components/Register';


// function App() {
//   const isLoggedIn = false;  // Set this dynamically based on user login status

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <div className="flex-grow">
//           {/* Conditionally render Navbar or Navbar1 based on login status */}
//           {isLoggedIn ? <Navbar1 /> : <Navbar />}
          
//           <Routes>
//             {/* Use a dynamic route for the Home page */}
//             <Route path="/" element={isLoggedIn ? <AboutUs /> : <Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/UploadFile" element={<UploadFile />} />
            

//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;




