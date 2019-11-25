import React from 'react';
import user1 from '../assets/1.png'

class Collaborator extends React.Component{
    render(){
        return(
            <div class="job-lower">
                <img src={user1} alt="user" />
                <img src={user1} alt="user" />
                <img src={user1} alt="user" />
                <button><i class="fas fa-plus"></i></button>
            </div>
        )
    }
}

export default Collaborator;