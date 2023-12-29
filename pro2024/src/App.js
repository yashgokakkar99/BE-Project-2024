import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar1 from './components/Navbar1';

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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
