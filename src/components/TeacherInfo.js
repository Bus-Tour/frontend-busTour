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
        console.log("props",this.props)
    }
    render() {
     
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://library.kissclipart.com/20181211/coq/kissclipart-teacher-clipart-doctorate-teacher-science-04d70326c24676e8.jpg" />
                {/* Teacher Photo */}
                <Card.Body>
                    <Card.Title>Teacher Name:{this.props.teacherName}</Card.Title>
                    <Card.Text>
                  Teacher email:  {this.props.email}
                    </Card.Text>       
                    <Card.Text>   
                  Phone Number:   {this.props.phoneNumber}                  
                    </Card.Text>                    
                    <Card.Text>Bus Number:  {this.props.BusNumber}   </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default TeacherInfo;

