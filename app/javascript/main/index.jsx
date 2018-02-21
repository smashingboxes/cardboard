import 'es6-promise/auto';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider
} from 'react-redux';
import storeService from './services/store';
// import './assets/css/styles.css';

const rootEl = document.getElementById('root');

function render() {
  const Routes = require('./routes').default;
  ReactDOM.render(
    <div>
      <Provider store={storeService.getStore()}>
        <Routes />
      </Provider>
    </div>,
    rootEl
  );
}
if (module.hot) {
  module.hot.accept('./Routes', render);
}

render();
