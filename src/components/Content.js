import React from 'react'

import {useNavigate} from 'react-router-dom'

const Content = () => {
  const history=useNavigate();
  return (
    <div class="ct" id="t1">
  <div class="ct" id="t2">
    <div class="ct" id="t3">
      <div class="ct" id="t4">
         <div class="ct" id="t5">
          <ul id="menu">
            <a href="#t1"><li class="icon fa fa-anchor" id="uno"></li></a>
            <a href="#t2"><li class="icon fa fa-keyboard-o" id="dos"></li></a>
            <a href="#t3"><li class="icon fa fa-snapchat-ghost" id="tres"></li></a>
            <a href="#t4"><li class="icon fa fa-bomb" id="cuatro"></li></a>
            <a href="#t5"><li class="icon fa fa-gift" id="cinco"></li></a>
          </ul>
          <div class="page" id="p1">
             <section class="icon "><span class="title" style={{color:'lightgoldenrodyellow'}}>INTRODUCTION</span><span class="hint">

             <h2  style={{fontFamily:'i sans-serif, "Helvetica Neue", "Lucida Grande", Arial',color:'black',  fontStretch: 'expanded'}}>Welcome To No &#8814; Code &#8817;</h2>
               <div  style={{color:'#9FE2BF',fontSize:'14px' }}>  
                <h3>Hello Students !! We ,NoCoders have built this website to help students in Data Structures and Algorithm , indeed a nightmare for many in the Semesters .</h3>
                <h4><span>We have made a <span style={{color :'green'}}>OneStop Destination</span> for aspiring Coders to get the resourses about DSA without struggling to have an Answer ...</span>
                <h2>"Where Should I start ?  &#129300; .............</h2></h4> 

               </div>




             </span></section>  
          </div>
          <div class="page" id="p2">
            <section class="icon fa fa-keyboard-o" onClick={()=>{ history('/Resource')}} ><span class="title">DEEP DIVE IN THE OCEAN OF QUESTIONS </span></section>
          </div>  
          <div class="page" id="p3">
            <section class="icon fa fa-snapchat-ghost" onClick={()=>{ history('/Introduction')}} style={{color :'black',padding:'50px'}}><span class="title">CONNECTING DOTS WITH DATA STRUCTURES AND ALGORITHM</span></section>
          </div>
          <div class="page" id="p4">
            <section class="icon fa fa-bomb"  onClick={()=>{ history('/Contest')}}  style={{color :'white',padding:'50px'}}>
              <span class="title"> CONTESTS</span>
              
            
            </section>
          </div> 
          <div class="page" id="p5">
            <section class="icon">
              <span class="title">
              <section class="icon fa fa-gamepad"  
              onClick={()=>{ history('/contribution')}}style={{color :'black',padding:'50px'}}></section></span>
              <p class="hint">
                 REVIEW US !!
                <span></span><br/>
               
              </p>
            </section>
          </div> 
        </div>
      </div>
    </div>
  </div>
</div>




  )
}

export default Content
