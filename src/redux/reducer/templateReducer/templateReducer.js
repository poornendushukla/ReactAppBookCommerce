import * as Actions from "../../actiontype/actiontype";
import { books } from "../../initialState/template";   

export function getBooksList( state = books,
    action = ""){
        switch(action.type){
            case Actions.GET_BOOK_LIST:
                return {
                    ...state,
                    books:action.payload
                }
            case Actions.GET_CART:
                return {
                    ...state,
                    cart:action.payload
                }
                
            default:
                return {
                    ...state
                }
        }
}
