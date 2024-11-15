import React, {useState} from "react";
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import courselBtn from "../assets/coursel-btn.png";
import fpic from "../assets/frame3img.png";

function Frame3(){
    const settings = {
        slidesToShow: 3,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    
        return(
            <div className="frame3" id="menu">
                <div className="container">
                    <img className="f3poster" src={fpic}/>
                    <header>
                        <p>&#9632; Crispy, Every Bite Taste</p><br/>
                        <h1>POPULAR FOOD ITEMS</h1>
                    </header><br/><br/><br/><br/><br/><br/><br/><br/>
                    <div className="content">
                        <Slider {...settings}>
                            {data.map((d)=>(
                                <div key={d.name} className = "sliderCard">
                                    <img src={d.image}/><br/>
                                    <h1>{d.name}</h1>
                                </div>
                            ))}
                        </Slider>    
                    </div>
                    
                </div>
            </div>
        )
    
}

const data = [
    {
        name: 'VEGETABLES BURGER',
        image: 'classic-burger.png',
    },
    {
        name: "SPECIAL PIZZA",
        image: 'pizza.png',
    },
    {
        name: "SPECIAL FRENCH FRIES",
        image: 'french-fries.png',
    },
    {
        name: "CUISINE CHICKEN",
        image: 'fried-shrimp.png'
    }
]
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src={courselBtn} className="sliderBtn-n" onClick={onClick}/>      
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src={courselBtn} className="sliderBtn-p" onClick={onClick}/>
    );
  }
export default Frame3;