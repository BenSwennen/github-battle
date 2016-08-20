import React, { PropTypes } from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="main-container">
        {this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node,
};
