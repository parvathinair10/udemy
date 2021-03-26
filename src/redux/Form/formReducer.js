import {USER_REQUEST} from "./actionType";
import {USER_SUCCESS} from "./actionType";
import {USER_ERROR} from "./actionType";

const initialState={
    token:null,
    userId:null,
    error:null,
    loading:false
};

const userRequest=(state,action)=>{
    return{
        ...state,
        error:null,
        loading:true
    }
}

const reducer=(state,action)=>{

    switch(action.type){
        case USER_REQUEST:
            return{
                ...state,
                error:null,
                loading:true
            }
            default: 
                return state;
    }
};
export default reducer;