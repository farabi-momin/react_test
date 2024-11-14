import React, {useState} from "react";
import { Component } from "react";
import ReactPlayer from 'react-player'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import courselBtn from "../assets/coursel-btn.png";
import flowersvg from "../assets/Group.png"
import playBtn from "../assets/Play.png"
import fimage from "../assets/221.png"
import fimage2 from "../assets/12.png"

function Frame5(){
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img src={courselBtn} className="sliderBtnN" onClick={onClick}/>      
        );
    }
      
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img src={courselBtn} className="sliderBtnP" onClick={onClick}/>
        );
    }

    return(
        <div className="frame5" id="news">
            <div className="container">
                <h3>Crispy, Every Bite Taste</h3>
                <h1>WHAT SOME OF CUSTOMERS SAY</h1><br/><br/><br/>
                <div className="content">
                    <Slider {...settings}>
                        {data.map((d)=>(
                            <div key={d.name} className="review-card">
                                <div className="review-text">
                                    <p className="review">{d.quote}</p>
                                    <p className="customer-name">{d.name}</p>
                                    <img src={d.image} className="customer-pic"/>
                                    <p className="customer-loc">{d.location}</p>
                                    <hr/>
                                </div>
                                <div className="review-vedio">
                                    <ReactPlayer url={d.vedio} width="100%" height="100%" playIcon={<img src={playBtn}/>}/>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <img src={fimage} className="fimage"/>
        </div>
    )
}
export default Frame5;

const data = [
    {
        name: "KHALID AL DAWSRY",
        location: "Jeddah, Saudi",
        quote: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
        vedio: "https://www.youtube.com/watch?v=1fVwoquZuU4",
        image : "Image.png"
    },
    {
        name: "WALID BIN AHMED",
        location: "Mekkah, Saudi",
        quote: "It was AWSOME!!!!",
        vedio: "https://www.youtube.com/watch?v=dkkPR9el-1I",
        image : "Image.png"
    }
]