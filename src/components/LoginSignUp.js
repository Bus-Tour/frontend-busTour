import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
import '../components/LoginSignUp.css';
// import Alert from 'react-bootstrap/Alert';


class LoginSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useresdata: [],
        }
    }
    ////////////////////////////////////Add user by signup form/////////////////////////////////////

    handelSubmitSignIn = (e) => {
        e.preventDefault();
        console.log(e.target.userName);
        const reqBody = {
            userName: e.target.userName.value,
            password: e.target.userPassword.value,
            email: e.target.userEmail.value,
            phoneNo: e.target.phonNum.value,
            privilege: '',
            type: e.target.userType.value,
            busNoforTeacherOnly: '',
        }
        axios.post(`${process.env.REACT_APP_API_URL}/user`, reqBody).then(createduserObject => {
            this.state.useresdata.push(createduserObject.data);
            this.setState({ useresdata: this.state.useresdata });
            this.successfulAlert();
        }).catch(() => alert("Something went wrong!"));
        document.getElementById("create-course-form").reset();

    }
    
    successfulAlert=()=>{
return alert("successful")
}
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/user`).then((userResponse) => {

            this.setState({ useresdata: userResponse.data });
        }).catch(error => alert(error.message));

    }
    render() {
        return (
            <div id="MainDivForm">
                <Form onSubmit={this.handelSubmitSignIn} id="create-course-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail"  >
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" name="userName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="userEmail" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="userPassword" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter your phone number" name="phonNum" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" name="userType" >
                            <option value='Admin'>Admin</option>
                            <option value='Parent'>Parent</option>
                            <option value='Teacher'>Teacher</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>

            </div>
        )
    }
}
export default LoginSignUp;