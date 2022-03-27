import React ,{useEffect} from 'react'
import './HomeApp.css';
import Medicine from'./components/Medicine';
import Stationery from './components/Stationery'
import Groceries from './components/Groceries'
import Clothings from './components/Clothings'
import Profile from './components/Profile';
import Header from './components/Header'
import ReactDOM from 'react-dom';

const HomeApp=()=> {
  
   
   const medicine=()=>{
    console.log("med")
    
    ReactDOM.render( 
        
      <Medicine  />
      
,document.getElementById('root'))
}      
   
   const stationery=()=>{
    console.log("stat")
    ReactDOM.render( 
        
      <Stationery />
      
,document.getElementById('root'))
  }
  const clothings=()=>{
    console.log("cloth")
    ReactDOM.render( 
        
      <Clothings />
      
,document.getElementById('root'))
  }
  const groceries=()=>{
     console.log("groceries")
     ReactDOM.render( 
        
      <Groceries />
      
,document.getElementById('root'))
  }
  return (
    <>
    <Header user={undefined} userId={undefined}/>
    <div className="App">
      
    <div className="med" onClick={medicine}> 
      medicine
    </div>
    <div className="stat" onClick={stationery}>
      stationery
    </div>
    <div className="clot" onClick={clothings}>
      clothings
    </div>
    <div className="groc" onClick={groceries}>
      Groceries
    </div>
    </div>
    </>
  );
}

export default HomeApp;
