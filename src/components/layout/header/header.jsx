// src/components/Layout/header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/logoPink.png'
import styles from './header.module.scss';

const Header = () => {
    const location = useLocation()

    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo Kasa" />
            <nav >
                <ul className={styles.nav}>
                    <li >
                        <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
                            accueil
                        </Link>
                    </li>
                    <li >
                        <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>
                            a propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
