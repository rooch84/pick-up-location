import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Individual search result component
 */
export default class Result extends Component {

  /**
  * Emphasize the first part of the text that matches the search term.
  */
  emphasizeName = (n) => {
    let s = this.props.search;
    let i = n.match(new RegExp(s, "i"));
    if (i) {
      let start = n.substring(0, i.index);
      let end = n.substring(i.index + s.length, n.length);
      return (<span>{start}<em>{i[0]}</em>{end}</span>)
    }
    return (<span className={"title--" + this.props.type}>{n}</span>);
  }

  render() {
    let name = this.props.name.split(this.props.search);

    return (
      <div className="result-item">
        <div className="result-item-inner">
          <span className={"result-tag result-tag--" +
            this.props.type.toLowerCase()}>{this.props.type}</span>
          {this.emphasizeName(this.props.name)}
          <span className="result-subtitle">{this.props.subtitle}</span>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
