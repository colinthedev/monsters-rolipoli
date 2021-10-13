import React from 'react';

import './card.styles.css';

// In order to have access to the monsters we need to pass props the same way we passed props in card-list to access monsters in the card-list component

export const Card = (props) => (
    <div className="card-container">
        <img
            alt="monster"
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        />
        <h2> {props.monster.name} </h2>
        <p>  {props.monster.email} </p>
    </div>
)