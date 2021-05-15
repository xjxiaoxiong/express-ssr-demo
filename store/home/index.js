import { CHANGE_LIST } from "./constants";
const initState = {
    name: 'xj',
    list: [],
}
export default function(state = initState, action = {}) {
    switch(action.type){
        case CHANGE_LIST:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}
