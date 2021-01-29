import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'

import React, { Component } from 'react'

export default class App extends Component {
  state= {
    input:''
  }

  changeHandler = (event) => {
   this.setState({input:event.target.value})

  }
  deleteCharHandler = (index) => {
    const text = this.state.input.split('');

    text.splice(index,1);
    const updatedtext = text.join('');
    this.setState({input: updatedtext})
  };

  render() {
    const charList = this.state.input.split('').map((ch,index) => {
      return <CharComponent character={ch} key={index} clicked={()=> this.deleteCharHandler(index)} />
    })
    return (
      <div>

        <input type="text" placeholder="Enter input" onChange={this.changeHandler.bind(this)} value={this.state.input} />
        <h1>{this.state.input.length}</h1>
        <ValidationComponent length={this.state.input.length} />
        {charList}
        
      </div>
    )
  }
}

