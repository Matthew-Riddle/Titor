import React, { Component, useState} from 'react'
import { Link } from 'react-router-dom'
import Post from './postcomponents/Post'
import './ContentContainer.css'
import NewPost from './postcomponents/NewPost'
import PostList from './postcomponents/PostList'
import BasicButton from './atomiccomponents/BasicButton'

function ContentContainer(props) {
        return (
            <>
            
                <div className="content-container bg-blue w-2/4">
                    <div className="alignment-container">
                        <div className="blend-container">
                            <NewPost></NewPost>
                            <div className="button-container">
                                <BasicButton form="textbox" text="Post"></BasicButton>
                            </div>
                        </div>
                        <PostList></PostList>
                    </div>
                </div>
           
            </>
        )
}
export default ContentContainer