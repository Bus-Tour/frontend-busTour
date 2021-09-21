import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

class DriverCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busData: [],
            busNumber: "1"
        }
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/busInfo`).then((busInfoRes) => {

            this.setState({ busData: busInfoRes.data });
        }).catch(error => alert(error.message));
    }
    render() {

        return (
            <>
                {
                    this.state.busData.length > 0 &&
                    <>
                        {
                            this.state.busData.map(driver => {
                                return (
                                    <>
                                        <CardGroup>
                                            <Card>
                                                <Card.Img variant="top" src="holder.js/100px160" />
                                                <Card.Body>
                                                    <Card.Title>Driver Information</Card.Title>
                                                    <Card.Text>
                                                        {driver.driverName}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {driver.driverPhoneNo}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {driver.busNo}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </CardGroup>
                                    </>
                                )
                            })
                        }
                        </>
    }
        )
    
    </>
                       
        )}
}
export default DriverCard;
