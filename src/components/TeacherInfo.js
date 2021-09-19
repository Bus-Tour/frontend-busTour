'use strict'
import React, { Component } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
class TeacherInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // props vlaues goes here
        }
    }
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://library.kissclipart.com/20181211/coq/kissclipart-teacher-clipart-doctorate-teacher-science-04d70326c24676e8.jpg" />
                {/* Teacher Photo */}
                <Card.Body>
                    <Card.Title>Teacher Name</Card.Title>
                    <Card.Text>
                        Phone No. : 875632185  {/* PhoneNo from props */}                        
                        E-mail : teacehr@mail.com  {/* E-mail from props */}                        
                    </Card.Text>                    
                    <Card.Text>Bus No.</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default TeacherInfo;

