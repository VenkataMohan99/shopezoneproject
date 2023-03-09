import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TopNavgation from './TopNavgation';
import sideShowImg2 from '../Images/salegif.gif'
import sideShowImg3 from '../Images/saleimg3.webp'
import sideShowImg4 from '../Images/saleimg4.webp'
import sideShowImg5 from '../Images/saleimg5.jpg'
import ProductsNavTab from "./ProductsNavTab";
import loading from '../Images/loading.gif'
import { userDetails } from '../App';
import AfterLoginTopNavBar from './AfterLoginTopNavBar';


function Products() {
    useEffect(()=>{
        getProductsList();
    },[]);
    let [allProductsList,setProductsList]=useState([]);
    let getProductsList=async ()=>{
        let responce=await axios.get("https://fakestoreapi.com/products")
        setProductsList(responce.data);

        let imgEle=document.querySelector('.sideShowImages')
        let imageSrc=[sideShowImg2,sideShowImg3,sideShowImg4,sideShowImg5]
      let i=0;
       setInterval(()=>{
        imgEle.src=imageSrc[i];
        i++;
        if(i===imageSrc.length){
          i=0;
        }
       },4000)
    }
   const [state]=useContext(userDetails);
  return (
    <div className='allProductsBody'>
    {state.length>0?<AfterLoginTopNavBar></AfterLoginTopNavBar>:<TopNavgation></TopNavgation>}  
    
    <br></br>
    <div className='slideShowImgDiv'>
    <img src={sideShowImg3} className='sideShowImages' alt='offers banners'></img>
    </div>
    <ProductsNavTab></ProductsNavTab>
    {allProductsList.length>0?<div className='productsMainDiv' >
   {allProductsList.map((products)=>{
      return (
        <Link to={`/selectedProduct/${products.id}`} className='productsDiv' title='Shop Now!' >
          <br></br>
        <img src={products.image}  alt={products.title} className='allProductsImgs' width="500px"></img>
        <p>{products.title}</p>
        <h2> ₹{(products.price*81).toFixed()}</h2>
        </Link>
        
      )
      
    })
    
    }
    </div>:<center><img src={loading} alt='loading...'></img></center>}
    
    <footer style={{textAlign:"center"}}>
    <div className='socialMediaIconsMainDiv'>
      <ul>
      <i class="bi bi-google socialMediaIcons" ></i>
      <i class="bi bi-facebook socialMediaIcons"></i>
      <i class="bi bi-instagram socialMediaIcons"></i>
      <i class="bi bi-twitter socialMediaIcons"></i>
      </ul>
    </div> 
    <div >
      <h1>CONTACT</h1>
      <p>Address :Bapu Nagar,Nuzvid,Eluru District,Andhra Pradesh 521201,India</p>
      <p>Gmail : <a href='mohan.bathina99@gmail.com'>mohan.bathina99@gmail.com</a></p>
      <p>Mobile No: +91 9985498834</p>
    </div>
    <div style={{border:"4px solid black",background:"#688298"}}>
      <h1 >Copyright © 2023.<a href='' style={{textDecoration:"lineTrough"}}><u>venkatamohan@bathina</u></a></h1>
    </div>     
    </footer>
    </div>
  )
}

export default Products