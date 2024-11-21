import React from 'react';
import styles from './host.module.scss';

const Host = ({ profil }) => {
    return (
        <div className={styles.host}>
            <h2>{profil.name}</h2>
            <img src={profil.picture} alt="Thumbnail" className={styles.profiles} />
        </div>
    );
};

export default Host;