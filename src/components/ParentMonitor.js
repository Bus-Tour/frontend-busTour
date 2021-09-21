// render students , teacher,bus driver info
// teacher card will be imported from teacherinfo component
import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
// import TeacherInfo from './TeacherInfo'
// import DriverCard from './DriverCard'

// import { element } from 'prop-types';


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
            <>
                {
                    // this.state.studentsData.length > 0 &&
                    <>
                        {
                            this.state.studentsData.map(students => {
                                return (
                                    <>
                                        <CardGroup>
                                            <Card>
                                                <Card.Img variant="top" src=""/> 
                                                <Card.Body>
                                                    <Card.Title>Student Information</Card.Title>
                                                    <Card.Text>
                                                        Student Name: {students.studentName}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Bus Number: {students.busNo}
                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Card.Text>
                                                        {/* {
                                                           
                                                                if(students.status==="1"){
                                                                    <p>status: Away</p>
                                                                }else if (students.status==="2") {
                                                                    <p>status: Almost there</p>
                                                                } elseif(students.status==="3") {
                                                                    <p>status: Arrived</p>
                                                                }else{
                                                                    <p>status: *** </p>
                                                                }
                                                            
                                                        } */}
                                                        status: {students.status}
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
                {/* <DriverCard/> */}
                {/* <TeacherInfo/> */}

            </>
        )
    }
}
export default ParentMonitor;
