import axios from 'axios';
import React, { useContext, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userDetails } from '../App';
import TopNavgation from './TopNavgation'

function LoginForm() {
  let emailIdInputRef=useRef();
  let passwordInputRef=useRef();
  let navigate=useNavigate();
  const [state,dispatchData]=useContext(userDetails);
  // console.log(state);
  let loginDetails=async()=>{
    let response=await axios.post("/login",{emailId:emailIdInputRef.current.value,password:passwordInputRef.current.value});
    // console.log(response);
    if(response.data.login ===true){
      dispatchData({
        type:'user login',
        data:response.data.userDetails
      })
      return navigate('/');

    }else{
      alert(response.data.status)
      return navigate('/loginForm');
    }
  }
  return (
    <div className='loginAndSignupBody'>
    <TopNavgation></TopNavgation>    
    <form style={{textAlign:'center'}}>
    <fieldset>
     <h1>Login Form</h1>       
     <div>
     <input placeholder='Email Id' ref={emailIdInputRef}></input>
     </div>
     <div>
        <input placeholder='Password' type='password' ref={passwordInputRef}></input>
     </div>
     <br></br>
     <button type='button' onClick={()=>{
       loginDetails()
     }} className='loginSignupButtons' >Login</button>
     </fieldset>
     <br></br>
     <br></br>
     <NavLink to='/signupForm' className='loginSignupNavLinks' >Create An Account</NavLink>
     </form>
    </div>
  )
}

export default LoginForm