import React from 'react'
import {auth} from '../firebase.js'
import "firebase/app"
import { useNavigate } from "react-dom"
import firebase from 'firebase'
import Login from  "./Login.js"

const Thanks = () => {
  const history = useNavigate()
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
    if (user) {
      
      history('/main'); 
    } else {
      // User is signed out.
      // You can redirect to the login page or do other actions here
      history('/Login')
      
    }
  })
}

export default Thanks
