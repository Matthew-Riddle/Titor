import React, {Component, useState} from "react";
import './Post.css'

class NewPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }

        this.handleOnChange = this.handleOnChange.bind(this)
    }
    handleOnChange(event) {
        console.log(event.target.value)
        this.setState({
            value: event.value
        })
    }
    render() {
        return(
            <div className="new-post">
                <textarea className="text-box" name="newPost" placeholder="tell us something..." value={this.state.value} onChange={this.handleOnChange}></textarea>
            </div>
        
        )
    }
}

export default NewPost