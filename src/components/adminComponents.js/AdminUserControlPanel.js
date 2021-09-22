import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
// import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './AdminUserCssCP.css';
export class AdminUserControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useresdata: [],
      selectedUserDataObj: {}
    }
  }

  //////////////////delete user //////////////
  handelDeleteuser = (userId) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/user/${userId}`).then(deleteResponse => {
      if (deleteResponse.data.deletedCount === 1) {
        const newuserArr = this.state.useresdata.filter(user => user._id !== userId);

        this.setState({ useresdata: newuserArr });
      }
    }).catch(() => alert("something went wrong"));

  }

  ///////////////////////////////////////

  //////////////update user ////////////////

  handelUpdateUser = async (user, e) => {
    await this.setState({ selectedUserDataObj: user });
    // this.handelUpdateUser();
    const reqBody = {
      userName: this.state.selectedUserDataObj.userName,
      password: this.state.selectedUserDataObj.password,
      email: this.state.selectedUserDataObj.email,
      phoneNo: this.state.selectedUserDataObj.phoneNo,
      privilege: e.target.value,
      type: this.state.selectedUserDataObj.type,      
      busNoforTeacherOnly: this.state.selectedUserDataObj.busNoforTeacherOnly,
    };
    console.log(user.userName + 'I am the user and thw prev' + user.privilege)

    axios.put(`${process.env.REACT_APP_API_URL}/user/${this.state.selectedUserDataObj._id}`, reqBody).then(updatedUserObject => {

      const updateUserArr = this.state.useresdata.map(user => {


        if (user._id === this.state.selectedUserDataObj._id) {
          user = updatedUserObject.data

          return user;
        }

        return user;

      });

      this.setState({
        useresdata: updateUserArr,
        selectedUserDataObj: {}
      })


    }).catch(() => alert("Something went wrong!"));
  }
  // handelSetUser = (user) => {
  //   this.setState({ selectedUserDataObj: user });
  //   this.handelUpdateUser();
  // }

  //////////////////////////////////////////

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/user`).then((userResponse) => {

      this.setState({ useresdata: userResponse.data });
    }).catch(error => alert(error.message));

  }
  render() {
    console.log(this.state.useresdata);
    return (
      <div id="div">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User Name</th>
              <th>E-mail</th>
              <th>Phone No.</th>
              <th>Type</th>
              <th>Privilge</th>
              <th>Controls</th>
            </tr>
          </thead>
          <tbody>
            {/* map function here */}
            {
              this.state.useresdata.map(user => {
                return (
                  <tr>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNo}</td>
                    <td>{user.type}</td>
                    <td>
                      <Form.Control as="select" name="privilege" defaultValue={user.privilege} onChange={(e) => this.handelUpdateUser(user, e)}>
                        <option value='1' selected={user.privilege === "1"}>Admin</option>
                        <option value='3' selected={user.privilege === "3"}>Parent</option>
                        <option value='2' selected={user.privilege === "2"}>Teacher</option>
                        <option value='' selected={user.privilege === ""}>not assigned</option>
                      </Form.Control>
                    </td>
                    <td>
                      <Button variant="danger" onClick={() => this.handelDeleteuser(user._id)} >Delete</Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default AdminUserControlPanel

//THIS WILL IMPORTED ON THE MAIN (ROUTE)