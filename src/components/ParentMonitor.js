// render students , teacher,bus driver info
// teacher card will be imported from teacherinfo component
import React, { Component } from 'react';
// import axios from 'axios';
// import TeacherInfo from './TeacherInfo'
import 'bootstrap/dist/css/bootstrap.min.css';


class ParentMonitor extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src="https://previews.123rf.com/images/puruan/puruan1702/puruan170208984/72742803-driver-avatar-icon-in-colors-.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Driver Information</h5>
                            <p class="card-text">Driver Name</p>
                            <p class="card-text">Driver No.</p>
                            <p class="card-text">Driver email</p>
                        </div>
                    </div>
                </div>
                <div class="card-group">
                    <div class="card">
                        <img src="https://image.flaticon.com/icons/png/512/67/67902.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Student Information</h5>
                            <p class="card-text">students name</p>
                            <p class="card-text">students class</p>
                            <p class="card-text"><small class="text-muted">status</small></p>
                        </div>
                    </div>
                </div>
                {/* <TeacherInfo/> */}
            </div>
        )
    }
}
export default ParentMonitor;
