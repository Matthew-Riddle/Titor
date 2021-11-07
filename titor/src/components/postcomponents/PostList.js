import React, {useState} from "react";
import { connect } from "react-redux";
import Post from "./Post";
const mapStateToProps = (state) => {
    var postArray = state.posts.map((item) => {
        return {
            id: item.id,
            value: item.value
        }
    })
    return {postArray}
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

function PostList(post) {
    post = post.postArray
    function something() {
        return post.map(element => {
            return (<Post key={element.id} value={element.value}></Post>)
        });
    }
    return (
        <>
            <div className="post-container">
                {something()} 
            </div>
        </>
    )
}
export default connect(mapStateToProps)(PostList)