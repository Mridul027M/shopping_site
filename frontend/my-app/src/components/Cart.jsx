import React ,{useState,useEffect} from 'react'
import './Medicine.css';
import App from '../App'
import './Cart.css'
import ProductBoxes from './ProductBoxes';
import CartProductBoxes from './CartProductBoxes';
import axios from 'axios';
import ReactDOM from 'react-dom';
const Cart=(props)=>{
  const [data,setData]= useState([])
    console.log(props)
    
  return (<>
  <App user={props.user} userId={props.userId}/>
    <div >
     Cart
    </div>
    <div class="cent">
      <CartProductBoxes urls={props.url} user={props.user} userId={props.userId}/>
    </div>
    </>
  );
}

export default Cart;
