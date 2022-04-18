import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Login from '../Login'
import App from '../App'
import HomeApp from '../HomeApp';
import Profile from './Profile';
import Cart from './Cart';
import axios from 'axios';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'
import {
    Navbar,
    Nav,
    Container,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css'; import { Button } from
// 'react-bootstrap'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Header.css'
const Header = (props) => {
    console.log(props)
    const logout = () => {

        ReactDOM.render(
            <HomeApp/>, document.getElementById('root'))
    }
    const login = () => {
        ReactDOM.render(
            <Login/>, document.getElementById('root'))
    }
    const home=()=>{
        ReactDOM.render(
            <App user={props.user} userId={props.userId}/>, document.getElementById('root'))
    }
    const cart = () => {
        console.log("open cart")
        ReactDOM.render(
            <Cart user={props.user} userId={props.userId}/>, document.getElementById('root'))
    }
    const profile = () => {
        if (props.userId) {
            console.log("profile")
            ReactDOM.render(
                <Profile user={props.user} userId={props.userId}/>, document.getElementById('root'))

        } else if (props.userId === undefined) {
            alert("Login to view profile page")
        }
    }

    return ( <> <div className='fi'><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
           
                <Navbar.Brand  onClick={home} className="brand">FirstKart</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="Clothing">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Category" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <div class="cart">
                        <AccountCircleIcon onClick={profile} style={{color:'white',fontSize:35}}></AccountCircleIcon>
                        <ShoppingCartIcon onClick={cart}style={{fontSize:30}}></ShoppingCartIcon>
                        </div>
                        <div>
                        {(() => {
                        if (props.userId){
                        console.log("logged in")
                        return(
                            <button className='logout button-24' onClick={logout}>Logout</button>

                            )

                                }

                        else if(props.user===undefined){
                         console.log("logged out")
                        return(
                            <button className='login button-24' onClick={login}>Login</button>)
                             }

                             
                        })()}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        {/* <div className='nav' >
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
        </div> */
    } </>

     )
}
export default Header