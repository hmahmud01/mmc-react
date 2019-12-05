import React from 'react';

class Collaborator extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <img className="team-photo" src={this.props.collab} alt="user" />
        )
    }
}

export default Collaborator;