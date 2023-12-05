import { useState } from "react";

function MyDropDown() {
    const [items , setitems] = useState()
    return (
       
        <>
            <div>{items}</div>
            <select name="" id="" onChange={e => setitems(e.target.value)}>
                <option value="01">Option 1</option>
                <option value="02">Option 2</option>
                <option value="03">Option 3</option>
            </select>
        </>
    )
}
export default MyDropDown;