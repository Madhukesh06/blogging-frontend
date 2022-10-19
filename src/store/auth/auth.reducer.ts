import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "./auth.types"

const initialValue ={
    loading:false,
    error:false,
    jwt:""
}

let jwt = localStorage.getItem("jwt") || ""

export const authReducer = (state=initialValue,action:any)=>{
        switch(action.type){
            case REGISTER_LOADING :{
                return {
                    ...state,
                    loading:true,
                    error:false
                }
            }
            case REGISTER_ERROR:{
                return {
                    ...state,
                    loading:false,
                    error:true
                }
            }
            case REGISTER_SUCCESS:{
                console.log(action)
                return {
                    ...state,
                    loading:false,
                    error:false,
                    jwt:action.payload.token
                }
            }

              case LOGIN_LOADING :{
                return {
                    ...state,
                    loading:true,
                    error:false
                }
            }
            case LOGIN_ERROR:{
                return {
                    ...state,
                    loading:false,
                    error:true
                }
            }
            case LOGIN_SUCCESS:{
                localStorage.setItem("jwt",JSON.stringify(action.payload))
                return {
                    ...state,
                    loading:false,
                    error:false,
                    jwt:action.payload.token
                }
            }

            case LOGOUT_SUCCESS:{
                
                return {
                    loading:false,
                    error:false,
                    jwt:""
                }
            }
            default: {
                    return state
            }
        }
}