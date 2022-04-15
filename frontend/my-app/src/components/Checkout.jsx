import React ,{useEffect, useState} from 'react'
import "./Checkout.css"
import ReactDOM from 'react-dom';
import App from '../App';
import axios from 'axios';
import Header from './Header';
const Checkout=(props)=>{
    const [data,setData]=useState([])
    const [address,setaddress]=useState('')
    const [modeOfPayemnt,setModeOfPayment]=useState('')
    console.log(props)
    useEffect(async ()=>{
        console.log("checkout componet")
        await axios.post('http://localhost:7000/getUserAddress',{userId:props.userId})
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    },[])
    const showAddress=(e)=>{
        console.log(e.target.value)
        setaddress(e.target.value)
    }
    const modeOfPayment=(e)=>{
        console.log(e.target.value)
        setModeOfPayment(e.target.value)
    }
    const checkOut=async ()=>{
       
        console.log('ccc')
        await axios.post('http://localhost:7000/checkOut',{userId:props.userId,productId:props.urls,deliveryAddress:address,modeOfPayemnt:modeOfPayemnt})
            .then((res)=>{
                console.log(res)
                ReactDOM.render(
                    <Checkout urls={props.url} user={props.user} userId={props.userId}/>,document.getElementById("root")
                )
            }
            )
            alert('Check Out')
           
            
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
      <select name="address" id="address" onChange={showAddress} >
          <option>Choose delivery address</option>
       {data.map((i,j)=>{
          const address=i.Street+" "+i.Zip+" "+i.City+" "+i.State+" "+i.Country
          return(
              <>    
              <option value={address}>{address}</option>
              </>
          )
      })}

    </select>
    
    <select onChange={modeOfPayment}>
    <option>choose modeof payment</option>
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
