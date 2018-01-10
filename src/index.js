import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';
import 'antd/lib/date-picker/style/css';   
import './index.css' 
import App from './App'
import rootReducer from './reducers'
import { addTeamById } from './actions'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Extension for Google Chrome!
)
console.log(store.getState())
store.subscribe(() => console.log('store', store.getState()))
console.log(store.dispatch(addTeamById(4)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
