import React, {Component, useState} from "react"
import { connect } from "react-redux"
import './Post.css'
import BasicForm from '../atomiccomponents/BasicForm'
import store from '../../app/store'
class Post extends Component{

    constructor(props) {
        super(props)

        this.state = {
            isUpdate: false
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.mapDispatchToProps = this.mapDispatchToProps.bind(this)

    }

    handleUpdate(props) {
        if(this.state.isUpdate) {
            this.props.dispatch({ type: "titor/update", payload: { id: this.props.id, value: this.state.value }})
        }
        this.setState({
            isUpdate: !this.state.isUpdate,
            value: props.value
        })
        
    }

    handleDelete(props) {
        this.props.dispatch({ type: "titor/delete", payload: props.id })
    }

    mapDispatchToProps = (state) => {
        var postArray = state.posts.map((item) => {
            return {
                id: item.id,
                value: item.value
            }
        })
        return {postArray}
    }

    handleOnChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <>
                    <div>
                        {
                            this.state.isUpdate ? <BasicForm id="update" onSubmit={this.handleSubmit} onKeyUp={this.handleKeyStroke} 
                            onChange={this.handleOnChange} text={this.state.value}></BasicForm>:
                            <p className="post-container overflow-ellipsis ... break-all text-yellow">
                                {this.props.value}
                            </p>
                        } 
                    </div>
                    <button className="button bg-green" onClick={()=>this.handleDelete(this.props)}>
                        <p className="text-yellow">Delete</p>
                    </button>
                    <button className="button bg-green" onClick={()=>this.handleUpdate(this.props)}>
                        <p className="text-yellow">Update</p>
                    </button>
                    
            </>
        )
    }
}

export default connect()(Post)