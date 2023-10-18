import { useReducer } from "react"
import { initialState, reducer } from "./reducer"
import {appContext} from "./context"
type IProps={
    children?:React.ReactNode
}
export const ProductProvider =({children}:IProps)=>{
    const [products , dispatch] = useReducer(reducer, initialState)
    return <appContext.Provider value={{products,dispatch}} >
    {children}
    </appContext.Provider>
 }