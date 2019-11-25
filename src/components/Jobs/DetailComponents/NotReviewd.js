import React from 'react';
import Candidate from './Candidate';

class NotReviewd extends React.Component{
    render(){
        return(
            <div class="individual-single-cat-wrap">
                <h6 class="individual-single-title"><i class="fas fa-square-full"></i> Not Reviewed 5</h6>
                <div class="all-box-container">
                    <Candidate />                    
                    <Candidate />                    
                    <Candidate />                    
                    <Candidate /> 
                </div>
            </div>
        )
    }
}

export default NotReviewd;