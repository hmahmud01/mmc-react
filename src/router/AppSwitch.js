import React from 'react';
import {Switch, Route} from "react-router-dom";

import Candidates from '../components/Candidates';
import Home from '../components/Home';
import Jobs from '../components/Jobs';
import JobDetail from '../components/Jobs/JobDetail';
import Teams from '../components/Teams';
import Members from '../components/Teams/Members';
import CreateJob from '../components/CreateJob';

class AppSwitch extends React.Component {
    render(){
        return(
            <Switch>                
                <Route path="/candidates">
                    <Candidates />
                </Route>
                <Route path="/jobs">
                    <Jobs />
                </Route>
                <Route path="/teams">
                    <Teams />
                </Route>
                <Route path="/members">
                    <Members />
                </Route>
                <Route path="/detail">
                    <JobDetail />
                </Route>       
                <Route path="/create-job">
                    <CreateJob />
                </Route>       
                <Route path="/">
                    <Home />
                </Route>         
            </Switch>
        )
    }
}

export default AppSwitch;