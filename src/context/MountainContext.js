import React from "react";

export const MountainContext = React.createContext({
  getClassification: function (name, callback) {
    fetch("data/munros.json")
      .then(response => {
        if (response.ok) {
          response.json().then(json => callback(json))
        }
      })
  }
})