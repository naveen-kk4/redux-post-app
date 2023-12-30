import { FETCH_POST_STARTED,FETCH_POST_FAILURE,FETCH_POST_SUCCESS } from "./actionTypes";
import axios from "axios";


export const fetchPostStarted=()=>{ return {
    type:FETCH_POST_STARTED,
    
}};

export const fetchPostFailure=(error)=>{
    return {
        type:FETCH_POST_FAILURE,
        payload:error
    }
}

export const fetchPostSuccess=(data)=>{
    return{
    type:FETCH_POST_SUCCESS,
    payload:data
    }
}
export const fetchPosts=()=>{
    return (dispatch)=>{
        dispatch(fetchPostStarted());
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json").then(
         (response)=>dispatch(fetchPostSuccess(response.data))
        ).catch(
         (error)=>dispatch(fetchPostFailure(error.message))
        )
    }
}