import React from 'react';

class Education extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="single-box-content">
                <h6 class="h6-900">{this.props.degree}</h6>
                <p>{this.props.institute}<br />
                    CGPA-{this.props.score}<br />
                    {this.props.duration}
                </p>
            </div>
        )
    }
}

export default Education;