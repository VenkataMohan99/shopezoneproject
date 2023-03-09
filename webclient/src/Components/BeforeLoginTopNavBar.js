import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom'
import { userDetails } from '../App';

function BeforeLoginTopNavBar() {
    let [activeMenu,setActiveMenu]=useState("menu");
    let [menuButton,setMenuButton]=useState("menuButton")
    let[menuSymbole,setMenuSymbole]=useState('☰')
    let storeObj=useSelector((store)=>{return store});
    
  const [state]=useContext(userDetails);
  //  console.log("Top NavBar")
  //  console.log(state);
  return (
    <div className='topNavBarMainDiv'>
        <nav className='navgationTab' >
        <NavLink to='/' style={{fontSize:"1.5rem",fontFamily:"-moz-initial",color:"white"}}>🛍️ Shope Zone</NavLink>
        </nav>
        <nav>
        <button type='button' onClick={()=>{
        if(activeMenu === "menu"){
          setActiveMenu("activeMenu");
          setMenuButton("activeButton");
          setMenuSymbole('✖')

        }
        else{
          setActiveMenu("menu");
          setMenuButton("menuButton");
          setMenuSymbole('☰')
        }
        }}className={menuButton} >{menuSymbole}</button>
        <ul className={activeMenu}> 
        <li><NavLink to='/' className='navLinks'>HomePage</NavLink></li>   
       <li> <NavLink className='navLinks' to='/signupForm'>Register</NavLink></li>
       <li> <NavLink className='navLinks' to='/loginForm'>Login</NavLink></li>
       <li> <NavLink className='navLinks' to='/cartProducts'
        style={(obj)=>{
          if(obj.isActive===true){
         return{ backgroundColor:"#88a1b7 "}
          }
        }}><i className="bi bi-cart3">{storeObj.length>0?<sup style={{backgroundColor:"red",color:"white",padding:"1px",borderRadius:"20px",border:"1px solid black",display:"inline-block",height:"30px"}}>{storeObj.length}</sup>:""}</i>Cart</NavLink></li>
        </ul>
        </nav>
        </div>
  )
}

export default BeforeLoginTopNavBar