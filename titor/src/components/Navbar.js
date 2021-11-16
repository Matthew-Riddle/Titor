import React, {Component, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/titorlogo.png'
import './Navbar.css'
import BasicButton from './atomiccomponents/BasicButton'


class Navbar extends Component {

    constructor(props) {
        super(props)
        this.handlePostClick = this.handlePostClick.bind(this)
    }
    
    handlePostClick() {
        //console.log("initial state: ", store.getState())
    }
    
    render() {
        return (
        <>
            <nav className="flex justify-center bg-blue-light w-3/12">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={logo}></img>
                    </Link>
                    {/* <div className="menu-icon flex" onClick={handleClick}>
                        <i className={click ? "lni lni-exit" : "lni lni-menu"}></i>
                    </div> */}
                     
                    {/* <button className="button bg-green" form="textbox" type="submit" onClick={this.handlePostClick}>
                        <p className="text-yellow">Post</p>
                    </button> */}
                    <BasicButton form="textbox" onClick={this.handlePostClick} text="Post"></BasicButton>
                </div>
            </nav>
        </>
        )
    }
}

export default Navbar