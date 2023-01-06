import React from 'react'
import p1 from './123.jpeg' 
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import './Login.css'
  
const Contribution = () => {
    const [name, setname] = useState('');
    const [emailid, setemailid] = useState('');
    const [message, setmessage] = useState('');
   
   

    
    const sendEmail=(e)=> {
      e.preventDefault();
   
    console.log(name);
    console.log(emailid);
    console.log(message)
    setmessage('');
    setemailid('');
    setname('');

      alert("THANKS FOR THE REVIEW ")
    {/*
  emailjs.send( 'service_mw422g6', 'template_thnxeur', {
         
          from_name: name,
          message: message,
           reply_to :emailid,
             
    
    
      }, 'UHku05c1fsztWeJut')
        .then((result) => {
    
            console.log(result.text);
            setname('');
      setemailid('');
      setmessage('');
        }, (error) => {
            console.log(error.text);
        }); 
    */}
      }
     
   
  return (
    
    <div className="container">
      <div className="pay">

          IF YOU LIKED OUR CONTENT , YOU MAY DONATE RUPEE 1 TO THIS BARCODE . IT WOULD MOTIVATE US 
      </div>
       <div className="body">
        <div className="imgg">
       <img src={p1}  /></div>
       <div className="forms">
       <form >

       <div className="txt">
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        placeholder="NAME"
        onChange={(event) =>
          setname(event.target.value)
        }
        required
      />
</div>
     
<div className="txt">
      <input
        type="email"
        id="emailid"
        name="emailid"
        value={emailid}
        placeholder="EMAIL"
        onChange={(event) => {
          setemailid(event.target.value);
        }}
        required
      />
      </div>
     <div className="txt">


<textarea
        type="text"
        id="message"
        rows="4" cols="50"
        name="message"
        value={message}
        placeholder="LEAVE A MESSAGE FOR US"
        
       style={{opacity:'1',color:'black',fontSize:'14px'}}
        onChange={(event) => {
          setmessage(event.target.value);
        }}
        required
      />
</div>
      
         <div className="txt">
      <button type="submit" onClick={sendEmail
    }>Submit</button>
</div>
     
      
    </form>
    </div>
    </div>

    </div>
  )
      }

export default Contribution
