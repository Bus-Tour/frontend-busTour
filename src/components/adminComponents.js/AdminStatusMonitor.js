// bus cards
// this feature created to show information about the busses in the Admin control panel
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class AdminStatusMonitor extends React.Component {
  handleChangeOnCheck = () => {
    ////do something when checkbox change
  };

  handleClickOnEdit = () => {
    ////do something when edit button clicked
  };

  render() {
    return (
      <>
        {/* /// return a card to shoe information about the busses */}
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <h4> Buss Title / Driver Name / Teacher Assistant</h4>
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
            <Button variant="danger" size="lg" onClick={this.handleClickOnEdit}>
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
      </>
    );
  }
}
export default AdminStatusMonitor;
