import axios from 'axios';
import { multiClientMiddleware } from 'redux-axios-middleware';
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createRouter } from '@respond-framework/rudy'

import routes from './routes'
import page from './pageReducer'

const sharpenerClient = axios.create({
  baseURL:'http://localhost:5000/api',
  responseType: 'json'
});

const githubClient = axios.create({
  baseURL:'https://github.com',
  responseType: 'json'
});

const clients = {
  default: {
    client: sharpenerClient
  },
  github: {
    client: githubClient
  },
};


export default (preloadedState, initialEntries) => {
  const options = { initialEntries }
  const { reducer, middleware, firstRoute } = createRouter(routes, options)

  const rootReducer = combineReducers({ page, location: reducer })
  const middlewares = applyMiddleware(middleware, multiClientMiddleware(clients))
  const enhancers = composeWithDevTools(middlewares)

  const store = createStore(rootReducer, preloadedState, enhancers)

  return { store, firstRoute }
}
