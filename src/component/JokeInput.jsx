
import React, { useState } from "react";
import { getGPTResponse } from "../utils/getGPTResponse";

export default function JokeInput({ categoryList, setjokeOutput }) {
  const [onChangeJokeInput, setOnChangeJokeInput] = useState("");

  const handleChange = (e) => {
    setOnChangeJokeInput(e.target.value);
  };



  const handleSubmit = async (e) => {
    // API call =>generate jokes
    e.preventDefault();
    let response = await getGPTResponse(onChangeJokeInput);
    setjokeOutput(response);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <button
        style={{
          boxShadow:'1px 5px 5px '
          }}
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category
        </button>

          
        <ul className="dropdown-menu">
          {categoryList.map((category) => {
            return (
              <li key={category}>
                <a className="dropdown-item" href="/">
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
        <input
        style={{
        boxShadow:'5px 5px 5px '
        }}
          type="text"
          className="form-control"
          value={onChangeJokeInput}
          onChange={handleChange}
          aria-label="Text input with dropdown button"
          placeholder="Search Joke"
        />
        <button style={{
        boxShadow:'5px 5px 5px lightblue',  
        }} 
        type="submit" className="btn btn-outline-secondary mx-2">
          Generate
        </button>
      </div>
    </form>
  );
}