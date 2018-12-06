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
		  active:1,
		  pageCount: 0,
		  query: ""
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
          success: (data, textStatus, request) => {
          	console.log(data);
            this.setState({
              pageCount: Math.ceil(request.getResponseHeader('x-Total-Count')/10),
              data: data,
              query: word
            })
           }
        })


       
	}

	handlePageChange(data) {
	    var selected = data.selected + 1;
        var  offset = Math.ceil(selected * 10);
        this.getData(selected, this.state.query)
    }
    

    renderView(){
      if(this.state.data.length > 0){
      	return(
      		<div>

      		 <Search data={this.getData} />
      		 <ReactPaginate
		          pageCount={this.state.pageCount}
		          marginPagesDisplayed={2}
		          pageRangeDisplayed={5}
		          onPageChange={this.handlePageClick}
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