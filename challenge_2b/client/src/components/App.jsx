import React from 'react';
import $ from 'jquery';
import axios from 'axios';
//import Line from './Line.jsx';



class App extends React.Component {
  constructor(){
  	super();
  	this.state = {
      data: [],
     
  	}
    this.getHistoryRecord = this.getHistoryRecord.bind(this);
  }
  
  componentDidMount(){
    this.getHistoryRecord();
  }
  getHistoryRecord(){
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-11-06&end=2018-12-05')
      .then(response => {
        this.setState({
          data: response.data.bpi
        })
      })
      .catch(error => console.log(error))
  }

  render(){
  	return(
      <div>
       
      </div>
    );
  }
}

export default App;