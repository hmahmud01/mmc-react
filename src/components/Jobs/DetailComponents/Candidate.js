import React from 'react';

import user1 from '../assets/1.png'

class Candidate extends React.Component{
    render(){
        return(
            <div class="single-box pos-relative">
                <a href="#">
                    <span class="star-status pos-absolute"><i class="fas fa-star"></i> {this.props.rank}</span>
                    <img src={user1} alt="user" />
                    <h6 class="singnle-box-title">{this.props.name}</h6>
                    <h6 class="singnle-box-designation">{this.props.designation}</h6>
                    </a>
            </div>
        )
    }
}

export default Candidate;