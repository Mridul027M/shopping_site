import React from 'react'
import ReactDOM from 'react-dom';
import Login from '../Login'
import OwnerApp from '../OwnerApp'
import HomeApp from '../HomeApp';
import OwnerProfile from './OwnerProfile';
import './Header.css'
const OwnerHeader=(props)=>{
    console.log(props)
    const logout=()=>{
       
        ReactDOM.render(
            <HomeApp/>
        ,document.getElementById('root')
        )}
        const login=()=>{
            ReactDOM.render(
                <Login />
            ,document.getElementById('root')
            )}
        
        const cart=()=>{
            console.log("open cart")
        }
        const profile=()=>{
            console.log("profile")
            ReactDOM.render(
            <OwnerProfile user={props.user} userId={props.userId}/>
            ,document.getElementById('root'))
          }
    
        const addItems=()=>{
            console.log("profile")
            ReactDOM.render(
            <OwnerApp user={props.user} userId={props.userId}/>
            ,document.getElementById('root'))
        }  
     return (
         <>
         <div className='nav' >
             <div onClick={profile}>Hello, {props.user}
             
         </div>
          <button onClick={addItems}>add items</button>
        
        <div className='butt'>
         
           
         {(() => {
              if (props.user){
                  console.log("logged in")
                  return(
                <button className='logout' onClick={logout}>Logout</button>
                
                )
                
              }

              else if(props.user===undefined){
                console.log("logged out")
                return(
                <button className='login' onClick={login}>LogIn/SignIn</button>)
              }
              
           
            })()}
         
         
                  
         </div>
         </div>
         </>
     )
}
export default OwnerHeader