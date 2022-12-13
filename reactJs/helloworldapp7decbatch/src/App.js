import logo from './logo.svg';
import React from 'react';
import './App.css';
import MyFirstComp from './MyFirstComp';
import { Functional } from './Functional';
import Country from './Country';
import Search from './Search';
import { NewFC } from './NewFC';
import ChangePassword from './ChangePassword';

const Countries = ["UK","USA","India","Brazil","Nepal","Portugal","France","Itlay","England"];

function App() {
  var Details = {
    Name : "Arnab",
    Age : 32,
    Desg : "Analyst"
  };

  



  var CountriesName = ["UK","USA","India","Brazil","Nepal","Portugal","France","Itlay"];
  const UserName="Arnab"
  const Password = "OldPassword"
  return (
    <div>
      <MyFirstComp UserDetails = {Details} Countries = {CountriesName}/>
      <Functional UserDetails1 = {Details} />
      <Country CountryList={CountriesName}/>
      <NewFC /> 
      <ChangePassword UserName={this.state.UserName} Password={this.state.Password} />

      <div>
      <h4> I am in Main Page</h4>
        {Countries.filter(country => country.includes('U')).map(filteredName => (
          
          <li>
            {filteredName};
            
          </li>
        ))}
      </div>

    </div>
  );
}

export default App;