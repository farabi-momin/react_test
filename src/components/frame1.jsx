import React, {Component} from "react"
import "../index.css"
import Nav from "./navbar.jsx"
import logo from '../assets/nav-logo.png'
import img1 from '../assets/image1.png'
import offer from '../assets/Offer@2x.png'

class Frame1 extends Component{

    render(){
        return(
            <div className="frame1" id="home">
                <header>
                    <img src={logo}/><h3>Restaurant</h3>
                    <Nav/>
                </header>
                <div className="container">
                    <img src={img1} className="f1img"/>
                    <div className="text-area">
                        <h1 className="c1-h1">TASTE THE AUTHENTIC SAUDI CUISINE</h1>
                        <p>Among the best Saudi chefs in the world, serving you something beyond flavor.</p>
                        <button className="button" style={{float:"left", marginTop:"0px"}}><a href="#menu">EXPLORE MENU</a></button>
                    </div>
                    <img className="offer" src={offer}/>
                </div>
            </div>        
        )
    }
}

export default Frame1;