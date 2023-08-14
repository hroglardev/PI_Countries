import { useSelector } from 'react-redux'
import Country from '../Country/Country'
import { useEffect } from 'react'
import { useState } from 'react'
import handleFilters from '../../helpers/filters'
import style from './Countries.module.css'

const Countries = () => {
  const { order, population, continent, activity, allCountries } = useSelector(
    (state) => state
  )

  const [countriesCopy, setCountriesCopy] = useState([...allCountries])
  const [currentPage, setCurrentPage] = useState(0)
  const countriesPerPage = 10
  const totalPages = Math.ceil(countriesCopy.length / countriesPerPage)
  const startIndex = currentPage * countriesPerPage
  const endIndex = startIndex + countriesPerPage
  const countriesToDisplay = countriesCopy.slice(startIndex, endIndex)

  useEffect(() => {
    const filteredCountries = handleFilters(
      order,
      population,
      continent,
      activity,
      allCountries
    )
    setCountriesCopy(filteredCountries)
    setCurrentPage(0)
  }, [order, population, continent, activity, allCountries])
  return (
    <div className={style.container}>
      <div className={style.countriesWrapper}>
        {countriesToDisplay.map((country) => {
          return (
            <Country
              key={country.id}
              id={country.id}
              flag={country.flag}
              name={country.name}
              continent={country.continent}
            />
          )
        })}
      </div>
      <div className={style.paginationButtons}>
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
          className={style.button}
        >
          Previous
        </button>
        <p className={style.currentPage}>{currentPage + 1}</p>
        <button
          disabled={currentPage === totalPages - 1}
          onClick={() => setCurrentPage(currentPage + 1)}
          className={style.button}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Countries
