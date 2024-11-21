import React from 'react'
import styles from './footer.module.scss'
import logo from '../../../assets/logoWhite.png'

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <img src={logo} alt="Logo Kasa" />
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer