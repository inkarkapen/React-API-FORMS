import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import From from './components/Form';

class App extends Component {

  //function makes an API call and converts data into json object
  //pass event object and prevent it from reloading page
  getPeople = async (e) => {
    e.preventDefault();
    const api_call = await fetch('https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100&d_first=elon&d_last=musk&d_state=la');
    const people = await api_call.json();
    console.log(people.datafinder.results)
  }
  render() {
    return (
      <div className="App">
        <Title/>
        <From getPeople = {this.getPeople}/>
      </div>
    );
  }
}

export default App;
