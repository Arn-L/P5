import React, { useState, useEffect } from 'react'
import '../../../_global.scss'
import styles from './carrousel.module.scss'
import arrowRight from '../../../assets/arrow_forward_vector.svg'


const Carrousel = ({ logementPictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const pictureLength = logementPictures.length
    const IsLength = (pictureLength > 1)

    const carrouselNav = (direction) => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % pictureLength)
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + pictureLength) % pictureLength)
        }
    }

    return (
        <div className={styles.carrouselContainer}>
            <img
                key={logementPictures[currentIndex]}
                src={logementPictures[currentIndex]}
                alt="vignette"
                className={styles.carrousel}
            />
            {IsLength ? (
                <div>
                    <button className={styles.before} onClick={() => carrouselNav('previous')}>
                        <img src={arrowRight} alt='flèche précédente' />
                    </button>
                    <button className={styles.next} onClick={() => carrouselNav('next')}>
                        <img src={arrowRight} alt='flèche suivante' />
                    </button>
                    <p className={styles.pictureNum}>{currentIndex + 1}/{pictureLength}</p>
                </div>
            ) : (
                null
            )}
        </div>
    )
}

export default Carrousel