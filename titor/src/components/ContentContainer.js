import React, { Component, useState} from 'react'
import { Link } from 'react-router-dom'
import Post from './postcomponents/Post'
import './ContentContainer.css'
import NewPost from './postcomponents/NewPost'
import { connect } from 'react-redux'
import PostList from './postcomponents/PostList'

function ContentContainer({props) {
        return (
            <>
            
                <div className="content-container bg-blue w-2/4 rounded-md">
                    <div className="alignment-container">
                        <NewPost></NewPost>
                        <PostList></PostList>
                    </div>
                </div>
           
            </>
        )
}
export default ContentContainer