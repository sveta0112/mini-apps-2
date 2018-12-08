import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 1,
      total: 0,
      position1: "",
      position2: "",
      position3: "",
      position4: "",
      position5: "",
      position6: "",
      position7: "",
      position8: "",
      position9: "",
      position10: "",
      position11: "",
      position12: "",
      position13: "",
      position14: "",
      position15: "",
      position16: "",
      position17: "",
      position18: "",
      position19: "",
      position20: "",
      PinAmount2: "",
      PinAmount4: "",
      PinAmount6: "",
      PinAmount8: "",
      PinAmount10: "",
      PinAmount12: "",
      PinAmount14: "",
      PinAmount16: "",
      PinAmount18: "",
      PinAmount20: ""
    };
    this.handleButton = this.handleButton.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.getPinAmount = this.getPinAmount.bind(this);
  }

  handleReset(e) {
    this.setState({
      counter: 1,
      total: 0,
      position1: "",
      position2: "",
      position3: "",
      position4: "",
      position5: "",
      position6: "",
      position7: "",
      position8: "",
      position9: "",
      position10: "",
      position11: "",
      position12: "",
      position13: "",
      position14: "",
      position15: "",
      position16: "",
      position17: "",
      position18: "",
      position19: "",
      position20: "",
      PinAmount2: "",
      PinAmount4: "",
      PinAmount6: "",
      PinAmount8: "",
      PinAmount10: "",
      PinAmount12: "",
      PinAmount14: "",
      PinAmount16: "",
      PinAmount18: "",
      PinAmount20: ""
    });
  }

  handleButton(e) {
    if (Number.parseInt(this.state.counter) > 20) {
      alert("Game Over");
    } else {
      this.setState({
        [`position${this.state.counter}`]: e.target.id,
        total: this.state.total + Number.parseInt(e.target.id),
        counter: this.state.counter + 1
      });
      this.getPinAmount();
    }
  }

  getPinAmount() {
    if (this.state.position1 !== "" && this.state.position2 !== "") {
      this.setState({
        PinAmount2:
          Number.parseInt(this.state.position1) +
          Number.parseInt(this.state.position2)
      });
    }
    if (this.state.position3 !== "" && this.state.position4 !== "") {
      this.setState({
        PinAmount4:
          Number.parseInt(this.state.position3) +
          Number.parseInt(this.state.position4)
      });
    }
    if (this.state.position5 !== "" && this.state.position6 !== "") {
      this.setState({
        PinAmount6:
          Number.parseInt(this.state.position5) +
          Number.parseInt(this.state.position6)
      });
    }
    if (this.state.position7 !== "" && this.state.position8 !== "") {
      this.setState({
        PinAmount8:
          Number.parseInt(this.state.position7) +
          Number.parseInt(this.state.position8)
      });
    }
    if (this.state.position9 !== "" && this.state.position10 !== "") {
      this.setState({
        PinAmount10:
          Number.parseInt(this.state.position9) +
          Number.parseInt(this.state.position10)
      });
    }
    if (this.state.position11 !== "" && this.state.position12 !== "") {
      this.setState({
        PinAmount12:
          Number.parseInt(this.state.position11) +
          Number.parseInt(this.state.position12)
      });
    }
    if (this.state.position13 !== "" && this.state.position14 !== "") {
      this.setState({
        PinAmount14:
          Number.parseInt(this.state.position13) +
          Number.parseInt(this.state.position14)
      });
    }
    if (this.state.position15 !== "" && this.state.position16 !== "") {
      this.setState({
        PinAmount16:
          Number.parseInt(this.state.position15) +
          Number.parseInt(this.state.position16)
      });
    }
    if (this.state.position17 !== "" && this.state.position18 !== "") {
      this.setState({
        PinAmount18:
          Number.parseInt(this.state.position17) +
          Number.parseInt(this.state.position18)
      });
    }
    if (this.state.position19 !== "" && this.state.position20 !== "") {
      this.setState({
        PinAmount20:
          Number.parseInt(this.state.position19) +
          Number.parseInt(this.state.position20)
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Bowling Score Card</h1>
        <div id="buttons" className="buttons">
          Pins Hit:
          <button type="button" id="0" onClick={this.handleButton}>
            Gutter
          </button>
          <button type="button" id="1" onClick={this.handleButton}>
            1
          </button>
          <button type="button" id="2" onClick={this.handleButton}>
            2
          </button>
          <button type="button" id="3" onClick={this.handleButton}>
            3
          </button>
          <button type="button" id="4" onClick={this.handleButton}>
            4
          </button>
          <button type="button" id="5" onClick={this.handleButton}>
            5
          </button>
          <button type="button" id="6" onClick={this.handleButton}>
            6
          </button>
          <button type="button" id="7" onClick={this.handleButton}>
            7
          </button>
          <button type="button" id="8" onClick={this.handleButton}>
            8
          </button>
          <button type="button" id="9" onClick={this.handleButton}>
            9
          </button>
          <button type="button" id="10" onClick={this.handleButton}>
            10
          </button>
        </div>
        <div id="scorecard">
          <table
            id="scorecardTable"
            className="scorecard"
            cellPadding="1"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th colSpan="2">Frame 1</th>
                <th colSpan="2">Frame 2</th>
                <th colSpan="2">Frame 3</th>
                <th colSpan="2">Frame 4</th>
                <th colSpan="2">Frame 5</th>
                <th colSpan="2">Frame 6</th>
                <th colSpan="2">Frame 7</th>
                <th colSpan="2">Frame 8</th>
                <th colSpan="2">Frame 9</th>
                <th colSpan="2">Frame 10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.position1}</td>
                <td>{this.state.position2}</td>
                <td>{this.state.position3}</td>
                <td>{this.state.position4}</td>
                <td>{this.state.position5}</td>
                <td>{this.state.position6}</td>
                <td>{this.state.position7}</td>
                <td>{this.state.position8}</td>
                <td>{this.state.position9}</td>
                <td>{this.state.position10}</td>
                <td>{this.state.position11}</td>
                <td>{this.state.position12}</td>
                <td>{this.state.position13}</td>
                <td>{this.state.position14}</td>
                <td>{this.state.position15}</td>
                <td>{this.state.position16}</td>
                <td>{this.state.position17}</td>
                <td>{this.state.position18}</td>
                <td>{this.state.position19}</td>
                <td>{this.state.position20}</td>
              </tr>
              <tr>
                <td colSpan="2">{this.state.PinAmount2}</td>
                <td colSpan="2">{this.state.PinAmount4}</td>
                <td colSpan="2">{this.state.PinAmount6}</td>
                <td colSpan="2">{this.state.PinAmount8}</td>
                <td colSpan="2">{this.state.PinAmount10}</td>
                <td colSpan="2">{this.state.PinAmount12}</td>
                <td colSpan="2">{this.state.PinAmount14}</td>
                <td colSpan="2">{this.state.PinAmount16}</td>
                <td colSpan="2">{this.state.PinAmount18}</td>
                <td colSpan="2">{this.state.PinAmount20}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="buttons" className="buttons">
          <button type="button">Score:{this.state.total}</button>
          <button type="button" onClick={this.handleReset}>
            Reset Game
          </button>
        </div>
      </div>
    );
  }
}

export default App;