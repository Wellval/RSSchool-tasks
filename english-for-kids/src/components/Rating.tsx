import React, { useEffect } from 'react';
import { GameActions } from '../models/GameActions';

interface Props {
    choices: Array<boolean>;
    currentAction: GameActions;
}

export const Rating = ({ choices, currentAction }: Props) => {

    return (
        <div className="rating">
            {
                currentAction === GameActions.Started ? choices.map(choice =>
                    choice === true ? <i className="fas fa-star"></i> : <i className="fas fa-heart-broken"></i>
                ) : ''
            }

        </div>
    );
}