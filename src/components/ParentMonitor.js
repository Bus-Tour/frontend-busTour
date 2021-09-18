// render students , teacher,bus driver info
// teacher card will be imported from teacherinfo component
import React, { Component } from 'react';
// import axios from 'axios';
// import TeacherInfo from './TeacherInfo'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


class ParentMonitor extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Driver Information</Card.Title>
                        <Card.Text>
                        driver name 
                        </Card.Text>
                        <Card.Text>
                        driver phone no. 
                        </Card.Text>
                        <Card.Text>
                        driver email
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Student Information</Card.Title>
                        <Card.Text>
                            student name 
                        </Card.Text>
                        <Card.Text>
                            student class 
                        </Card.Text>
                        <Card.Text>
                            bus number 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">status</small>
                        <img variant="top" src="holder.js/100px160" alt="noImage"/>
                    </Card.Footer>
                </Card>
            </CardGroup>
          
                {/* <TeacherInfo/> */ }
                </>
        )
    }
}
export default ParentMonitor;

