import axios from 'axios';
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import TopNavgation from './TopNavgation'

function SignupForm() {
    let fullNameInputRef=useRef();
    let emailIdInputRef=useRef();
    let passwordInputRef=useRef();
    let fullName='';
    let emailId='';
    let password='';
    let signupDetails=async()=>{
        let response=await axios.post("/signup",{fullName:fullNameInputRef.current.value,emailId:emailIdInputRef.current.value,password:passwordInputRef.current.value});
        // console.log(response);
        alert(response.data.status);
    }
  return (
    <div className='loginAndSignupBody'>
        <TopNavgation></TopNavgation>
        <form style={{textAlign:"center"}}>
            <fieldset>
                <h1>Create a New Account</h1>
                <div>
                    <input placeholder='User Name' ref={fullNameInputRef} 
                    onChange={()=>{
                        let regEx=/^[A-Za-z_/./ ]{4,20}$/
                        if(regEx.test(fullNameInputRef.current.value)){
                            fullNameInputRef.current.style.border='5px solid green'
                            fullName=true
                        }else{
                            fullNameInputRef.current.style.border='5px solid red'
                            fullName=false
                        }
                    }}
                    ></input>
                </div>
                <div>
                    <input placeholder='Email Id' ref={emailIdInputRef}
                    onChange={()=>{
                        let regEx=/^[A-Za-z0-9-/./_]+\@[A-Za-z0-9-/./_]+\.([A-za-z]{3,4})$/
                        if(regEx.test(emailIdInputRef.current.value)){
                            emailIdInputRef.current.style.border='4px solid green'
                            emailId=true
                        }else{
                            emailIdInputRef.current.style.border='4px solid red'
                            emailId=false
                        }
                    }}
                    ></input>
                </div>
                <div>
                    <input placeholder='Password' type='password' ref={passwordInputRef}
                    onChange={()=>{
                        let regEx=/^[A-Za-z0-9./-/@]{5,15}$/
                        if(regEx.test(passwordInputRef.current.value)){
                            passwordInputRef.current.style.border='4px solid green'
                            password=true
                        }else{
                            passwordInputRef.current.style.border='4px solid red'
                            password=false
                        }
                    }}
                    ></input>
                </div>
                <button type='button' onClick={()=>{
                    if(fullName === true && emailId===true && password===true){
                    signupDetails()
                }else{
                    alert("check user details and enter again");
                }
                    }} className='loginSignupButtons'>Sign up</button>
            </fieldset>
            <br></br>
            <br></br>

        <NavLink to='/loginForm' className='loginSignupNavLinks'>Existing User? Login</NavLink>

        </form>
    </div>
  )
}

export default SignupForm