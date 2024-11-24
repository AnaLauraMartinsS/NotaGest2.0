import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'; 
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Tips from './components/Tips/Tips.js';
import HowItWork from './components/HowItWork/HowItWork.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import FAQ from './components/FAQ/FAQ.js';
import Uploads from './pages/Uploads/Uploads.js';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/uploads" element={<Uploads />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
