import React from 'react';
import { NavLink } from 'react-router-dom';
import { data } from '../shared/images';

export const HomePage = () => {
    return (
        <main>
            {
                data.map((x, index) => 
                    <NavLink to={"/category/" + x.category} key={index} className="main-card">
                        <img src={x.image} />
                        <p>{x.category}</p>
                    </NavLink>
                )
            }
        </main>
    );
} 