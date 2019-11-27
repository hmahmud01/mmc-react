import React from 'react';

class TopBar extends React.Component{
    render(){
        return(
            <div class="top-draft-bar">
                <h5><span>(Draft)</span>Android Developer</h5>

                <div class="draft-right-part">
                    <div class="dropdown">
                        <button class="dropdown-toggle" type="button" data-toggle="dropdown"><i class="far fa-circle"></i>Draft</button>

                        <ul class="dropdown-menu dropdown-menu-right">
                            <li><a href="#">Demo content</a></li>
                            <li><a href="#">Demo content</a></li>
                            <li><a href="#">Demo content</a></li>
                        </ul>
                    </div>
                    <button>Save Draft</button>
                </div>
            </div>
        )
    }
}

export default TopBar;