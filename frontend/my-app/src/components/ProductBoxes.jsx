import React ,{useEffect} from 'react'
import './ProductBoxes.css'
import ReactStars from "react-rating-stars-component";
import App from '../App'
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'
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
    const addToCart=async (e)=>{
        console.log(e.target.value)
        if(props.userId){
            await axios.post('http://localhost:7000/addToCart',{userId:userId,productId:e.target.value})
            .then((res)=>{
                console.log(res)
            })
            alert("added to cart")
        }
          else if(props.userId===undefined){
              alert("Login First")
          }
           
        
        
        //console.log(e.target.value)
        
    }
  return (<>
      {
          console.log(props.urls.length)
      }<div>
        <div class="ro center">
          {props.urls.map((i,j)=>{
              
              return (<><div class="cent">
                  <p>{i.Name}</p>
                  <img src={i.ImageUrl} alt={j+1}  width="200px" height="200px"/>
                  <div className='side'>
                      <span ><ReactStars
                    count={5}
                    isHalf={true}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                    value={i.Rating/i.RatingCount}
                    /></span>
                    <span>{i.Rating/i.RatingCount}</span>
                  </div>
                  
                  <div class="details">
                      <div><VisibilityIcon onClick={()=>viewProduct(i)}/>
                      </div>
                      <div >
                      <AddShoppingCartIcon style={{size:'20px'}} />
                      <button value={i._id} onClick={addToCart} ></button>
                      </div>
                      
                  </div>
                  </div>
                  
              </>)
              
              })
      }
      </div>
    </div>
     </>
  );
}

export default ProductBoxes;
