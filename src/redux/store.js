import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import itemReducer from '../redux/itemReducer'

const store = createStore(itemReducer,composeWithDevTools(applyMiddleware(logger, thunk)));

export default store