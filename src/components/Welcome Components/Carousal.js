import React from 'react'
import {Carousel} from 'react-bootstrap'
import img1 from '../../assets/Images/sample1.jpg'
import img2 from '../../assets/Images/sample2.jpg'
import img3 from '../../assets/Images/sample3.jpg'
import '../../App.css'

function MyCarousel()
{
  const imageStyles = {width:"400px", height:"400px", filter:"contrast(50%)"}
    return(
    <Carousel>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={img2}
            alt="First slide"
            style = {imageStyles}
          />
          <Carousel.Caption>
            <h3 >Welcome to ReportHub</h3>
            <p>ReportHub, provided by Tru-Solution for medical diagnostic centre and Lab Management</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={img1}
            alt="Second slide"
            style = {imageStyles}
          />
      
          <Carousel.Caption>
            <h3>Robust Lab Management</h3>
            <p>The Solution offers features and functions such as patient registration, patient information management</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item width={900} height={500} alt="900x500" >
          <img
          style = {imageStyles}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Provides great features for Lab Management</h3>
            <p>Lab report, Bill management, Inventory, etc.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      )
}
export default MyCarousel;