import axios from "axios"
import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./postTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}


export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data
                dispatch(fetchUsersSuccess(posts))
            }).catch(err => {
                const errMsg = err.message
                dispatch(fetchUsersFailure(errMsg))
            })
    }
}