import React ,{useState,useEffect} from 'react'
import Header from './components/Header';
import ReactDOM from 'react-dom';
import OwnerProfile from './components/OwnerProfile';
import OwnerHeader from './components/OwnerHeader';
import './OwnerApp.css'
import axios from 'axios';
import ProductBoxes from './components/ProductBoxes';
import OwnerProductBoxes from './components/OwnerProductBoxes'
const OwnerApp=(props)=> {
    var photo=''
    console.log(props)
    const [data,setData]=useState([]);
    const [count,setCount]= useState('');
    const [category,setCategory]= useState('');
    const [price,setPrice]= useState('');
    const [name,setName]= useState('');
    const [picture, setPicture] = useState(null);
    const saveImg=(e)=>{
        setPicture(e.target.files[0]);
       
       console.log('picture: ', picture);
    }
    var refresh=1;
    // useEffect(async () => {
    //     await axios.post('http://localhost:7000/getProductImages',{userId:props.userId})
    //         .then((res)=>{
                      
    //         })
    //   }, [refresh]);
    const Refresh=async ()=>{
            console.log("refreshed button clicekd")
            await axios.post('http://localhost:7000/getProductImages',{userId:props.userId})
                .then((res)=>{
                        console.log(res)  
                        setData(res.data)
                })
    }
    const saveItem=async (e)=>{
       e.preventDefault()
       const formData=new FormData()
       
        formData.append('imageTitle', picture, picture.name)
        formData.append('userId',props.userId)
        formData.append('category',category)
        formData.append('price',price)
        formData.append('count',count)
        formData.append('name',name)
       await axios.post('http://localhost:7000/uploadProductImages',formData)
            .then((res)=>{
                      console.log(res);
                      if(refresh==1){
                          refresh=0
                      }
                      else {
                          refresh=1
                      }
            })
    }
    const Cat=(e)=>{
        //console.log(e.target.value)
        setCategory(e.target.value)
    }
    const Price=(e)=>{
        //console.log(e.target.value)
        setPrice(e.target.value)
    }
    const Count=(e)=>{
        //console.log(e.target.value)
        setCount(e.target.value)
    }
    const Name=(e)=>{
        //console.log(e.target.value)
        setName(e.target.value)
    }
    return (
        <>
        
        <OwnerHeader user={props.user} userId={props.userId}/>
       <button onClick={Refresh}>View my products</button>
        <div className="App" >
            <form  onSubmit={saveItem}  encType="multipart/form-data">
                <div><label >category</label>
                <select name="category"  required onChange={Cat}>
                <option value="">Choose category</option>
                    <option value="groc">Groceries</option>
                    <option value="cloth">Clothings</option>
                    <option value="med">Medicine</option>
                    <option value="stat">Stationary</option>
                </select></div>
            <div>
            <label >Name of Product</label>
            <input id='name' type="text" onChange={Name}></input>
            <label >price</label>
            <input id='price' type="number" onChange={Price}></input>
            <label >count</label>
            <input id='count' type="number" onChange={Count}></input>
            </div>
            <div>
            <label >Add Image</label>
            <input type="file" onChange={saveImg}></input>
            </div>
            <div id='submit'>
                <input type='submit' />
            </div>
            </form>
           
          <p id='products'>
                Your Products
            </p>
            <OwnerProductBoxes urls={data} userId={props.userId} />
        </div>
        </>
      );

}

export default OwnerApp;