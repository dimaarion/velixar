import {reducerApp} from './reducers'
import { createStore,applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
const store = createStore(reducerApp, applyMiddleware(ReduxThunk))


export default store