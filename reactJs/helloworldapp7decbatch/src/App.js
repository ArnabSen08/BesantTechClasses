import logo from './logo.svg';
import React from 'react';
import './App.css';
import MyFirstComp from './MyFirstComp';

function App() {
  var Details = {
    Name : "Arnab",
    Age : 32,
    Desg : "Analyst"
  };

  var CountriesName = ["UK","USA","India"];
  return (
    <div>
      <MyFirstComp UserDetails = {Details} Countries = {CountriesName}/>

    </div>
  );
}

export default App;