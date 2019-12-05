import React from 'react';

class Video extends React.Component{
    render(){
        return(
            <div class="row appli-box">
                <div class="col-md-6">
                    <img alt="image" class="yt-thumb" src={this.props.data.imgURL} />
                </div>
                <div class="col-md-6 m-10">
                    <p><i class="fa fa-question-circle-o"></i><strong>Please introduce yourself.</strong></p>
                    <p> <small>Describe with at least five ponds.</small></p>
                    <br />
                    <p><i class="fa fa-clock-o" aria-hidden="true"></i><small>Time: 3.00 min</small></p>
                    <p class="vdo-nlrge"><i class="fa fa-arrows-alt" aria-hidden="true"></i></p>
                </div>
            </div>
        )
    }
}

export default Video;