
import basicReducer from './Reducer';
import logger from "redux-logger"

import {legacy_createStore, applyMiddleware} from 'redux'


const myStore = legacy_createStore(basicReducer, applyMiddleware(logger));

export default myStore;