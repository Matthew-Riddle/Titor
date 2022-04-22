import { combineReducers } from 'redux'
import axios from 'axios'
import { GET_POSTS_BEGIN, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from './Actions'
const initialState = {
    loading: false,
    error: null,
    posts: [
        { id: 0, value: "First test post" },
        { id: 1, value: "Second test post" },
        { id: 2, value: "Third test post" },
    ]
}

// const initialState = axios.get("localhost:8080/api/posts")

function nextPostId(posts) {
    const maxId = posts.reduce((maxId, post) => Math.max(post.id, maxId), -1)
    return maxId + 1
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case "titor/delete":
            return {
                ...state,
                posts:
                    state.posts.filter(item => item.id !== action.payload)
                    
            }
        case "titor/update":
            return {
                ...state,
                posts: [
                    ...state.posts.map((element) =>  { 
                        if(element.id === action.payload.id) {
                            element.value = action.payload.value
                        }
                        return element
                    })
                ] 
                
                    
            }
        case "titor/post":
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: nextPostId(state.posts),
                        value: action.payload
                    }
                ]
            }
        case GET_POSTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload.posts
            }
        case GET_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                posts: [
                    ...state.posts
                ]
            }
    
        default:
            return state
    }

}