import FilterByActivity from '../FilterByActivity/FilterByActivity'
import FilterByContinent from '../FilterByContinent/FilterByContinent'
import SortByName from '../SortByName/SortByName'
import SortByPopulation from '../SortByPopulation/SortByPopulation'

const Filters = () => {
  return (
    <div>
      <SortByName />
      <SortByPopulation />
      <FilterByContinent />
      <FilterByActivity />
    </div>
  )
}

export default Filters
