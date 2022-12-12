import React, { useState } from "react";

// this is based on javascript functions syntax
// there are no lifecycle methods
// We dont have 'this' keyboard

export const Functional = (props) => {
    console.log(props);

    const [Name, setName] = useState("Arnab")

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            {props.UserDetails1.Name}
            <br />
            {Name}<br />
            <input type="text" onChange={handleChange}></input>
        </div>
    )
}
