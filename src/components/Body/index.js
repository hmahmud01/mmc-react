import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";


import SideBar from '../SideBar';
import Main from '../Main';
class Body extends React.Component {
    render() {
        return(
            <section class="main-body-area">
                <div class="container-fluid">
                    <div class="row">
                        <Router>    
                            <SideBar />
                            <Main />
                        </Router>
                    </div>
                </div>
            </section>
        )
    }
}

export default Body