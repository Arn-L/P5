import React from 'react'
import Gallery from '../../components/gallery/gallery/gallery'
import Banner from '../../components/banner/banner'
import logements from '../../assets/data/logements.json'

const Home = () => {

    return (
        <div className='boxOutlet'>
            <Banner numPict={0} />
            <Gallery logements={logements} />
        </div>
    )
}

export default Home