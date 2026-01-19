export default function Header(){
    const header={
        gap:"60px",
        display:"flex",
        alignItems:"center",
        padding:"10px",
        backgroundColor:"blue",
        height:"35px"
    }
    const formStyle={
        display:"flex",
        gap:"8px"
    }
    return(
        <div style={header}>
            <h1>MovieParadise</h1>
            <form style={formStyle}>
                <input type="text"/>
                <input type="submit"/>
            </form>
        </div>
    )
}