import React from 'react'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
 //import {AuthProvider}  from "./contexts/AuthProvider.js"

import Main from './components/Main.js'
import Login from "./components/Login.js"
import Content from "./components/Content.js"
import Contest from "./components/Contest.js"
import Introduction from "./components/Introduction.js"
import BS from "./components/BS.js"


const App = () => {
  return (
    

<div style={{ fontFamily: 'Lucida Console, "Courier New", monospace' }}>
      <Router>
      
       <Routes>
       <Route path="/" element={<Login />} /> 
         <Route path="/main" element={<Main />} />
          <Route path='/Content' element={<Content />}/>
          <Route path='/Introduction' element={<Introduction />}/>
          <Route path='/BS' element={<BS />}/>
          <Route path='/Contest' element={<Contest/>}/>
        
           </Routes>
          
        
          
      </Router>
    </div>
  
       
   ) 
  
}


export default App
