import React from 'react';

import user1 from './assets/1.png'

const icoFont = {
    fontSize: '8px'
}

class PersonTile extends React.Component {
    render(){
        return(
            <div class="jobs-single-box candidate-list">
                <div class="jobs-top shadow team-member-border">
                    <div class="j-left">
                        <img class="candidate-img" src={user1} alt="user" />
                        <div class="candidate-name">
                            <h5 class="jobs-title color-bold font-bold">Mahtasim Rahman<span class="color-normal">Back End Developer <i class="fa fa-circle" style={icoFont} aria-hidden="true"></i> Company Name</span></h5>
                        </div>
                    </div>
                    <div class="j-right">
                        <a href="#" class="btn btn-white btn-sm" data-toggle="modal" data-target="#editMember"><i class="fa fa-edit"></i></a>
                        <a href="#" class="btn btn-white btn-sm" data-toggle="modal" data-target="#deleteMember"><i class="fa fa-trash"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonTile;

