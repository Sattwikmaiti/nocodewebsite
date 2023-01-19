import React from 'react'
import p1 from './123.jpeg' 
import p2 from './t2.gif'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import './Login.css'
import {useNavigate} from 'react-router-dom'
  
const Contribution = () => {
  const nav=useNavigate();
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
    
        
 /* emailjs.send( 'service_mw422g6', 'template_thnxeur', {
         
          from_name: name,
          message: message,
           reply_to :emailid,
             
    
    
      }, 'UHku05c1fsztWeJut')
        .then((result) => {
    
            console.log(result.text);
            setname('');
      setemailid('');
      setmessage('');
      nav('/thank')
        }, (error) => {
            console.log(error.text);
        }); 
    */
      }
     
   
  return (
    


    <>

    
    <div className="container" id="gg">
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
        
      />
</div>
      
         <div className="txt">
      <button type="submit" onClick={sendEmail
    }>Submit</button>
</div>
     
      
    </form>
    </div>
    </div>
    <h1 style={{display:'flex',justifyContent:'center',fontSize:'30px',padding:'10px',fontFamily:'c',color:'black'}}>SPECIAL THANKS TO CONTRIBUTORS </h1>
    </div>
    
    <div class="container">
       
         <div className="elements">
         <div className="d">
	<div class="avatar">
		<a href="https://codepen.io/MarioDesigns/" target="_blank">
			<img src={p2}alt="Skytsunami" />
		</a>
	</div>
  </div>   <div className="d">
	<div class="avatar">
		<a href="https://codepen.io/MarioDesigns/" target="_blank">
			<img src={p2}alt="Skytsunami" />
		</a>
	</div>
  </div>   <div className="d">
	<div class="avatar">
		<a href="https://codepen.io/MarioDesigns/" target="_blank">
			<img src={p2}alt="Skytsunami" />
		</a>
	</div>
  </div>   <div className="d">
	<div class="avatar">
		<a href="https://codepen.io/MarioDesigns/" target="_blank">
			<img src={p2}alt="Skytsunami" />
		</a>
	</div>
  </div>
          <div className="d">
	<div class="avatar">
		<a href="https://codepen.io/MarioDesigns/" target="_blank">
			<img src={p2}alt="Skytsunami" />
		</a>
	</div>
  </div>

  <div className="d">
	<div class="avatar">
		<a href="https://codepen.io/MarioDesigns/" target="_blank">
			<img src={p2}alt="Skytsunami" />
		</a>
	</div>
  </div>
  


</div>

<div className="elements">
         <div className="d">
	<div class="avatar">
		<a href="https://codepen.io/MarioDesigns/" target="_blank">
			<img src={p2}alt="Skytsunami" />
		</a>
	</div>
  </div>   <div className="d">
	<div class="avatar">
		<a href="https://codepen.io/MarioDesigns/" target="_blank">
			<img src={p2}alt="Skytsunami" />
		</a>
	</div>
  </div>   <div className="d">
	<div class="avatar">
		<a href="https://codepen.io/MarioDesigns/" target="_blank">
			<img src={p2}alt="Skytsunami" />
		</a>
	</div>
  </div>   <div className="d">
	<div class="avatar">
		<a href="https://codepen.io/MarioDesigns/" target="_blank">
			<img src={p2}alt="Skytsunami" />
		</a>
	</div>
  </div>
        

 
  


</div>
</div>


    </>
  )
      }

export default Contribution
