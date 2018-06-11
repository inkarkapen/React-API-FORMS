import React from "react";

//if user entered input in loop through an array of people and returns them all in a div tag
class People extends React.Component{
    render(){
        const people = this.props.results;
        // if(people.size() < 1){
        //     return(
        //         <div><h3>No results Found</h3></div>
        //     )
        // }
        if(people!==undefined){
            const people_list = people.map((person, index) => {
                return (
                    <p key={index}>{person.FirstName.toLowerCase()}</p>
                )
            })
            return (
                <div>{people_list}</div>
            )
        }
        return(<div></div>)
    }
}

export default People;