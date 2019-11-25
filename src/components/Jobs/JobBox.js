import React from 'react';

import user1 from './assets/1.png';
import user2 from './assets/2.png';
import user3 from './assets/3.png';
import user4 from './assets/4.png';
import user5 from './assets/5.png';

import ShareLink from './ShareLink';

class JobBox extends React.Component {
    render(){
        return(
            <div class="jobs-single-box">
                <div class="jobs-top">
                    <div class="j-left">
                        <a href="individual-job-details.html"><h5 class="jobs-title color-bold font-bold">Business Development Executive<span class="color-normal">Business Development</span></h5></a>
                        <h5 class="jobs-active-day pos-relative">Active: 22 Days</h5>
                    </div>
                    <div class="j-right">
                        <a href="" class="share" data-toggle="modal" data-target="#shareLink"><i class="fas fa-share-alt"></i></a>
                        <div class="j-edit-opt dropdown">
                            <button>Edit</button>
                            <button class="setting-icon dropdown-toggle" type="button" data-toggle="dropdown"><i class="fas fa-cog"></i></button>

                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a href="#">Jobs Ads</a></li>
                                <li><a href="individual-job-details.html">View</a></li>
                                <li><a href="#">Archive</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="jobs-middle">
                    <div class="j-m-box">
                        <h5><img src={user1} alt="User" />Applied</h5>
                        <h2>84</h2>
                    </div>
                    <div class="j-m-box">
                        <h5><img src={user2} alt="User" />Not Review</h5>
                        <h2>33</h2>
                    </div>
                    <div class="j-m-box">
                        <h5><img src={user3} alt="User" />passed</h5>
                        <h2>21</h2>
                    </div>
                    <div class="j-m-box">
                        <h5><img src={user4} alt="User" />tagged</h5>
                        <h2>11</h2>
                    </div>
                    <div class="j-m-box">
                        <h5><img src={user5} alt="User" />rejected</h5>
                        <h2>16</h2>
                    </div>
                </div>
                <div class="jobs-bottom dropdown">
                    <div class="user-side">
                        <img src={user1} alt="user" /><img src={user1} alt="user" /><img src={user1} alt="user" /><button><i class="fas fa-plus"></i></button>
                    </div>
                    <button class="dropdown-toggle" type="button" data-toggle="dropdown">Published</button>

                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="#">Jobs Ads</a></li>
                        <li><a href="individual-job-details.html">View</a></li>
                        <li><a href="#">Archive</a></li>
                    </ul>
                </div>
                <ShareLink />
            </div>
        )
    }
}

export default JobBox;