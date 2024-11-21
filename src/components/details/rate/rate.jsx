import React from 'react'
import styles from './rate.module.scss'
import { ReactComponent as StarIcon } from '../../../assets/Star_Vector.svg'

const Rate = ({ stars }) => {
    return (
        <div className={styles.rates}>
            {Array.from({ length: 5 }, (_, index) => (
                <StarIcon key={index} className={index < stars ? styles.starActive : styles.starInactive} />
            ))}
        </div>
    );
};
export default Rate;