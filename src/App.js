import React, { Component } from 'react';
import './App.css';
import Graph from './components/Graph';
import Graph1 from './components/Graph1';
import { useForm } from "react-hook-form";


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

    // <div>
    //   <Graph1/>
    // </div>

  );
}

export default App;
