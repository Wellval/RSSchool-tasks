import React, { useState, useRef, MouseEvent } from 'react';
import ReactDOM from 'react-dom';

export const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/Wellval">Github</a>
            <div className="rs-logo-year">2021
            <a className="logo-link" href="https://rs.school/js/">
                <img src="../rs-school-logo.svg" alt="" />
            </a>
            </div>
        </footer>
    )
}