import React from "react"
import App from '../App'
const Profile=(props)=>{
    console.log(props)
    const user=props.user;
          const userId=props.userId
      return (
          
         <>
         <App user={user} userId={userId}/>
         Profile page

         <div>Name-{user}</div>
         <div>userId={userId}</div>
         <div>Order History</div>
         </>
      )
}

export default Profile;