import React from "react";

export const ApiContext = React.createContext({

  _cache: {},

  getMountainsByClassification: function (classification) {
    return new Promise((fulfill, reject) => {
      if (this._cache[classification] == null) {
        fetch("api/classification/" + classification.toLowerCase() + ".json")
        .then(response => {
          if (response.ok) {
            response.json().then(json => {
              this._cache[classification] = json
              fulfill(this._cache[classification])
            })
          } else {
            reject()
          }
        })

      } else {
        fulfill(this._cache[classification])
      }
    })
  }

})