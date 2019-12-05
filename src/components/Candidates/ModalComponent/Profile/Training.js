import React from 'react';

class Training extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="single-box-content">
                <h6 class="h6-900">{this.props.title},</h6>
                <p>{this.props.institute}<br />
                    {this.props.duration}
                </p>
            </div>
        )
    }
}

export default Training;