import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const NewFC = () => {
    const [name, setName] = useState("Arnab")
    const [age, setAge] = useState("32")
    const [Details,setDetails]=useState({
        Name: "Aadesh", Age:32
    })
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    const handleChange1=(e)=>{
        setAge(e.target.value)
    }
    const handleChange2 = (e) =>{
        setDetails({...Details,
            [e.target.name] : e.target.value
        })
    }

    useEffect(()=>{
        //gets called on every component load
        // render method
        console.log("I am in use effect");
    })

    useEffect(()=>{
        console.log("I am in use effect with empty array");
        // gets called only once
        // best method to make an api call
        // this is the best method to make api call
    },[])

    useEffect(()=>{
        console.log("useEffect with some dependency")
    },[Details.Name])

    useEffect(()=>{
        return()=>{
            // clean up logic
            // componentWillUnmount
        }
    })

    return(
        <div>
            <h2>NewFC code</h2>
            <div>{Details.Name} <input type="text" onChange={handleChange2}/></div><br />
            <div>{Details.Age} <input type="text" onChange={handleChange1} /></div>
        </div>
        
        
    )
}