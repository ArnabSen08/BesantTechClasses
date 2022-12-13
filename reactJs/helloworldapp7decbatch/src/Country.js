import React from "react";
import Search from "./Search";

const Countries = ["UK","USA","India","Brazil","Nepal","Portugal","France","Itlay","England"];

export default class Country extends React.Component{
    constructor(props){
        console.log("I am Country Component");
        super(props);
    }
    
    render(){
        return(
            <div>
                {this.props.Countries};
                               <br />
                <h4>I am in Country Component</h4>

                <div>
                <h4> I am in Country Component</h4>
        {Countries.filter(country => country.includes('U')).map(filteredName => (
          <li>
            {filteredName};
            
          </li>
          
        ))}
      </div>
      <div>
        <Search c={Countries} />

        </div> 
            </div>
            
        )
    }
}