import React from "react";

class Form extends React.Component{
    render(){
        return (
            <form onSubmit = {this.props.getPeople}>
                <h3>
                FirstName<input type = "text" name = "firstName" placeholder = "eg. John"/>
                LastName<input type = "text" name = "lastName" placeholder = "eg. Smith"/>
                State<input type = "text" name = "state" placeholder = "eg. CA"/>
                <input type = 'submit' value = "Submit"/>
                </h3>
                
            </form>
        );
    }
}

export default Form;