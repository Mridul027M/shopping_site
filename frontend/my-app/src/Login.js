import React, { useState } from 'react'
import ReactDom from 'react-dom'
import App from './App'
import OwnerApp from './OwnerApp'
import axios from 'axios'
import './Login.css'
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap'
import {BrowserRouter,Link,Route,Router,useHistory,Routes} from 'react-router-dom'
var r=[];
var user='',userId=''
const Login = () => {
    const[loginData,setLoginData]=useState({email:'',password:''})
    const[regData,setRegData]=useState({regEmail:'',regPassword:'',regName:''})
   
    const[OwnerLoginData,setOwnerLoginData]=useState({email:'',password:''})
    const[StoreRegData,setStoreRegData]=useState({regEmail:'',regPassword:'',regName:''})


    const [n,setName]=useState(" ")
    const [customer,setCustomer]=useState(1)
    
    
      const getData=(e)=>{
        const {name,value}=e.target;
        setLoginData((data)=>({
          ...data,[name]:value
        }))
         console.log(loginData)
  }

  const getOwnerData=(e)=>{
    const {name,value}=e.target;
    setOwnerLoginData((data)=>({
      ...data,[name]:value
    }))
     console.log(OwnerLoginData)
  }

  const getRegData=(e)=>{
    const {name,value}=e.target;
    setRegData((data)=>({
      ...data,[name]:value
    }))
    console.log(regData)
  }
  const getStoreRegData=(e)=>{
    const {name,value}=e.target;
    setStoreRegData((data)=>({
      ...data,[name]:value
    }))
    console.log(StoreRegData)
  }
  const login=async ()=>{
    console.log(loginData)
    await axios.post('http://localhost:7000/userLoginConf',{loginData})
    .then((res)=>{
      console.log(res.data._id)
      user=res.data.Name
        
      userId=res.data._id
      
      ReactDOM.render( 
        
              <App user={res.data.Name} userId={res.data._id} />
              
    ,document.getElementById('root'))
    })
  }
  const ownerLogin=async ()=>{
    console.log(loginData)
    await axios.post('http://localhost:7000/OwnerLoginConf',{OwnerLoginData})
    .then((res)=>{
      console.log(res.data._id)
      user=res.data.Name
        
      userId=res.data._id
      
      ReactDOM.render( 
        
              <OwnerApp user={res.data.Name} userId={res.data._id} />
              
    ,document.getElementById('root'))
    })
  }
const getCustomerLogin=()=>{
  setCustomer(1)
}
  const register=async ()=>{
    console.log("clicked reg button")
      await axios.post("http://localhost:7000/userRegistration",{regData})
      .then((res)=>{
         console.log(res)
      })
  }
  const registerOwner=async ()=>{
    console.log("clicked reg button")
      await axios.post("http://localhost:7000/OwnerRegistration",{StoreRegData})
      .then((res)=>{
         console.log(res)
      })
  }
  return (<>
  <div className='main'>
  <div className='customer'>
      Customers
        <div className='cont'>
          
          <div className="login">
               
                <input placeholder='E-mail' name='email' value={loginData.email} onChange={(e)=>getData(e)}></input>
                
                <input placeholder='Password' name='password' value={loginData.password} onChange={(e)=>getData(e)}></input>
                
                <Button onClick={login}>Login</Button>
                
             
              </div>
            
             
              </div>
              <div className='register'>
                <input placeholder='Email' name="regEmail" value={regData.regEmail} onChange={getRegData}></input>
                <input placeholder='Name'  name='regName' value={regData.regName} onChange={getRegData}></input>
                <input placeholder='Password'  name='regPassword' value={regData.regPassword} onChange={getRegData}></input>
                <Button onClick={register}>Register</Button>
              
              </div>
             
             
  </div>  
  <div className='storeOwner'>
    Store Owners
  <div className='cont'>
           
           <div className="login">
              
              <input placeholder='E-mail' name='email' value={OwnerLoginData.email} onChange={(e)=>getOwnerData(e)}></input>
              
              <input placeholder='Password' name='password' value={OwnerLoginData.password} onChange={(e)=>getOwnerData(e)}></input>
              
              <Button onClick={ownerLogin}>Login</Button>
              
           
            </div>
            
             </div>
             <div className='register'>
               <input placeholder='Email' name="regEmail" value={StoreRegData.regEmail} onChange={getStoreRegData}></input>
               <input placeholder='Name'  name='regName' value={StoreRegData.regName} onChange={getStoreRegData}></input>
               <input placeholder='Password'  name='regPassword' value={StoreRegData.regPassword} onChange={getStoreRegData}></input>
               <Button onClick={registerOwner}>Register</Button>
             
             </div>
    </div>         
             
    </div>
              </>
    )
}

export default Login
export {user,userId}



/**
 <div className="login">
               
               <input placeholder='E-mail' name='email' value={loginData.email} onChange={(e)=>getData(e)}></input>
               
               <input placeholder='Password' name='password' value={loginData.password} onChange={(e)=>getData(e)}></input>
               <BrowserRouter>
               <Link to='/app'>
               <button onClick={login}>Login</button>
               </Link></BrowserRouter>
            
             </div>
             
              </div>
              <div className='register'>
                <input placeholder='Email' name="regEmail" value={regData.regEmail} onChange={getRegData}></input>
                <input placeholder='Name'  name='regName' value={regData.regName} onChange={getRegData}></input>
                <input placeholder='Password'  name='regPassword' value={regData.regPassword} onChange={getRegData}></input>
                <button onClick={register}>Register</button>
              
              </div> */