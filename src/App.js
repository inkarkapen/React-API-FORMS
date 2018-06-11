import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import From from './components/Form';
import People from './components/People';

class App extends Component {
  state = {
    results: undefined
  }

  //function makes an API call and converts data into json object
  //pass event object and prevent it from reloading page
  getPeople = async (e) => {
    e.preventDefault();
    //form data that user inputs
    const firstName = e.target.elements.firstName.value.toLowerCase();
    const lastName = e.target.elements.lastName.value.toLowerCase();
    const state = e.target.elements.state.value.toLowerCase();
    
    //API call. Storing response as JSON object
    const response = await fetch(`https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100&d_first=${firstName}&d_last=${lastName}&d_state=${state}`);
    const data = await response.json();
    

    //changing the STATE object, so information on the page updates
    this.setState({
      results: data.datafinder.results
    })
  }
  render() {
    console.log(this.state.results)
    return (
      <div className="App">
        <Title/>
        <From getPeople = {this.getPeople}/>
        <People results = {this.state.results}/>
      </div>
    );
  }
}

export default App;
