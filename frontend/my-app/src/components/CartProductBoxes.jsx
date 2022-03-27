import React ,{useEffect} from 'react'

import ReactStars from "react-rating-stars-component";
import App from '../App'
import ReactDOM from 'react-dom';
import axios from 'axios';
import ViewProduct from './ViewProduct';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const CartProductBoxes=(props)=>{
    console.log(props)
    const user=props.user;
  const userId=props.userId;

  const viewProduct=(ImageUrl)=>{
    
    ReactDOM.render( 
        
        <ViewProduct user={props.user} url={ImageUrl}  userId={props.userId}/>
        
  ,document.getElementById('root'))
  }
    const removeFromCart=async (e)=>{
         
            await axios.post('http://localhost:7000/removeFromCart',{userId:userId,productId:e.target.value})
        .then((res)=>{
            console.log(res)
        })
        
        
        //console.log(e.target.value)
        
    }
  return (<>
      {
          console.log(props.urls.length)
      }
      {
          props.urls.map((i,j)=>{
              
              return (<><div >
                  <p>{i.Name}</p>
                  <img src={i.ImageUrl} alt={j+1}  width="200px" height="200px"/>
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
                  
                  <div>
                      <button  onClick={()=>viewProduct(i)}>
                          View Product
                      </button>
                      <button value={i._id} onClick={removeFromCart}>
                          remove from Cart
                      </button>
                      
                  </div>
                  </div>
              </>)
              
              })
      }

     </>
  );
}

export default CartProductBoxes;
