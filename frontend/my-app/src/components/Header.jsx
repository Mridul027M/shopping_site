import React from 'react'
import ReactDOM from 'react-dom';
import Login from '../Login'
import App from '../App'
import HomeApp from '../HomeApp';
import Profile from './Profile';
import Cart from './Cart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Button } from 'react-bootstrap'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
            ReactDOM.render(
                <Cart user={props.user} userId={props.userId}/>
            ,document.getElementById('root')
            )
        }
        const profile=()=>{
            if(props.userId){
                console.log("profile")
            ReactDOM.render(
            <Profile user={props.user} userId={props.userId}/>
            ,document.getElementById('root'))
          
            }
            else if(props.userId===undefined){
                alert("Login to view profile page")
            }
            }

     return (
         <>
         <div className='nav' >
             <div className="icon">
             <AccountCircleIcon onClick={profile} style={{fontSize:50}}></AccountCircleIcon>
         </div>

        
        <div className='butt'>
         
           <div class="cart">
           <ShoppingCartIcon onClick={cart}style={{fontSize:30}}></ShoppingCartIcon>
        
           </div>
           <div>
           {(() => {
              if (props.userId){
                  console.log("logged in")
                  return(
                <button className='logout button-62' onClick={logout}>Logout</button>
                
                )
                
              }

              else if(props.user===undefined){
                console.log("logged out")
                return(
                <button className='login button-62' onClick={login}>LogIn</button>)
              }
              
           
            })()}
           </div>
         
         
         
                  
         </div>
         </div>
         </>

     )
}
export default Header