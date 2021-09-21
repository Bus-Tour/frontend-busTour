'use strict'
import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup'
import TeacherInfo from './TeacherInfo';


// import Form from 'react-bootstrap/Form'
// import checkbox from 
class TeacherStudentsStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfbus: "3",
            // studentArray: student,
            selectedstatus: "",
            id: "",
            newid: "",
            studentArray: [],
            selectedStatusaObj:{}
        }
    }

    handelUpdateStatus = async (item, e) => {
        // e.preventDefault();
        
        await this.setState({selectedStatusaObj: item})
        const reqBody = {
            studentName: this.state.selectedStatusaObj.studentName,            
            parentPhoneNo: this.state.selectedStatusaObj.parentPhoneNo,
            email:this.state.selectedStatusaObj.email,
            busNo:this.state.selectedStatusaObj.busNo,
            status: e.target.value,
            comments:this.state.selectedStatusaObj.comments
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
                selectedStatusaObj :{}
            })           

        }).catch(() => alert("Something went wrong!"));
    }


    componentDidMount = () => {


        
        axios.get(`${process.env.REACT_APP_API_URL}/studentBYBusNo?busNo=${"2"}`).then((studentResponse) => {
            this.setState({
                studentArray: studentResponse.data
            });
            console.log(this.state.studentArray);
        })
            .catch(error => alert(error.message));
    }

    /////////////////////////////////////////////// Render function 

    render() {

        return (
            <>
<TeacherInfo/>
                {/* // this table will be include the students onfo and status to be modified */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Parent Info/ Phone No.</th>
                            <th>Parent Info/ E-mail</th>
                            <th>Comments</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>



                        {this.state.studentArray.map((item) => {
                            return (
                                <tr id={item.id}>

                                    <td>{item.studentName}</td>
                                    <td>{item.parentPhoneNo}</td>
                                    <td>{item.email}</td>
                                    <td>{item.comments}</td>
                                    <td>



                                        <InputGroup onChange={(e) => this.handelUpdateStatus(item, e)}>
                                            <InputGroup.Radio aria-label="Radio button for following text input" value="1" name={item.studentName} />
                                            {" "}Stopped
                                            <InputGroup.Radio aria-label="Radio button for following text input" value="2" name={item.studentName} />
                                            Pending
                                            <InputGroup.Radio aria-label="Radio button for following text input" value="3" name={item.studentName} />
                                            Arrived
                                            {/* <FormControl aria-label="Text input with radio button" /> */}
                                        </InputGroup>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
            </>
        )



    }
}
export default TeacherStudentsStatus;









































































