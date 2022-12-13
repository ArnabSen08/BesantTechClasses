import React from "react";
import { Component } from "react";

export default class ChangePassword extends Component{
    
    handleChange=(e)=>{
        this.props.Password = e.target.value
    }
    render(){
        return (
            <div>
                {this.props.Password} <br />
                <input type="text" onChange={this.handleChange}/>
            </div>
        )
    }
}