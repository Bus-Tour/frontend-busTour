// bus cards
// this feature created to show information about the busses in the Admin control panel
import React from "react";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table'

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row"

import './AdminStatusMonitor.css'
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
      <div id="mainDivCards">


        <Row md="3" id="RowCards">
          <>

            {this.state.busData.length > 0 &&
              this.state.busData.map((bus) => {
                return (
                  <>

                    <Card id="bCard" style={{ width: "18rem" }} >
                      <Card.Body id="card" >
                        <Card.Title >
                          <h4 class="cardTitle">
                            {"Bus Number : " + bus.busNo}
                          </h4>
                          <h4 class="cardTitle">
                            {"Driver Name : " + bus.driverName}
                          </h4>
                          <h4 class="cardTitle">
                            {this.state.userData.map(teacher => {

                              if (teacher.privilege === "2") {
                                if (teacher.busNoforTeacherOnly === bus.busNo) {
                                  return "Teacher Name : " + teacher.userName;
                                }
                              }


                            }

                            )}
                          </h4>
                        </Card.Title>

                        {/* filter student which has the buss number = this.bus.busNumber */}
                        {this.state.studentData.map(student => {
                          if (student.busNo === bus.busNo) {
                            return (
                              // <div>
                              //   {/* {console.log(student.busNo)} */}
                              //   <ListGroup>
                              //     <ListGroup.Item id="CardStdItem">
                              //       <span>{student.studentName}</span>
                              //       {student.status === "1" && <span>    Away</span>}
                              //       {student.status === "2" && <span>     Almost there</span>}
                              //       {student.status === "3" && <span>     Arrived</span>}
                              //       {/* status: {students.status} */}

                              //     </ListGroup.Item>
                              //   </ListGroup>

                              // </div>

                              <div>
                                <Table striped bordered hover>

                                  <tbody>
                                    <tr>
                                      <td id="tableStdRow"> <span>{student.studentName}</span>
                                      <br/>
                                        {student.status === "1" && <span> 🔴    Away</span>}
                                        {student.status === "2" && <span>  🟠    Almost there</span>}
                                        {student.status === "3" && <span>  🟢    Arrived</span>}</td>

                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                            );
                          }
                        })}


                      </Card.Body>
                    </Card>

                  </>

                );
              })}
            {/* <div>

            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                height={180}
                width={130}
                src={imgPlus} />
              <Card.Body>
                <h4 id="AddTxtCard" >ADD NEW</h4>
              </Card.Body>
            </Card>
          </div> */}
          </>
        </Row>
      </div>

    );
  }
  ;
}

export default AdminStatusMonitor;
