// By Haneen Hashlamoun
import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class AdminBusControlPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allBusses: [],
            selectedBus: {}
        }
    }
    //=============== Create Bus ========================//
    handelCreateBusBtn = (e) => {
        e.preventDefault();
        console.log(e);
        const reqBody = {
            busNo: e.target.busNo.value,
            driverName: e.target.driverName.value,
            area: e.target.area.value,
            licensePlateNo: e.target.licensePlateNo.value,
            driverPhoneNo: e.target.driverPhoneNo.value,
            driverEmail: e.target.driverEmail.value,
            capacity: e.target.capacity.value,
        }
        axios.post(`${process.env.REACT_APP_API_URL}/busInfo`, reqBody).then(createdBus => {
            this.state.allBusses.push(createdBus.data);
            this.setState({ allBusses: this.state.allBusses });
        }).catch(() => alert("Something went wrong!"));
    }

    //=============== Delete Bus ========================//
    handelDeleteBus = (busId) => {

        axios.delete(`${process.env.REACT_APP_API_URL}/busInfo/${busId}`).then(deleteResponse => {
            if (deleteResponse.data.deletedCount === 1) {
                const newBusArr = this.state.allBusses.filter(bus => bus._id !== busId);
                this.setState({ allBusses: newBusArr });
            }
        }).catch(() => alert("something went wrong"));
    }
    //===================================================End delete btn

    //=============== componentDidMount ======================//
    componentDidMount = () => {
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
                            <th>Driver Name</th>
                            <th>Area</th>
                            <th>Phone Number</th>
                            <th>Driver Email</th>
                            <th>Capacity</th>
                            <th>license Plate No.</th>
                            <th>Bus Number</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allBusses.map(bus => {
                            return (
                                <tr id={bus._id}>
                                    <td>{bus.driverName}</td>
                                    <td>{bus.area}</td>
                                    <td>{bus.driverPhoneNo}</td>
                                    <td>{bus.driverEmail}</td>
                                    <td>{bus.capacity}</td>
                                    <td>{bus.licensePlateNo}</td>
                                    <td>{bus.busNo}</td>
                                    <td>
                                        <Button variant="danger" onClick={(e) => this.handelDeleteBus(bus._id)} >Delete</Button>
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

                    <Form onSubmit={this.handelCreateBusBtn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Driver Name:</Form.Label>
                            <Form.Control name="driverName" type="text" placeholder="Enter Driver Name" />
                            <Form.Label> Area:</Form.Label>
                            <Form.Control name="area" type="text" placeholder="Enter bus number" />
                            <Form.Label>Driver Email:</Form.Label>
                            <Form.Control name="driverEmail" type="text" placeholder="Enter email" />
                            <Form.Label> Driver Phone Number:</Form.Label>
                            <Form.Control name="driverPhoneNo" type="text" placeholder="Enter Phone number" />
                            <Form.Label> Bus Number:</Form.Label>
                            <Form.Control name="busNo" type="text" placeholder="Enter bus number" />
                            <Form.Label> license Plate No:</Form.Label>
                            <Form.Control name="licensePlateNo" type="text" placeholder="Enter bus license Plate No." />
                            <Form.Label> Capacity:</Form.Label>
                            <Form.Control name="capacity" type="text" placeholder="Enter Capacity" />
                            <Button variant="primary" type="submit" >Create Bus</Button>
                        </Form.Group>
                    </Form>
                </>
            </>
        )
    }
}
export default AdminBusControlPanel;