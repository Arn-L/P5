import React from 'react'
import '../../_global.scss'
import bannerAbout from '../../assets/bannerAbout.jpg'
import bannerHome from '../../assets/bannerHome.jpg'
import styles from './banner.module.scss'

const Banner = ({ numPict }) => {

    return (
        <div className={styles.bannerContainer}>
            <img
                src={numPict === 0 ? bannerHome : bannerAbout}
                alt="Banner"
                className={styles.bannerImage}
            />
            {numPict === 0 && (
                <div className={styles.bannerText}>
                    Chez vous, partout et ailleurs
                </div>
            )}
        </div>
    )
}

export default Banner
