import '../index.css'
function Nav(){
    return(
            <div className='navbar'>
                <a href="#home" className='nav-link'>Home</a>
                <a href="#news"className='nav-link'>News</a>
                <a href="#con" className='nav-link'>Contact</a>
                <a href="#about" className='nav-link'>About</a>
                <a href="bookTable" className='button nav-link' style={{float:"right", color:"black"}}>Book a Table</a>
            </div>
    )
}
export default Nav