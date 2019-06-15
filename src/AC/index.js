import {
    DELETE_ARTICLE,
    INCREMENT,
    CHANGE_SELECT,
    CHANGE_DATE
} from '../constants'

export function increment(){
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id){
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function changeSelect(selected_id){
    return {
        type: CHANGE_SELECT,
        payload: {selected_id}
    }
}

export function changeDate(id){
    return {
        type: CHANGE_DATE,
        payload: {dateFrom, dateTo}
    }
}