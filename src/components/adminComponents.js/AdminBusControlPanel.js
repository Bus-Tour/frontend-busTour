import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AdminBusControlPanel extends React.Component {
    render() {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Driver Name</th>
                            <th>Driver Info/Phone Number</th>
                            <th>Email</th>
                            <th>Bus Number</th>
                            <th>control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map here */}
                        <tr>
                            <td>hanen</td>
                            <td>555555</td>
                            <td>Otto</td>
                            <td> 4 </td>
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

                            <Form.Label>Driver Name:</Form.Label>
                            <Form.Control type="StudentName" placeholder="Enter Driver Name" />

                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Label> Driver Phone Number:</Form.Label>
                            <Form.Control type="phone" placeholder="Enter Phone number" />
                            <Form.Label> Bus Number:</Form.Label>
                            <Form.Control type="text" placeholder="Enter bus number" />
                        <Button variant="primary" type="submit">
                            Create Bus
                        </Button>
                        </Form.Group>
                    </Form>
                </>
            </>
        )
    }
}
export default AdminBusControlPanel;