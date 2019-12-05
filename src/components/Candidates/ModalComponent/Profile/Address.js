import React from 'react';

class Address extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div class="single-box">
                    <h6 class="h6-900">Address</h6>
                    <hr class="candidate-modal-line" />
                    <br />
                    <div class="single-box-content">
                        <h6 class="h6-900">{this.props.name}</h6>
                        <p>{this.props.addr}</p>
                    </div>
                </div>

                <div class="single-box">
                    <h6 class="h6-900">Social Profile</h6>
                    <hr class="candidate-modal-line" />
                    <br />
                    <div class="single-box-content">
                        <p><span>Linkedln:</span> {this.props.linkedin}</p>
                    </div>
                </div>

                <div class="single-box">
                    <h6 class="h6-900">Contact Email</h6>
                    <hr class="candidate-modal-line" />
                    <br />
                    <div class="single-box-content">
                        <p><span>Email:</span>{this.props.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Address;