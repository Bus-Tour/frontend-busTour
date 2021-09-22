'use strict'
import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup'
import TeacherInfo from './TeacherInfo';
import './TeacherStudentsStatus.css';
import { withAuth0 } from "@auth0/auth0-react";
class TeacherStudentsStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedstatus: "",
            studentArray: [],
            selectedStatusaObj: {},
            teacherByEmail: [],
            dataReady: false
        }
    }
    handelUpdateStatus = async (item, e) => {

        await this.setState({ selectedStatusaObj: item })
        const reqBody = {
            studentName: this.state.selectedStatusaObj.studentName,
            parentPhoneNo: this.state.selectedStatusaObj.parentPhoneNo,
            email: this.state.selectedStatusaObj.email,
            busNo: this.state.selectedStatusaObj.busNo,
            status: e.target.value,
            comments: this.state.selectedStatusaObj.comments
        };
        console.log(this.state.selectedStatusaObj._id);
        axios.put(`${process.env.REACT_APP_API_URL}/students/${this.state.selectedStatusaObj._id}`, reqBody).then(updatedselected => {

            const updatedArr = this.state.studentArray.map(student => {
                if (student._id === this.state.selectedStatusaObj._id) {
                    student = updatedselected.data
                    return student;
                }
                return student;
            })
            this.setState({
                studentArray: updatedArr,
                selectedStatusaObj: {}
            })

        }).catch(() => alert("Something went wrong!"));
    }

    componentDidMount = () => {

        axios.get(`${process.env.REACT_APP_API_URL}/getUserByEmail?email=${this.props.auth0.user.email}`).then((teacherByEmailResponse) => {

            this.setState({
                teacherByEmail: teacherByEmailResponse.data,
                dataReady: true
            });
            console.log("any ", this.state.teacherByEmail[0].busNoforTeacherOnly);
            axios.get(`${process.env.REACT_APP_API_URL}/studentBYBusNo?busNo=${this.state.teacherByEmail[0].busNoforTeacherOnly}`).then((studentResponse) => {
                this.setState({
                    studentArray: studentResponse.data
                });
                console.log(this.state.studentArray);
            })
                .catch(error => alert(error.message));
        })
            .catch(error => alert(error.message));

        console.log("hello", this.state.teacherByEmail);
    }
    /////////////////////////////////////////////// Render function 

    render() {
        return (
            <>



                {this.state.dataReady &&
                    <TeacherInfo teacherName={this.state.teacherByEmail[0].userName}
                        phoneNumber={this.state.teacherByEmail[0].phoneNo}
                        email={this.state.teacherByEmail[0].email}
                        BusNumber={this.state.teacherByEmail[0].busNoforTeacherOnly} />

                }
                <div>
                    <Table striped bordered hover id="table">
                        <thead class="tableHeader">

                            <tr >
                                <th>Student Name</th>
                                <th>Parent Info/ Phone No.</th>
                                <th>Parent Info/ E-mail</th>
                                <th>Comments</th>
                                <th id="lastth">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.studentArray.map((item) => {
                                return (
                                    <tr id={item.id}>

                                        <td class="tableRow">{item.studentName}</td>
                                        <td>{item.parentPhoneNo}</td>
                                        <td>{item.email}</td>
                                        <td>{item.comments}</td>
                                        <td>
                                            <InputGroup onChange={(e) => this.handelUpdateStatus(item, e)} >
                                                <InputGroup.Radio aria-label="Radio button for following text input" value="1" name={item.studentName}  />
                                                {" "}Stopped
                                                <InputGroup.Radio aria-label="Radio button for following text input" value="2" name={item.studentName} />
                                                Pending
                                                <InputGroup.Radio aria-label="Radio button for following text input" value="3" name={item.studentName} />
                                                Arrived
                                            </InputGroup>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}
export default withAuth0(TeacherStudentsStatus);
