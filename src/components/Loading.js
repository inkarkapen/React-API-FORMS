import React from "react";

class Loading extends React.Component{
    render(){
        if(this.props.loading === true){
            return (
                <div><img src={require("./loading.gif")} alt="Loading" className="img-responsive"/></div>
            );
        }
    return(<div></div>)
    }
}

export default Loading;