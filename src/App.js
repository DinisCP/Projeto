import React, { Component } from 'react';
import './App.css';
import Graph from './components/Graph';
import Graph1 from './components/Graph1';
import { useForm } from "react-hook-form";
import { render } from '@testing-library/react';


function App() {
  const { register, handleSubmit } = useForm() 

  const onSubmit = (data) => {
    console.log(data)
  }

 
  return (

    
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type="file" name="picture" />
      <button>Submit</button>
    </form>  
    
  );
}


export default App;
