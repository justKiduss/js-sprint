import favicon from "./favicon.ico"
export default function MovieCard(){
    return(
        <div>
            <img src={favicon}/>
            <div>
                <p>React</p> 
                <p>Rating</p>
            </div>
        </div>
    )
}