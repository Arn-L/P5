import React from 'react';
import '../../../_global.scss';
import styles from './gallery.module.scss';
import Card from '../card/card';

const Gallery = ({ logements }) => {
    return (
        <div className={styles.gallery}>
            {logements.map((logement, index) => (
                <div className={styles.card} key={index}>
                    <Card key={index} logement={logement} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
