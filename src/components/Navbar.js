import React from 'react';
import {Link} from "react-router-dom";
import {ThemeContext} from "../contexts/ThemeContext";

export default function Navbar() {
    return (
        <div className="header">
            <div className="navigation">
                <nav className="nav">
                    <Link to="/" className="title">
                        <button>
                            / Alex Bolfă
                        </button>
                    </Link>
                    <ul>
                        <li>
                            <Link to="/about">
                                <span className="about"> About me </span>
                            </Link>
                            <Link to="/contact">
                                <span className="contact"> Contact </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ThemeContext.Consumer>{({theme, toggleTheme}) => (
                    <button onClick={toggleTheme}>
                        <img src="/assets/theme.png" alt="image" className="responsive"/>
                        <span className="theme-toggle">{theme}</span>
                    </button>
                )}
                </ThemeContext.Consumer>
            </div>
        </div>
    );
}