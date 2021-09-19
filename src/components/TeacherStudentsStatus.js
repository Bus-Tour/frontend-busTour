'use strict'
import React, { Component } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup'
import TeacherInfo from './TeacherInfo';

class TeacherStudentsStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // props vlaues goes here
        }
    }

    render() {
        return (
            <>
                <TeacherInfo /> {/* Teacher Info card */}
                {/* // this table will be include the students onfo and status to be modified */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Parent Info/ Phone No.</th>
                            <th>Parent Info/ E-mail</th>
                            <th>Comments</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hamza</td>
                            <td>986524685</td>
                            <td>parent@gmail.com</td>
                            <td>Beware of the dogs</td>
                            <td>
                                {/* here to add radios */}
                                <InputGroup>
                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                    {/* <FormControl aria-label="Text input with radio button" /> */}
                                </InputGroup>
                            </td>
                        </tr>
                        <tr>
                            <td>Rasha</td>
                            <td>3216</td>
                            <td>parent2@gmail.com</td>
                            <td>black door</td>
                            <td>
                                {/* here to add radios */}
                                <InputGroup>
                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                    {/* <FormControl aria-label="Text input with radio button" /> */}
                                </InputGroup>
                            </td>
                        </tr>
                        <tr>
                            <td>Jood</td>
                            <td>65189</td>
                            <td>parent3@gmail.com</td>
                            <td>next to supermarket</td>
                            <td>
                                {/* here to add radios */}
                                <InputGroup>
                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                    {/* <FormControl aria-label="Text input with radio button" /> */}
                                </InputGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}
export default TeacherStudentsStatus;
