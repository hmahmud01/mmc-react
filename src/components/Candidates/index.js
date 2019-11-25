import React from 'react';
import user1 from './assets/1.png';

class Candidates extends React.Component {
    render() {
        return( 
            <div class="candidate-content">
            <div class="row cand-cont-row">
                <div class="col-md-4 left-cand">
                    <div class="jobs-single-box">
                        <div class="jobs-top">
                            <form class="search-form">
                                <div class="form-group"><input type="text" placeholder="Serach By Keyword" class="form-control" /></div>
                                    <p><i class="fa fa-filter"></i> Filter Option</p>
                                <div class="box">
                                    <label class="col-sm-12 col-form-label">By Active Jobs</label>
                                    <hr class="candidate-filter-hr" />
                                    <div class="col-sm-12">
                                        <div><label> <input type="checkbox" value="" /> <i></i> Back-end Developer </label></div>
                                        <div><label> <input type="checkbox" value="" /> <i></i> Front-end Developer </label></div>
                                        <div><label> <input type="checkbox" value="" /> <i></i> Design Engineer </label></div>
                                    </div>
                                </div>
                                <div class="box">
                                    <label class="col-sm-12 col-form-label">By Pipeline Stages</label>
                                    <hr class="candidate-filter-hr" />
                                    <div class="col-sm-12">
                                        <div><label> <input type="checkbox" value="" /> <i></i> Applied </label></div>
                                        <div><label> <input type="checkbox" value="" /> <i></i> Not Reviewed </label></div>
                                        <div><label> <input type="checkbox" value="" /> <i></i> Passed </label></div>
                                        <div><label> <input type="checkbox" value="" /> <i></i> Tagged </label></div>
                                        <div><label> <input type="checkbox" value="" /> <i></i> Rejected </label></div>
                                    </div>
                                </div>
                                <div class="box">
                                    <label class="col-sm-12 col-form-label">By Basic Criteria</label>
                                    <hr class="candidate-filter-hr" />
                                    <div class="col-sm-12">
                                            <select class="form-control m-b" name="account">
                                                <option>Job Title</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                            <select class="form-control m-b" name="account">
                                                <option>Location</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                            <select class="form-control m-b" name="account">
                                                <option>Experience</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                            <select class="form-control m-b" name="account">
                                                <option>Level Of Education</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                            <select class="form-control m-b" name="account">
                                                <option>Educational Institute</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                            <select class="form-control m-b" name="account">
                                                <option>Skills</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                            <select class="form-control m-b" name="account">
                                                <option>Gender</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                    </div>
                                    
                                </div>
                                <div class="pull-right">
                                    <button class="btn btn-info f-right"><i class="fa fa-plus"></i> Add new Filter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 offset-md-1 right-cand">
                    <div class="right-list">
                        
                        <div class="jobs-single-box candidate-list">
                            <div class="jobs-top">
                                <div class="j-left">
                                    <img class="candidate-img" src={user1} alt="user" />
                                    <div class="candidate-name">
                                        <a data-toggle="modal" data-target="#candidate-details-Modal"><h5 class="jobs-title color-bold font-bold">Mahtasim Rahman. Back End Developer<span class="color-normal">Company Name</span></h5></a>                                            
                                    </div>
                                </div>
                                <div class="j-right">
                                    <p>3 hours ago</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="jobs-single-box candidate-list">
                            <div class="jobs-top">
                                <div class="j-left">
                                    <img class="candidate-img" src={user1} alt="user" />
                                    <div class="candidate-name">
                                        <a data-toggle="modal" data-target="#candidate-details-Modal"><h5 class="jobs-title color-bold font-bold">Mahtasim Rahman. Back End Developer<span class="color-normal">Company Name</span></h5></a>                                            
                                    </div>
                                </div>
                                <div class="j-right">
                                    <p>3 hours ago</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="jobs-single-box candidate-list">
                            <div class="jobs-top">
                                <div class="j-left">
                                    <img class="candidate-img" src={user1} alt="user" />
                                    <div class="candidate-name">
                                        <a data-toggle="modal" data-target="#candidate-details-Modal"><h5 class="jobs-title color-bold font-bold">Mahtasim Rahman. Back End Developer<span class="color-normal">Company Name</span></h5></a>                                            
                                    </div>
                                </div>
                                <div class="j-right">
                                    <p>3 hours ago</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="jobs-single-box candidate-list">
                            <div class="jobs-top">
                                <div class="j-left">
                                    <img class="candidate-img" src={user1} alt="user" />
                                    <div class="candidate-name">
                                        <a data-toggle="modal" data-target="#candidate-details-Modal"><h5 class="jobs-title color-bold font-bold">Mahtasim Rahman. Back End Developer<span class="color-normal">Company Name</span></h5></a>                                            
                                    </div>
                                </div>
                                <div class="j-right">
                                    <p>3 hours ago</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="jobs-single-box candidate-list">
                            <div class="jobs-top">
                                <div class="j-left">
                                    <img class="candidate-img" src={user1} alt="user" />
                                    <div class="candidate-name">
                                        <a data-toggle="modal" data-target="#candidate-details-Modal"><h5 class="jobs-title color-bold font-bold">Mahtasim Rahman. Back End Developer<span class="color-normal">Company Name</span></h5></a>                                            
                                    </div>
                                </div>
                                <div class="j-right">
                                    <p>3 hours ago</p>
                                </div>
                            </div>
                        </div>                        
                        <div class="jobs-single-box candidate-list">
                            <div class="jobs-top">
                                <div class="j-left">
                                    <img class="candidate-img" src={user1} alt="user" />
                                    <div class="candidate-name">
                                        <a data-toggle="modal" data-target="#candidate-details-Modal"><h5 class="jobs-title color-bold font-bold">Mahtasim Rahman. Back End Developer<span class="color-normal">Company Name</span></h5></a>                                            
                                    </div>
                                </div>
                                <div class="j-right">
                                    <p>3 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="candidate-details-Modal" tabindex="-1" role="dialog" aria-labelledby="candidate-details-ModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <div class="modal-body">
                                <div class="candidate-details-area">
                                    
                                    <div class="candidate-details-left-part">
                                        <div class="top-bar">
                                            <h4>Applied</h4>
                                        </div>

                                        <div class="candidate-box-wrap">

                                            <div class="candidate-box-container">
                                                
                                                <div class="single-box pos-relative">
                                                    <a href="#">
                                                        <span class="star-status pos-absolute"><i class="fas fa-star"></i> 4.3</span>
                                                        <img src={user1} alt="user" />
                                                        <h6 class="singnle-box-title">Shah Sufian Mahmud</h6>
                                                        <h6 class="singnle-box-designation">Software Engineer @Soft Tech
                                                            Limited</h6>
                                                    </a>
                                                </div>
                                                
                                                <div class="single-box pos-relative">
                                                    <a href="#">
                                                        <span class="star-status pos-absolute"><i class="fas fa-star"></i> 4.3</span>
                                                        <img src={user1} alt="user" />
                                                        <h6 class="singnle-box-title">Shah Sufian Mahmud</h6>
                                                        <h6 class="singnle-box-designation">Software Engineer @Soft Tech
                                                            Limited</h6>
                                                    </a>
                                                </div>
                                                
                                                <div class="single-box pos-relative">
                                                    <a href="#">
                                                        <span class="star-status pos-absolute"><i class="fas fa-star"></i> 4.3</span>
                                                        <img src={user1} alt="user" />
                                                        <h6 class="singnle-box-title">Shah Sufian Mahmud</h6>
                                                        <h6 class="singnle-box-designation">Software Engineer @Soft Tech
                                                            Limited</h6>
                                                    </a>
                                                </div>
                                                
                                                <div class="single-box pos-relative">
                                                    <a href="#">
                                                        <span class="star-status pos-absolute"><i class="fas fa-star"></i> 4.3</span>
                                                        <img src={user1} alt="user" />
                                                        <h6 class="singnle-box-title">Shah Sufian Mahmud</h6>
                                                        <h6 class="singnle-box-designation">Software Engineer @Soft Tech
                                                            Limited</h6>
                                                    </a>
                                                </div>

                                                <div class="single-box pos-relative">
                                                    <a href="#">
                                                        <span class="star-status pos-absolute"><i class="fas fa-star"></i> 4.3</span>
                                                        <img src={user1} alt="user" />
                                                        <h6 class="singnle-box-title">Shah Sufian Mahmud</h6>
                                                        <h6 class="singnle-box-designation">Software Engineer @Soft Tech
                                                            Limited</h6>
                                                    </a>
                                                </div>
                                                
                                                <div class="single-box pos-relative">
                                                    <a href="#">
                                                        <span class="star-status pos-absolute"><i class="fas fa-star"></i> 4.3</span>
                                                        <img src={user1} alt="user" />
                                                        <h6 class="singnle-box-title">Shah Sufian Mahmud</h6>
                                                        <h6 class="singnle-box-designation">Software Engineer @Soft Tech
                                                            Limited</h6>
                                                    </a>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="candidate-details-right-part pos-relative">

                                        <div class="top-bar">
                                            <div class="candidate-topbar-info">
                                                <img src={user1} alt="aa" />
                                                <div class="candidate-topbar-content">
                                                    <h4>Shah Sufian Mahmud</h4>
                                                    <p>Position:Executive, Business Development</p>
                                                    <p>Status: Applied</p>
                                                </div>
                                            </div>
                                            <div class="top-bar-button">
                                                <button class="btn btn-outline btn-tagged">Tagged</button>
                                                <button class="btn btn-outline btn-select">Select</button>
                                                <button class="btn btn-outline btn-reject">Reject</button>
                                            </div>
                                        </div>

                                        <div class="candidate-info-container">
                                            
                                            <div class="can-tab-left">
                                                
                                                <ul class="nav nav-tabs">
                                                    <li class="nav-item">
                                                        <a class="nav-link active" href="#details" data-toggle="tab">Details</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#experience" data-toggle="tab">Experience</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#applinterview" data-toggle="tab">Applinterview</a>
                                                    </li>
                                                </ul>
                                                
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="details">
                                                        <div class="single-box">
                                                            <h6 class="h6-900">Education</h6>
                                                            <hr class="candidate-modal-line" />
                                                            <br />
                                                            <div class="single-box-content">
                                                                <h6 class="h6-900">B.sc in Computer Science & Engineering</h6>
                                                                <p>International Islamic University Chittagong.<br />
                                                                    CGPA-3.526 out of 4.00<br />
                                                                    Mar 2014-Sep 2018
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="single-box">
                                                            <h6 class="h6-900">Training</h6>
                                                            <hr class="candidate-modal-line" />
                                                            <br />
                                                            <div class="single-box-content">
                                                                <h6 class="h6-900">Android Apps Development,</h6>
                                                                <p>Top-Up IT Training, LICT, Technoshore Platform, Chittagong.<br />
                                                                    May 2016- Aug 2016
                                                                </p>
                                                            </div>
                                                            <div class="single-box-content">
                                                                <h6 class="h6-900">Web Application Development on PHP</h6>
                                                                <p>SEIP Project, BITM, Chittagong.<br />
                                                                    Jan 2018 - Mar 2018
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="single-box">
                                                            <h6 class="h6-900">Address</h6>
                                                            <hr class="candidate-modal-line" />
                                                            <br />
                                                            <div class="single-box-content">
                                                                <h6 class="h6-900">Shah Sufian Mahmud</h6>
                                                                <p>1155, Didar Mansion, Sitol Jorna R/A, Oxygen,Chittagong, Bangladesh</p>
                                                            </div>
                                                        </div>

                                                        <div class="single-box">
                                                            <h6 class="h6-900">Social Profile</h6>
                                                            <hr class="candidate-modal-line" />
                                                            <br />
                                                            <div class="single-box-content">
                                                                <p><span>Linkedln:</span> linkedin/sajjad014</p>
                                                            </div>
                                                        </div>

                                                        <div class="single-box">
                                                            <h6 class="h6-900">Contact Email</h6>
                                                            <hr class="candidate-modal-line" />
                                                            <br />
                                                            <div class="single-box-content">
                                                                <p><span>Email:</span>sajjad014@yahoo.com</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade " id="experience">
                                                        <div class="single-box margin-gap">
                                                            <div class="single-box-content">
                                                                <h6><strong>Executive</strong></h6>
                                                                <h6 class="company-name"><strong>Adbox Bangladesh Ltd</strong></h6>
                                                                <p><span>Time Duration:</span> Dec 2016- Aug 2018</p>
                                                                <p><span><strong>Department</strong>:</span> Business Development</p>                                                                        
                                                            </div>
                                                            <div class="single-box-content">
                                                                <h6><strong>Responsibilities</strong></h6>
                                                                <p>Perform requirements analysis and database design.Do research and
                                                                    evaluation on existing and trending technologies and find suitable solutions.                                                         </p>
                                                            </div>
                                                        </div>

                                                        <div class="single-box margin-gap">
                                                            <div class="single-box-content">
                                                                <h6><strong>Executive</strong></h6>
                                                                <h6 class="company-name"><strong>Synergy Interface</strong></h6>
                                                                <p><span>Time Duration:</span> Dec 2016- Aug 2018</p>
                                                                <p><span><strong>Company Location</strong>:</span> DOHS Mirpur, 12</p>                                                                        
                                                            </div>
                                                            <div class="single-box-content">
                                                                <h6><strong>Responsibilities</strong></h6>
                                                                <p>Perform requirements analysis and database design.Do research and
                                                                    evaluation on existing and trending technologies and find suitable solutions.                                                         </p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div class="tab-pane fade " id="applinterview">
                                                        <div class="single-box">
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <div class="">
                                                                        <div class="row appli-box">
                                                                            <div class="col-md-6">
                                                                                <img alt="image" class="yt-thumb" src="http://img.youtube.com/vi/4EvNxWhskf8/hqdefault.jpg" />
                                                                            </div>
                                                                            <div class="col-md-6 m-10">
                                                                                <p><i class="fa fa-question-circle-o"></i><strong>Please introduce yourself.</strong></p>
                                                                                <p> <small>Describe with at least five ponds.</small></p>
                                                                                <br />
                                                                                <p><i class="fa fa-clock-o" aria-hidden="true"></i><small>Time: 3.00 min</small></p>
                                                                                <p class="vdo-nlrge"><i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                
                                            </div>

                                            <div class="can-tab-right">                                                
                                                <ul class="nav nav-tabs">
                                                    <li class="nav-item">
                                                        <a class="nav-link active" href="#notes" data-toggle="tab">Team Notes</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#score" data-toggle="tab">Score Cards</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#sendEmail" data-toggle="tab">Email</a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="notes">

                                                        <div class="single-box">
                                                            <div class="team-content">
                                                                <form>
                                                                    <div class="form-group">
                                                                        <h6><strong>Take Notes</strong></h6>
                                                                        <textarea class="form-control" name="note" id="note" cols="30" rows="3">Take Notes</textarea>                                                                    
                                                                    </div>
                                                                    <div className="f-right">
                                                                        <button class="btn btn-temp">Post</button>
                                                                    </div>                                                                
                                                                </form>
                                                            </div>
                                                        </div>

                                                        <div class="single-box">
                                                            <div class="timeline">
                                                                <div class="time-container right">
                                                                    <div class="content">
                                                                    <p><strong>Shah Sufian</strong> <small>Added a Note</small></p>
                                                                    <p>Text with description.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="time-container right">
                                                                    <div class="content">
                                                                    <p><strong>Abir</strong> <small>Added a Note</small></p>
                                                                    <p>Text with description.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="time-container right">
                                                                    <div class="content">
                                                                    <p><strong>Refayet Chowdhury</strong> <small>Added a Note</small></p>
                                                                    <p>Text with description.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade " id="score">
                                                        <div class="single-box">
                                                            <div class="can-tab-right-inside">
                                                                <ul class="nav nav-tabs">
                                                                    <li class="nav-item">
                                                                        <a class="nav-link active" href="#myScore" data-toggle="tab">My Score</a>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                        <a class="nav-link" href="#totalScore" data-toggle="tab">Total Score</a>
                                                                    </li>
                                                                </ul>

                                                                <div>
                                                                    <div class="tab-pane active" id="myScore">
                                                                        
                                                                        <div class="single-box">
                                                                            <div class="team-content">
                                                                                <p>Score Title</p>
                                                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i><i class="fa fa-thumbs-down"></i> <br /> Very Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i> <br /> Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-circle"></i></button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i> <br /> Good</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i><i class="fa fa-thumbs-up"></i> <br /> Very Good</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="single-box">
                                                                            <div class="team-content">
                                                                                <p>Score Title</p>
                                                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i><i class="fa fa-thumbs-down"></i> <br /> Very Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i> <br /> Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-circle"></i></button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i> <br /> Good</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i><i class="fa fa-thumbs-up"></i> <br /> Very Good</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="single-box">
                                                                            <div class="team-content">
                                                                                <p>Score Title</p>
                                                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i><i class="fa fa-thumbs-down"></i> <br /> Very Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i> <br /> Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-circle"></i></button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i> <br /> Good</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i><i class="fa fa-thumbs-up"></i> <br /> Very Good</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="single-box">
                                                                            <div class="team-content">
                                                                                <p>Score Title</p>
                                                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i><i class="fa fa-thumbs-down"></i> <br /> Very Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i> <br /> Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-circle"></i></button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i> <br /> Good</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i><i class="fa fa-thumbs-up"></i> <br /> Very Good</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="single-box">
                                                                            <div class="team-content">
                                                                                <h4>Over All Score</h4>
                                                                                <h4>04</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
        
                                                                    <div class="tab-pane fade " id="totalScore">
                                                                        <div class="single-box">
                                                                            <div class="team-content">
                                                                                <p>Score Title</p>
                                                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i><i class="fa fa-thumbs-down"></i> <br /> Very Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i> <br /> Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-circle"></i></button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i> <br /> Good</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i><i class="fa fa-thumbs-up"></i> <br /> Very Good</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="single-box">
                                                                            <div class="team-content">
                                                                                <p>Score Title</p>
                                                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i><i class="fa fa-thumbs-down"></i> <br /> Very Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i> <br /> Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-circle"></i></button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i> <br /> Good</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i><i class="fa fa-thumbs-up"></i> <br /> Very Good</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="single-box">
                                                                            <div class="team-content">
                                                                                <p>Score Title</p>
                                                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i><i class="fa fa-thumbs-down"></i> <br /> Very Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i> <br /> Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-circle"></i></button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i> <br /> Good</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i><i class="fa fa-thumbs-up"></i> <br /> Very Good</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="single-box">
                                                                            <div class="team-content">
                                                                                <p>Score Title</p>
                                                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i><i class="fa fa-thumbs-down"></i> <br /> Very Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-down"></i> <br /> Poor</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-circle"></i></button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i> <br /> Good</button>
                                                                                    <button type="button" class="btn btn-score btn-text"><i class="fa fa-thumbs-up"></i><i class="fa fa-thumbs-up"></i> <br /> Very Good</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="single-box">
                                                                            <div class="team-content">
                                                                                <h4>Over All Score</h4>
                                                                                <h4>04</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade " id="sendEmail">
                                                        <div class="mail-box">
                                                            <form method="get">
                                                                <div class="mail-body">
                                                                    <div class="form-group row"><label class="col-sm-2 col-form-label">From:</label>
                                                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="career@weaverbd.com" /></div>
                                                                    </div>
                                                                    <div class="form-group row"><label class="col-sm-2 col-form-label">To:</label>
                                                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="alex.smith@corporat.com" /></div>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <label>Subject</label>
                                                                        <textarea class="form-control" name="note" id="note" cols="30" rows="2" placeholder="Subject"></textarea>                                                                    
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <label>Compose email</label>
                                                                        <textarea class="form-control" name="note" id="note" cols="30" rows="2" placeholder="Compose Email"></textarea>                                                                    
                                                                    </div>
                                                                </div>
                                                                <div class="mail-body text-right tooltip-demo">
                                                                    <a href="#" class="btn btn-sm btn-temp" data-toggle="tooltip" data-placement="top" title="Send"><i class="fa fa-reply"></i> Send</a>                                                                
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>                                                
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        )
    }
}


export default Candidates;