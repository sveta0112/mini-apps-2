import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // dates: [],
      // prices: [],
      Data: {}
    };
    this.getHistoryRecord = this.getHistoryRecord.bind(this);
  }

  componentDidMount() {
    this.getHistoryRecord();
  }
  getHistoryRecord() {
    axios
      .get(
        "https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-11-06&end=2018-12-05"
      )
      .then(response => {
        var prices = [];
        var dates = [];
        for (let key in response.data.bpi) {
          prices.push(response.data.bpi[key]);
          dates.push(key);
        }

        this.setState({
          Data: {
            labels: dates,
            datasets: [
              {
                label: "Bitcoin Price",
                data: prices,
                backgroundColor: [
                  "rgba(255,105,145,0.6)",
                  "rgba(155,100,210,0.6)",
                  "rgba(90,178,255,0.6)",
                  "rgba(240,134,67,0.6)",
                  "rgba(120,120,120,0.6)",
                  "rgba(250,55,197,0.6)"
                ]
              }
            ]
          }
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Line data={this.state.Data} />
      </div>
    );
  }
}

export default App;