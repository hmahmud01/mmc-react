import React from 'react';

class CandidateList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="jobs-single-box candidate-list">
                <div class="jobs-top">
                    <div class="j-left">
                        <img class="candidate-img" src={this.props.img} alt="user" />
                        <div class="candidate-name">
                            <a data-toggle="modal" data-target="#candidate-details-Modal"><h5 class="jobs-title color-bold font-bold">{this.props.name}. {this.props.designation}<span class="color-normal">{this.props.company}</span></h5></a>                                            
                        </div>
                    </div>
                    <div class="j-right">
                        <p>{this.props.time}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CandidateList;