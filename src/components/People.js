import React from "react";

//if user entered input in loop through an array of people and returns them all in a div tag
class People extends React.Component{
    render(){
        const people = this.props.results;
        if(people !== undefined && people !== "No results Found"){
            const people_list = people.map((person, index) => {
                return (
                    <div key={index} className = "results">
                    <h4>Result#{index+1}</h4>
                    <p key={index+"FirstName"}>FirstName: {person.FirstName}</p>
                    <p key={index+"LastName"}>LastName: {person.LastName}</p>
                    <p key={index+"Address"}>Address: {person.Address}</p>
                    <p key={index+"City"}>City: {person.City}</p>
                    <p key={index+"State"}>State: {person.State}</p>
                    </div>
                )
            })
            return (
                <div>{people_list}</div>
            )
        }
        return(
            <div>
                <h3>{people}</h3>
            </div>
        )
    }
}

export default People;