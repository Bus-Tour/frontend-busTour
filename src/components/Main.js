import React, { Component } from 'react'
import AdminUserControlPanel from './adminComponents.js/AdminUserControlPanel';
import AdminBusControlPanel from './adminComponents.js/AdminBusControlPanel';
import AdminStatusMonitor from './adminComponents.js/AdminStatusMonitor';
import AdminNav from './adminComponents.js/AdminNav';
import AdminTeacherControlPanel from './adminComponents.js/AdminTeacherControlPanel';
import AdminStusentControlPanel from './adminComponents.js/AdminStudentsControlPanel';
import TeacherStudentsStatus from './TeacherStudentsStatus';
import ParentMonitor from './ParentMonitor';
import { withAuth0 } from "@auth0/auth0-react";
import LoginSignUp from './LoginSignUp';
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';
import './Main.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userByEmail: []
        }
    }
    getUserByEmail = () => {
        if (this.props.auth0.user.email) {
            axios.get(`${process.env.REACT_APP_API_URL}/getUserByEmail?email=${this.props.auth0.user.email}`).then((teacherByEmailResponse) => {
                this.setState({
                    userByEmail: teacherByEmailResponse.data,
                });
            })
                .catch(error => alert(error.message));
        }
    }


    render() {
        const isAuth = this.props.auth0.isAuthenticated;
        // console.log(this.props.auth0.user.email);
        return (
            <div id="ALLL">
                {isAuth ? (
                    < Router >
                        {this.getUserByEmail()}
                        {this.state.userByEmail.length ?
                            <>
                                {this.state.userByEmail[0].privilege === "1" &&
                                    <><AdminNav />
                                        <Switch><Route exact path="/user"><AdminUserControlPanel /></Route>
                                            <Route exact path="/students"><AdminStusentControlPanel /></Route>
                                            <Route exact path="/teacher"><AdminTeacherControlPanel /></Route>
                                            <Route exact path="/busses"><AdminBusControlPanel /></Route>
                                            <Route exact path="/"><AdminStatusMonitor /></Route>
                                        </Switch></>
                                }
                                {this.state.userByEmail[0].privilege === "2" && <TeacherStudentsStatus />}
                                {this.state.userByEmail[0].privilege === "3" && <ParentMonitor />}
                                {this.state.userByEmail[0].privilege === "" &&
                                    <Alert variant="danger">
                                        <Alert.Heading>Privilege</Alert.Heading>
                                        <p>
                                            PLEASE wait for your privilege to be assigned by admin ..!
                                        </p>
                                    </Alert>
                                }
                            </>
                            : <>
                             <Alert variant="danger">
                                        <Alert.Heading>SIGNUP</Alert.Heading>
                                        <p>
                                            PLEASE SIGNUP ..!
                                        </p>
                                    </Alert>
                            <LoginSignUp />
                            </>}
                    </Router>)
                    : <LoginSignUp />
                }
            </div>
        )
    }
}
export default withAuth0(Main);

