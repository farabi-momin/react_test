import React, {Component} from "react";
import { useState } from "react";
import "../index.css"
import burgerPic from "../assets/burger.jpg"
import HideShowTab from "./hideshowTab.jsx"
import parcelVector from "../assets/parcel.png"
import prizeVector from "../assets/prize.png"
import parcel2Vector from "../assets/parcel2.png"
import dishPOster from "../assets/top-view-bell-pepper-pepper-sliced-black-bowl-white-horizontal 2.png"
import mktPlace from "../assets/MarketPlace.png"
class Frame2 extends Component{
    render(){
        return(
            <div className="frame2" id="about">
                <div className="container">
                    <header></header>
                    <img src={mktPlace} className="mktPlace"/>
                    <img src={burgerPic}/>
                    <div className="contentTab"><HideShowTab/></div>
                    <footer>
                        <div className="card">
                            <img src={parcelVector}/>
                            <h3>FAST DELIVERY</h3>
                            <p>Within 30 minutes</p>
                        </div>
                        <div className="card">
                            <img src={prizeVector}/>
                            <h3>ABSOLUTE DINING</h3>
                            <p>BEst buffet restaurant</p>
                        </div>
                        <div className="card">
                            <img src={parcel2Vector}/>
                            <h3>PICKUP DELIVERY</h3>
                            <p>Grad your food order</p>
                        </div>
                    </footer>
                </div>
                <img className="poster" src={dishPOster}/>
            </div>
        )
    }
}
export default Frame2;