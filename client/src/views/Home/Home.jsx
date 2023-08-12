import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries, getActivities, resetFilters } from '../../redux/actions'

import Countries from '../../components/Countries/Countries'
import Filters from '../../components/Filters/Filters'
import style from './Home.module.css'

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
    <div className={style.homeWrapper}>
      <Filters />
      <div className={style.buttonWrapper}>
        <button className={style.resetButton} onClick={() => handleReset()}>
          Reset Filters
        </button>
      </div>
      <h2 className={style.title}>Countries of the World</h2>
      <Countries />
    </div>
  )
}

export default Home
