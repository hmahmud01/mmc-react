import React from 'react';

import user1 from './assets/1.png';
import FilterArea from './FilterArea';
import CandidateArea from './CandidateArea';
import CandidateModal from './CandidateModal';

class Candidates extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listCandidateData: [
                {
                    name: "SOmething Rahman",
                    designation: "Back End Developer",
                    company: "Company Name",
                    time: "3 hours ago",
                    image: user1
                },
                {
                    name: "Mahtasim Rahman",
                    designation: "Front End Developer",
                    company: "Company Name",
                    time: "3 hours ago",
                    image: user1
                },
                {
                    name: "SOmething Rahman",
                    designation: "Back End Developer",
                    company: "Company Name",
                    time: "3 hours ago",
                    image: user1
                },
                {
                    name: "Mahtasim Rahman",
                    designation: "System Archietect",
                    company: "Company Name",
                    time: "2 hours ago",
                    image: user1
                },
                {
                    name: "SOmething Rahman",
                    designation: "Network Engineer",
                    company: "Company Name",
                    time: "3 hours ago",
                    image: user1
                },
                {
                    name: "Mahtasim Rahman",
                    designation: "Front End Developer",
                    company: "Company Name",
                    time: "6 hours ago",
                    image: user1
                },
                {
                    name: "SOmething Rahman",
                    designation: "Back End Developer",
                    company: "Company Name",
                    time: "2 hours ago",
                    image: user1
                },
                {
                    name: "Mahtasim Rahman",
                    designation: "Dev Ops",
                    company: "Company Name",
                    time: "3 hours ago",
                    image: user1
                }
            ],
            "modalData":{
                "header":{
                    "name": "Shah Sufian Mahmud",
                    "designation": "Executive, Business Development",
                    "status": "Applied"
                },
                "suggestion":[
                    {
                        "id": 1,
                        "img": user1,
                        "name": "Joshim name",
                        "designation": ">Software Engineer",
                        "company": "Soft Tech ltd.",
                        "rank": 4.3
                    },
                    {
                        "id": 1,
                        "img": user1,
                        "name": "KODOM bepary",
                        "designation": ">Software Engineer",
                        "company": "Soft Tech ltd.",
                        "rank": 4.3
                    },
                    {
                        "id": 1,
                        "img": user1,
                        "name": "KANGAL daddy",
                        "designation": ">Software Engineer",
                        "company": "Soft Tech ltd.",
                        "rank": 4.3
                    },
                    {
                        "id": 1,
                        "img": user1,
                        "name": "Joshim name",
                        "designation": ">Software Engineer",
                        "company": "Soft Tech ltd.",
                        "rank": 4.3
                    },
                    {
                        "id": 1,
                        "img": user1,
                        "name": "KODOM bepary",
                        "designation": ">Software Engineer",
                        "company": "Soft Tech ltd.",
                        "rank": 4.3
                    },
                    {
                        "id": 1,
                        "img": user1,
                        "name": "KANGAL daddy",
                        "designation": ">Software Engineer",
                        "company": "Soft Tech ltd.",
                        "rank": 4.3
                    }
                ],
                "descriptionData" : {
                    "profile": {
                        "education": [
                            {
                                "degree": "B.sc in Computer Science & Engineering",
                                "institute": "International Islamic University Chittagong.",
                                "score": "3.526 out of 4.00",
                                "duration": "Mar 2014-Sep 2018"
                            },
                            {
                                "degree": "B.sc in Computer Science & Engineering",
                                "institute": "International Islamic University Chittagong.",
                                "score": "3.526 out of 4.00",
                                "duration": "Mar 2014-Sep 2018"
                            }
                        ],
                        "training": [
                            {
                                "title": "Android Apps Development",
                                "institute": "Top-Up IT Training, LICT, Technoshore Platform, Chittagong.",
                                "duration": "May 2016- Aug 2016"
                            },
                            {
                                "title": "Web Application Development on PHP",
                                "institute": "SEIP Project, BITM, Chittagong.",
                                "duration": "Jan 2018 - Mar 2018"
                            }
                        ],
                        "address": {
                            "name":"Shah Mahmud",
                            "addr": "1155, Didar Mansion, Sitol Jorna R/A, Oxygen,Chittagong, Bangladesh",
                            "linkedin": "linkedin/sajjad014",
                            "email": "sajjad014@yahoo.com"
                        }
                    },
                    "experience":[
                        {
                            "designation": "Executive",
                            "institute": "Adbox Bangladesh Ltd",
                            "duration": "Dec 2016- Aug 2018",
                            "dept":"Business Development",
                            "responsibilites":"Perform requirements analysis and database design.Do research and evaluation on existing and trending technologies and find suitable solutions."
                        },
                        {
                            "designation": "Executive",
                            "institute": "Adbox Bangladesh Ltd",
                            "duration": "Dec 2016- Aug 2018",
                            "dept":"Business Development",
                            "responsibilites":"Perform requirements analysis and database design.Do research and evaluation on existing and trending technologies and find suitable solutions."
                        }
                    ],
                    "video":{
                        "imgURL": "http://img.youtube.com/vi/4EvNxWhskf8/hqdefault.jpg",
                        "videoURL": "http://img.youtube.com/vi/4EvNxWhskf8/hqdefault.jpg"
                    }
                }
            }
        }
    }
    render(){

        return( 
            <div class="candidate-content">
            <div class="row cand-cont-row">
                <FilterArea />
                <CandidateArea data={this.state.listCandidateData} />

                <CandidateModal data={this.state.modalData}/>
            </div>
        </div>   
        )
    }
}


export default Candidates;