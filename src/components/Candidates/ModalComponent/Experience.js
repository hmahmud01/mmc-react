import React from 'react';
import ExperienceBlock from './ExperienceBlock';

class Experience extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var experinceList = this.props.data.map(function(item){
            return <ExperienceBlock designation={item.designation} institute={item.institute} duration={item.duration} dept={item.dept} responsibilites={item.responsibilites} />
        })
        return(
            <div>
                {experinceList}
            </div>
        )
    }
}

export default Experience;