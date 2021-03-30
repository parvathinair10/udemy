//import actionType.js in action.js
import {USER_REQUEST} from "./actionType";
import {USER_SUCCESS} from "./actionType";
import {USER_ERROR} from "./actionType";

import axios from "axios";

export const userRequest=()=>{
    return {
        type:USER_REQUEST
    }
}

export const userSuccess=(users)=>{
    return{
        type:USER_SUCCESS,
        payload:users
    }
}

export const userError=(error)=>{
    return{
        type:USER_ERROR,
        payload:error
    }
}

export const fetchUser = (email, password) => {
    return dispatch => {
        dispatch(userRequest());
        const authData={
            email:email,
            password:password,
            returnSecureToken:true

        }
        axios.post("https://5a33194fbbc9.ngrok.io/users/login",authData)
        .then(response=>{
            console.log(response);
            dispatch(userSuccess(response.data));
        })
        .catch(error=>{
            console.log(error);
            dispatch(userError(error));
        })
    };
};

// axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAbVfdZ7Q-9WcMotU0WEBSpWHe5KEphd2I",authData)
