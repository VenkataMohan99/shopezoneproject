import React from 'react'
import { NavLink } from 'react-router-dom'
function ProductsNavTab() {
  return (
    <div className='productsNavBar'>
        <nav className='productsNavLinks'>
        <NavLink className='' to='/' 
        style={(obj)=>{
          if(obj.isActive===true){
         return{ backgroundColor:"black",color:"white"}
          }
        }}
        >All Products</NavLink>
        <NavLink className='' to='/mensClothing'  style={(obj)=>{
          if(obj.isActive===true){
         return{ backgroundColor:"black",color:"white"}
          }
        }}
         >Men's Clothing</NavLink>
        <NavLink className='' to='/womensClothing' style={(obj)=>{
          if(obj.isActive===true){
         return{ backgroundColor:"black",color:"white"}
          }
        }}
        
        >Women's Clothing</NavLink>
        <NavLink className='' to='/jeweleryProducts' style={(obj)=>{
          if(obj.isActive===true){
         return{ backgroundColor:"black",color:"white"}
          }
        }}>Jewelery</NavLink>
        <NavLink className='' to='/electronicsProducts' style={(obj)=>{
          if(obj.isActive===true){
         return{ backgroundColor:"black",color:"white"}
          }
        }}>Electronics</NavLink>
       
        </nav>
    </div>
  )
}

export default ProductsNavTab