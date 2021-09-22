'use strict'
import React, { Component } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import './teacherInfo.css';
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
            <Card style={{ width: '22rem' }} id="cCard">
                <Card.Img variant="top" src="https://st3.depositphotos.com/14768666/36333/v/950/depositphotos_363337428-stock-illustration-school-teacher-avatar-icon-flat.jpg"  id="cardImage"/>
                {/* Teacher Photo */}
                <Card.Body id="card" >
                    <Card.Title id ="cardTitle">Teacher Name: {this.props.teacherName}</Card.Title>
                    <Card.Text class="text">
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

