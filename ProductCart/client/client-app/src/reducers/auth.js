import {REGISTER_SUCCESS,REGISTER_FAIL,REGISTER_REQUEST} from '../types/types';

const initialState = {
    isAuthenticated: null,
    user: null,
    error:null,
    loading:true
}

function authReducer(state=initialState,action){
    const{type,payload}= action;

    switch (type) {
        case REGISTER_REQUEST:
            return{
                loading:true     
            }
        case REGISTER_SUCCESS:
            return {
               ...state,
               isAuthenticated:true,
               user:payload,
               loading:false 
            }
            
        case REGISTER_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user:null,
                error:payload

            }
    
        default:
            break;
    }

}
