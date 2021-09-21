// By Haneen Hashlamoun
import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class AdminStusentControlPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allStudents: [],
      allBusses: [],
      selectedStudent: {}
    }
  }
  //=============== Delete Student ========================//
  handelDeleteStudent = (studentId) => {
    // e.preventDefault();//DeleteBtn
    axios.delete(`${process.env.REACT_APP_API_URL}/students/${studentId}`).then(deleteResponse => {
      if (deleteResponse.data.deletedCount === 1) {
        const newStudentArr = this.state.allStudents.filter(student => student._id !== studentId);
        this.setState({ allStudents: newStudentArr });
      }
    }).catch(() => alert("something went wrong"));
  }
  //===================================================End delete btn
  //=============== Create Student ========================//
  handelCreateStudentBtn = (e) => {
    e.preventDefault();
    console.log(e);

    const reqBody = {
      studentName: e.target.studentName.value,
      email: e.target.email.value,
      parentPhoneNo: e.target.phoneNo.value,
      busNo: e.target.busNo.value,
      comments: e.target.comments.value
    }
    axios.post(`${process.env.REACT_APP_API_URL}/students`, reqBody).then(createdStudent => {
      this.state.allStudents.push(createdStudent.data);
      this.setState({ allStudents: this.state.allStudents });
    }).catch(() => alert("Something went wrong!"));
  }
  //=============== Update BusNo Student ===================//
  handeleOnChaneBus = async (student, e) => {
    // e.preventDefault();
    await this.setState({ selectedStudent: student });
    // const { studentName, parentPhoneNo, email, busNo, status, comments } = request.body;
    const reqBody = {
      studentName: this.state.selectedStudent.studentName,
      parentPhoneNo: this.state.selectedStudent.parentPhoneNo,
      email: this.state.selectedStudent.email,
      busNo: e.target.value,
      status: this.state.selectedStudent.status,
      comments: this.state.selectedStudent.comments
    };

    axios.put(`${process.env.REACT_APP_API_URL}/students/${this.state.selectedStudent._id}`, reqBody).then(updatedStuentObject => {
      const updateStudentArr = this.state.allStudents.map(student => {
        if (student._id === this.state.selectedStudent._id) {
          student = updatedStuentObject.data;
          return student;
        }
        return student;
      });
      this.setState({
        selectedStudent: {},
        allStudents: updateStudentArr,
      })
    }).catch(() => alert("Something went wrong!"));
    console.log("bus changed..!");
  }
  //==============================================End change bus
  //=============== componentDidMount ======================//
  componentDidMount = () => {
    // GET <ALLSTUDENTS> FROM API ////////////////////////
    axios.get(`${process.env.REACT_APP_API_URL}/students`).then((response) => {
      this.setState({ allStudents: response.data });
    }).catch(error => alert(error.message));
    // GET <ALLBusses> FROM API ////////////////////////
    axios.get(`${process.env.REACT_APP_API_URL}/busInfo`).then((response) => {
      this.setState({ allBusses: response.data });
    }).catch(error => alert(error.message));
  }
  //==============================================End CompMount
  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Parent Info/Phone Number</th>
              <th>Comments</th>
              <th>Bus Number</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.allStudents.map(student => {
                return (
                  <tr id={student._id}>
                    <td>{student.studentName}</td>
                    <td>{student.email}{student.parentPhoneNo}</td>
                    <td>{student.comments}</td>
                    <td>
                      <Form.Control as="select" name="busNo" defaultValue={student.busNo} id="aboveDDL" onChange={(e) => this.handeleOnChaneBus(student, e)}>
                        {this.state.allBusses.map(bus => {
                          return (
                            <option value={bus.busNo} selected={bus.busNo === student.busNo}>{bus.busNo}</option>
                          )
                        })}
                      </Form.Control>
                    </td>
                    <td>
                      {/* <Button variant="warning" onClick={(e) => this.editBtnClick(student, e)}>Edit</Button> */}
                      <Button variant="danger" onClick={() => this.handelDeleteStudent(student._id)} >Delete</Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <>
          <br></br>
          <br></br>
          <Form onSubmit={this.handelCreateStudentBtn}>
            <Form.Group className="mb-3" controlId="formStudentData" >
              <Form.Label>Student Name:</Form.Label>
              <Form.Control type="StudentName" name="studentName" id="studentName" placeholder="Enter Student Name" required />
              <Form.Label>Parent Email:</Form.Label>
              <Form.Control type="email" name="email" id="email" placeholder="Enter email" required />
              <Form.Label> Parent Phone Number:</Form.Label>
              <Form.Control type="phone" name="phoneNo" id="phoneNo" placeholder="Enter Phone number" required />
            </Form.Group>
            <Form.Label>Bus Number: </Form.Label>
            <Form.Control as="select" name="busNo" id="downDDL">
              {this.state.allBusses.map(bus => {
                return (
                  <option value={bus.busNo} selected={bus.busNo === "1"}>{bus.busNo}</option>
                )
              })}
            </Form.Control>
            <Form.Label> Comments:</Form.Label>
            <Form.Control type="comments" name="comments" placeholder="Enter any other comments" />
            <Button variant="primary" type="submit" name="addStudentBtn">Create student</Button>
          </Form>
          {/* <Button variant="primary" type="submit" name="updateStudentBtn" onClick={(e) => this.handelUpdateStudentBtn()}>Update student</Button> */}
        </>
      </>
    )
  }
}
export default AdminStusentControlPanel;