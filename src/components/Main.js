import React, { useState } from 'react'
import { Router } from 'react-router-dom';
//import uploaddetails  from './Login.js'
//const details=JSON.parse(uploaddetails);
import {Link }from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {pp} from '../ll.png'

const Main = () => {
 // const data=JSON.parse(localStorage.getItem("user"))
 const history=useNavigate();
  const [user,setuser]=useState(JSON.parse(localStorage.getItem("user")))
  
  const data=user.user;
  console.log(data);

  return (
    <>

    <div className="body">
    <div className="bg-image">
    <div className="blur"> </div>
   
      <div className="card">
     
  <img src={pp}  style={{width:"70%",height:'70%'}}/>
  
  <h1 style={{paddingBottom:'10px',fontSize:'30px'}}> {data.displayName}</h1>
  <p className="title" style={{fontWeight:"bold" ,color:'black',paddingBottom:'10px',fontSize:'30px'}}  >{data.email}</p>
  <p className='LOG' style={{fontWeight:"bold" ,color:'green',paddingBottom:'10px',fontSize:'60px'}}>LOGGED IN SUCCESSFULLY!</p>

  <p ><button onClick={()=>history('/Content')}>Click to Start Journey</button></p>
  </div>
 
        
    </div>
</div>

   

    </>
  )
}

export default Main
{/*
{data.photoURL ===null ? "./ll.png":data.photoURL} */}