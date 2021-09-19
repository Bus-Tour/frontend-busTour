// bus cards
// this feature created to show information about the busses in the Admin control panel
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import axios from "axios";

class AdminStatusMonitor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bussData: [],
      userData: [],
    };
  }
  handleChangeOnCheck = () => {
    ////do something when checkbox change
  };

  handleClickOnEdit = () => {
    ////do something when edit button clicked
  };
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/buss`)
      .then((bussResponse) => {
        this.setState({ bussData: bussResponse.data });
      })
      .catch((error) => alert(error.message));

    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${this.bussData.busNo}`)
      .then((userResponse) => {
        let newUserArr = userResponse.filter(
          (userResponse) => userResponse.data.type === "teacher"
        );
        this.setState({ userData: newUserArr });
      })
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      <>
        {this.state.bussData.length > 0 &&
          this.state.bussData.map((buss, idx) => {
            return (
              /* /// return a card to shoe information about the busses */

              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <h4>
                        {this.bussData.busNo} / {this.bussData.driverName} /
                        {this.newUserArr.userName}
                      </h4>
                    </Card.Title>
                    <input
                      type="checkbox"
                      id="check1"
                      name="chk1"
                      value="Check Number 1"
                      onChange={this.handleChangeOnCheck}
                    />
                    <text>Check Number 1</text>
                    <br />
                    <input
                      type="checkbox"
                      id="check2"
                      name="chk2"
                      value="Check Number 2"
                      onChange={this.handleChangeOnCheck}
                    />
                    <text>Check Number 2</text>
                    <br />
                    <input
                      type="checkbox"
                      id="check3"
                      name="chk3"
                      value="Check Number 3"
                      onChange={this.handleChangeOnCheck}
                    />
                    <text>Check Number 3</text>
                    <br />
                    <br />
                    <Button
                      variant="danger"
                      size="lg"
                      onClick={this.handleClickOnEdit}
                    >
                      Edit Buss
                    </Button>
                  </Card.Body>
                </Card>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      width={200}
                      height={200}
                      src="https://image.pngaaa.com/73/4388073-middle.png"
                    />
                    <Card.Body>
                      <Card.Text>ADD NEW.</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            );
          })}
      </>
    );
  }
}

export default AdminStatusMonitor;
