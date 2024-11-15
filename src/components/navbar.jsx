import '../index.css'
import icon from "../assets/menu.png"
import icon2 from "../assets/right.png"
import React, {useState} from 'react'
function Nav(){
    const [status, setStatus] = useState(0);

    const openNav = (e)=>{
        setStatus(e);
    }

    return(
        <div>
            <div className='navbar'>
                <a href="#home" className='nav-link'>Home</a>
                <a href="#news"className='nav-link'>News</a>
                <a href="#con" className='nav-link'>Contact</a>
                <a href="#about" className='nav-link'>About</a>
                <a href="#bookTable" className='button nav-link' style={{float:"right", color:"black"}}>Book a Table</a>
            </div>
            <div className='res-navbar'>
                <button className={status===0?'res-navbar-icon':'res-navbar-icon hide'} onTouchStart={()=>openNav(1)}>
                    <img src={icon} style={{height:"100%", width:"100%"}}/>
                </button>
                <a href="#home" className={status===1?'res-nav-link show':'res-nav-link hide'}>Home</a>
                <a href="#news"className={status===1?'res-nav-link show':'res-nav-link hide'}>News</a>
                <a href="#con" className={status===1?'res-nav-link show':'res-nav-link hide'}>Contact</a>
                <a href="#about" className={status===1?'res-nav-link show':'res-nav-link hide'}>About</a>
                <button className={status===1?'res-nav-link show':'res-nav-link hide'} onTouchStart={()=>openNav(0)}><img src={icon2} style={{marginLeft:"48%"}}/></button>
            </div>
        </div>
    )
}
export default Nav