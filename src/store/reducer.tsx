import { IProduct } from "../common/product";
export const initialState:IProduct[] = []
 export const reducer=(state:IProduct[], action:{type:string, payload:IProduct[]})=>{
    console.log("running:...",state, "payload: ",action.payload);
    switch(action.type){
        case"GET_PRODUCTS":
        return action.payload
        case"REMOVE_PRODUCT":
        const productId = action.payload;
        return state.filter(product => product.id !== productId);
        case"ADD_PRODUCT": 
        return state
        case"UPDATE_PRODUCT":
        return state
        default: 
        return state
    }
 }
