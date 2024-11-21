import React, { useState, useEffect } from 'react';
import '../../../_global.scss';
import styles from './carrousel.module.scss';
import arrowRight from '../../../assets/arrow_forward_vector.svg';


const Carrousel = ({ logementPictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const pictureLength = logementPictures.length
    const IsLength = (pictureLength > 1)

    useEffect(() => {
        if (logementPictures.length === 0) return
        const preloadImages = (images) => {
            const links = images.map((src) => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = src;
                link.as = 'image';
                document.head.appendChild(link);
                return link
            });
            return () => {
                links.forEach((link) => {
                    document.head.removeChild(link);
                });
            }
        }
        const cleanup = preloadImages(logementPictures);
        return cleanup;
    }, [logementPictures])

    const carrouselNav = (direction) => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % pictureLength);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + pictureLength) % pictureLength);
        }
        setIsImageLoaded(false);
    };

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <div className={styles.carrouselContainer}>
            <img
                key={logementPictures[currentIndex]}
                src={logementPictures[currentIndex]}
                alt="Thumbnail"
                className={styles.carrousel}
                onLoad={handleImageLoad}
            //style={{ opacity: isImageLoaded ? 1 : 1 }}
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
    );
};

export default Carrousel;
