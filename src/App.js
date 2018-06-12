import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import From from './components/Form';
import People from './components/People';
import Loading from './components/Loading';
import axios from 'axios';

class App extends Component {
  state = {
    results: undefined,
    error: "",
    loading: false
  }

  //function makes an API call and converts data into json object
  //pass event object and prevent it from reloading page
  getPeople = async (e) => {
    e.preventDefault();
    this.setState({
        results: undefined,
        error: "",
        loading: true
      })
    //form data that user inputs
    const firstName = e.target.elements.firstName.value.toLowerCase();
    const lastName = e.target.elements.lastName.value.toLowerCase();
    const state = e.target.elements.state.value.toLowerCase();
    
    //API call. Storing response as JSON object
    axios.get(`https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100&d_first=${firstName}&d_last=${lastName}&d_state=${state}`)
    .then(response => {
      var data = response.data.datafinder.results;
      if(data === undefined){
        data = "No results Found";
      }
      this.setState({
        results: data,
        loading: false
      })
    })
  }
  
  //validates user input
  validate = async (e) => {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const state = e.target.elements.state.value;
    
    if(firstName === "" || lastName === "" || state === ""){
      this.setState({
        error: "Please enter first name, last name, and state"
      })
    }else{
      this.getPeople(e)
    }
  }
  render() {
    return (
      <div className="App">
        <Title/>
        <From validate = {this.validate} loading = {this.state.loading}/>
        <p>{this.state.error}</p>
        <Loading loading = {this.state.loading}/>
        <People results = {this.state.results}/>
      </div>
    );
  }
}

export default App;
