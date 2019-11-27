import React from 'react';

class Steps extends React.Component{
    render(){
        return(
            <ul class="step-steps">
                <li><a href="#step1"><span><i class="far fa-file-alt"></i></span> <h5>Job Details</h5> </a></li>
                <li><a href="#step2"><span><i class="fas fa-file-signature"></i></span> <h5>Application Form & <br /> Assessment</h5> </a></li>
                <li><a href="#step3"> <span><i class="fas fa-users"></i></span> <h5>Hiring Board</h5></a></li>
            </ul>
        )
    }
}

export default Steps;