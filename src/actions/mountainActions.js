import * as types from "./actionTypes";

function url() {
  return "data/munros.json";
}

export function receiveMountains(json) {
  return { type: types.RECEIVE_MOUNTAINS, mountains: json };
}

export function fetchMountains() {
  return dispatch => {
    return fetch(url(), {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "x-api-key": "",
        "Accept": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        response.json()
          .then(json => dispatch(receiveMountains(json)))
      }
    })
  }
}