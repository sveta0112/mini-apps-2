import React from 'react';
import ResultTable from './ResultTable.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: "", 
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
  }


  handleChange(e) {
    this.setState({
      [event.target.id]: e.target.value
    });
  }

  onSubmit(e) {
    event.preventDefault();
    this.props.data(1, this.state.searchInput);
  }

  render() {
    return (
      <div>
        <h2>Search:</h2>
        <form onSubmit={this.onSubmit}>
          <input type="text" id="searchInput" onChange={this.handleChange}  />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
};

export default Search