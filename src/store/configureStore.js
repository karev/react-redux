import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';


/*
*----------------------------------------------
* add 3 state to a promise
*----------------------------------------------
*/
function promiseMiddleware() {
  return (next) => (action) => {
    const { promise, types, ...rest } = action;
    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });
    return promise.then(
      (response) => response.json()
      ).then(
      (result) => next({ ...rest, result, type: SUCCESS }),
      (error) => next({ ...rest, error, type: FAILURE })
    );
  };
}

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(promiseMiddleware, reduxImmutableStateInvariant()))
  );
}
