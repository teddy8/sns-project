import React from 'react';
import PropTypes from 'prop-types';

const MyError = ({ statusCode }) => (
  <div>
    <h1>
      {statusCode}
      {' '}
      에러 발생
    </h1>
  </div>
);

MyError.propTypes = {
  statusCode: PropTypes.number,
};

MyError.defaultProps = {
  statusCode: 400,
};

export default MyError;
