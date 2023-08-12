import {
  sortCountries,
  sortCountriesByPop,
  filterCountriesByActivity,
  filterCountriesByContinent,
} from '../redux/actions'

const handleDispatches = (dispatch, event) => {
  const { name, value } = event.target
  if (name === 'SortByName') {
    dispatch(sortCountries(value))
  }
  if (name === 'SortByPop') {
    dispatch(sortCountriesByPop(value))
  }
  if (name === 'FilterByContinent') {
    dispatch(filterCountriesByContinent(value))
  }
  if (name === 'FilterActivity') {
    dispatch(filterCountriesByActivity(value))
  }
}
export default handleDispatches
