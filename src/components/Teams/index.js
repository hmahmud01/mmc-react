import React from 'react';
import TeamBLock from './TeamBlock';

import user1 from './assets/1.png';
import user2 from './assets/2.png';
import user3 from './assets/3.png';
import TeamBlock from './TeamBlock';



class Teams extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: [
                {
                    id: 1,
                    name: "team KODOM",
                    orgName: "Organization 1",
                    about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.",
                    jobs: 13,
                    collaborator: [user1, user2, user3]
                },
                {
                    id: 1,
                    name: "team ANACONDA",
                    orgName: "Organization 1",
                    about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.",
                    jobs: 2,
                    collaborator: [user1, user2]
                },
                {
                    id: 1,
                    name: "team ANISTON",
                    orgName: "Organization 1",
                    about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.",
                    jobs: 12,
                    collaborator: [user1, user3]
                },
                {
                    id: 1,
                    name: "team PERVERT",
                    orgName: "Organization 1",
                    about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.",
                    jobs: 9,
                    collaborator: [user1]
                },
                {
                    id: 1,
                    name: "team JOSHIM",
                    orgName: "Organization 1",
                    about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.",
                    jobs: 9,
                    collaborator: [user2, user3]
                }
            ]
        }
    }

    render() {
        var teamList = this.state.data.map(function(item){
            return <TeamBlock id={item.id} name={item.name} orgName={item.orgName} about={item.about} jobs={item.jobs} collab={item.collaborator} />
        })
        return(
            <div className="row m-r-z">   
                {teamList}
            </div>        
        )
    } 
}

export default Teams;