import React,{useEffect} from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { fetchPostStarted,fetchPostFailure,fetchPostSuccess, fetchPosts } from "../redux/actions/postActions";

const PostApp = ()=>{
    const dispatch = useDispatch();
    const {loading,posts,error} = useSelector((state)=>state);
    useEffect(()=>{
        //without middleWare
        // dispatch(fetchPostStarted());
        // axios.get("https://gauravgitacc.github.io/postAppData/posts.json").then(
        //  (response)=>dispatch(fetchPostSuccess(response.data))
        // ).catch(
        //  (error)=>dispatch(fetchPostFailure(error.message))
        // )


      dispatch(fetchPosts());
    },[])
    return (
        <div>
           {
            posts.length>0 && (
               posts.map((post)=>(
                <div key={post.id}>
                  <p>{post.title}</p>
                  <p>{post.body}</p>
                  <hr/>
                </div>
               ))
            )
           }
        </div>
    )
}
export default PostApp;