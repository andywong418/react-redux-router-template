import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
export const history = createHistory();
const middleware = routerMiddleware(browserHistory);

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(
            middleware,
            thunk
          )
        )
    );
}
