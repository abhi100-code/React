
/*
Using the state Object : { property: value}
Refer to the state object anywhere in the component by using the 

constructor(){
    super();
    this.state = {
            id:1,
            name: "Rajesh Nagar",
    }
}
print : {this.state.name}

Changing the state Object
To change a value in the state object, use the this.setState() method.

cahnge : this.setState({name: "Akash Nagar"})

Note : state before 16 version use only in class component 
then after 16 hooks introduced so we can also use state in Function component

*/


import React, { Component } from 'react'
import Image_state from '../Image_state';

export class State_class extends Component {

  constructor() {
    super();
    this.state = {
      number: 1,
      name: "Akash Nagar",
      isImage: true
    }
  }


  render() {
    return (
      <div className='container mt-5'>
        <button className='btn btn-primary' onClick={() => this.setState({ name: "Neeraj Patel" })}>Change</button>
        <h1>Hi i am : {this.state.name}</h1>

        <hr />
        <button className='btn btn-primary' onClick={() => this.setState({ number: this.state.number + 1 })}>+</button>
        <h1>{this.state.number}</h1>
        <button className='btn btn-primary' onClick={() => this.setState({ number: this.state.number - 1 })}>-</button>
      
        <hr />
        <button className='btn btn-primary' onClick={() => this.setState({ isImage:false})}>Hide</button>
        <button className='btn btn-primary' onClick={() => this.setState({ isImage:true})}>Show</button>
        <button className='btn btn-primary' onClick={() => this.setState({ isImage:!this.state.isImage})}>Hide/Show</button>
        
        {
          this.state.isImage? <Image_state/> : null
        }
        
      
      </div>
    )
  }
}

export default State_class