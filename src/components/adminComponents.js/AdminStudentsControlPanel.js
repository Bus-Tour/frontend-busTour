import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class AdminStusentControlPanel extends React.Component {
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
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td> any </td>
                            <td>
                                <>
                                    <Button variant="warning">Edit</Button>
                                    {' '}
                                    <Button variant="danger">Delete </Button>

                                </>

                            </td>


                        </tr>


                    </tbody>
                </Table>
                <>
                    <br></br>
                    <br></br>






                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Label>Student Name:</Form.Label>
                            <Form.Control type="StudentName" placeholder="Enter Student Name" />

                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />


                            <Form.Label> Parent Phone Number:</Form.Label>
                            <Form.Control type="phone" placeholder="Enter Phone number" />
                        </Form.Group>



                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Bus Number: </Form.Label>
                                <Form.Control as="select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Control>
                            </Form.Group>



                            <Form.Label> Comments:</Form.Label>
                            <Form.Control type="comments" placeholder="Enter any other comments" />

                        </Form>

                        <Button variant="primary" type="submit">
                            Create student
                        </Button>
                    </Form>

                </>

            </>

        )
    }
}
export default AdminStusentControlPanel;
