import React, {Component, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/titorlogo.png'
import './Navbar.css'
import store from '../app/store'


class Navbar extends Component {

    constructor(props) {
        super(props)
        this.unsubscribe = store.subscribe(() => {
        })
        this.handlePostClick = this.handlePostClick.bind(this)
    }
    
    handlePostClick() {
        console.log("initial state: ", store.getState())
        //store.dispatch({ type: "titor/postbutton", payload: "true" })
    }
    
    componentWillUnmount() {
        this.unsubscribe()
    }
    
    render() {
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
                     
                    <div className="button bg-green" onClick={this.handlePostClick}>
                        <p className="text-yellow"><button form="textbox" type="submit">Post</button></p>
                    </div>
                    
                </div>
            </nav>
        </>
        )
    }
}

export default Navbar