import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries, getActivities, resetFilters } from '../../redux/actions'

import Countries from '../../components/Countries/Countries'
import Filters from '../../components/Filters/Filters'

const Home = () => {
  const dispatch = useDispatch()

  const getCountriesFunc = () => {
    dispatch(getCountries())
  }

  useEffect(() => {
    dispatch(getActivities())
    getCountriesFunc()
  }, [])

  const handleReset = () => {
    dispatch(resetFilters())
    getCountriesFunc()
  }

  return (
    <div>
      <button onClick={() => handleReset()}>Reset Filters</button>
      <Filters />
      <Countries />
    </div>
  )
}

export default Home
