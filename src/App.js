import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './components/Navbar';
import Body from './components/Body';

class App extends React.Component {
    render() {
        return(
        <div>
            <Router>
                <Navbar />
                <Body />        
            </Router>            
        </div>      
        )
    }
}

export default App;