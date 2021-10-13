import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css';

// props.children selects everything in-between the CardList component where as props would select just the CardList component => props selects the CardList and .children then selects evertyhing thats a child of the prop (The props.children was replaced with props.monsters.map)

export const CardList = (props) => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
)