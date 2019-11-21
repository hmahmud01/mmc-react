import React from 'react';
import {Switch, Route} from "react-router-dom";

import Candidates from '../components/Candidates';
import Home from '../components/Home';
import Jobs from '../components/Jobs';
import Teams from '../components/Teams';

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
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        )
    }
}

export default AppSwitch;