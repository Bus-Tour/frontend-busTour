// By Haneen Hashlamoun
import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
//CSS
import './AdminTeacherCssCP.css'
class AdminTeacherControlPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allTeachers: [],
      allBusses: [],
      selectedTeacher: {}
    }
  }
  //=============== Delete teacher ========================//
  handelDeleteTeacher = (teacherId) => {
    // e.preventDefault();//DeleteBtn
    axios.delete(`${process.env.REACT_APP_API_URL}/user/${teacherId}`).then(deleteResponse => {
      if (deleteResponse.data.deletedCount === 1) {
        const newTeacherArr = this.state.allTeachers.filter(teacher => teacher._id !== teacherId);
        this.setState({ allTeachers: newTeacherArr });
      }
    }).catch(() => alert("something went wrong"));
  }
  //===================================================End delete btn
  //=============== Update BusNo teacher ===================//
  handeleOnChaneBus = async (teacher, e) => {
    // e.preventDefault();
    await this.setState({ selectedTeacher: teacher });
    const reqBody = {
      userName: this.state.selectedTeacher.userName,
      password: this.state.selectedTeacher.password,
      phoneNo: this.state.selectedTeacher.phoneNo,
      email: this.state.selectedTeacher.email,
      privilege : "2",
      type : "2",
      busNoforTeacherOnly: e.target.value,
    };

    axios.put(`${process.env.REACT_APP_API_URL}/user/${this.state.selectedTeacher._id}`, reqBody).then(updatedTeacherObject => {
      const updateTeacherArr = this.state.allTeachers.map(teacher => {
        if (teacher._id === this.state.selectedTeacher._id) {
          teacher = updatedTeacherObject.data;
          return teacher;
        }
        return teacher;
      });
      this.setState({
        selectedTeacher: {},
        allStudents: updateTeacherArr,
      })
    }).catch(() => alert("Something went wrong!"));
    console.log("bus changed..!");
  }
  //=============== componentDidMount ======================//
  componentDidMount = () => {
    // GET <ALLTeachers> FROM API ////////////////////////
    axios.get(`${process.env.REACT_APP_API_URL}/user`).then((response) => {
      this.setState({ allTeachers: response.data });
    }).catch(error => alert(error.message));
    // GET <ALLBusses> FROM API ////////////////////////
    axios.get(`${process.env.REACT_APP_API_URL}/busInfo`).then((response) => {
      this.setState({ allBusses: response.data });
    }).catch(error => alert(error.message));
  }
  //==============================================End CompMount

  render() {
    const filteredUsers = this.state.allTeachers.filter(teacher => {
      return (teacher.privilege === "2")
    })
    return (
      <>
        <Table class="table" striped bordered hover>
          <thead>
            <tr>
              <th>Teacher Name</th>
              <th>E-mail</th>
              <th>Phone Number</th>
              <th>Bus Number</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredUsers.map(teacher => {
                return (
                  <tr id={teacher._id}>
                    <td>{teacher.userName}</td>
                    <td>{teacher.email}</td>
                    <td>{teacher.phoneNo}</td>
                    <td>
                      <Form.Control as="select" name="busNoforTeacherOnly" defaultValue={teacher.busNoforTeacherOnly} id="aboveDDL" onChange={(e) => this.handeleOnChaneBus(teacher, e)}>
                        {this.state.allBusses.map(bus => {
                          return (
                            <option value={bus.busNo} selected={bus.busNo === teacher.busNoforTeacherOnly}>{bus.busNo}</option>
                          )
                        })}
                      </Form.Control>
                    </td>
                    <td>
                      <Button variant="danger" onClick={() => this.handelDeleteTeacher(teacher._id)} >Delete</Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <>
          {/* <br></br>
          <br></br> */}
          {/* <Form onSubmit={this.handelCreateSeacherBtn}>
            <Form.Group className="mb-3" controlId="formeacherData" >
              <Form.Label>Teacher Name:</Form.Label>
              <Form.Control type="teacherName" name="teacherName" id="teacherName" placeholder="Enter teacher Name" required />
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" id="email" placeholder="Enter email" required />
              <Form.Label>Phone Number:</Form.Label>
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
            <Button variant="primary" type="submit" name="addteacherBtn">Create teacher</Button>
          </Form> */}
        </>
      </>
    )
  }
}
export default AdminTeacherControlPanel;

// userName: { type: String },
//     password: { type: String },
//     phoneNo: { type: String },
//     email: { type: String },
//     privilege: { type: String },
//     type: { type: String },
//     busNoforTeacherOnly: { type: String },