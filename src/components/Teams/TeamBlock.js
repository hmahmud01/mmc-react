import React from 'react';

import user1 from './assets/1.png';
import user2 from './assets/2.png';
import user3 from './assets/3.png';

class TeamBlock extends React.Component {
    render(){
        return(
            <div className="col-sm-4 team-content">
                <div className="team-block shadow">
                    <div className="jobs-top">
                        <div className="j-left">
                            <h4 className="">Team name</h4>                             
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <div className="user-side">
                            <img className="team-photo" src={user1} alt="user" />
                            <img className="team-photo" src={user2} alt="user" />
                            <img className="team-photo" src={user3} alt="user" />
                        </div>
                        <br />
                        <h5>About</h5>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has. </p>
                        <br />
                        <p>Organization: Organization Name</p>
                    </div>
                    <hr />
                    <div className="jobs-bottom dropdown">
                        <div className="user-side">
                            <p>JOBS: 12</p>
                        </div>                        
                        <a className="btn btn-sm btn-info" href="team-members.html">Members</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamBlock;