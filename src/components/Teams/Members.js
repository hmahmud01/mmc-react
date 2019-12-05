import React from 'react';

import PersonTile from './PersonTile';
import { useParams as routeParam} from 'react-router-dom';

import user1 from './assets/1.png'

const hrStyle = {
    border: '1px solid'
}

const contentStyle = {
    marginRight: '0'
}

class Members extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    id: 1,
                    name: "NME CANDI",
                    designation: "Backend Developer",
                    company: "Hae Hae Company",
                    img: user1
                },
                {
                    id: 1,
                    name: "Russel Kancho",
                    designation: "Front End Developer",
                    company: "Hae Hae Company",
                    img: user1
                },
                {
                    id: 1,
                    name: "Ilias Rambo",
                    designation: "GENJAM Developer",
                    company: "Hae Hae Company",
                    img: user1
                },{
                    id: 1,
                    name: "NME CANDI",
                    designation: "END END Developer",
                    company: "Hae Hae Company",
                    img: user1
                }
            ]
        }
    }

    sendID(){
        let {id} = routeParam();
        return id;
    }  

    
    render(){
        var personTile = this.state.data.map(function(item){
            return <PersonTile id={item.id} name={item.name} designatio={item.designation} company={item.company} image ={item.img} />
        })
        
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
                                {personTile}
                            </div>
                        </div>                
                    </div>
                </div>
            </div>
        )
    }
}

export default Members;