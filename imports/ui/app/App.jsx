import React, { Component } from 'react';

import Search from '../search-box/Search.jsx';
import ResultSet from '../result/ResultSet.jsx';

/**
* Main component that displays the necessary widgets.
*/
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
  };

  onSearchChange = (e) => {
    this.setState({search: e.target.value});
  }

  render() {
    return (
      <div className="app">
        <div className="header">Pick-up Location</div>
        <Search 
          search={this.state.search}
          onSearchChange={this.onSearchChange} />
        {
          this.state.search.length > 1 ?
          <ResultSet search={this.state.search} /> : <span />
        }
      </div>
    );
  }
}
