import React from 'react';

const boldFont = {
    fontWeight: 'bolder'
}

class Step2 extends React.Component{
    render(){
        return(
            <div class="step-tab-panel" id="step2">

                <div class="step-content-inside-wrap application-form-assessment">
                    <div class="step-content-left-part">
                        <div class="personal-information-box">
                            <h4>Personal Information</h4>
                            <div class="personal-informamtion-button-box">
                                <div class="left-side-button">
                                    <button>Name</button>
                                    <button>Email</button>
                                    <button>Phone</button>
                                    <button>Address</button>
                                    <button>Photo</button>
                                </div>
                                <div class="right-side-button">
                                    <button class="mandatory-button">Mandatory</button>
                                    <button><i class="fas fa-plus"></i>Add</button>
                                </div>
                            </div>
                        </div>

                        <div class="candidate-profile">
                            <h4>Candidate Profile</h4>
                            <div class="single-div">
                                <h6>Education</h6>
                                <form action="">
                                    <button class="mandatory-button"> Mandatory</button>
                                    <button class=""> Optional</button>
                                    <button> Off</button>
                                </form>
                            </div>

                            <div class="single-div">
                                <h6>Experience</h6>
                                <form action="">
                                    <button class="mandatory-button"> Mandatory</button>
                                    <button class=""> Optional</button>
                                    <button> Off</button>
                                </form>
                            </div>

                            <div class="single-div">
                                <h6>Skill</h6>
                                <form action="">
                                    <button class="mandatory-button"> Mandatory</button>
                                    <button class=""> Optional</button>
                                    <button> Off</button>
                                </form>
                            </div>

                            <div class="single-div">
                                <h6>Portfolio/Projects</h6>
                                <form action="">
                                    <button class="mandatory-button"> Mandatory</button>
                                    <button class=""> Optional</button>
                                    <button> Off</button>
                                </form>
                            </div>

                            <div class="single-div">
                                <h6>Training</h6>
                                <form action="">
                                    <button class=""> Mandatory</button>
                                    <button class="optional-button"> Optional</button>
                                    <button> Off</button>
                                </form>
                            </div>

                            <div class="single-div">
                                <h6>Interest</h6>
                                <form action="">
                                    <button class=""> Mandatory</button>
                                    <button class="optional-button"> Optional</button>
                                    <button> Off</button>
                                </form>
                            </div>

                            <div class="single-div">
                                <h6>Profile <span>(Linkedin, GitHub, etc)</span></h6>
                                <form action="">
                                    <button class=""> Mandatory</button>
                                    <button class="optional-button"> Optional</button>
                                    <button> Off</button>
                                </form>
                            </div>
                        </div>

                        <div class="candidate-profile others">
                            <h4>Others</h4>

                            <div class="single-div">
                                <h6>Cover Letter</h6>
                                <form action="">
                                    <button class=""> Mandatory</button>
                                    <button class=""> Optional</button>
                                    <button class="optional-button"> Off</button>
                                </form>
                            </div>

                        </div>

                        <div class="assessment-questions-part">
                            <div class="assessment-title-box">
                                <h4>Assessment/Questions</h4>
                                <a href="bank.html" class="btn btn-sm btn-outline-secondary">Question Bank</a>                                                    
                            </div>

                            <div class="single-assessment">
                                <div class="assessment-inner-block">
                                    <input type="checkbox" name="aa" value="aa" />What is Laravel?
                                </div>
                                <i class="fas fa-pen"></i>
                            </div>
                            <div class="single-assessment">
                                <div class="assessment-inner-block">
                                    <input type="checkbox" name="aa" value="aa" />What is Laravel?
                                </div>
                                <i class="fas fa-pen"></i>
                            </div>
                            <div class="single-assessment last-assessment-box">
                                <div class="assessment-inner-block">
                                    <input type="checkbox" name="aa" value="aa" />One thought to "List out some benefits of Laravel over other Php frameworks?"
                                </div>
                                <div class="type-question-part">
                                    <h5>Type</h5>
                                    <form action="">
                                        <select>
                                            <option value="v">Video Answer</option>
                                            <option value="v">abc</option>
                                            <option value="v">abc</option>
                                            <option value="v">abc</option>
                                        </select>

                                        <textarea>One thought to “List out some benefits of Laravel over other Php frameworks ?”</textarea>
                                        <input type="checkbox" name="aa" value="aa" />What is Laravel?

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="step-content-right-part">
                        <div class="sample-headline-marker">
                            <h3 style={boldFont}>Weaver Innovations Ltd.</h3>
                            <hr />
                            <p>Some Title</p>
                            <p>Some Title</p>
                            <p>Some Title</p>
                            <hr />
                        </div>
                        <form>
                            <h5 class="sample-headline">Personal Information</h5>
                            <div class="form-row">
                                <div class="form-group col-sm-2">
                                    <label for="job">Name*</label>
                                </div>
                                <div class="form-group col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-6"><input type="text" class="form-control" id="sdds" /></div>
                                        <div class="col-sm-6"><input type="text" class="form-control" id="ss" /></div>                                                            
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-sm-2">
                                    <label for="job">Email*</label>
                                </div>
                                <div class="form-group col-sm-10">
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-sm-2">
                                    <label for="job">Phone*</label>
                                </div>
                                <div class="form-group col-sm-10">
                                <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-sm-2">
                                    <label for="job">Addrerss*</label>
                                </div>
                                <div class="form-group col-sm-10">
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <hr />
                            <h5 class="sample-headline">Candidate Profile</h5>

                            <div class="form-row">
                                <div class="form-group col-sm-2">
                                    <label for="job">Education*</label>
                                </div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="form-group col-sm-12">
                                            <input type="text" class="form-control" id="" />
                                            <input type="text" class="form-control" id="" />
                                        </div>
                                        <div class="form-group col-sm-12">
                                            <input type="text" class="form-control form-control-sm" />
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-sm-2">
                                    <label for="job">Experience*</label>
                                </div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="form-group col-sm-12">
                                            <input type="text" class="form-control" id="" />
                                            <input type="text" class="form-control" id="" />
                                        </div>
                                        <div class="form-group col-sm">
                                            <input type="text" class="form-control form-control-sm" />
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-sm-2">
                                    <label for="job">Portfolio*</label>
                                </div>
                                <div class="form-group col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" id="" />
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-sm-2">
                                    <label for="job">Project*</label>
                                </div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="form-group col-sm-12">
                                            <input type="text" class="form-control" id="" />
                                            <input type="text" class="form-control" id="" />
                                        </div>
                                        <div class="form-group col-sm-12">
                                            <input type="text" class="form-control" id="" />
                                            <input type="text" class="form-control" id="" />
                                        </div>
                                    </div>                                                       
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-sm-2">
                                    <label for="job">Training*</label>
                                </div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="form-group col-sm-12">
                                            <input type="text" class="form-control" id="" />
                                        </div>
                                        <div class="form-group col-sm-12">
                                            <input type="text" class="form-control" id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-sm-2">
                                    <label for="job">Interests*</label>
                                </div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="form-group col-sm-3">
                                            <input type="text" class="form-control" id="" />
                                        </div>
                                        <div class="form-group col-sm-3">
                                            <input type="text" class="form-control" id="" />
                                        </div>
                                        <div class="form-group col-sm-3">
                                            <input type="text" class="form-control" id="" />
                                        </div>
                                        <div class="form-group col-sm-3">
                                            <input type="text" class="form-control" id="" />
                                        </div>
                                    </div>
                                </div>                                                    
                            </div>
                            <hr />
                            <div class="form-row">
                                <div class="form-group col-sm-2">
                                    <label for="job">Cover Letter</label>
                                </div>
                                <div class="form-group col-sm-10">
                                    <textarea class="form-control" name="editor2" id="cover" cols="60" rows="6"></textarea>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-sm-2">
                                    <label for="job">Questions</label>
                                </div>
                                <div class="col-sm-10">
                                    <div class="form-group col-sm"><i class="far fa-check-square"></i><i class="far fa-square"></i>
                                        <input type="text" class="form-control" id="" />
                                    </div>

                                    <div class="form-group col-sm"><i class="far fa-check-square"></i><i class="far fa-square"></i>
                                        <input type="text" class="form-control" id="" />
                                    </div>

                                    <div class="form-group col-sm"><i class="far fa-check-square"></i><i class="far fa-square"></i>
                                        <input type="text" class="form-control" id="" />
                                    </div>

                                    <div class="form-group col-sm"><i class="far fa-check-square"></i><i class="far fa-square"></i>
                                        <input type="text" class="form-control" id="" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="col-sm">
                                    <button class="btn btn-sm sample-submit f-right">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        )
    }    
    
}

export default Step2;