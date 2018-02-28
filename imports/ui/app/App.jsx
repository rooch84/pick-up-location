import React, { Component } from 'react';

import Search from '../search-box/Search.jsx';
import ResultSet from '../result/ResultSet.jsx';

const SR_SEARCH = "pick-up-location-input";

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
        <label className="header" htmlFor={SR_SEARCH}>Pick-up Location</label>
        <Search
          srId={SR_SEARCH}
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
