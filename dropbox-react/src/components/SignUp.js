//import React, {Component, useEffect, useState } from 'react';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import NavBar from "./Navbar";

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {               
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //console.log([event.target.name])
        console.log('eventName '+event.target.name+' value==>'+event.target.value);
        this.setState(
           //...this.state,
            {
                [event.target.name]: event.target.value
            });
    }

    handleSubmit(event) {
        console.log('hey form submitted')
        console.log(this.state);

        var formData = new FormData();
        formData = this.state;
        //let st = this.state;
        //console.log("REACT state", st);
        console.log("REACT Form Data", formData);

        this.props.handleSubmit(formData);
    }

    render() {
        
        return (
           <div>
            <NavBar/>
           
            <div className ="row">
            <div className="col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-sm-6 col-md-6">
                <div className="panel panel-default">
                    <div className="panel panel-body">
                        <br/>
                        {/* <ul id="dTab" className="nav nav-tabs">
                            <li><Link to='/login'><span className="glyphicon glyphicon-circle-arrow-right"></span>Login</Link></li>
                        </ul> */}
                        <div id="pane1" className="tab-pane">
                            <form className="text-justify">
                                <fieldset>
                                    <div className="form-group">
                                        <label className="control-label" >User Email</label>
                                        <input onChange={ this.handleChange} type="email" id="userEmail" required="required" name="userEmail" placeholder="Enter your email id" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Password</label>
                                        <input onChange={ this.handleChange} type="password" required="required" id="password" name="password" placeholder="Enter Password" className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label" >First Name</label>
                                        <input onChange={this.handleChange} type="text" id="firstName" required name="firstName" placeholder="Enter First Name" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" >Last Name</label>
                                        <input onChange={ this.handleChange} type="text" required id="lastName" name="lastName" placeholder="Enter Last Name" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" >Date of Birth</label>
                                        <input onChange={ this.handleChange} type="date" required id="dob" name="dob" className="form-control"/>

                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" >Education</label>
                                        <input onChange={ this.handleChange} type="text" required id="edu" name="edu" className="form-control"/>

                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" >Work</label>
                                        <input onChange={ this.handleChange} type="text" required id="work" name="work" className="form-control"/>

                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" >Interests</label>
                                        <input onChange={ this.handleChange} type="text" required id="inter" name="inter" className="form-control"/>

                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" >Gender</label><br/>
                                        <input onChange={ this.handleChange} type="radio" id="genderChoice1"
                                               name="gender" value="male"/>
                                        <label className="control-label" >Male</label>
                                        <input onChange={ this.handleChange} type="radio" id="genderChoice2"
                                               name="gender" value="female"/>
                                        <label className="control-label" >Female</label>
                                        <input onChange={ this.handleChange} type="radio" id="genderChoice3"
                                               name="gender" value="other"/>
                                        <label className="control-label" >Other</label>
                                        <input onChange={ this.handleChange} type="radio" id="genderChoice4"
                                               name="gender" value="notSpecified"/>
                                        <label className="control-label" >Prefer not to specify</label>
                                    </div>
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={this.handleSubmit}>
                                        Submit
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        /*
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="userName" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input onChange={ this.handleChange} type="email" id="userEmail" required="required" name="userEmail" 
                    placeholder="Enter your email id" className="form-control"/>
                    <input type="submit" value="Submit" />
                </form>

            </div>*/
        );
    }
}

export default SignUp;