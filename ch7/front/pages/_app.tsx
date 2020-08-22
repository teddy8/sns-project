import React, { useEffect, ReactElement } from 'react';

// import Helmet from 'next/head';
import Head from 'next/head';

import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';

// import withRedux from 'next-redux-wrapper'
// import withReduxSaga from 'next-redux-saga'
// import AppLayout from '../components/AppLayout';

// import {createStore, compose, applyMiddleware} from 'redux'
// import { Provider } from 'react-redux';
// import reducer from '../reducers'
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../sagas'
// import axios from 'axios'
// import { LOAD_USER_REQUEST } from '../reducers/user'

interface Props {
  Component: ReactElement;
}

const NodeBird = ({ Component }) => (
  <>
    <Head>
      <title>NodeBird ch7</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <Component />
  </>
);

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
