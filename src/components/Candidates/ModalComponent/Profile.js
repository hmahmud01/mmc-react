import React from 'react';
import Education from './Profile/Education';
import Training from './Profile/Training';
import Address from './Profile/Address';

class Profile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.data);
        var educationBlock = this.props.data.education.map(function(item){
            return <Education degree={item.degree} institute={item.institute} score={item.score} duration={item.duration} />
        })

        var trainingBlock = this.props.data.training.map(function(item){
            return <Training title={item.title} institute={item.institute} duration={item.duration} />
        })
        return(
            <div>
                <div class="single-box">
                    <h6 class="h6-900">Education</h6>
                    <hr class="candidate-modal-line" />
                    <br />
                    {educationBlock}
                </div>

                <div class="single-box">
                    <h6 class="h6-900">Training</h6>
                    <hr class="candidate-modal-line" />
                    <br />
                    {trainingBlock}
                </div>

                <Address name={this.props.data.address.name} addr={this.props.data.address.addr} linkedin={this.props.data.address.linkedin} email={this.props.data.address.email} />
            </div>
        )
    }
}

export default Profile;