import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

// import AppSwitch from './AppSwitch';

class AppRouter extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <nav>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/"><i class="fas fa-home"></i>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/jobs"><i class="fas fa-briefcase"></i>Jobs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/candidates"><i class="fa fa-user-circle"></i>Candidates</Link>
                        </li>                    
                        <li class="nav-item">
                            <Link class="nav-link" to="/teams"><i class="fas fa-users"></i>Team</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default AppRouter;