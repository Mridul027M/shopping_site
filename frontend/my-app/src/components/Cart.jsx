import React ,{useState,useEffect} from 'react'
import './Medicine.css';
import App from '../App'
import './Cart.css'
import Header from './Header';
import ProductBoxes from './ProductBoxes';
import CartProductBoxes from './CartProductBoxes';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Header from './Header';
const Cart=(props)=>{
  const [data,setData]= useState([])
     
    console.log(props)
    useEffect( ()=>{
      axios.post('http://localhost:7000/getCartProducts',{userId:props.userId})
                  .then((res)=>{
                            console.log(res.data)
  
                            setData(res.data)
                            
                            
                  })
    },[])
  return (<>
<<<<<<< HEAD
  <Header user={props.user} userId={props.userId}/>

    <div >
     Cart
    </div>
=======
  {/* <App user={props.user} userId={props.userId}/> */}
  <Header user={props.user} userId={props.userId} />
  <div className='con'>
    <h3>
      Your Cart
    </h3>
>>>>>>> 8ecf4d07013636421fca1fc45b1a1f70832d09ca
    <div >
      
    <CartProductBoxes urls={data} user={props.user} userId={props.userId}/>
    </div>
    </div>
    </>
  );
}

export default Cart;
