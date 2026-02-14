export default function Warning(){
    return(
        <>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"80px",height:"40px"}}>
                <p>are you sure?</p>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"80px",height:"40px"}}>
                    <button>yes</button>
                    <button>Cancel</button>
                </div>
            </div>
        </>
    )
}