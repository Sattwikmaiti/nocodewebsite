import React from 'react'
import emailjs from '@emailjs/browser';
import { GoogleOutlined,
    
} from '@ant-design/icons'
//mport { getDefaultNormalizer } from '@testing-library/react'
import {auth} from '../firebase.js'
import "firebase/app"
import firebase from 'firebase'
import "./Login.css"
import { useNavigate } from "react-router-dom"
//const  uploaddetails = (user)=>  {return user};
    const Login =() =>
{  

     

    const history = useNavigate()
 return (
<>

  <div className="containe">
    <div className="wrapper">
      <div className='containert' style={{padding:'20px', fontSize:'30px',fontFamily:'Audiowide, sans-serif'}}> Welcome To NoCode Website . Learn Code and Know More about DSA and Competetive Coding.</div>
  <div className="link_wrapper">
    <div className="a" 
     onClick={()=>{
             
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
            (user)=>{
                localStorage.setItem("user",JSON.stringify(user))
                console.log(user.user.email)
               
               // const data= JSON.stringify(user);
               // uploaddetails(data);
                //console.log(typeof data)

                {/*emailjs.send('service_mw422g6','template_tyow97q', {
                    to_name: "user",
                    from_name: "NoCode team",
                    message: "Welcome To NoCode Website !!!  ",
                    reply_to: user.user.email,
                    }, 'UHku05c1fsztWeJut')
                  .then((response) => {
                     alert('SUCCESS CHECK YOUR EMAIL INBOX !!!', response.status, response.text);
                  }, (err) => {
                     console.log('FAILED...', err);
                  });
                 */} 
                
             history('/main'); 

            }
        ).catch((e)=>console.log())
        }}
    
    
    
    
    
    
    
    
    > <GoogleOutlined className="j"style={{marginRight:'10px',fontSize:'60px'}}></GoogleOutlined></div>
    <div className="iconii">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
    <div className="helloo" style={{padding:'20px', fontSize:'50px'}}>Sign in with <span style={{fontFamily: 'Product Sans,sans-serif' ,fontSize:'50px',textTransform: 'uppercase'}}><span className="blue">G</span><span
    className="green">o</span><span className="yellow">o</span><span className="blue">g</span><span
    className="green">l</span><span className="red">e</span></span></div>
  </div>
  
</div>

</div>


</>

 )
};

export default  Login
