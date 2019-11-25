import React from 'react';

import JobBox from './JobBox';

class Jobs extends React.Component {
    render() {
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
                        <JobBox />
                        <JobBox />
                        <JobBox />
                        <JobBox />
                    </div>

                    <div class="tab-pane fade " id="jobactive">
                        <JobBox />
                        <JobBox />
                        <JobBox />
                    </div>

                    <div class="tab-pane fade " id="archive">
                        <JobBox />                   
                        <JobBox />
                    </div>
                </div>
            </div>
        )
    } 
}

export default Jobs;