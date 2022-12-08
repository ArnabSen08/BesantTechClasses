import React from 'react';

export default class MyFirstComp extends React.Component{
    render(){
        console.log(this.props);
        return <div>
            Hello World;
            <br />
            <button>Click ME</button>
            {this.props.UserDetails.Name};
            <br />
            {this.props.Countries};
        </div>
    }
}