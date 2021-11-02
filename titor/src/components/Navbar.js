import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/titorlogo.png'
import './Navbar.css'
function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const handlePostClick = () => {

    }
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className="flex justify-center bg-blue-light rounded-md w-3/12">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={logo}></img>
                    </Link>
                    {/* <div className="menu-icon flex" onClick={handleClick}>
                        <i className={click ? "lni lni-exit" : "lni lni-menu"}></i>
                    </div> */}

                    <div className="button bg-green" onClick={handlePostClick}>
                        <p className="text-yellow">Post</p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar