import React, {useState} from "react";
import './Post.css'
function Post(props) {
    const mapStateToProps = (state) => {
        
        return {

        }
    }
    return (
        <>
            <div className="post-container border-2">
                <p className="overflow-ellipsis overflow-hidden ... text-yellow">
                    {props.value}
                </p>
            </div>
        </>
    )
}

export default Post