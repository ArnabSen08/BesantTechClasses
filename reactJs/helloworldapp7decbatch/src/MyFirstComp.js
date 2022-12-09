import React from 'react';

export default class MyFirstComp extends React.Component{
    constructor(props){
        super(props);
        //this.Name="Arnab";
        this.State={Name: "Arnab Sen",
        Age:32}
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.Name] : e.target.value
            
        })
    };

    handleChange1(e){
        this.setState({
            [e.target.Name] : e.target.value
            
        })
    }

    render(){
        console.log(this.props);
        return <div>
            Hello World;
            <br />
            <button>Click ME</button>
            {this.props.UserDetails.Name};
            <br />
            {this.props.Countries};
            {this.State.Name};
            <br/>
            <input type="text" name="Name" onChange={this.handleChange} />
            <br/>
            {this.State.Age};
            <br/>
            <input type="text" name="Age" onChange={this.handleChange1} />
            <br/>
        </div>
    }
}

//Normal Function has local "this" ?? "this" inside function it refers function env
//Arrow function always refers to global "this"