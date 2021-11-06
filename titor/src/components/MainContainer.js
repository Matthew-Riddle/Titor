import React, {Component, useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import ContentContainer from './ContentContainer'
class MainContainer extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <>
                <div className="flex justify-center relative min-h-screen bg-grey">
                    <Navbar />
                    <ContentContainer />
                </div>
            </>
        )
    }
}

export default MainContainer