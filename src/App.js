//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import MainInput from './MainInput';
import Primarybtn from './Primarybtn';

const App = () => {
  const[name , setName] = useState("hello ji")
  return <div>
    <MainInput setName={setName}/>
    <Primarybtn fullName={name}/>     
    {/* <h1>{name}</h1> */}

    
  </div>
}

export default App;

// state controls the property of a component
