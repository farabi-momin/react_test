import '../index.css'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
function Nav(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className='navbar'>
                <Link to="#home" className='nav-link'>Home</Link>
                <Link to="#news"className='nav-link'>News</Link>
                <Link to="#con" className='nav-link'>Contact</Link>
                <Link to="#about" className='nav-link'>About</Link>
                <Link to="bookTable" className='button nav-link' style={{float:"right", color:"black"}}>Book a Table</Link>
            </div>
        </BrowserRouter>
    )
}
export default Nav