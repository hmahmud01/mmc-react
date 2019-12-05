import React from 'react';

import JobBox from './JobBox';

class Jobs extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: {
                jobs: [
                    {
                        all: [{
                            id: 1, 
                            title: "something",
                            subtitle: "subsomething",
                            status: [
                                {
                                    key: "Applied",
                                    value: 84
                                },
                                {
                                    key: "Not Review",
                                    value: 14
                                },
                                {
                                    key: "passed",
                                    value: 3
                                },
                                {
                                    key: "tagged",
                                    value: 2
                                },
                                {
                                    key: "rejected",
                                    value: 9
                                }
                            ],
                            active: "3 Days Ago"
                        },{
                            id: 2, 
                            title: "Happening now",
                            subtitle: "sub inspector",
                            status: [
                                {
                                    key: "Applied",
                                    value: 84
                                },
                                {
                                    key: "Not Review",
                                    value: 14
                                },
                                {
                                    key: "passed",
                                    value: 3
                                },
                                {
                                    key: "tagged",
                                    value: 2
                                },
                                {
                                    key: "rejected",
                                    value: 9
                                }
                            ],
                            active: "4 Days Ago"
                        },{
                            id: 3, 
                            title: "Not Now",
                            subtitle: "Joshim",
                            status: [
                                {
                                    key: "Applied",
                                    value: 84
                                },
                                {
                                    key: "Not Review",
                                    value: 14
                                },
                                {
                                    key: "passed",
                                    value: 3
                                },
                                {
                                    key: "tagged",
                                    value: 2
                                },
                                {
                                    key: "rejected",
                                    value: 9
                                }
                            ],
                            active: "5 Days Ago"
                        }],
                        active: [{
                            id: 3, 
                            title: "Not Now",
                            subtitle: "Joshim",
                            status: [
                                {
                                    key: "Applied",
                                    value: 84
                                },
                                {
                                    key: "Not Review",
                                    value: 14
                                },
                                {
                                    key: "passed",
                                    value: 3
                                },
                                {
                                    key: "tagged",
                                    value: 2
                                },
                                {
                                    key: "rejected",
                                    value: 9
                                }
                            ],
                            active: "5 Days Ago"
                        }],
                        archieve:[{
                            id: 1, 
                            title: "something",
                            subtitle: "subsomething",
                            status: [
                                {
                                    key: "Applied",
                                    value: 84
                                },
                                {
                                    key: "Not Review",
                                    value: 14
                                },
                                {
                                    key: "passed",
                                    value: 3
                                },
                                {
                                    key: "tagged",
                                    value: 2
                                },
                                {
                                    key: "rejected",
                                    value: 9
                                }
                            ],
                            active: "3 Days Ago"
                        },{
                            id: 2, 
                            title: "Happening now",
                            subtitle: "sub inspector",
                            status: [
                                {
                                    key: "Applied",
                                    value: 84
                                },
                                {
                                    key: "Not Review",
                                    value: 14
                                },
                                {
                                    key: "passed",
                                    value: 3
                                },
                                {
                                    key: "tagged",
                                    value: 2
                                },
                                {
                                    key: "rejected",
                                    value: 9
                                }
                            ],
                            active: "4 Days Ago"
                        }]
                    }
                ]
            }
        }
    }

    render() {
        var jobs = this.state.data.jobs.map(function(item){
            return item.all.map(function(item){
                return <JobBox id={item.id} title={item.title} subtitle={item.subtitle} status={item.status} active={item.active} />
            })           
        });

        var jobsActive = this.state.data.jobs.map(function(item){
            return item.active.map(function(item){
                return <JobBox id={item.id} title={item.title} subtitle={item.subtitle} status={item.status} active={item.active} />
            })           
        });

        var jobsArchieve = this.state.data.jobs.map(function(item){
            return item.archieve.map(function(item){
                return <JobBox id={item.id} title={item.title} subtitle={item.subtitle} status={item.status} active={item.active} />
            })           
        });
        return(
            <div class="job-page-area">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#all" data-toggle="tab">All</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#jobactive" data-toggle="tab">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#archive" data-toggle="tab">Archive</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="all">
                        {jobs}
                    </div>

                    <div class="tab-pane fade " id="jobactive">
                        {jobsActive}
                    </div>

                    <div class="tab-pane fade " id="archive">
                        {jobsArchieve}
                    </div>
                </div>
            </div>
        )
    } 
}

export default Jobs;