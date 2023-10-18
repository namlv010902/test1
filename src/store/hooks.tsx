import { useContext } from "react";
import { appContext } from "./context";

export const useStore=()=>{
    return useContext(appContext)
}