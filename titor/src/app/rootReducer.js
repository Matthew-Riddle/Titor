import { combineReducers } from 'redux'

const initialState = {
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
                            //return element
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
    
        default:
            return state
    }

}