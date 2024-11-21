import React from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.scss';

const Card = ({ logement }) => {
    return (
        <React.StrictMode >
            <Link to={'Details/' + logement.id} >
                <div>
                    <img className={styles.card} src={logement.cover} alt="" />
                    <p className={styles.title}>
                        {logement.title}</p>

                </div>
            </Link>
        </React.StrictMode >
    );
};

export default Card;
