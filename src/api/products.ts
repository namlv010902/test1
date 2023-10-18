import { IProduct } from "../common/product"
import { instance } from "./config"

export const getProducts =()=>{
    return instance.get("products")
}
export const getProduct =(id:string)=>{
    return instance.get("products/"+id)
}
export const removeProducts =(id:string)=>{
    return instance.delete("products/"+id)
}
export const addProducts =(data:IProduct)=>{
    return instance.post("products/",data)
}
export const updateProducts =(id:string,data:IProduct)=>{
    return instance.patch("products/"+id,data)
}