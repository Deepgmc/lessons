import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import comments from './comments'
import filters from './filter'

export default combineReducers({
    count: counterReducer,
    articles: articles,
    filters: filters,
    comments: comments
})