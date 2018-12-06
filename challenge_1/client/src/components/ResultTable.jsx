// import React, { Component } from "react";
// import TableRow from './TableRow.jsx';

// class ResultTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <article id="article2">
       
//         <div/>
//         <div>
//           <table id="ListTable">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Description</th>
//                 <th>Lang</th>
//                 <th>Category1</th>
//                 <th>Category2</th>
//                 <th>Granularity</th>
               
//               </tr>
//             </thead>
//             <tbody>
//               {this.props.info.map((item, index) => (
//                 <TableRow
//                   key={index}
//                   details={item}
                  
//                 />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </article>
//     );
//   }
// }

// export default ResultTable;


import React, { Component } from "react";
import TableRow from "./TableRow.jsx";
import Pagination from "react-js-pagination";

class ResultTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id="article2">
        <div />
        <div>
          <table id="ListTable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Lang</th>
                <th>Category1</th>
                <th>Category2</th>
                <th>Granularity</th>
              </tr>
            </thead>
            <tbody>
              {this.props.info.map((item, index) => (
                <TableRow key={index} details={item} />
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <Pagination
              activePage={this.props.activePage}
              itemsCountPerPage={10}
              totalItemsCount={this.props.pageTotal}
              pageRangeDisplayed={5}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
      </article>
    );
  }
}

export default ResultTable;