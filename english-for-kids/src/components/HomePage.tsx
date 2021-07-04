import React from 'react';
import { NavLink } from 'react-router-dom';
import { data } from '../shared/images';

export const HomePage = () => {
    return (
        <main>
            <div className="main-wrapper">
            {
                data.map((x, index) => 
                    <div className='main-card-container'>
                        <NavLink to={"/category/" + x.category} key={index} className={`pink-card`}>
                            <img src={x.image} />
                            <p>{x.category}</p>
                        </NavLink>
                    </div>
                )
            }
            </div>
        </main>
    );
} 