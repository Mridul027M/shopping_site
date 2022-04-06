import React ,{useState,useEffect} from 'react'
import './CartProductBox.css'
import ReactStars from "react-rating-stars-component";
import App from '../App'
import ReactDOM from 'react-dom';
import axios from 'axios';
import Cart from './Cart.jsx'
import ViewProduct from './ViewProduct';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const CartProductBoxes=(props)=>{
    console.log(props)
    var amount=0;
    const [quan,setQuan]=useState(1)
    const user=props.user;
  const userId=props.userId;

  const viewProduct=(ImageUrl)=>{
    
    ReactDOM.render( 
        
        <ViewProduct user={props.user} url={ImageUrl}  userId={props.userId}/>
        
  ,document.getElementById('root'))
  }
   const checkOut=async ()=>{
    alert('Check Out')
    await axios.post('http://localhost:7000/checkOut',{userId:userId,productId:props.urls})
        .then((res)=>{
            console.log(res)
        }
        )

   }
    const removeFromCart=async (e)=>{
         
            await axios.post('http://localhost:7000/removeFromCart',{userId:userId,productId:e.target.value})
        .then((res)=>{
            console.log(res)
            ReactDOM.render(
                <Cart user={props.user} userId={props.userId}/>
            ,document.getElementById('root')
            )
         })
        

        
        //console.log(e.target.value)
        
    }
  return (<>
      {
          console.log(props.urls.length)
      }
      {props.urls.map((i,j)=>{
        var temp=Number(i.Price)
        amount=amount+temp
      })}
     <button type="button" onClick={checkOut} >Check Out: Total ammount: {amount}</button>
     
        <div class="ro center">
         {props.urls.map((i,j)=>{
              
              return (<><div class="cent">
                  <img src={i.ImageUrl} alt={j+1}  width="200px" height="200px"/>
                  <h5>{i.Name}</h5>
                  <div>
                      <span><ReactStars
                    count={5}
                    isHalf={true}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                    value={i.Rating/i.RatingCount}
                    /></span>
                    <span>{i.Rating/i.RatingCount}</span>
                  </div>
                  <input type='number' value={quan} name="quantity" onChange={(e)=>{setQuan(e.target.value)}}></input>
                 
                  <div>
                      <button className='button-24 mar' onClick={()=>viewProduct(i)}>
                          View Product
                      </button>
                      <button className='button-24 mar' value={i._id} onClick={removeFromCart}>
                          remove from Cart
                      </button>
                      
                  </div>
                  </div>
              </>)
              
              })
      }
      </div>

     </>
  );
}

export default CartProductBoxes;
