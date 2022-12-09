import React from 'react'
import { GoogleOutlined,
    FacebookOutlined 
} from '@ant-design/icons'
//mport { getDefaultNormalizer } from '@testing-library/react'
import {auth} from '../firebase.js'
import "firebase/app"
import firebase from 'firebase'
import { useNavigate } from "react-router-dom"
//const  uploaddetails = (user)=>  {return user};
    const Login =() =>
{  

    


    const history = useNavigate()
 return (
<div id="login-page">
    <div className="login-card">
    
    
   <br></br>
    <br></br>
        <h1 style={{padding:'50px 50px 50px 50px',fontSize:'70px'}}>Welcome To NoCoDe!!</h1>
         <button className="login-button google"
         onClick={()=>{
             alert("clicked on login with google")
            auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
                (user)=>{
                    localStorage.setItem("user",JSON.stringify(user))
                    //console.log(user) 
                   
                   // const data= JSON.stringify(user);
                   // uploaddetails(data);
                    //console.log(typeof data)
                 
                 history('/main'); 

                }
            ).catch((e)=>console.log())
            }}
         >
            <GoogleOutlined  style={{marginRight:'10px'}}/><div className="hello">Sign in with Google</div>
         </button>
  <br></br>
  <br></br>

    </div>
</div>
 )
};

export default  Login
