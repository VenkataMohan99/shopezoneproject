import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let initalObj=[]
let reducer=(currentObj=initalObj,action)=>{
  const type=action.type;
  const plaLoad=action.data;
  // console.log("type:"+type)
  // console.log('plaLoad');
  // console.log(plaLoad) 
  // console.log("current");
  // console.log(currentObj)  
  switch(type){
    case "Add":
    return [...currentObj,plaLoad];
    case "Remove":
      return currentObj.filter((product)=>{return product.id !== plaLoad.id});
      case "Buy" :
      return  initalObj
      default :
      return currentObj 
  }
}

let storeObj=createStore(reducer);
root.render(
  <React.StrictMode>
    <Provider store={storeObj}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
