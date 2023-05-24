import React, { Component } from 'react'

export default class JokeCardList extends Component {
    render() {
        const{jokes} =this.props;
        return (
            <div className="card" style={{ width: "60rem",boxShadow:'5px 5px 5px ' }}>
                <div className="card-body">
                <div>
            {jokes.length > 0 ? (
              jokes.map((joke) => {
                return <li key={joke}>{joke}</li>;
                    })
            ):
             (
              <p>No Jokes in this category</p>
            )}
                </div>
                </div>
            </div>
        )
    }
} 
