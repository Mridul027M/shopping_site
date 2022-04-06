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
  return (<>
  <App user={props.user} userId={props.userId}/>
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
      



  </>
  );
}

export default Checkout;
