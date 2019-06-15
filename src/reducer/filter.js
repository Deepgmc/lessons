import {CHANGE_DATE, CHANGE_SELECT} from '../constants'
const defaultFilter = {
    dateFrom: null,
    dateTo: null,
    selected_id: null
}

export default (filters = defaultFilter, action) => {
    const {type, payload} = action
    switch(type){
        case CHANGE_SELECT: return {...filters, selected_id: payload.selected_id}
            break;
        case CHANGE_DATE: return filters
            break;
        default:
            return filters
    }
}