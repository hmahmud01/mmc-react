import React from 'react';

import SuggestedCandidates from './ModalComponent/SuggestedCandidates';
import Header from './ModalComponent/Header';
import Profile from './ModalComponent/Profile';
import Experience from './ModalComponent/Experience';
import Video from './ModalComponent/Video';
import Email from './ModalComponent/Email';
import ScoreCard from './ModalComponent/ScoreCard';
import TeamNotes from './ModalComponent/TeamNotes';
class CandidateModal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
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

                                        <SuggestedCandidates />
                                    </div>
                                    
                                    <div class="candidate-details-right-part pos-relative">

                                        <div class="top-bar">
                                            <Header />
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
                                                        <Profile data={this.props.data.descriptionData.profile}/>
                                                    </div>

                                                    <div class="tab-pane fade " id="experience">
                                                        <Experience data={this.props.data.descriptionData.experience}/>

                                                    </div>

                                                    <div class="tab-pane fade " id="applinterview">
                                                        <div class="single-box">
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <div class="">
                                                                        <Video data={this.props.data.descriptionData.video} />
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
                                                        <TeamNotes />
                                                    </div>

                                                    <div class="tab-pane fade " id="score">
                                                        <ScoreCard />
                                                    </div>

                                                    <div class="tab-pane fade " id="sendEmail">
                                                        <Email />
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

export default CandidateModal;

