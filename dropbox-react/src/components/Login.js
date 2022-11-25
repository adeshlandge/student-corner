import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //withRouter
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class Login extends Component {
    constructor(props) {

        super(props);
        this.state = {
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }



    handleChange(event) {
        this.setState(
            //...this.state,
            {
                [event.target.name]: event.target.value
            });
    }

    handleSubmitClick(event) {

        console.log(this.state);

        var formData = new FormData();
        formData = this.state;
        this.props.handleSubmit(formData);
    }

    handleSignUp() {
        console.log('super')
        this.props.router.navigate("/SignUp");
    }

    render() {

        return (
            <div>
                <nav className="navbar">
                    <h1>Student Corner</h1>
                    <div className="links">
                        <Link to="/">Register</Link>
                    </div>
                </nav>

                <div className="create">
                    <div className="panel-hneading">Login</div><br />
                    <div >
                        <form >
                            <div >
                                <label>Username  </label>
                                <div>
                                    <input onChange={(e) => this.handleChange(e)} type="email" className="form-control" name="inputUsername"
                                        id="inputUsername" placeholder="Email Id" />
                                </div>
                            </div>
                            <div >
                                <label >Password</label>
                                <div >
                                    <input onChange={(e) => this.handleChange(e)} type="password" className="form-control"
                                        name="inputPassword" id="inputPassword" placeholder="Password" />
                                </div>
                            </div>
                            <div >
                                <div>
                                    <button type="button"
                                        onClick={() => this.handleSubmitClick()}
                                        className="btn btn-primary">Sign in</button>
                                </div>
                            </div>
                        </form>
                        {/* <div className="row-fluid">
                                    <Link to="/" className="btn btn-primary">Sign up</Link>
                                </div> */}
                        {/*<div className="row col-offset-2">*/}
                        {/*<div className="panel panel-default">*/}
                        {/*<span className="text text-danger">Invalid username / password</span>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;