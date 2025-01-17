import React from 'react'
import Banner from '../../components/banner/banner'
import kasafr from '../../assets/data/kasafr.json'
import Dropdown from '../../components/shares/dropdown/dropdown'
import styles from './About.module.scss'

const About = () => {

    return (
        <div className='boxOutlet'>
            <Banner numPict={1} />
            {Object.values(kasafr).map((kasa, index) => (
                <div key={index} className={styles.dropBox} >
                    <Dropdown name={Object.keys(kasa)[0]} texts={kasa[Object.keys(kasa)[0]]} />
                </div>
            ))}
        </div>
    )
}

export default About