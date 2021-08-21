import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Mounting } from './Mounting'
import { Updating } from './Updating'
import { Unmounting } from './Unmounting'
import { useState } from 'react'
import './style.css'


function App() {
  
  return (
    <div className="App">

     
      <Router>
      <div id='border' >
        <h1 id='head'>COMPONENT LIFECYCLE</h1>

        <div id='horri'>

          <Link to='/mounting' id='kk' >MOUNTING</Link>
          <br></br>
          <Link to='/updating' id='kk'>UPDATING</Link>
          <br></br>
          <Link to='/unmounting' id='kk' >UNMOUNTING</Link>
        </div>

      </div>


        <div>


           <Route path='/mounting'><Mounting/></Route> 
          <Route path='/updating' ><Updating/></Route>
          <Route path='/unmounting' ><Unmounting/></Route> 
        </div>

      </Router>
    </div>
  );
}

export default App;