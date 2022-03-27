import React ,{useEffect} from 'react'
import './OwnerProductBoxes.css'
import ReactStars from "react-rating-stars-component";
import App from '../App'
import ReactDOM from 'react-dom';
import axios from 'axios';
import ViewProduct from './ViewProduct';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const ProductBoxes=(props)=>{
    console.log(props)
    const user=props.user;
  const userId=props.userId;

  const viewProduct=(ImageUrl)=>{
    
    ReactDOM.render( 
        
        <ViewProduct user={props.user} url={ImageUrl}  userId={props.userId}/>
        
  ,document.getElementById('root'))
  }
    
        
        
      
  return (<>
      {
          console.log(props.urls.length)
      }
      {
          props.urls.map((i,j)=>{
              
              return (<><div class="cent">
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
                     
                  </div>
                  </div>
              </>)
              
              })
      }

     </>
  );
}

export default ProductBoxes;