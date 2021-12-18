import React, {useState} from "react";
import { connect } from "react-redux";
import Post from "./Post";
const axios = require("axios");
const mapStateToProps = (state) => {
    var postArray = state.posts.map((item) => {
        return {
            id: item.id,
            value: item.value
        }
    })
    return {postArray}
}

async function PostList(post) {
    post = post.postArray
    function createPostList() {
        return post.map(element => {
            return (<Post key={element.id} id={element.id} value={element.content}></Post>)
        }).reverse();
    }
    return (
        <>
            <div className="post-container-overall">
                {createPostList()}
            </div>
        </>
    )
}
export default connect(mapStateToProps)(PostList)