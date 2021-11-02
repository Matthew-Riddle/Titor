import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import ContentContainer from './ContentContainer'
function MainContainer() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <div className="flex justify-center relative min-h-screen bg-grey">
                <Navbar />
                <ContentContainer />
            </div>
        </>
    )
}

export default MainContainer