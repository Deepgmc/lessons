import {comments as defaultComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'
import {keyToIndexObj} from '../helpers'

let trasformed = keyToIndexObj(defaultComments)

export default (commentsState = trasformed, action) => {
    const {type, payload, randomId} = action
    switch(type){
        case ADD_COMMENT:
            return {...commentsState, [randomId]: payload.comment}
            break;
        default:
            return commentsState
    }
}