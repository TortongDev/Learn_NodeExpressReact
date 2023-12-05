function MyFrom(){
    const save = (ev)=>{
        ev.preventDefault()
        console.log('Save Success.');
    }
    return (
        <>
        <form action=""  onSubmit={save} >
            <input type="text" style={{padding:'20px',color:'blue'}}/>
            <button>Submit</button>
        </form>
           
        </>
    )
}
export default MyFrom;