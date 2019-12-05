import React from 'react';

class TeamNotes extends React.Component{
    render(){
        return(
            <div>
                <div class="single-box">
                                                            <div class="team-content">
                                                                <form>
                                                                    <div class="form-group">
                                                                        <h6><strong>Take Notes</strong></h6>
                                                                        <textarea class="form-control" name="note" id="note" cols="30" rows="3">Take Notes</textarea>                                                                    
                                                                    </div>
                                                                    <div className="f-right">
                                                                        <button class="btn btn-temp">Post</button>
                                                                    </div>                                                                
                                                                </form>
                                                            </div>
                                                        </div>

                                                        <div class="single-box">
                                                            <div class="timeline">
                                                                <div class="time-container right">
                                                                    <div class="content">
                                                                    <p><strong>Shah Sufian</strong> <small>Added a Note</small></p>
                                                                    <p>Text with description.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="time-container right">
                                                                    <div class="content">
                                                                    <p><strong>Abir</strong> <small>Added a Note</small></p>
                                                                    <p>Text with description.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="time-container right">
                                                                    <div class="content">
                                                                    <p><strong>Refayet Chowdhury</strong> <small>Added a Note</small></p>
                                                                    <p>Text with description.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
            </div>
                                                        
        )
    }
}

export default TeamNotes;