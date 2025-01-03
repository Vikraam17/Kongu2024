import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Project/Navbar";
import Home from "./components/Project/Home";
import About from "./components/Project/AboutUs";
import Gallery from "./components/Project/Ref";
import Contact from "./components/Project/ContactUs";
import Memo from "./components/Memo";

export const nameContext = createContext();

const App = () => {
  return (
    <nameContext.Provider value="Vikraam">
      <Router>
        <Navbar /> {/* Navbar will be visible on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/useMemo" element={<Memo />} />
        </Routes>
      </Router>
    </nameContext.Provider>
  );
};

export default App;
