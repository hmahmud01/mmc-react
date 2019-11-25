import React from 'react';
import TeamBLock from './TeamBlock';


class Teams extends React.Component {
    render() {
        return(
            <div className="row m-r-z">     
                <TeamBLock />
                <TeamBLock />
                <TeamBLock />
                <TeamBLock />
            </div>        
        )
    } 
}

export default Teams;