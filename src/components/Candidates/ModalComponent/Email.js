import React from 'react';

class Email extends React.Component{
    render(){
        return(
            <div class="mail-box">
                                                            <form method="get">
                                                                <div class="mail-body">
                                                                    <div class="form-group row"><label class="col-sm-2 col-form-label">From:</label>
                                                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="career@weaverbd.com" /></div>
                                                                    </div>
                                                                    <div class="form-group row"><label class="col-sm-2 col-form-label">To:</label>
                                                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="alex.smith@corporat.com" /></div>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <label>Subject</label>
                                                                        <textarea class="form-control" name="note" id="note" cols="30" rows="2" placeholder="Subject"></textarea>                                                                    
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <label>Compose email</label>
                                                                        <textarea class="form-control" name="note" id="note" cols="30" rows="2" placeholder="Compose Email"></textarea>                                                                    
                                                                    </div>
                                                                </div>
                                                                <div class="mail-body text-right tooltip-demo">
                                                                    <a href="#" class="btn btn-sm btn-temp" data-toggle="tooltip" data-placement="top" title="Send"><i class="fa fa-reply"></i> Send</a>                                                                
                                                                </div>
                                                            </form>
                                                        </div>
        )
    }
}

export default Email;