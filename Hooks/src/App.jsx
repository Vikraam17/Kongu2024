import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseRef2 from "./components/UseRef2";
import UseMemo from "./components/UseMemo";
import Navbar from "./components/Navbar";
import ConditionalRender from './components/ConditionalRender';
import UseCallback from './components/UseCallback';
import UseReduce from './components/UseReduce';

const App = () => {

  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<UseEffect/>}/>
          <Route path="/conditionalRender" element={<ConditionalRender />}/>
          <Route path="/useRef" element={<UseRef/>}/>
          <Route path="/useRef2" element={<UseRef2/>}/>
          <Route path="/useMemo" element={<UseMemo/>}/>
          <Route path="/useCallback" element={<UseCallback/>}/>
          <Route path="/useReduce" element={<UseReduce/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
