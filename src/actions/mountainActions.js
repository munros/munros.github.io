import * as types from "./actionTypes";

function url() {
  return "data/munros.json";
}

export function receiveMountains(json) {
  return { type: types.RECEIVE_MOUNTAINS, mountains: json };
}

export function fetchMountains() {
  return dispatch => {
    return fetch(url()).then(response => {
      if (response.ok) {
        response.json()
          .then(json => dispatch(receiveMountains(json)))
      }
    })
  }
}