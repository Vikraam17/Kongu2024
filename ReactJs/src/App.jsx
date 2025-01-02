import React, { createContext } from 'react'
import Hen from './components/PropsDrill/Hen'
import Project from './components/Project/Project'
import Memo from './components/Memo';
import Navbar from './components/Project/Navbar';
export let nameContext = createContext();
const App = () => {
  return (
    <nameContext.Provider value="Vikraam">
      {/* <Project /> */}
      {/* <Hen/> */}
      {/* <Memo /> */}
      <Navbar/>
    </nameContext.Provider>
  )
}

export default App



// import React from 'react'
// import Project from './components/Project/Project'
// const App = () => {
//   return (
//       <Project />
//   )
// }

// export default App