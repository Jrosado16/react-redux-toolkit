import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import App from './App'
import { logger } from './middleware'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers'

const composeAlt = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composeEnhancer = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(
  rootReducer,
  (composeEnhancer as any),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
