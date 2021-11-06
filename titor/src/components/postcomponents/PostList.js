import React, {useState} from "react";
import './PostList.css'

const mapStateToProps = (state) => {
    state.posts.map((item) => {
        return {
            id: item.id,
            value: item.value
        }
    })
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

function PostList({ posts }) {
    return (
        <>
            <div className="post-container border-2">
                <p className="overflow-ellipsis overflow-hidden ... text-yellow">
                    {props.content}
                </p>
            </div>
        </>
    )
}
connect(mapStateToProps)(ContentContainer)
export default PostList