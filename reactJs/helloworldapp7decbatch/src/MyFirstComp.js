import React from 'react';

// 3 phases --> Mounting Phases --> component is loaded in memory
// Updating Phase --> component is updated in this phase, this.setState
// Unmounting Phase --> when you remove comp from memory

// life cycle methods

// mounting phase --> constructor, getDerievedStateFromProps, render, componentdidmount
// updating phase -> getDerievedStateFromProps, ShouldComponentUpdate, render, componentdidmount



export default class MyFirstComp extends React.Component{
    constructor(props){
        console.log("I am in constructor"); //initialization
        super(props);
        //this.Name="Arnab";
        this.State={Name: "Arnab Sen",
        Age:32}
    }

    static getDerievedStateFromProps(state,props){
        console.log("I am in render method");
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.Name] : e.target.value
            
        })
    };

    componentDidMount(){
        console.log("I am in component did mount");
        this.setState({


        })
    }

    shouldComponentUpdate(){
        console.log("I am component should update");
        return true;
    }

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