import * as Actions from '../../actiontype/actiontype';
import {response} from "../../initialState/signup";

export function getSignup(state = response,
    action = ""){
        switch(action.type){
            case Actions.GET_SIGN_UP:
                return {
                    ...state,
                    response:action.payload
                }
            case Actions.SET_CART:
                return {
                    ...state,
                    responseCart:action.payload
                }
            case Actions.BUY_BOOKS:
                return {
                    ...state,
                    responseBuy:action.payload
                }
            case Actions.GET_LOGIN:
                return {
                    ...state,
                    responseLogin:action.payload
                }
            case Actions.SET_BOOK_UPLOAD:
                return {
                    ...state,
                    responseBookUpload:action.payload
                }
            default:
                return {
                    ...state
                }
        }
}