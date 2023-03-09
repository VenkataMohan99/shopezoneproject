import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TopNavgation from './TopNavgation';
function SelectedProduct() {

  const [selectedProductDetails,setProduct]=useState([]);
  useEffect(()=>{
    selectedProducts();
  },[]);    

  let dispatch=useDispatch();

 const {productId}=useParams();
let storeObj=useSelector((store)=>{
  return store;
})
 let selectedProducts=async()=>{   
const responce=await axios.get(`https://fakestoreapi.com/products/${productId}`);
  const image=responce.data.image;
  const title=responce.data.title;
  const price=responce.data.price;
  const category=responce.data.category;
  const description=responce.data.description;
  const rating=responce.data.rating.rate;
  const count=responce.data.rating.count;
  setProduct({
    image,title,price,category,description,rating,count
  });


}
    
  return (
    <div className='selectedProductBodyDiv'>
      <TopNavgation></TopNavgation>
      <br></br>
      <br></br>

    <div className='selectedProdutDiv'>
        <div>
        <img src={selectedProductDetails.image} alt={selectedProductDetails.title} className="selectedProductImage"></img> 
        </div>
        <div className='selectedProductDetailsDiv'>
        <h1>{selectedProductDetails.title}</h1>
        <h2>₹{(selectedProductDetails.price*81).toFixed()}</h2>
        <h3>{selectedProductDetails.category}</h3>
        <p>{selectedProductDetails.description}</p>
        <p>Rating :{selectedProductDetails.rating}/{selectedProductDetails.count}</p>

        <button type='button' onClick={()=>{
           
            let checkProduct=storeObj.filter((product)=>{return product.id === Number(productId)});
              if(checkProduct.length>0){
                alert("product alredy add to cart")
              }else{
                dispatch({type:"Add",data:{
                  id:Number(productId),
                  title:selectedProductDetails.title,
                  price:(selectedProductDetails.price*81).toFixed(),
                  image:selectedProductDetails.image,
                  count:1
                }});
                alert('Product added to cart successfully');
              }
            
          
           
        }}>Add to Cart</button>
        </div>
    </div>
    </div>
  )
}

export default SelectedProduct