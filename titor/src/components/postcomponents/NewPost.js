import React, {Component, useState} from "react";
import './Post.css'
import { connect } from 'react-redux'
import BasicForm from '../atomiccomponents/BasicForm'

class NewPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleKeyStroke = this.handleKeyStroke.bind(this)
        this.mapDispatchToProps = this.mapDispatchToProps.bind(this)
    }

    mapDispatchToProps(dispatch) {

    }

    handleSubmit(event) {
        this.setState({
            value: ""
        })
        console.log("ashdfoas;dfjaskfjasdjf")
        this.props.dispatch({ type: "titor/post", payload: this.state.value })
        event.preventDefault()
    }

    handleKeyStroke(event) {
        if(event.keyCode === 13 && !event.shiftKey) {
            this.setState({
                value: ""
            })
            
            this.props.dispatch({ type: "titor/post", payload: this.state.value })
            event.preventDefault()
        }
    }

    handleOnChange(event) {
        this.setState({
            value: event.target.value
        })
        
    }
    render() {
        return(
            // <div className="new-post">
                // <form id="textbox" className="new-post" onSubmit={this.handleSubmit} onKeyUp={this.handleKeyStroke} isUpdate={false} text={this.state.value}>
                //     <textarea className="text-box" placeholder="tell us something..." value={this.state.value} onChange={this.handleOnChange}></textarea>
                // </form>
            // </div>
            <BasicForm id="textbox" onSubmit={this.handleSubmit} onKeyUp={this.handleKeyStroke} 
            onChange={this.handleOnChange} text={this.state.value}></BasicForm>
        )
    }
}

export default connect()(NewPost)