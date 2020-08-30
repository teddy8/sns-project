import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface Props {
  statusCode: number;
}

const MyError: FC<Props> = ({ statusCode }) => (
  <div>
    <h1>
      {`${statusCode}에러 발생`}
    </h1>
  </div>
);

MyError.defaultProps = {
  statusCode: 400,
};

export default MyError;
