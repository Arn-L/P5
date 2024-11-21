import React from 'react'
import './informations.module.scss'
import styles from './informations.module.scss'
import Host from '../host/host'
import Tag from '../tag/tag'
import Rate from '../rate/rate'
import Dropdown from '../../shares/dropdown/dropdown'

const Informations = ({ logement }) => {

    return (
        <div>
            <div className={styles.titleContents}>
                <div className={styles.localContainer}>
                    <h1 className={styles.title}>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <Tag tags={logement.tags} />
                </div>
                <div className={styles.profilContainer}>
                    <Host profil={logement.host} />
                    <Rate stars={logement.rating} />
                </div>
            </div>
            <div className={styles.dropdownContainer}>
                <div className={styles.dropBox} >
                    <Dropdown name='Description' texts={logement.description} />
                </div>
                <div className={styles.dropBox} >
                    <Dropdown name='Équipements' texts={logement.equipments} />
                </div>
            </div>
        </div>
    )
}

export default Informations