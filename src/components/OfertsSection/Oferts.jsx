import React, {useEffect} from 'react'
import { useOferts } from '../../context/OfertsContext';
import OfertCard from './OfertCard'

const Oferts = () => {
    const { oferts, loading, fetchOfert } = useOferts();

    useEffect(() => {
      fetchOfert
    }, [oferts]);
  
  return (
    <div>
        <OfertCard/>
    </div>
  )
}

export default Oferts