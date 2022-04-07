import { ImageListItemBar } from '@material-ui/core';
import React,{useEffect, useState} from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
import {Carousel} from 'react-bootstrap';
// import './Slideshow.css'
const Slideshow=(props)=>{
    // const images=[]
   
    console.log(props)
    console.log(props.urls.Image)
    // useEffect(()=>{
    //     props.urls.map((i,j)=>{
            
    //         images.push({url:i.ImageUrl})
    //     })
    //     console.log(images)
    // },[])
  return (<>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.urls[0].ImageUrl} width="800px" height="400px"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.urls[1].ImageUrl} width="800px" height="400px"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.urls[2].ImageUrl} width="800px" height="400px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </>
  )
}

export default Slideshow