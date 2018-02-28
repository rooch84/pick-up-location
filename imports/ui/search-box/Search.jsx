import React, { Component } from 'react';
import PropTypes from 'prop-types';

const placeholderText = "city, airport, station, region, district...";

/**
 * The search TextField with placeholder
 */
export default class Search extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <input
        id={this.props.srId}
        className="search-box"
        type="text"
        placeholder={placeholderText}
        value={this.props.search}
        onChange={this.props.onSearchChange}
        />
    );
  }
}

Search.propTypes = {
  srId: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
};
