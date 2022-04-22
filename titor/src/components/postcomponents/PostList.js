import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import Post from "./Post";
import { getPosts } from "../../app/Actions"

const mapStateToProps = (state) => {
    console.log("state.posts", state.posts)
    if ( state.posts !== undefined ){
        var postArray = state.posts.map((item) => {
            return {
                id: item.id,
                value: item.value
            }
        })
        return {postArray}

    }
}

class PostList extends Component {

    constructor(props) {
        super(props)
        this.createPostList = this.createPostList.bind(this)
    }

    createPostList() {
        console.log("final post array",this.props.postArray)
        return this.props.postArray.map(element => {
            return (<Post key={element.id} id={element.id} value={element.value}></Post>)
        }).reverse();
    }

    componentDidMount() {
        this.props.dispatch(getPosts("brett"))
    }
    render() {
        return (
            <>
                <div className="post-container-overall">
                    {this.createPostList()}
                </div>
            </>
        )
    }
}
export default connect(mapStateToProps)(PostList)