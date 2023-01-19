import React from 'react'
import p1 from './t1.gif'
import p2 from './t2.gif'
import p3 from './t3.gif'
const Thanks = () => {
  return (
    <div>
        <div className="row">
        <img src={p1} style={{width:'50%',height:'290px'}} />
        <img src={p2} style={{width:'50%',height:'290px'}} />
        </div>
        <div className="col">
        <img src={p3}  style={{width:'100%',height:'300px'}}/>
        </div>
      
    </div>
  )
}

export default Thanks
