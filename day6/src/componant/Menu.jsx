import React from 'react';
import { NavLink } from "react-router-dom"

function Menu() {
    return (
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/page2'>Page 2</NavLink>
        </>
    )
}
export default Menu