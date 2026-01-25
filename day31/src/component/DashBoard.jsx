import {useState} from "react";
import useMovie from "../hook/useMovie";

export default function DashBoard({onSearch}){
    const {data,loading,error}=useMovie();
    return(
        <>
            <div>
               {data.map((data)=>(
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.original_title}/>
                    <p>{data.original_title}</p>
                </div>
               ))}
            </div>
        </>
    )
}