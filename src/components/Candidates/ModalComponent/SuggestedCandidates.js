import React from 'react';

import user1 from '../assets/1.png';
import SuggestedCandidateBlock from './SuggestedCandidateBlock';
class SuggestedCandidates extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [
                {
                    "id": 1,
                    "img": user1,
                    "name": "Joshim name",
                    "designation": ">Software Engineer",
                    "company": "Soft Tech ltd.",
                    "rank": 4.3
                },
                {
                    "id": 1,
                    "img": user1,
                    "name": "KODOM bepary",
                    "designation": ">Software Engineer",
                    "company": "Soft Tech ltd.",
                    "rank": 4.3
                },
                {
                    "id": 1,
                    "img": user1,
                    "name": "KANGAL daddy",
                    "designation": ">Software Engineer",
                    "company": "Soft Tech ltd.",
                    "rank": 4.3
                },
                {
                    "id": 1,
                    "img": user1,
                    "name": "Joshim name",
                    "designation": ">Software Engineer",
                    "company": "Soft Tech ltd.",
                    "rank": 4.3
                },
                {
                    "id": 1,
                    "img": user1,
                    "name": "KODOM bepary",
                    "designation": ">Software Engineer",
                    "company": "Soft Tech ltd.",
                    "rank": 4.3
                },
                {
                    "id": 1,
                    "img": user1,
                    "name": "KANGAL daddy",
                    "designation": ">Software Engineer",
                    "company": "Soft Tech ltd.",
                    "rank": 4.3
                }
            ]
        }
    }
    render(){
        var suggestionList = this.state.data.map(function(item){
            return <SuggestedCandidateBlock id={item.id} img={item.img} name={item.name} designation={item.designation} company={item.company} rank={item.rank} />
        })
        return(
            <div class="candidate-box-wrap">
                <div class="candidate-box-container"> 
                    {suggestionList}                                               
                </div>
            </div>
        )
    }
}

export default SuggestedCandidates;