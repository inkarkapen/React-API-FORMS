import React from "react";

class Form extends React.Component{
    render(){
        return (
            <form onSubmit = {this.props.validate}>
                <h4 className = "formH4">
                FirstName<input type = "text" name = "firstName" placeholder = "eg. John"/>
                LastName<input type = "text" name = "lastName" placeholder = "eg. Smith"/>
                State<input type = "text" name = "state" placeholder = "eg. CA"/>
                <button disabled={this.props.loading}>Submit</button>                </h4>
            </form>
        );
    }
}

export default Form;