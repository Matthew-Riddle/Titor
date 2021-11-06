import React, {Component, useState} from "react";
import './Post.css'
import store from "../../app/store";

class NewPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.unsubscribe = store.subscribe(() => {})
    }
    

    componentWillUnmount() {
        this.unsubscribe()
    }

    handleSubmit(event) {
        store.dispatch({ type: "titor/post", payload: this.state.value })
        this.setState({
            value: ""
        })
        console.log(store.getState())
        event.preventDefault()
    }
    handleOnChange(event) {
        this.setState({
            value: event.target.value
        })
        
    }
    render() {
        return(
            <div className="new-post">
                <form id="textbox" onSubmit={this.handleSubmit}>
                    <textarea className="text-box" name="newPost" placeholder="tell us something..." value={this.state.value} onChange={this.handleOnChange}></textarea>
                </form>
            </div>
        
        )
    }
}

export default NewPost