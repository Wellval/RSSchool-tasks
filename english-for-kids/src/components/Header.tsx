import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { images } from '../shared/categoryImages';
import { data } from '../shared/images';
import {
    NavLink,
    useLocation
} from "react-router-dom";
import { useEffect } from 'react';

import { GameActions } from '../models/GameActions';

interface Props {
    name: string;
    currentAction: GameActions;
    setCurrentAction: (value: GameActions) => void;
    audios: Array<string>;
    setAudios: (value: Array<string>) => void;
    shuffledAudios: Array<string>
}

export const Header = ({ name, currentAction, setCurrentAction, audios, setAudios, shuffledAudios } : Props) => {
    // const category = images.filter((x) => x.category === name)[0];
    const [menuVisibility, setMenuVisibility] = useState(false);
    const [themeColor, setThemeColor] = useState('pink');
  
    const wrapperRef = useRef<any>();

    const location = useLocation();

    const changeMode = () => {
        if (themeColor === 'blue') {
            setThemeColor('pink');
        } else setThemeColor('blue');
       setCurrentAction(currentAction === GameActions.Train ? GameActions.Play : GameActions.Train);
    }
    
    const openMenu = () => {
        setMenuVisibility(!menuVisibility);
    }

    const handleClickOutside = (e: Event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            setMenuVisibility(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    useEffect(() => {
    //     if (category) {
    //         setAudios(category.images.map(name => `/${category.category}/${name}.mp3`));
    //     } 
    //     document.querySelector('#checkbox')?.setAttribute('checked', 'false');
        setCurrentAction(GameActions.Train);
        setMenuVisibility(false);
    }, [location.pathname])

    const changeStartButton = (e: React.MouseEvent) => {
        if (currentAction === GameActions.Started) {
            new Audio(shuffledAudios[shuffledAudios.length - 1]).play();
        }
        setCurrentAction(GameActions.Started);
    }

    return (
        <header>
            <span ref={wrapperRef}>
                <div className="hamburger-menu" onClick={openMenu}>
                    {[1, 2, 3].map(index => <div key={"line-" + index} className={`line line-${index} 
                    ${menuVisibility ? "cross": ""} ${themeColor === 'blue' ? "light-blue" : ""}`}></div>)}
                </div>
                <nav className={`${menuVisibility === true ? "navbar active" : "navbar"} ${themeColor === 'blue' ? "blue" : ""}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/" exact={true} className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Main Page</NavLink>
                        </li>
                        {
                            data.map((x, index) =>
                                <li key={index} className={`nav-item`}>
                                    <NavLink to={"/category/" + x.category} className={`nav-link 
                                    ${location.pathname.includes("/category/" + x.category) ? "active" : ""}`}>{x.category}</NavLink>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </span>
            <div className="buttons">
                <div className="toggler">
                    <input type="checkbox" className="checkbox" id="checkbox" checked={currentAction === GameActions.Train ?
                    false :
                    true
                    } onChange={changeMode} />
                    <label htmlFor="checkbox" className="label">
                        <div className="play-mode">Play</div>
                        <div className="train-mode">Train</div>
                        <div className="ball"></div>
                    </label>
                </div>
                {
                    currentAction !== GameActions.Train ? 
                    <button className="start-game" onClick={(e) => changeStartButton(e)}>{ currentAction === GameActions.Started ? 'repeat' : 'play'}</button> :
                    <div></div>
                }
            </div>
        </header>
    );
};
