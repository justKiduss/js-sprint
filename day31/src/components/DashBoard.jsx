import { useEffect } from "react"
import useMovie from "../hook/useMovie"

export default function DashBoard(){
    useEffect(()=>{
        useMovie().then((res)=>{
            dispatch({
                type:"INIT_FROM_FETCH",
                payload:res.data
            })
        })
    },[])
        return (
            <>
                <div>

                </div>
            </>
        )
}