import Immutable from 'immutable';
import {
  applyMiddleware,
  createStore
} from 'redux';
import {
  composeWithDevTools
} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducers from '../reducers';

class Store {
  constructor() {
    const initialState = new Immutable.Map();
    this.store = createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
    );

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers').default;
        this.store.replaceReducer(nextRootReducer);
      });
    }
  }

  getStore() {
    return this.store;
  }
}

export default new Store();
