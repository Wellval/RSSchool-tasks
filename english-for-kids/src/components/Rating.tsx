import React, { useEffect } from 'react';
import { GameActions } from '../models/GameActions';

interface Props {
    choices: Array<boolean>
}

export const Rating = ({ choices }: Props) => {

    return (
        <div className="rating">
            {choices.map(choice =>
                choice === true ? <i className="fas fa-star"></i> : <i className="fas fa-heart-broken"></i>
            )}
        </div>
    );
}