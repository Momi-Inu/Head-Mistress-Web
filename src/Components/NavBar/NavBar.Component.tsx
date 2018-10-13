import * as React from 'react';
import { NavLink } from 'react-router-dom';
import profile from './images/logo.png';
import './NavBar.css';

export default class NavBar extends React.Component {

    public render() {
        return (
            <nav className="navbar navbar-light">
                <NavLink to="/" className="navbar-brand navbar-nav-brand">
                    <div className="navbar-nav-brand-info text-pinked">
                        <img src={profile} className="navbar-nav-logo" />
                        Head Mistress
                    <NavLink to="/botlink" className="btn navbar-button-botlink navbar-nav-brand-add">Add Head Mistress!</NavLink>
                    </div>
                </NavLink>
                <div className="navbar-nav-options">
                    <NavLink to="/commands" className="navbar-nav-link text-pinked">Commands</NavLink>
                    <NavLink to='/supportlink' className="navbar-nav-link text-pinked">Support Server</NavLink>
                    <NavLink to="/about" className="navbar-nav-link text-pinked">About</NavLink>
                    <NavLink to="/credits" className="navbar-nav-link text-pinked">Credits</NavLink>
                    <NavLink to="/profile" className="navbar-nav-link text-pinked">Profile</NavLink>
                    <NavLink to="/login" className="btn navbar-button-login navbar-nav-link">Login</NavLink>
                </div>
                <div className="max-divider" />
            </nav>
        )
    }
}