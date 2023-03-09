import React, { useContext, useState } from 'react'
import profilePic from '../Images/profilePic.png'
import { useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom'
import { userDetails } from '../App';
function AfterLoginTopNavBar() {
  let [menuButton,setMenuButton]=useState(false)
  let[menuSymbole,setMenuSymbole]=useState('☰')
  let storeObj=useSelector((store)=>{return store});
  const [state,dispatchData]=useContext(userDetails);

  return (
       <div>
        <nav className='AfterLoginNavLink' >
        <NavLink to='/' style={{fontSize:"1.5rem",fontFamily:"-moz-initial",color:"white",padding:"50px"}}>🛍️ShopeZone</NavLink>
        
        <NavLink className='navLinks' to='/cartProducts'
        style={(obj)=>{
          if(obj.isActive===true){
         return{ backgroundColor:"#88a1b7 "}
          }
        }}><i className="bi bi-cart3">{storeObj.length>0?<sup style={{backgroundColor:"red",color:"white",padding:"1px",borderRadius:"20px",border:"1px solid black",display:"inline-block",height:"30px"}}>{storeObj.length}</sup>:""}</i>
        Cart</NavLink>
        </nav>
       <div style={{backgroundColor:'#fb5c05',marginTop:'10px',padding:'5px',borderRadius:'10px'}}>
        <button title='Profile Details' type='button' onClick={()=>{
          if(menuButton === false){
         setMenuButton(true)
         setMenuSymbole('✖')
          }else{
           setMenuButton(false)
         setMenuSymbole('☰')

          }
        }}>{menuSymbole}</button>
        {menuButton ===true ?<ul className='profileDetailsBar' >
        <li className='profileDetailsLi'><h2 style={{backgroundColor:'black',color:'white',fontFamily:'serif',fontSize:'2rem',boxShadow:'5px 5px 5px #a59a7c',borderRadius:'5px'}}>Profile Details</h2></li>
        <li className='profileDetailsLi'><img src={profilePic}
        alt='Profile Pic' width='100px' height='100px'
        ></img></li>
        <li className='profileDetailsLi'><h3 style={{backgroundColor:'black',color:'white',fontFamily:'sans-serif',fontSize:'1.5rem',borderRadius:'5px',padding:'2px',boxShadow:'5px 5px 5px #a59a7c'}}>Profile Name</h3></li>
        <li className='profileDetailsLi'><strong style={{color:'#fb5c05',fontFamily:'-moz-initial',fontSize:'1.6rem'}}>{state[1].data[0].fullName}</strong></li>
        <br></br>
        <li className='profileDetailsLi'><NavLink to='/loginForm'
        onClick={()=>{
          dispatchData({
            type:'logout'
          })
        }}
        style={{backgroundColor:"#0d5eba",color:"white",padding:'5px',borderRadius:'5px'}}>Logout</NavLink></li>
        <br></br>
        </ul>:<div></div>}
       </div>
    </div>


  )
}

export default AfterLoginTopNavBar