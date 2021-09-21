// bus cards
// this feature created to show information about the busses in the Admin control panel
import React from "react";
import Card from "react-bootstrap/Card";

import ListGroup from "react-bootstrap/ListGroup";
import 'bootstrap/dist/css/bootstrap.min.css';



import axios from "axios";

class AdminStatusMonitor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busData: [],
      userData: [],
      studentData: [],
      busses: [],
    };
  }

  handleClickOnEdit = () => {
    ////do something when edit button clicked
  };
  componentDidMount = () => {

    // bus info data
    axios
      .get(`${process.env.REACT_APP_API_URL}/busInfo`).then((busResponse) => {
        this.setState({ busData: busResponse.data });
      })
      .catch((error) => alert(error.message));

    /// get data where type of user = teacher
    axios
      .get(`${process.env.REACT_APP_API_URL}/user`).then((userResponse) => {
        // let newUserArr = userResponse.filter(
        //   (userResponse) => userResponse.data.privilege === "2"
        // );

        this.setState({ userData: userResponse.data });
      })
      .catch((error) => alert(error.message));

    // //// get student list
    axios
      .get(`${process.env.REACT_APP_API_URL}/students`)
      .then((studentResponse) => {
        this.setState({ studentData: studentResponse.data });
      })
      .catch((error) => alert(error.message));
  };


  render() {
    return (
      <>
        {console.log(this.state.busData)}
        {console.log(this.state.userData)}
        {console.log(this.state.studentData)}

        {this.state.busData.length > 0 &&
          this.state.busData.map((bus) => {
            return (
              <>
                <div>
                  <Card style={{ width: "18rem" }} >
                    <Card.Body id="card">
                      <Card.Title>
                        <h4>

                          {"bus No : " + bus.busNo} <br />
                          {"Driver Name : " + bus.driverName} <br />
                          {this.state.userData.map(teacher => {

                            if (teacher.busNoforTeacherOnly === bus.busNo) {
                              return "Teacher Name : " + teacher.userName;
                            }


                          }

                          )}
                        </h4>
                      </Card.Title>

                      {/* filter student which has the buss number = this.bus.busNumber */}
                      {this.state.studentData.map(student => {
                        if (student.busNo === bus.busNo) {
                          return (
                            <div>
                              {/* {console.log(student.busNo)} */}
                              <ListGroup>
                                <ListGroup.Item>
                                  <span>{student.studentName}</span>
                                  {student.status === "1" && <span>    Away</span>}
                                  {student.status === "2" && <span>     Almost there</span>}
                                  {student.status === "3" && <span>     Arrived</span>}
                                  {/* status: {students.status} */}

                                </ListGroup.Item>
                              </ListGroup>
                            </div>
                          );
                        }
                      })}


                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })}
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              width={200}
              height={200}
              src="https://image.pngaaa.com/73/4388073-middle.png"
            />
            <Card.Body>
              <Card.Text>ADD NEW</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
  s;
}

export default AdminStatusMonitor;
