import React, {useState} from "react";
import phoneVector from "../assets/phoneVector.png"
import parcelVector from "../assets/parcel.png"
import prizeVector from "../assets/prize.png"
import parcel2Vector from "../assets/parcel2.png"
function HideShowTab(){
    const [display, setDisplay] = useState(1);

    const ShowTab = (e)=>{
        setDisplay(e);
    }

    return(
            <div>
                <div className="hideshowtabNav">
                    <button className={display===1? "activeBtn": ""} onClick={()=>ShowTab(1)}>About</button>
                    <button className={display===2? "activeBtn": ""} onClick={()=>ShowTab(2)}>Experience</button>
                    <button className={display===3? "activeBtn": ""} onClick={()=>ShowTab(3)}>Contact</button>
                </div><br/><br/>
                <div className="hideshowtabContent">
                    <div className={display===1? "show": "hide"}>
                        <h1>Exceptional culinary experience and delicious food</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        <div style={{display:"inline"}}>
                            <div className="button" style={{float:"left"}}>ABOUT MORE</div>
                            <img src={phoneVector} style={{width: "20.48px", height: "20.53px", float: "left", margin:"12px 5px 5px 20px"}}/>
                            <p style={{fontFamily:"Roboto", float: "left", margin:"12px 0px"}}>+88 3426 739 485</p>
                        </div>
                    </div>
                    <div className={display===2? "show": "hide"}>
                    <h1>Enjoy Our Peacful Ambience</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        <div style={{display:"inline"}}>
                        </div>
                    </div>
                    <div className={display===3? "show": "hide"}>
                    <h1>Contact Us to Book Your Table</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        <div style={{display:"inline"}}>
                            <img src={phoneVector} style={{width: "20.48px", height: "20.53px", float: "left", margin:"12px 5px 5px 0px"}}/>
                            <p style={{fontFamily:"Roboto", float: "left", margin:"12px 0px"}}>+88 3426 739 485</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default HideShowTab;