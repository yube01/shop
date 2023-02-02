import { actionTypes } from "../constant/actionTypes";



const initialState = {
    products : [
        {
            id:1,
            category: "new"
        }
    ]
}

export const productReducer = (state = initialState,{type,payload}) =>{

    switch ({type}) {
        case actionTypes.SET_PRODUCTS:
            
            return state;
    
        default:
            return state;
    }

}