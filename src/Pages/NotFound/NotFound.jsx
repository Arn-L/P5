// src/Pages/Home/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss'

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.hBox}>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className={styles.link} >Retouner sur la page d'acceuil </Link>
        </div>

    );
};

export default NotFound;
