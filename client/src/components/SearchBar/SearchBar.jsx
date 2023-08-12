import { getCountries, getCountryByName } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

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
    <div>
      <input
        type='search'
        onChange={handleChange}
        value={country}
        placeholder='Look for a country'
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar
