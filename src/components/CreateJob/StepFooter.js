import React from 'react';

class StepFooter extends React.Component{
    render(){
        return(
            <div class="step-footer">
                <button data-direction="prev" class="step-btn">Back</button>
                <button data-direction="next" class="step-btn">Next</button>
                <button type="submit" data-direction="finish" class="step-btn">Finish</button>
            </div>
        )
    }
}

export default StepFooter;