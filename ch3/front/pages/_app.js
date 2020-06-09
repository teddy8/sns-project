import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import withRedux from 'next-redux-wrapper'

import AppLayout from '../components/AppLayout'

import {createStore, compose, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import reducer from '../reducers'

const NodeBird = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird ch3</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"></link>
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
}

export default withRedux((initialState, options) => {
    const middlewares = [];     // 아래는 그냥 외우면 된다. 이부분만 바뀔거라서

    // enhance는 향상시키다 이런 뜻. 리덕스의 기능을 향상시킨다고 보면 됨. compose는 미들웨어적용시 미들웨어끼리 합성을 할 수 있다.
    const enhancer = compose(  
        applyMiddleware(...middlewares),
        typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    ); 
        
    const store = createStore(reducer, initialState, enhancer);
    return store;
})(NodeBird); // 하이오드 컴포넌트. 리액트 핫로더할 때처럼. 