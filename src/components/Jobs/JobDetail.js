import React from 'react';
import Collaborator from './DetailComponents/Collaborator';
import Applied from './DetailComponents/Applied';
import NotReviewd from './DetailComponents/NotReviewd';
import Passed from './DetailComponents/Passed';
import Tagged from './DetailComponents/Tagged';
import Rejected from './DetailComponents/Rejected';

class JobDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: {
                applied: [
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    },
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    },
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    },
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    },
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    },
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    },
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    }
                ],
                notReviewd: [
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    },
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    },
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    }
                ],
                passed: [
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    },
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    },
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    },
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    }
                ],
                tagged: [
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    }
                ],
                rejected: [
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    },
                    {
                        img: "url",
                        name: "Shah Sufian Mahmud",
                        designation: "Software Engineer @Soft Tech",
                        rank: 4.3
                    }
                ]
            }

        }
    }

    render(){
        return(
            <div class="individual-job-details-area">
                <div class="individual-job-details-top-area">
                    <div class="job-details-top-left-part">
                        <h5 class="font-bold color-bold"> 
                            <i class="fas fa-circle"></i> Business
                                Development(Example) <span>Open: 33Days</span>
                        </h5>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" href="#dashboard" data-toggle="tab">Dashboard</a>
                            </li>
                        </ul>
                    </div>

                    <div class="job-details-top-right-part">
                        <div class="job-upper">
                            <button class="share"><i class="fas fa-share-alt"></i></button>
                            <button class="details">Details</button>
                            <div class="j-edit-opt dropdown">
                                <button>Edit</button>
                                <button class="setting-icon dropdown-toggle" type="button" data-toggle="dropdown"><i class="fas fa-cog"></i></button>

                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li><a href="#">Jobs Ads</a></li>
                                    <li><a href="#">View</a></li>
                                    <li><a href="#">Archive</a></li>
                                </ul>

                            </div>
                        </div>
                        <Collaborator />
                    </div>
                </div>

                    
                <div class="tab-content">
                    <div class="tab-pane active" id="dashboard">
                        <div class="tab-pan-button-wrap">

                            <button><i class="far fa-square"></i>Bulk Actions</button>
                            <button><i class="fas fa-plus"></i>Add Candidates</button>
                            <div class="dropdown">
                                <button class="setting-icon dropdown-toggle" type="button"
                                            data-toggle="dropdown"><i class="fas fa-ellipsis-h"></i></button>

                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li><a href="#">Jobs Ads</a></li>
                                    <li><a href="#">View</a></li>
                                    <li><a href="#">Archive</a></li>
                                </ul>

                            </div>
                        </div>

                        <div class="individual-all-cat-wrap">
                            <Applied data={this.state.data.applied}/>
                            <NotReviewd data={this.state.data.notReviewd}/>s
                            <Passed data={this.state.data.passed}/>
                            <Tagged data={this.state.data.tagged}/>
                            <Rejected data={this.state.data.rejected}/>                            
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default JobDetail;