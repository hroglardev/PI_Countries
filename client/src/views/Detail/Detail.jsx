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
        setCountry({})
        setError(error.response.data.error)
      }
    }
    fetchCountry()
  }, [id])
  return (
    <div className={style.detailWrapper}>
      {error && <p className={style.error}>{error}</p>}
      {!error && (
        <div>
          <img src={country.flag} alt={country.name} />
          <div className={style.countryInfo}>
            <h2 className={style.detailData}>
              Country: {`${country.name} (${country.id})`}
            </h2>

            <h3 className={style.detailData}>Continent: {country.continent}</h3>
            <h3 className={style.detailData}>Capital: {country.capital}</h3>
            {country.subregion && (
              <h3 className={style.detailData}>
                Subregion: {country.subregion}
              </h3>
            )}
            {country.area && (
              <h3 className={style.detailData}>Area: {`${country.area} m2`}</h3>
            )}
            <h3 className={style.detailData}>
              Population: {country.population}
            </h3>
            <h3 className={style.detailData}>
              Activities:
              {country.Activities && country.Activities.length === 0 && (
                <p>This country does not have any activities assigned to it</p>
              )}
            </h3>
          </div>
          {country.Activities && country.Activities.length > 0 && (
            <ul className={style.activitiesList}>
              {country.Activities.map((activity) => {
                return (
                  <li className={style.activityItem} key={activity.id}>
                    <span className={style.activityName}>{activity.name}</span>
                    <span className={style.activityDuration}>
                      Duration: {activity.duration} hours
                    </span>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default Detail
