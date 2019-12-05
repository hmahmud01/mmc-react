import React from 'react';

class ExperienceBlock extends React.Component{
    render(){
        return(
            <div class="single-box margin-gap">
                <div class="single-box-content">
                    <h6><strong>{this.props.designation}</strong></h6>
                    <h6 class="company-name"><strong>{this.props.institute}</strong></h6>
                    <p><span>Time Duration:</span> {this.props.duration}</p>
                    <p><span><strong>Department</strong>:</span> {this.props.dept}</p>                                                                        
                </div>
                <div class="single-box-content">
                    <h6><strong>Responsibilities</strong></h6>
                    <p>{this.props.responsibilites}</p>
                </div>
            </div>
        )
    }
}

export default ExperienceBlock;