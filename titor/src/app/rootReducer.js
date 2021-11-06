import { combineReducers } from 'redux'

const initialState = {
    postButtonClick: "false",
    posts: [
        { id: 0, value: "First test post" },
        { id: 1, value: "Second test post" },
        { id: 2, value: "Third test post" },
    ]
}

function nextPostId(posts) {
    const maxId = posts.reduce((maxId, post) => Math.max(post.id, maxId), -1)
    return maxId + 1
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case "titor/postbutton":
            return {
                ...state,
                postButtonClick: action.payload,
                posts: [
                    ...state.posts
                ]
            }
        case "titor/post":
            return {
                ...state,
                postButtonClick: state.postButtonClick,
                posts: [
                    ...state.posts,
                    {
                        id: nextPostId(state.posts),
                        value: action.payload
                    }
                ]
            }
    
        default:
            return state
    }

}