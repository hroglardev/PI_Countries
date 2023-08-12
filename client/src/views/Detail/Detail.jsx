import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import style from './Detail.module.css'

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
    <div className={style.detailWrapper}>
      {error && <p className={style.error}>{error}</p>}
      {!error && (
        <div>
          <img src={country.flag} alt={country.name} />
          <h2 className={style.detailData}>
            Country: {`${country.name} (${country.id})`}
          </h2>

          <h3 className={style.detailData}>Continent: {country.continent}</h3>
          <h3 className={style.detailData}>Capital: {country.capital}</h3>
          {country.subregion && (
            <h3 className={style.detailData}>Subregion: {country.subregion}</h3>
          )}
          {country.area && (
            <h3 className={style.detailData}>Area: {`${country.area} m2`}</h3>
          )}
          <h3 className={style.detailData}>Population: {country.population}</h3>
        </div>
      )}
    </div>
  )
}

export default Detail
