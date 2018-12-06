import React, { Component } from "react";


class TableRow extends React.Component {
  render() {
    return(
        <tr><td>{this.props.details.date}</td>
	        <td>{this.props.details.description}</td>
	        <td>{this.props.details.lang}</td>
	        <td>{this.props.details.category1}</td>
	        <td>{this.props.details.category2}</td>
	        <td>{this.props.details.granularity}</td>
          
           
        </tr>
    )
  }
}

export default TableRow;