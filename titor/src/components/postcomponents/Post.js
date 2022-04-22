import React, {Component} from "react"
import { connect } from "react-redux"
import './Post.css'
import BasicForm from '../atomiccomponents/BasicForm'
import BasicButton from "../atomiccomponents/BasicButton"

const mapStateToProps = (state) => {
    var postArray = state.posts.map((item) => {
        return {
            id: item.id,
            value: item.value
        }
    })
    return {postArray}
}
class Post extends Component{

    constructor(props) {
        super(props)

        this.state = {
            isUpdate: false
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)

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

    composedHandleDelete(props) {
        this.props.dispatch({ type: "titor/delete", payload: props.id })
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
                    <BasicButton text="Delete" onClick={()=>this.handleDelete(this.props)}></BasicButton>
                    <BasicButton text="Update" onClick={()=>this.handleUpdate(this.props)}></BasicButton>
            </>
        )
    }
}

export default connect(mapStateToProps)(Post)