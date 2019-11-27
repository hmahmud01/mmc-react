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
                        <SideBar />
                        <Main />                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Body