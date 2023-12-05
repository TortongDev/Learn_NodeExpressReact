import React,{ useState } from "react";
import Menu from "../componant/Menu";

function MyInput (){

    const [message,setMessage] = useState(); 
    return (
        <>
        <Menu />
            <div>Message = {message}</div>
            <input type="text" onChange={e => setMessage(e.target.value)} />
        </>

    )
}
export default MyInput;