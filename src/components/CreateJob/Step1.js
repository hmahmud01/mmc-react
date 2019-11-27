import React from 'react';

class Step1 extends React.Component{
    render(){
        return(
            <div class="step-tab-panel" id="step1">
                <div class="step-content-inside-wrap">
                    <div class="step-content-left-part">
                        <form method="post">
                            <div class="form-row">
                                <div class="form-group col-sm-6">
                                    <label for="job">Job Title*</label>
                                    <input type="text" class="form-control" id="job" placeholder="Name fo job Position" />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label for="department">Department*</label>

                                    <div class="custom-select">
                                        <select id="department" class="form-control">
                                            <option value="0">Select Department</option>
                                            <option value="1">CSE</option>
                                            <option value="2">BBA</option>
                                            <option value="3">MBA</option>
                                            <option value="4">CSE</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div class="form-row">
                                <div class="form-group col-sm-4">
                                    <label for="country">Country</label>
                                    <div class="custom-select">
                                        <select id="country" class="form-control">
                                            <option value="0">Select country</option>
                                            <option value="1">Bangladesh</option>
                                            <option value="2">China</option>
                                            <option value="3">India</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-sm-4">
                                    <label for="city">State/Region</label>

                                    <div class="custom-select">
                                        <select id="city" class="form-control">
                                            <option value="0">Select State</option>
                                            <option value="1">Khulna</option>
                                            <option value="2">Rajshahi</option>
                                            <option value="3">Borishal</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-sm-2">
                                    <label for="city">City</label>

                                    <div class="custom-select">
                                        <select id="city" class="form-control">
                                            <option value="0">Select city</option>
                                            <option value="1">Khulna</option>
                                            <option value="2">Rajshahi</option>
                                            <option value="3">Borishal</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-sm-2">
                                    <label for="city">Code</label>
                                    <input type="text" class="form-control" id="Salary" placeholder="Internal Code" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="editor">Job Description*</label>
                                <textarea name="editor" class="tinymce" id="editor" cols="30" rows="10"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="editor2">Job Requirements*</label>
                                <textarea name="editor2" class="tinymce" id="editor2" cols="30" rows="10"></textarea>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-sm">
                                    <p><label>Job Details</label></p>
                                </div>
                            </div>                                                
                            
                            <div class="form-row">
                                
                                <div class="form-group col-sm">
                                    <label for="employment">Employment Type*</label>

                                    <div class="custom-select">
                                        <select id="employment" class="form-control">
                                            <option value="0">Select employment</option>
                                            <option value="1">Part time</option>
                                            <option value="2">Full time</option>
                                            <option value="3">Temporary</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-sm">
                                    <label for="category">Category</label>
                                    <div class="custom-select">
                                        <select id="category" class="form-control">
                                            <option value="0">Select employment</option>
                                            <option value="1">Accounting</option>
                                            <option value="2">Agriculture</option>
                                            <option value="3">Agriculture</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-sm">
                                    <label for="Salary">Salary</label>
                                    <input type="text" class="form-control" id="Salary" placeholder="Salary/Salary Range" />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-sm">
                                    <label for="education">Required Education*</label>

                                    <div class="custom-select">
                                        <select id="education" class="form-control">
                                            <option value="0">Select education</option>
                                            <option value="1">Ceretification</option>
                                            <option value="2">Vocational</option>
                                            <option value="3">Vocational</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-sm">
                                    <label for="experience">Required Experience</label>

                                    <div class="custom-select">
                                        <select id="experience" class="form-control">
                                            <option value="0">Select experience</option>
                                            <option value="1">Entry Level</option>
                                            <option value="2">Mid Level</option>
                                            <option value="3">Experienced</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="step-content-right-part">
                        <div class="block">
                            <div class="required-box">
                                <p><i class="far fa-circle"></i> Job Title <span>is required</span></p>
                                <p><i class="far fa-circle"></i> City <span>is required</span></p>
                                <p><i class="far fa-circle"></i> Country <span>is required</span></p>
                                <p><i class="far fa-circle"></i> State/Regin <span>is required</span></p>
                                <p><i class="far fa-circle"></i> Zip Code <span>is required</span></p>
                                <p><i class="far fa-circle"></i> Job Description <span>is required</span></p>
                                <p><i class="far fa-circle"></i> Job requirement <span>is required</span></p>
                            </div>
                        </div>
                        <div class="block">
                            <div class="required-box">
                                <div>
                                    <h5>Do</h5><p>Include at least 700 characters Use formatting like bold headings
                                    and lists to make text easier to read. </p>
                                </div>
                                <div>
                                    <h5>Don't</h5><p>Add a link to apply (one is added automatically)Describe more than
                                    one job, even if there is more than one opening.</p>
                                </div>
                                <div>
                                    <h5>Need Inspiration?</h5>
                                    <p><a href="#">Import sections from our job description templates. They’re fully editable.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step1;