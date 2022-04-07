import React ,{useState,useEffect} from 'react'
import ReactStars from 'react-rating-stars-component'
import App from '../App'
import OwnerApp from '../OwnerApp'
import Header from './Header'


const OwnerViewProduct=(props)=>{
    return(
        <>
       
          <div class="ro center">
  <div class="cent"> <div> Customers Ratings So far
                      <span><ReactStars id="rate0"
                    count={5}
                    isHalf={true}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                    value={props.url.Rating/props.url.RatingCount}
                    /></span>
                    <span id="rate">{props.url.Rating/props.url.RatingCount}</span>
                  </div>
    
    <img src={props.url.ImageUrl}  width="200px" height="200px"/>
    <div>
      Price:  {props.url.Price } 
    </div>
    <div>
     Available Items: {props.url.Count}
    </div>
    <div>
      
    </div>
    
    
  </div>
  <div >
    <p>Comments</p>
    {props.url.Comment.map((i,j)=>{
      return(< >
      <div className='commentSec'>
        <div>{props.userName[j]}</div>
        <ReactStars 
                    count={5}
                    isHalf={true}
                    size={15}
                    edit={false}
                    activeColor="#ffd700"
                    value={i.rating}
                    />
        
        <div>{i.rating}</div>

        <div>{i.comment}</div>
        </div></>
      )
    })}
  </div>
  </div>
       
    
        </>
    )

}

export default OwnerViewProduct;
