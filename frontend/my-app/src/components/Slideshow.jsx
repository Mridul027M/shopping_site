import React,{useEffect, useState} from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'
const Slideshow=(props)=>{
    const images=[]
   
    console.log(props)
    useEffect(()=>{
        props.urls.map((i,j)=>{
            
            images.push({url:i.ImageUrl})
        })
        console.log(images)
    },[])
  return (<div>
  
  <Slide>
         {images.map((slideImage, index)=> (
             
            <div className="each-slide" key={index}>
              
              <img src={slideImage.url} />
            
            </div>
          ))} 
        </Slide>
        
    
     
    
    </div>
  )
}

export default Slideshow