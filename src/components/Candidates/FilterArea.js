import React from 'react'

class FilterArea extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="col-md-4 left-cand">
                    <div class="jobs-single-box">
                        <div class="jobs-top">
                            <form class="search-form">
                                <div class="form-group"><input type="text" placeholder="Serach By Keyword" class="form-control" /></div>
                                    <p><i class="fa fa-filter"></i> Filter Option</p>
                                <div class="box">
                                    <label class="col-sm-12 col-form-label">By Active Jobs</label>
                                    <hr class="candidate-filter-hr" />
                                    <div class="col-sm-12">
                                        <div><label> <input type="checkbox" value="" /> <i></i> Back-end Developer </label></div>
                                        <div><label> <input type="checkbox" value="" /> <i></i> Front-end Developer </label></div>
                                        <div><label> <input type="checkbox" value="" /> <i></i> Design Engineer </label></div>
                                    </div>
                                </div>
                                <div class="box">
                                    <label class="col-sm-12 col-form-label">By Pipeline Stages</label>
                                    <hr class="candidate-filter-hr" />
                                    <div class="col-sm-12">
                                        <div><label> <input type="checkbox" value="" /> <i></i> Applied </label></div>
                                        <div><label> <input type="checkbox" value="" /> <i></i> Not Reviewed </label></div>
                                        <div><label> <input type="checkbox" value="" /> <i></i> Passed </label></div>
                                        <div><label> <input type="checkbox" value="" /> <i></i> Tagged </label></div>
                                        <div><label> <input type="checkbox" value="" /> <i></i> Rejected </label></div>
                                    </div>
                                </div>
                                <div class="box">
                                    <label class="col-sm-12 col-form-label">By Basic Criteria</label>
                                    <hr class="candidate-filter-hr" />
                                    <div class="col-sm-12">
                                            <select class="form-control m-b" name="account">
                                                <option>Job Title</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                            <select class="form-control m-b" name="account">
                                                <option>Location</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                            <select class="form-control m-b" name="account">
                                                <option>Experience</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                            <select class="form-control m-b" name="account">
                                                <option>Level Of Education</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                            <select class="form-control m-b" name="account">
                                                <option>Educational Institute</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                            <select class="form-control m-b" name="account">
                                                <option>Skills</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                            <select class="form-control m-b" name="account">
                                                <option>Gender</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                            </select>
                                    </div>
                                    
                                </div>
                                <div class="pull-right">
                                    <button class="btn btn-info f-right"><i class="fa fa-plus"></i> Add new Filter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}

export default FilterArea;