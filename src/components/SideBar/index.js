import React from 'react';
import AppRouter from '../../router/AppRouter';

class SideBar extends React.Component {
    render() {
        return(
            <div class="padding-zero">
                <div class="main-left-side left-menubar">
                    <AppRouter />
                </div>
            </div>
        )
    }
}

export default SideBar;