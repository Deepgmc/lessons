import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {keyToIndexObj} from '../helpers'

let trasformed = keyToIndexObj(defaultArticles)

export default (articleState = trasformed, action) => {
    const {type, payload, randomId} = action
    switch(type){
        case DELETE_ARTICLE:
            const tmpState = {...articleState}
            delete tmpState[payload.id]
            return tmpState
            break;
        case ADD_COMMENT:
            const article = articleState[payload.articleId]
            return {
                ...articleState,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(randomId)
                }
            }
            break;
        default:
            return articleState
    }
}