import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import AppLayout from '../components/AppLayout'

import {createStore, compose, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import reducer from '../reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'
import axios from 'axios'
import { LOAD_USER_REQUEST } from '../reducers/user'

const NodeBird = ({ Component, store, pageProps }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird ch7</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"></link>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </Provider>
    );
}

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
    store: PropTypes.object.isRequired,
}

NodeBird.getInitialProps = async (context) => {
    // console.log(context);
    const { ctx, Component } = context;
    let pageProps = {};
    const state = ctx.store.getState();
    const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (ctx.isServer && cookie) {
        axios.defaults.headers.Cookie = cookie;;
    }
    if (!state.user.me) {
        ctx.store.dispatch({
            type: LOAD_USER_REQUEST,
        })
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx) || {};
    }
    return { pageProps };
  };

const configureStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    // const middlewares = [sagaMiddleware];
    const middlewares = [sagaMiddleware, (store) => (next) => (action) => {
        console.log(new Date(), 'action=', action);
        next(action);
    }];

    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    );  
    const store = createStore(reducer, initialState, enhancer);
    // sagaMiddleware.run(rootSaga);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}

export default withRedux(configureStore)(withReduxSaga(NodeBird)); 