import React ,{useState,useEffect} from 'react'
import ReactStars from 'react-rating-stars-component'
import ReactDOM from 'react-dom';
import App from '../App'
import OwnerApp from '../OwnerApp'
import Header from './Header'


const OwnerViewProduct=(props)=>{
  console.log(props)
  const homePage=()=>{
    ReactDOM.render(
      <OwnerApp user={props.user} userId={props.userId}/>,document.getElementById('root')
    )
  }
  const updateProduct=()=>{
    
  }
    return(
        <>
          <div className='nav1' >
                <div className='ow' >
                    <h2>Hello, {props.user}</h2>
                </div>
                <button className="button-24 bb" onClick={homePage} >Owner Home Page</button>
                
                {(() => {
                    if (props.user) {
                        console.log("logged in")
                        return (
                            <button className='logout button-24 bb1' >Logout</button>
                        )
                    }
                    else if (props.user === undefined) {
                        console.log("logged out")
                        return (
                            <button className='login bb1' >LogIn/SignIn</button>)
                    }
                })()}
                </div>
                
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
    <button onClick={updateProduct}>Update this product</button>
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
