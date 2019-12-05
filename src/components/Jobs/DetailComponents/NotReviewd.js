import React from 'react';
import Candidate from './Candidate';

class NotReviewd extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var listCandidate = this.props.data.map(function(item){
            return <Candidate img={item.img} name={item.name} designation={item.designation} rank={item.rank} />
        })
        return(
            <div class="individual-single-cat-wrap">
                <h6 class="individual-single-title"><i class="fas fa-square-full"></i> Not Reviewed 5</h6>
                <div class="all-box-container">
                    {listCandidate}
                </div>
            </div>
        )
    }
}

export default NotReviewd;