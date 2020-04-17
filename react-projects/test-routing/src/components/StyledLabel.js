import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class StyledLabel extends React.Component {
  render() {
    const {label} = this.props;

    return (
      <Link to="/about">
        <span style={styles.labelText}>{label}</span>
      </Link>
    );
  }
}

const styles = {
  labelText: {
    fontSize: 36,
  },
};

StyledLabel.propTypes = {
  classes: PropTypes.string,
};

export default StyledLabel;
