import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductsNavTab from './ProductsNavTab';
import TopNavgation from './TopNavgation';
import loading from '../Images/loading.gif'


function Jewelery() {
 useEffect(()=>{
    jeweleryProducts();
 },[]);
const [productList,setProduct]=useState([]);

 let jeweleryProducts=async ()=>{
    let responce=await axios.get("https://fakestoreapi.com/products/category/jewelery");
   setProduct(responce.data)
 }
  return (
    <div className='jewleryProductsBodyDiv'>
        <TopNavgation></TopNavgation>
        <ProductsNavTab></ProductsNavTab>
        {productList.length>0?<div className='productsMainDiv'>
            {productList.map((list)=>{
              return  <Link to={`/selectedProduct/${list.id}`} className='productsDiv' title='Shop Now!'>
              <img src={list.image}  alt={list.title} className='allProductsImgs'></img>
              <p>{list.title}</p>
              <h2> ${list.price}</h2>
              </Link>
            })}
            </div>:<center><img src={loading} alt='loading...'></img></center>}
    </div>
  )
}

export default Jewelery