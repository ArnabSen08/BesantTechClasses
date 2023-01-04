import React from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export const Enq = () => {
var navigate = useNavigate()
useEffect(()=>{
    setTimeout(()=>{
        navigate('/')},4000)
    },[])
 return (
    <div>
        <Link to="/About">Go to About component</Link>
    </div>
 )
}