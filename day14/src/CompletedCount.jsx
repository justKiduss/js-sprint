function CompeletedCount(props){
const completed=props.todos.filter((todo)=>(todo.done)).length;
const total=props.todos.length;
    return(
        <div>
<p>Completes tasks :{completed}/{total}</p>
        </div>
    )
}
export default CompeletedCount;