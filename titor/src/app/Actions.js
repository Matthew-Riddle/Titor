import axios from "axios"

const getPostsFromApi = (profileName) => {
    console.log("why wont this work")
    return axios.get("http://localhost:8080/api/posts")
    .then( res => {
        console.log("we are inside", profileName, res.data)
        return res.data[`${profileName}`].posts
    })
    .catch( error => console.log(error))
}

export function getPosts(profileName) {
    return dispatch => {
        dispatch(getPostsBegin())
        return getPostsFromApi(profileName)
            .then(json => {
                console.log("HEREREREREE", json)
                dispatch(getPostsSuccess(json))
                return json
            })
            .catch(error => {
                dispatch(getPostsFailure(error))
            })
    }
}


export const GET_POSTS_BEGIN = 'GET_POSTS_BEGIN'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const getPostsBegin = () => ({
    type: GET_POSTS_BEGIN
})

export const getPostsSuccess = posts => ({
    type: GET_POSTS_SUCCESS,
    payload: { posts }
})

export const getPostsFailure = error => ({
    type: GET_POSTS_FAILURE,
    payload: { error }
})