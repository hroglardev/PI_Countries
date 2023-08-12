import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Detail = () => {
  const { id } = useParams()
  const [country, setCountry] = useState({})
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const { data } = await axios(`http://localhost:3001/countries/${id}`)
        setCountry(data)
        setError(null)
      } catch (error) {
        console.log(error)
        setCountry({})
        setError(error.response.data.error)
      }
    }
    fetchCountry()
    console.log(country)
  }, [id])
  return (
    <div>
      {error && <p>{error}</p>}
      {!error && (
        <div>
          <img src={country.flag} alt={country.name} />
          <h2>Country: {`${country.name} (${country.id})`}</h2>

          <h3>Continent: {country.continent}</h3>
          <h3>Capital: {country.capital}</h3>
          {country.subregion && <h3>Subregion: {country.subregion}</h3>}
          {country.area && <h3>Area: {`${country.area} m2`}</h3>}
          <h3>Population: {country.population}</h3>
        </div>
      )}
    </div>
  )
}

export default Detail
