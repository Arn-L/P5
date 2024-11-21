import React from 'react'
import { useParams } from 'react-router-dom'
import Carrousel from '../../components/details/carrousel/carrousel'
import Informations from '../../components/details/informations/informations'
import logements from '../../assets/data/logements.json'
import NotFound from '../NotFound/NotFound'

const Details = () => {
    const { logementId } = useParams()
    const logement = logements.find(logement => logement.id === logementId)

    if (logement === undefined) {
        return (
            <NotFound />
        )
    } else {
        return (
            <div className='boxOutlet'>
                <Carrousel logementPictures={logement.pictures} />
                <Informations logement={logement} />
            </div>
        )
    }

}

export default Details