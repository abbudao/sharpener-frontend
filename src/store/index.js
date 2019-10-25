import { connectRoutes } from 'redux-first-router';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import queryString from 'query-string';
import appReducers from 'store/reducers';
import routesMap from './routes'

const configureStore = (...args) => {
  const { middleware, enhancer, reducer } = connectRoutes(
    routesMap,
    {
      scrollTop: true,
      querySerializer: queryString
    },
  );

  const rootReducer = combineReducers({  location: reducer, ...appReducers })
  const middlewares = applyMiddleware(middleware, ...args)
  const enhancers = composeWithDevTools(enhancer, middlewares)
  const { user }  = window;

  const store = createStore(rootReducer,{user}, enhancers)

  return store;
}

export default configureStore;
