
import React from "react"
import OwnerApp from "../OwnerApp";
import OwnerHeader from "./OwnerHeader";
const OwnerProfile=(props)=>{
    console.log(props)
    const user=props.user;
          const userId=props.userId
      return (
          
         <>
         <OwnerHeader user={user} userId={userId}/>
         Profile page

         <div>Name-{user}</div>
         <div>userId={userId}</div>
         <div>Order History</div>
         </>
      )
}

export default OwnerProfile;