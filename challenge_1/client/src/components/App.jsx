import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import Search from './Search.jsx';
import ResultTable from './ResultTable.jsx';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
		  data: [],
		  view: "default",
		  active:1
		}
		this.getData = this.getData.bind(this);
		
	} 
	
	
    componentDidMount(){
	  this.getData();
	}

	
	changeHandler(item, option){
      this.setState({
      	view: option,
        last: item
      })
	}

	getData(pageNum, word){
		$.ajax({
          method: 'GET',
          url:`/events?q=${word}&_pages=${pageNum}&_limit=10`,
          dataType: 'json',
          success: (data) => {
          	console.log(data);
            this.setState({
              data: data
            })
           }
        })
	}

	handlePageChange(pageNumber) {
	    console.log(`active page is ${pageNumber}`);
	    this.setState({activePage: pageNumber});
    }
    

    renderView(){
      if(this.state.data.length > 0){
      	return(
      		<div>

      		  <Search data={this.getData} />
      		  <ReactPaginate
	            pageCount={pageCount}
	            marginPagesDisplayed={2}
	            pageRangeDisplayed={5}
	            onPageChange={page => this.changeCurrentPage(page)}
              />
      		  <ResultTable info={this.state.data}/>
      		</div>
      	);
      } else {
      	return <Search data={this.getData} />
      }
      
    }
	render(){
		return(
          <div>
             
          	 {this.renderView()}
          </div>
		);
	}
}


export default App;