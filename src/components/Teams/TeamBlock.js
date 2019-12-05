import React from 'react';

import {Link} from 'react-router-dom';
import Collaborator from './Collaborator';

class TeamBlock extends React.Component {
    constructor(props){
        super(props);
    }
    render(){        
        var membersURL = "/members/".concat(this.props.id);
        console.log(membersURL);
        var collaborator = this.props.collab.map(function(item){
            return <Collaborator collab={item} />
        })
        return(
            <div className="col-sm-4 team-content">
                <div className="team-block shadow">
                    <div className="jobs-top">
                        <div className="j-left">
                            <h4 className="">{this.props.name}</h4>                             
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <div className="user-side">
                            {collaborator}                            
                        </div>
                        <br />
                        <h5>About</h5>
                        <p>{this.props.about}</p>
                        <br />
                        <p>Organization: {this.props.orgName}</p>
                    </div>
                    <hr />
                    <div className="jobs-bottom dropdown">
                        <div className="user-side">
                            <p>JOBS: {this.props.jobs}</p>
                        </div>                              
                        <Link to={membersURL} className="btn btn-sm btn-info">Members</Link>
                        {/* <Link 
                            to={{
                                pathname: '/members',
                                state: {
                                    id: "12"
                                }
                            }}
                            className="btn btn-sm btn-info">Members</Link>                         */}
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamBlock;