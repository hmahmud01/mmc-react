import React from 'react';

import user1 from './assets/1.png';
import user2 from './assets/2.png';
import user3 from './assets/3.png';
import user4 from './assets/4.png';
import user5 from './assets/5.png';

class JobStatus extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
                <div class="j-m-box">
                    <h5><img src={user1} alt="User" />{this.props.title}</h5>
                    <h2>{this.props.num}</h2>
                </div>

        )
    }
}

export default JobStatus;