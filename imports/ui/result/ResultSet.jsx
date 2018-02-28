import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import {AutoComplete} from '../../api/autocomplete.js';
import Result from './Result.jsx';

const MAX = 6;

/**
 * The collection of search results.
 */
class ResultSet extends Component {

  constructor(props) {
    super(props);
  };

  populateResults = () => {
    return this.props.results.map(e => {
      return <Result key={e.id} search={this.props.search}{...e} />
    })
  }

  render() {
    return (
      <div className="result-set-outer">
        {this.props.results.length > 0 ?
          <div className="result-set">
            {this.populateResults()}
          </div> : <span />
        }
      </div>
    );
  }
}

ResultSet.propTypes = {
  results: PropTypes.array,
  ready: PropTypes.bool.isRequired
};

/**
 * Subscribe to the autocomplete publication. Any changes to the search
 * term will automatically push new results.
 */
export default ResultSetContainer = withTracker((props) => {
  const handler = Meteor.subscribe('autocomplete', MAX, props.search);
  return {
    ready: handler.ready(),
    results: AutoComplete.find({}).fetch(),
  };
})(ResultSet);
