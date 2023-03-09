import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartProducts from './Components/CartProducts';
import Electronics from './Components/Electronics';
import Jewelery from './Components/Jewelery';
import LoginForm from './Components/LoginForm';
import MensClothing from './Components/MensClothing';
import Products from './Components/Products';
import SelectedProduct from './Components/SelectedProduct';
import WomensClothing from './Components/WomensClothing';
import SignupForm from './Components/SignupForm';
import { createContext, useReducer } from 'react';

export const userDetails=createContext();
const initialObj=[]
let reducer=(state,actions)=>{
  console.log()
switch(actions.type){
  case "user login":
    return [state,actions]
    case 'logout':
      return initialObj
      default :
      return state
}
}

function App() {
  const [state,dispatchData]=useReducer(reducer,initialObj);
  return (
    <userDetails.Provider value={[state,dispatchData]}>
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/selectedProduct/:productId' element={<SelectedProduct></SelectedProduct>}></Route>
        <Route path='/mensClothing' element={<MensClothing></MensClothing>}></Route>
        <Route path='/womensClothing' element={<WomensClothing></WomensClothing>}></Route>
        <Route path='/jeweleryProducts' element={<Jewelery></Jewelery>}></Route>
        <Route path='/electronicsProducts' element={<Electronics></Electronics>}></Route>
        <Route path='/cartProducts' element={<CartProducts></CartProducts>}></Route>
        <Route path='/loginForm' element={<LoginForm></LoginForm>}></Route>
        <Route path='/signupForm' element={<SignupForm></SignupForm>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
    </userDetails.Provider>
  );
}

export default App;
