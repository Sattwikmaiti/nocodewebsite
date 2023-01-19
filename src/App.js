import React from 'react'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
 //import {AuthProvider}  from "./contexts/AuthProvider.js"

import Main from './components/Main.js'
import Login from "./components/Login.js"
import Content from "./components/Content.js"
import Contest from "./components/Contest.js"
import Resource from "./components/Resources.js"
import Introduction from "./components/Introduction.js"
import Contribution from "./components/Contribution.js"
import BackTracking from "./components/ALL/BackTracking.js"
import Arrays from "./components/ALL/Arrays.js"
import BS from "./components/ALL/BS.js"
import BitsManupulation from './components/ALL/BitsManipulation.js'
import DynamicProg from "./components/ALL/DynamicProg.js"
import Graph from "./components/ALL/Graph.js"
import Heaps from "./components/ALL/Heaps.js"
import LinkedList from "./components/ALL/LinkedList.js"
import NumberTheory from "./components/ALL/NumberTheory.js"
import Recursion from "./components/ALL/Recursion.js"
import SortingSearching from "./components/ALL/SortingSearching.js"
import StackQueue from "./components/ALL/StackQueue.js"
import Trees from "./components/ALL/Trees.js"
import Thank from "./components/Thanks.js"


const App = () => {
  return (
    

<div style={{ fontFamily: 'Lucida Console, "Courier New", monospace' }}>
      <Router>
      
       <Routes>
       <Route path="/" element={<Login />} /> 
         <Route path="/main" element={<Main />} />
          <Route path='/Content' element={<Content />}/>
          <Route path='/Resource' element={<Resource/>}/>
          <Route path='/Introduction' element={<Introduction />}/>
          <Route path='/BackTracking' element={<BackTracking />}/>
          <Route path='/Arrays' element={<Arrays />}/>
          <Route path='/BitsManupulation' element={<BitsManupulation />}/>
          
          <Route path='/Contest' element={<Contest/>}/>
          <Route path='/contribution' element={<Contribution/>}/>
          <Route path='/Thank' element={<Thank/>}/>
           </Routes>
          
        
          
      </Router>
    </div>
  
       
   ) 
  
}


export default App
