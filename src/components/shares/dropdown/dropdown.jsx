import React, { useState } from 'react';
import styles from './dropdown.module.scss';
import arrow from '../../../assets/arrowrounded_up_vector.svg'

const Dropdown = ({ name, texts }) => {
    const [isTextVisible, setIsTextVisible] = useState(false);

    const toggleText = () => {
        setIsTextVisible(!isTextVisible);
        console.log(isTextVisible)
    };

    return (
        <div className={styles.container}>
            <div className={styles.buttonBox}>
                <button className={styles.dropdown} >
                    <p> {name}</p>
                    <div onClick={toggleText} >
                        <img src={arrow} alt='En savoir plus' className={`${styles.arrowDrop} ${isTextVisible ? styles.downDrop : ''}`} />
                    </div>
                </button>
            </div>
            <div className={`${styles.textBlock} ${isTextVisible ? styles.visible : ''}`}>
                {Array.isArray(texts) ? (
                    texts.map((text, index) => (
                        <p key={index} >{text}</p>
                    ))
                ) : (
                    <p>{texts}</p>
                )}
            </div>

        </div >
    );
};

export default Dropdown;