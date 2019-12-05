import React from 'react';

import user1 from '../assets/1.png';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: {
                "name": "Shah Sufian Mahmud",
                "designation": "Executive, Business Development",
                "status": "Applied"
            }
        }
    }
    render(){
        return(
            <div class="candidate-topbar-info">
                <img src={user1} alt="aa" />
                <div class="candidate-topbar-content">
                    <h4>{this.state.data.name}</h4>
                    <p>Position:{this.state.data.designation}</p>
                    <p>Status: {this.state.data.status}</p>
                </div>
            </div>
        )
    }
}

export default Header;