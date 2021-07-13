import React, { useState, useRef } from 'react';
import { data } from '../shared/images';
import {
    NavLink,
    useLocation
} from "react-router-dom";
import { useEffect } from 'react';

import { GameActions } from '../models/GameActions';

interface Props {
    currentAction: GameActions;
    setCurrentAction: (value: GameActions) => void;
    shuffledAudios: Array<string>;
    count: number;
    setCount: (value: number) => void;
}

export const Header = ({ currentAction, setCurrentAction, shuffledAudios, count, setCount }: Props) => {
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
        if (currentAction !== GameActions.Play) {
            setCurrentAction(GameActions.Train);
        }
        setMenuVisibility(false);
    }, [location.pathname])

    const changeStartButton = (e: React.MouseEvent) => {
        if (currentAction === GameActions.Started) {
            new Audio(shuffledAudios[count]).play();
        }
        setCurrentAction(GameActions.Started);
    }

    return (
        <header>
            <span ref={wrapperRef}>
                <div className="hamburger-menu" onClick={openMenu}>
                    {[1, 2, 3].map(index => <div key={"line-" + index} className={`line line-${index} 
                    ${menuVisibility ? "cross" : ""} ${themeColor === 'blue' ? "light-blue" : ""}`}></div>)}
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
                        <li className="nav-item">
                            <NavLink to="/statistics" className={`nav-link ${location.pathname === "/statistics" ? "active" : ""}`}>Statistics</NavLink>
                        </li>
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
                    currentAction !== GameActions.Train && location.pathname !== '/' ?
                        <button className="start-game" onClick={(e) => changeStartButton(e)}>{currentAction === GameActions.Started ? 'repeat' : 'play'}</button> :
                        <div></div>
                }
            </div>
        </header>
    );
};
