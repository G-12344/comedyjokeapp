import React from "react";

export default function JokeOutput({ jokeOutput }) {
  return (
    jokeOutput && (
      <div class="card my-3" 
        style={{
        boxShadow:'5px 5px 5px '
        }}>
        <div class="card-header">Your joke is ready to make someone laugh</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{jokeOutput}</p>
          </blockquote>
        </div>
      </div>
    )
  );
}