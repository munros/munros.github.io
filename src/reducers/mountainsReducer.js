import initialState from "./initialState"
import { FETCH_MOUNTAINS, RECEIVE_MOUNTAINS } from "../actions/actionTypes"

export default function mountains(state = initialState.mountains, action) {
    let newState;
    switch (action.type) {
        case FETCH_MOUNTAINS:
            console.log("FETCH_MOUNTAINS Action")
            return action
        case RECEIVE_MOUNTAINS:
            newState = action.mountains
            console.log("RECEIVE_MOUNTAINS Action")
            return newState
        default:
            return state
    }
}