import React from 'react';
import AppSwitch from '../../router/AppSwitch'

class Main extends React.Component {
    render(){
        return(
            <div class="col-sm-11 offset-sm-1 padding-zero">
                <div class="main-body">
                    <AppSwitch />
                </div>  
            </div>
        )   
    }
}

export default Main;