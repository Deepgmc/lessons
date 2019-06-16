import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import randomid from '../middlewares/randomid'

const enhancer = applyMiddleware(randomid)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store