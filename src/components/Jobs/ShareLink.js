import React from 'react';

class ShareLink extends React.Component {
    render(){
        return(
            <div class="modal" id="shareLink" tabindex="-1" role="dialog">
                <div class="modal-dialog width-modal" role="document">
                    <div class="modal-content non-transparent-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Shareable Link</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="modal-body-margin share-link">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">                                                        
                                            <input type="text" placeholder="Shareable Link" class="form-control" value="https://mmc/share/kjflenkkkkke?kjasdf9ije" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShareLink;