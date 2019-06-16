import {createSelector} from 'reselect'
import {mapToArr} from './../helpers'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles
const commentsGetter = state => state.comments
const comment_idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(filtersGetter, articlesGetter, (filters, articles) => {
    const {selected_id} = filters
    articles = mapToArr(articles)
    return {
        articles: articles.filter(article => {
            return !selected_id || selected_id === article.id
        })
    }
})

export const commentSelectorFactory = () =>{
    return createSelector(commentsGetter, comment_idGetter, (comments, own_id) => {
        //return comments.find(comment => comment.id === own_id)
        return comments[own_id]
    })
}