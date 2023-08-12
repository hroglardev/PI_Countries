import { getCountries, getCountryByName } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import style from './SearchBar.module.css'

const SearchBar = () => {
  const [country, setCountry] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setCountry(event.target.value)
    dispatch(getCountries())
  }

  const handleSearch = () => {
    dispatch(getCountryByName(country))
    setCountry('')
  }

  return (
    <div className={style.wrapper}>
      <input
        type='search'
        onChange={handleChange}
        value={country}
        placeholder='Look for a country'
        className={style.search}
      />
      <button onClick={handleSearch} className={style.button}>
        Search
      </button>
    </div>
  )
}

export default SearchBar
