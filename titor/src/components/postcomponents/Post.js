import React, {useState} from "react";
import './Post.css'
function Post(props) {
    const mapStateToProps = (state) => {
        
        return {

        }
    }
    return (
        <>
            <p className="post-container overflow-ellipsis overflow-scroll break-all ... text-yellow">
                {props.value}
            </p>
        </>
    )
}

export default Post