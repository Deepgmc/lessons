import {createSelector} from 'reselect'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles

export const filtratedArticlesSelector = createSelector(filtersGetter, articlesGetter, (filters, articles) => {
    const {selected_id} = filters
    return {
        articles: articles.filter(article => {
            return !selected_id || selected_id === article.id
        })
    }
})