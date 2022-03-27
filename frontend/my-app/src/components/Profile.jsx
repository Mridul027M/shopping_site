import React from "react"
import App from '../App'
import { useState } from "react"
import { Button } from "react-bootstrap"
import './Profile.css'
import axios from "axios"
const Profile=(props)=>{
    console.log(props)

    const [address,setAddress]=useState({street:'',city:'',zip:'',state:'',country:''})
    const getAddressData=(e)=>{
        const {name,value}=e.target;
        setAddress((data)=>({
          ...data,[name]:value
        }))
         console.log(address)
    }
    const user=props.user;
          const userId=props.userId

    const addAddressToUser=async ()=>{
        console.log("button clicked")
        await axios.post('http://localhost:7000/addAddressToUser',{userId:userId,address:address})
        .then((res)=>{
            console.log(res.data)
        })
    }

      return (
          
         <>
         <App user={user} userId={userId}/>
         Profile page

         <div>Name-{user}</div>
         <div>userId={userId}</div>
         <div>Order History</div>
        
            Add Address:
            <div class="form-group">
  <input type="street" 
         class="form-control" 
         id="autocomplete" 
         name="street" value={address.street}
         placeholder="Street" onChange={getAddressData}/>
  
  <input type="city" 
         class="form-control" 
         id="inputCity" 
         name="city" value={address.city}
         placeholder="City" onChange={getAddressData}/>
  
  <input type="state" 
         class="form-control" 
         id="inputState"
         name="state" value={address.state}
         placeholder="State" onChange={getAddressData}/>
  
  <input type="zip" 
         class="form-control" 
         id="inputZip" 
         name="zip" value={address.zip}
         placeholder="Zip" onChange={getAddressData}/>
  
  <input type="county" 
         class="form-control" 
         id="inputCounty" 
         name="country" value={address.country}
         placeholder="County" onChange={getAddressData}/>
  
      <div >
          <Button onClick={addAddressToUser} >Add Address</Button>
      </div>
     </div>
      
         </>
      )
}

export default Profile;