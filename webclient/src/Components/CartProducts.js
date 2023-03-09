import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import TopNavgation from './TopNavgation';

function CartProducts() {
  useEffect(()=>{
     onLoad();
   
  });
  let storeObj =useSelector((store)=>{    
      return store;
  })
  
   
  let [cartProduct,setProduct]=useState([]);
  let [totalPrice,setPrice]=useState(0);
  let onLoad=()=>{
    
    setProduct(storeObj);
    let allProductPrices=storeObj.map((product)=>{return Number(product.price)});
    let sum=0;
    allProductPrices.map((price)=>{return sum+=price})
    setPrice(sum);
  }
  let dispatch=useDispatch();
  return (
    <div className='cartProductsBodyDiv'>
      <TopNavgation></TopNavgation>
      <h1 style={{backgroundColor:"black",color:"white",textAlign:"center",borderRadius:"10px"}}>Cart Items</h1>
      {cartProduct.length>0? <center style={{ backgroundColor: '#ccbaa5'}}>
     {cartProduct.map((product)=>{
      return <div>
        <table>
          <tbody>
            <tr>
      <th><Link to={`/selectedProduct/${product.id}`}><img src={product.image} alt={product.title} width="200px" height='200px' className='cartImges'></img></Link> </th>
      <th><Link to={`/selectedProduct/${product.id}`}>{product.title}</Link></th>
      <th>{'₹'+product.price}</th>
      <th><select>
          <option>Quantity:1</option>
          <option>2</option>
          <option>3</option>
          </select></th>
      <th><button type='button' className='removeButton'   onClick={()=>{
        
        dispatch({
          type :"Remove", 
          data:{
          id:product.id,
          title:product.title,
        }
        })
      
}}><i className="bi bi-trash-fill" >Remove</i></button></th>
      </tr>
      </tbody>
      </table>
      <br></br>
      <br></br>
      
      </div>
     })}
     <table>
        <tbody>
          <tr style={{backgroundColor:'black',color:'white'}}>
          <th className='totalPriceTh'>Total Price</th>
          <th className='totalPriceTh'>₹{totalPrice}</th>
          <th className='totalPriceTh'><button
          type='button'
          onClick={()=>{
            alert('Order Placed Successfully');
            dispatch({
              type:'Buy'
            })
          }}
          >Buy</button></th>
          </tr>
          
        </tbody>
      </table>
     </center>:  <center><h1>No Cart Items....</h1></center>}
     </div>
  )
}

export default CartProducts