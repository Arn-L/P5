import React from 'react'
import '../../../_global.scss'
import styles from './tag.module.scss'

const Tag = ({ tags }) => {
    
    return (
        <div className={styles.tagsContainer}>
            {Object.values(tags).map((tag, index) => (
                <div className={styles.tags} key={index}>
                    <p>{tag}</p>
                </div>
            ))}
        </div>
    )
}

export default Tag