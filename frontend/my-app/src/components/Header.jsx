import React from 'react'
import ReactDOM from 'react-dom';
import Login from '../Login'
import App from '../App'
import HomeApp from '../HomeApp';
import Profile from './Profile';
import './Header.css'
const Header=(props)=>{
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
            <Profile user={props.user} userId={props.userId}/>
            ,document.getElementById('root'))
          }

     return (
         <>
         <div className='nav' >
             <div onClick={profile}>Hello, {props.user}
             
         </div>

        
        <div className='butt'>
         <button className='cart' onClick={cart}>Cart</button>
           
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
export default Header