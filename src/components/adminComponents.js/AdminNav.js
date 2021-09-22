import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
export class AdminNav extends Component {
    render() {
        return (
            <div>
                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/students">Students CP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/teacher">Teachers CP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="busses">Busses CP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="useres">Useres CP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="adminMonitor">Admin monitor</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default AdminNav

//THIS WILL IMPORTED ON THE MAIN