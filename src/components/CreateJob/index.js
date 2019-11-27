import React from 'react';
import $ from 'jquery';

import Topbar from './TopBar';
import Steps from './Steps';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import StepFooter from './StepFooter';

class CreateJob extends React.Component{
    render(){
        return(
            <div class="job-details-page">
                <div id="job-details-step-wise-wrap">
                    <Topbar />

                    <div class="step-app">
                        <Steps />
                        <div class="step-content">
                            <Step1 />
                            <Step2 />
                            <Step3 />
                            <StepFooter />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateJob;