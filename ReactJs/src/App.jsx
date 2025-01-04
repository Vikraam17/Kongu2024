import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Project/Navbar";
import Home from "./components/Project/Home";
import About from "./components/Project/AboutUs";
import Gallery from "./components/Project/Ref";
import Contact from "./components/Project/ContactUs";
import Memo from "./components/Memo";
import SignupForm from "./components/Authorization/SignUp";
import LoginForm from "./components/Authorization/Login";

export const nameContext = createContext();

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
