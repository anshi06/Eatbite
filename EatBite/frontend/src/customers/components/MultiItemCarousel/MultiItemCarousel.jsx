import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";
import { topMeels } from "../../../Data/topMeels";
const responsive= [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 6,
      
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      
    }
  }
]
export default class MultipleItemsCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: false,
      responsive
    };
    return (
        <Slider {...settings}>
            {topMeels.map((item)=><CarouselItem image={item.image} title={item.title}/>)}
        </Slider>
    );
  }
}