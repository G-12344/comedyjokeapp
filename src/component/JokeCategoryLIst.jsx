import React, { useState } from "react";
import JokeCardList from "./JokeCardList";
const axios = require("axios");

export default function JokeCategoryList2({ categoryList }) {
  const [jokes, setJokes] = useState([]);

  const handleCategoryAPI = (event) => {
    console.log(event.target.innerText);
    let category = event.target.innerText;
    let url = `https://v2.jokeapi.dev/joke/${category}?type=single&amount=5`;

    axios
      .get(url)
      .then(function (response) {
        // handle success
        let arrayOfJokes = response["data"]["jokes"];
        let newArrayOfJokes = arrayOfJokes.map((jokeObj) => {
          return jokeObj["joke"];
        });

        console.log(newArrayOfJokes);
        setJokes(newArrayOfJokes);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <div className="row">
      <div className="col-3">
        <ul className="list-group">
          {categoryList.map((category) => {
            return (
              <li
                key={category}
                value={category}
                className="btn btn-primary m-1"
                onClick={handleCategoryAPI}
              >
                {category}
              </li>
            );
            
          })}
        </ul>
      </div>
      <div className="col-9">
        <JokeCardList jokes={jokes} />
      </div>
    </div>
  );
}