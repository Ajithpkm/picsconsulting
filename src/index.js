import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware } from 'redux';
import allreducers from './Reducers/index';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createRoot } from 'react-dom/client';
import ReduxLogger from 'redux-logger';
import './index.css';

let middlewares = []
middlewares.push(ReduxLogger);

const root = createRoot(document.getElementById('root'));
const enhancers = compose(
  applyMiddleware(...[ReduxThunk, ...middlewares]),
  window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
), store = createStore(allreducers, enhancers), app = document.getElementById('root');

if (app) {
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
}

reportWebVitals();
