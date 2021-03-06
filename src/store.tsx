import {createStore, applyMiddleware,combineReducers} from 'redux'

import userReducer from './reducers/userReducer'
import actReducer from './reducers/actReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    act:actReducer,
    user:userReducer
})//组合reducer，act字段和user字段分别管理不同的store
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
console.log(store.getState())
store.subscribe(()=>console.log(store.getState()))

export default store