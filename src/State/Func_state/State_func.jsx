
/*

React components has a built-in state object.
React is mutable state object
The state object is where you store property values that belong to the component.
When the state object changes, the component re-renders.
The React useState Hook allows us to track state in a function component.

Import:  useState

We initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

var [name,setName]=useState("Rajesh nagar");
{name}

var [mydata,setMydata]=usestate({
        id:"1",
        name:"Rajesh nagar",
        age:33,
        mobile:31548799
});
{mydata.name}

*/


import React, { useState } from 'react'
import Image_state from '../Image_state';

function State_func() {

  var [age,setAge]=useState(35); 
  
  var [data,setData]=useState({
      number: 1,
      name: "Akash Nagar",
      isImage: true
  })

  return (
    <div className='container mt-5'>
        <button className='btn btn-primary' onClick={()=>setAge(36)}>Age</button>
        <h1>My age is : {age}</h1>

        <hr />
        <button className='btn btn-primary' onClick={() =>setData({...data, name: "Neeraj Patel" })}>Change</button>
        <h1>Hi i am : {data.name}</h1>

        <hr />
        <button className='btn btn-primary' onClick={() => setData({...data, number: data.number + 1 })}>+</button>
        <h1>{data.number}</h1>
        <button className='btn btn-primary' onClick={() => setData({...data, number: data.number - 1 })}>-</button>
      
        <hr />
        <button className='btn btn-primary' onClick={() => setData({...data, isImage: false })}>Hide</button>
        <button className='btn btn-primary' onClick={() => setData({...data, isImage: true })}>Show</button>
        <button className='btn btn-primary' onClick={() => setData({...data, isImage: !data.isImage })}>Hide/Show</button>
        
        {
          data.isImage? <Image_state/> : null
        }
    </div>
  )
}

export default State_func