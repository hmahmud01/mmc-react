import React from 'react';

import PersonTile from './PersonTile';

const hrStyle = {
    border: '1px solid'
}

const contentStyle = {
    marginRight: '0'
}

class Members extends React.Component {

    render(){
        return(
            <div class="members-container">
                <div class="head">
                    <h3>Team Members</h3>
                    <div class="pull-right">
                        <a href="" class="btn btn-temp" data-toggle="modal" data-target="#addNewMember"><i class="fas fa-plus"></i> Add New Team Member</a>
                    </div>
                </div>
                <hr style={hrStyle} />
                <div class="content">
                    <div class="row" style={contentStyle}>
                        <div class="col-md-12">
                            <div>
                                <PersonTile />
                                <PersonTile />
                                <PersonTile />
                                <PersonTile />
                                <PersonTile />
                            </div>
                        </div>                
                    </div>
                </div>
            </div>
        )
    }
}

export default Members;