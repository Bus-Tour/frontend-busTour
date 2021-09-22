// render students , teacher,bus driver info
// teacher card will be imported from teacherinfo component
import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Table from 'react-bootstrap/Table'
import Row from "react-bootstrap/Row"
// import TeacherInfo from './TeacherInfo'
// import DriverCard from './DriverCard'
// import { element } from 'prop-types';
//css
import '../ParentMonitor.css'

class ParentMonitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentsData: [],
            busData: [],
            parentEmail: "haneen.hashlamoun@gmail.com"
        }
    }

    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/parentsInterFace?email=${this.state.parentEmail}`).then((studentsRes) => {
            console.log(this.state.parentEmail, studentsRes);
            this.setState({
                studentsData: studentsRes.data,
            });

        }).catch(error => alert(error.message));
    }

    render() {

        return (
            <div id="mainDivCards">
                <Row md="1" id="RowCards">
                    <>

                        {
                            // this.state.studentsData.length > 0 &&
                            <>
                                {
                                    this.state.studentsData.map(students => {
                                        return (
                                            <>
                                                <CardGroup>
                                                    <Card id="bCard">
                                                        <Card.Img variant="top" src="" />
                                                        <Card.Body id="card">
                                                            <Card.Title>
                                                                <h4 class="cardTitle">Student Information</h4></Card.Title>
                                                            <Card.Text>
                                                                <h4 class="cardTitle">
                                                                    Student Name: {students.studentName}</h4>
                                                            </Card.Text>
                                                            <Card.Text>
                                                                <h4 class="cardTitle">
                                                                    Bus Number: {students.busNo}</h4>
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <Card.Footer>
                                                            <Card.Text>
                                                                <div>
                                                                    <Table striped bordered hover>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td id="tableStdRow"> <span>{students.studentName}</span>
                                                                                    {students.status === "1" && <span> 🔴    Away</span>}
                                                                                    {students.status === "2" && <span>  🟠    Almost there</span>}
                                                                                    {students.status === "3" && <span>  🟢    Arrived</span>}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                </div>
                                                            </Card.Text>
                                                        </Card.Footer>
                                                    </Card>
                                                </CardGroup>
                                            </>
                                        )
                                    })
                                }
                            </>
                        }
                        {/* <DriverCard name={this.state.studentsData.busNo}/> */}
                        {/* <TeacherInfo/> */}

                    </>
                </Row>
            </div>
        )
    }
}
export default ParentMonitor;
