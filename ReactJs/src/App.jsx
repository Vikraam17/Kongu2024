import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import StateHook from "./components/StateHook";

function App() {
  return (
    <StateHook/>
    // <Router>
    //   <div>
    //     <nav>
    //       <ol>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/AboutUs">About Us</Link>
    //         </li>
    //         <li>
    //           <Link to="/ContactUs">Contact Us</Link>
    //         </li>
    //       </ol>
    //     </nav>
    //   </div>

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/AboutUs" element={<AboutUs />} />
    //     <Route path="/ContactUs" element={<ContactUs />} />
    //   </Routes>
    // </Router>
  );
}

export default App;