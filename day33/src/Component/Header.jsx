export default function Header({onSearch}){
    const [search,setSearch]=useState("");

    const handleSearch=(e)=>{
        e.preventDefault();
        if(!search.trim()) return
        onSearch(search);
        setSearch("");
    }
    return(
        <>
            <div>
                <form onSubmit={handleSearch}>
                    <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    <button type="submit">search</button>
                </form>
            </div>
        </>
    )
}