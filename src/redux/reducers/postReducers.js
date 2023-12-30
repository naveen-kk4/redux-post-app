import { FETCH_POST_FAILURE,FETCH_POST_STARTED,FETCH_POST_SUCCESS } from "../actions/actionTypes";
const initialState = {
    loading:false,
    error:null,
    posts:[]
};


const postReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_POST_STARTED:return {...state,loading:true};
        case FETCH_POST_FAILURE:return {...state,error:action.payload,loading:false,posts:[]};
        case FETCH_POST_SUCCESS:return {...state,posts:action.payload,loading:false,error:null};
        default:return state;

    }
}
export default postReducer;