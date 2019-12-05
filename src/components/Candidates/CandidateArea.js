import React from 'react'

import CandidateList from './CandidateList'

class CandidateArea extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var candidateList = this.props.data.map(function(item){
            return <CandidateList name={item.name} designation={item.designation} company={item.company} time={item.time} img={item.image} />
        })
        return(
            <div class="col-md-7 offset-md-1 right-cand">
                <div class="right-list">
                    {candidateList}
                </div>
            </div>
        )
    }
}

export default CandidateArea;