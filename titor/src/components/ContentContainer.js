import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Post from './postcomponents/Post'
import './ContentContainer.css'
import NewPost from './postcomponents/NewPost'
function ContentContainer() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <div className="content-container bg-blue w-2/4 rounded-md">
                <div className="alignment-container">
                    <NewPost></NewPost>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                </div>
            </div>
        </>
    )
}

export default ContentContainer