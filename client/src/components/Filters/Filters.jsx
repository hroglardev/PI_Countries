import React from 'react'
import style from './Filters.module.css'
import FilterByActivity from '../FilterByActivity/FilterByActivity'
import FilterByContinent from '../FilterByContinent/FilterByContinent'
import SortByName from '../SortByName/SortByName'
import SortByPopulation from '../SortByPopulation/SortByPopulation'

const Filters = () => {
  return (
    <div className={style.filtersWrapper}>
      <div className={style.filterWrapper}>
        <span className={style.filterLabel}>Sort by Name:</span>
        <SortByName />
      </div>
      <div className={style.filterWrapper}>
        <span className={style.filterLabel}>Sort by Population:</span>
        <SortByPopulation />
      </div>
      <div className={style.filterWrapper}>
        <span className={style.filterLabel}>Filter by Continent:</span>
        <FilterByContinent />
      </div>
      <div className={style.filterWrapper}>
        <span className={style.filterLabel}>Filter by Activity:</span>
        <FilterByActivity />
      </div>
    </div>
  )
}

export default Filters
