import React, { useState }  from "react"
import Menu from "../componant/Menu"

function MyButton(){
    let [x, setX ] = useState(0)
    const setXFunction = () =>{
        setX(x++)
    }
    return(
        <>
        <div><Menu /></div>
        <div>Button = {x}</div>
        <button onClick={setXFunction}>Click Here</button>
        </>
    )
}
export default MyButton;