import React, { useState } from 'react'
import ReactDom from 'react-dom'
import App from './App'
import OwnerApp from './OwnerApp'
import axios from 'axios'
import './Login.css'
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap'
import {BrowserRouter,Link,Route,Router,useHistory,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
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
  <div className='customer container1 col-md-8 mx-auto mt-5 mb-5'>
     <h3><strong>Customer</strong></h3>
        <div className='cont col-md-8 mx-auto'>
          
          <div className="login">

            <div className='col-md-8 mx-auto'>

              <div className="form-outline mb-4">
                <input placeholder='E-mail' name='email' value={loginData.email} onChange={(e)=>getData(e)} type="email" id="form2Example1" className="col-sm-2 form-control" />
                {/* <label className="form-label" for="form2Example1">Email address</label> */}
              </div>

              <div className="form-outline mb-4">
                <input placeholder='Password' name='password' value={loginData.password} onChange={(e)=>getData(e)} type="password" id="form2Example2" className="form-control" />
                {/* <label class="form-label" for="form2Example2">Password</label> */}
              </div>
              <div className="form-outline mb-4">
                
                <Button className="btn-dark" onClick={login}>Login</Button>
              </div>
                
             </div>
              </div>
            
             
              </div>
              <div className='register col-md-8 mx-auto mb-2'>
              <div className='col-md-8 mx-auto'>
              <div className="form-outline mb-4">
                <input placeholder='Email' name="regEmail" value={regData.regEmail} onChange={getRegData} type="email" id="form2Example1" className="col-sm-2 form-control" />
                {/* <label className="form-label" for="form2Example1">Email address</label> */}
              </div>
              <div className="form-outline mb-4">
                <input placeholder='Name'  name='regName' value={regData.regName} onChange={getRegData} type="email" id="form2Example1" className="col-sm-2 form-control" />
                {/* <label className="form-label" for="form2Example1">Email address</label> */}
              </div>
              <div className="form-outline mb-4">
                <input placeholder='Password'  name='regPassword' value={regData.regPassword} onChange={getRegData} type="email" id="form2Example1" className="col-sm-2 form-control" />
                {/* <label className="form-label" for="form2Example1">Email address</label> */}
              </div>
                <Button className="btn-dark" onClick={register}>Register</Button>
                </div>
              
              </div>
             
             
  </div>  
  <div className='storeOwner col-md-8 mx-auto'>
   <h3><strong>Store Owners</strong></h3>
  <div className='cont col-md-8 mx-auto'>
           
           <div className="login col-md-8 mx-auto">
           <div className="form-outline mb-4">
                <input placeholder='E-mail' name='email' value={OwnerLoginData.email} onChange={(e)=>getOwnerData(e)} type="email" id="form2Example1" className="col-sm-2 form-control" />
                {/* <label className="form-label" for="form2Example1">Email address</label> */}
              </div>
              <div className="form-outline mb-4">
                <input placeholder='Password' name='password' value={OwnerLoginData.password} onChange={(e)=>getOwnerData(e)} type="email" id="form2Example1" className="col-sm-2 form-control" />
                {/* <label className="form-label" for="form2Example1">Email address</label> */}
              </div>
              
              <Button className="btn-dark"  onClick={ownerLogin}>Login</Button>
              
           
            </div>
            
             </div>
             <div className='register col-md-8 mx-auto mt-3 mb-3'>
               <div className="col-md-8 mx-auto">
             <div className="form-outline mb-4">
                <input placeholder='Email' name="regEmail" value={StoreRegData.regEmail} onChange={getStoreRegData} type="email" id="form2Example1" className="col-sm-2 form-control" />
                {/* <label className="form-label" for="form2Example1">Email address</label> */}
              </div>
              <div className="form-outline mb-4">
                <input placeholder='Name'  name='regName' value={StoreRegData.regName} onChange={getStoreRegData} type="email" id="form2Example1" className="col-sm-2 form-control" />
                {/* <label className="form-label" for="form2Example1">Email address</label> */}
              </div>
              <div className="form-outline mb-4">
                <input placeholder='Password'  name='regPassword' value={StoreRegData.regPassword} onChange={getStoreRegData} type="email" id="form2Example1" className="col-sm-2 form-control" />
                {/* <label className="form-label" for="form2Example1">Email address</label> */}
              </div>
               
               <Button  className="btn-dark" onClick={registerOwner} >Register</Button>
               </div>
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