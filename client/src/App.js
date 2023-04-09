import React from 'react'
import HomePage from "./Compnonet/HomePage"
import Nav from "./Compnonet/Nav"
import AdminPortal from './Compnonet/Experiment'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
const App = () => {
  return (<>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/'  element={ <HomePage/>   }/>
        <Route path='/post'  element={ <AdminPortal/>   }/>
        {/* <Route path='/contact'  element={ <Contact/>   }/>
        <Route path='/about'  element={ <HomePage/>   }/> */}

      </Routes>

    </Router>
    {/* // <Register/>
    // <Login/>
    // <AdminPortal/> */}
    {/* <HomePage/> */}
    {/* <DetailExperiment/> */}

    </>
  )
}

export default App
