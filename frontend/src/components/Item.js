import React from 'react'

export default function Item(props) {
  

    return (
      <div>
        <h2 className="item">Name: {props.details.name}</h2>
        <h2 className="item">Price: ${props.details.price}</h2>
        <h3 className="item">Description: {props.details.description}</h3>
      </div>
    );
  }