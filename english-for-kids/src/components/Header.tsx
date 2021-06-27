import React from 'react';
import ReactDOM from 'react-dom';
import { data } from '../shared/images';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

export const Header = () => {
    const [menuVisibility, setMenuVisibility] = React.useState(false);
    const [themeColor, setThemeColor] = React.useState('pink');

    function changeThemeColor() {
        console.log('clicked')
        if (themeColor === 'pink') {
            setThemeColor('blue')
        } else setThemeColor('pink');
        console.log(themeColor)
    }

    function openMenu() {
        let lines = document.getElementsByClassName('line');
        for (let line of lines) {
            line.classList.toggle('cross');
        }
        const currentState = menuVisibility;
        setMenuVisibility(!currentState);
    }

    return (
        <header>
            <div className="hamburger-menu" onClick={openMenu}>
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
                <nav className={menuVisibility === true ? "navbar active" : "navbar"}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Main Page</NavLink>
                        </li>
                        {
                            data.map((x, index) =>
                                <li key={index} className="nav-item">
                                    <NavLink to={"/category/" + x.category} className="nav-link">{x.category}</NavLink>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            <div className="toggler">
                <input type="checkbox" className="checkbox" id="checkbox" onChange={changeThemeColor} />
                <label htmlFor="checkbox" className="label">
                    <div className="play-mode">Play</div>
                    <div className="train-mode">Train</div>
                    <div className="ball"></div>
                </label>
            </div>
        </header>
    );
};
