import React ,{useEffect} from 'react'
import './Medicine.css';
import App from '../App'
import ReactDOM from 'react-dom';
const Stationery=(props)=>{
    console.log(props)
  return (<>
  <App user={props.user} userId={props.userId}/>
    <div >
     stationery
    </div>
    </>
  );
}

export default Stationery;
