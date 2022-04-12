import React ,{useEffect, useState} from 'react'
import "./Checkout.css"
import ReactDOM from 'react-dom';
import App from '../App';
import axios from 'axios';
const Checkout=(props)=>{
    const [data,setData]=useState([])

    console.log(props)
    useEffect(async ()=>{
        console.log("checkout componet")
        await axios.post('http://localhost:7000/getUserAddress',{userId:props.userId})
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    },[])

    const checkOut=async ()=>{
        alert('Check Out')
        await axios.post('http://localhost:7000/checkOut',{userId:props.userId,productId:props.urls})
            .then((res)=>{
                console.log(res)
                ReactDOM.render(
                    <Checkout urls={props.url} user={props.user} userId={props.userId}/>,document.getElementById("root")
                )
            }
            )
    }
  return (<>
  <App user={props.user} userId={props.userId}/>
  <div className='orderSummary'>
       {props.urls.map((i,j)=>{
           return(
               <>
                    <div className='orderSummaryList'>  {j+1}.
                        <p>
                           { i.Name}
                        </p>
                        <div>
                            {i.Price}
                        </div>
                    </div>
               </>
           )
       })}
   </div>
      Select Address
      <select name="address" id="address" >
       {data.map((i,j)=>{
          const address=i.Street+" "+i.Zip+" "+i.City+" "+i.State+" "+i.Country
          return(
              <>    
              <option value={address}>{address}</option>
              </>
          )
      })}

    </select>
    
    <select>
        <option>
            Cash on Delivery
        </option>
        <option>
            Online pyment
        </option>
    </select>
      


      <button onClick={checkOut}> Click to proceed</button>
   


  </>
  );
}

export default Checkout;
