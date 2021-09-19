import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

export class AdminUserControlPanel extends Component {
    render() {
        return (
            <div>
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
    <tr>
      <td>User.Name</td>
      <td>Ahmad@gmail</td>
      <td>+962799999999</td>
      <td>Parent</td>
      <td>
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  None
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Parent</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Teacher</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </td>
      <td>
      <Button variant="success">Edit</Button>{' '}
      <Button variant="danger">Delete</Button>
      </td>
    </tr>
  </tbody>
</Table>
            </div>
        )
    }
}

export default AdminUserControlPanel

//THIS WILL IMPORTED ON THE MAIN (ROUTE)