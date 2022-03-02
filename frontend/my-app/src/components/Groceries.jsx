import React ,{useEffect} from 'react'
import './Medicine.css';
import App from '../App'
import ReactDOM from 'react-dom';
const Groceries=(props)=>{
    console.log(props)
  return (<>
  <App user={props.user} userId={props.userId}/>
    <div >
     Groceries
    </div>
    </>
  );
}

export default Groceries;
